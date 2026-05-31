"""Deterministic validation of physical ranges for MFC scenario inputs.

The backend owns this layer: physically impossible inputs are rejected before any
model runs; values outside typical operational ranges are accepted but flagged as
warnings so the user keeps full visibility (RNF-01 honestidad tecnica).
"""

from __future__ import annotations

from typing import Any


class PhysicalValidationError(Exception):
    """Raised when one or more inputs fall outside hard physical limits.

    ``errors`` is a list of ``{"field", "message"}`` dicts so the API layer can
    return a structured 422 response.
    """

    def __init__(self, errors: list[dict[str, str]]):
        self.errors = errors
        super().__init__("; ".join(f"{e['field']}: {e['message']}" for e in errors))


# Hard limits: outside these a value is physically impossible -> reject (422).
# (min, max, min_exclusive) ; None means unbounded on that side.
_HARD_LIMITS: dict[str, tuple[float | None, float | None, bool]] = {
    "ph": (0.0, 14.0, False),
    "temperature_c": (0.0, 80.0, False),
    "humidity_pct": (0.0, 100.0, False),
    "contamination_pct": (0.0, 100.0, False),
    "cod_estimated_mg_l": (0.0, None, False),
    "retention_h": (0.0, None, True),
    "feeding_frequency_h": (0.0, None, True),
    "volume_l": (0.0, None, True),
    "electrode_area_cm2": (0.0, None, True),
    "electrode_distance_cm": (0.0, None, True),
    "external_resistance_ohm": (0.0, None, True),
}

# Soft operational ranges: outside these the scenario is unusual -> warn, not reject.
_SOFT_RANGES: dict[str, tuple[float, float]] = {
    "ph": (4.0, 9.0),
    "temperature_c": (15.0, 45.0),
    "humidity_pct": (40.0, 95.0),
}


def validate_physical_ranges(payload: dict[str, Any]) -> list[str]:
    """Validate present (non-None) fields of ``payload``.

    Returns a list of human-readable warnings for soft-range violations.
    Raises :class:`PhysicalValidationError` if any hard limit is breached.
    """
    errors: list[dict[str, str]] = []
    warnings: list[str] = []

    for field, (low, high, exclusive) in _HARD_LIMITS.items():
        value = payload.get(field)
        if value is None:
            continue
        if not isinstance(value, (int, float)):
            errors.append({"field": field, "message": "debe ser numerico"})
            continue
        if low is not None and (value <= low if exclusive else value < low):
            limit = f"> {low}" if exclusive else f">= {low}"
            errors.append({"field": field, "message": f"debe ser {limit} (recibido {value})"})
        elif high is not None and value > high:
            errors.append({"field": field, "message": f"debe ser <= {high} (recibido {value})"})

    if errors:
        raise PhysicalValidationError(errors)

    for field, (low, high) in _SOFT_RANGES.items():
        value = payload.get(field)
        if value is None:
            continue
        if value < low or value > high:
            warnings.append(
                f"{field}={value} esta fuera del rango operativo tipico "
                f"[{low}, {high}]; el resultado puede ser menos confiable."
            )

    return warnings
