"""Deterministic baseline predictor for MFC scenarios.

This is intentionally a transparent, physics-informed estimator -- not a black box
and not a trained model. It exists so GreenSpark can demonstrate the full pipeline
honestly: every output is labeled ``SIMULADO`` and carries assumptions, warnings and
a confidence level. The relationships are grounded in MFC literature (mesophilic
temperature optimum ~30-35 C, near-neutral pH optimum, power scaling with organic
load / COD, electrode material conductivity). A trained scikit-learn model can later
replace this function behind the same input/output contract.
"""

from __future__ import annotations

import math
from typing import Any

MODEL_VERSION = "baseline-v0.1"
DATASET_VERSION = "literature-2025-v1"

# Open-circuit reference voltage ceiling for a typical single-chamber MFC (V).
_V_REFERENCE = 0.75

# Relative conductivity factor by electrode material (dimensionless).
_MATERIAL_FACTOR = {
    "carbon": 0.90,
    "grafito": 1.00,
    "graphite": 1.00,
    "acero_inoxidable": 0.70,
    "stainless_steel": 0.70,
    "carbon_cloth": 1.10,
}
_DEFAULT_MATERIAL_FACTOR = 0.80

# Inputs considered important for a trustworthy estimate; absence lowers confidence.
_IMPORTANT_FIELDS = ("cod_estimated_mg_l", "ph", "temperature_c", "electrode_area_cm2")


def _clamp(value: float, low: float, high: float) -> float:
    return max(low, min(high, value))


def _gaussian_factor(value: float, optimum: float, spread: float) -> float:
    """Bell-shaped factor in (0, 1], peaking at ``optimum``."""
    return math.exp(-(((value - optimum) / spread) ** 2))


def predict_baseline(inputs: dict[str, Any]) -> dict[str, Any]:
    """Estimate projected electrical performance for a single MFC scenario.

    ``inputs`` may contain: cod_estimated_mg_l, humidity_pct, contamination_pct,
    ph, temperature_c, retention_h, volume_l, electrode_area_cm2,
    electrode_distance_cm, external_resistance_ohm, electrode_material.
    Missing values are handled with conservative assumptions and reported in
    ``missing_data``.
    """
    missing_data = [f for f in _IMPORTANT_FIELDS if inputs.get(f) is None]

    cod = inputs.get("cod_estimated_mg_l")
    cod_norm = _clamp((cod or 30000.0) / 60000.0, 0.0, 1.0)

    temperature = inputs.get("temperature_c", 30.0) or 30.0
    ph = inputs.get("ph", 7.0) or 7.0
    contamination = inputs.get("contamination_pct") or 0.0
    material = (inputs.get("electrode_material") or "").lower()
    resistance = inputs.get("external_resistance_ohm") or 1000.0
    area = inputs.get("electrode_area_cm2")

    temp_factor = _gaussian_factor(temperature, optimum=32.0, spread=12.0)
    ph_factor = _gaussian_factor(ph, optimum=7.0, spread=1.5)
    contamination_factor = _clamp(1.0 - contamination / 100.0, 0.0, 1.0)
    material_factor = _MATERIAL_FACTOR.get(material, _DEFAULT_MATERIAL_FACTOR)
    load_factor = 0.4 + 0.6 * cod_norm  # monotonic in COD

    quality = temp_factor * ph_factor * contamination_factor * material_factor * load_factor

    voltage = round(_clamp(_V_REFERENCE * quality, 0.05, _V_REFERENCE), 4)
    current_ma = round(voltage / resistance * 1000.0, 4)  # Ohm's law: I = V / R, in mA
    power_mw = round(voltage * current_ma, 4)             # V * mA = mW
    # Density derived from the rounded power so returned values stay consistent.
    power_density = round(power_mw * 10000.0 / area, 6) if area else None  # mW per m^2

    if quality >= 0.45:
        stability = "alta"
    elif quality >= 0.25:
        stability = "media"
    else:
        stability = "baja"

    confidence = "muy_baja" if missing_data else "baja"

    warnings = [
        "Valores SIMULADOS basados en literatura MFC, no medidos. "
        "El rendimiento real puede variar y requiere validacion experimental.",
    ]
    if missing_data:
        warnings.append(
            "Faltan variables relevantes (" + ", ".join(missing_data) +
            "); se usaron supuestos conservadores y la confianza es menor."
        )

    assumptions = (
        f"Factores aplicados -> temperatura: {temp_factor:.2f} (optimo ~32 C), "
        f"pH: {ph_factor:.2f} (optimo ~7), contaminacion: {contamination_factor:.2f}, "
        f"material '{material or 'desconocido'}': {material_factor:.2f}, "
        f"carga organica (COD): {load_factor:.2f}. "
        f"Corriente por ley de Ohm con R={resistance:.0f} ohm."
    )

    return {
        "projected_voltage_v": voltage,
        "projected_current_ma": current_ma,
        "projected_power_mw": power_mw,
        "projected_power_density_mw_m2": power_density,
        "projected_stability": stability,
        "confidence_level": confidence,
        "assumptions": assumptions,
        "warnings": warnings,
        "missing_data": missing_data,
        "model_version": MODEL_VERSION,
        "dataset_version": DATASET_VERSION,
        "evidence_state": "SIMULADO",
    }
