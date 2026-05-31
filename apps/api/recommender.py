"""Deterministic, auditable experiment recommender.

Ranks MFC scenarios to answer "which experiment should we validate first?". The
logic is an explicit weighted score over visible criteria -- never a hidden
decision. Output is a prioritized list with reasons; the institution still decides
which experiment to run (RF-04, control humano).
"""

from __future__ import annotations

from typing import Any

# Weights for each criterion (must sum to 1.0).
_WEIGHTS = {
    "power": 0.40,        # projected electrical performance
    "stability": 0.20,    # expected operational stability
    "data_quality": 0.15  # measured > simulated > exploratory goal
    ,
    "confidence": 0.10,   # model confidence
    "cost": 0.15,         # experimental cost efficiency (cheaper = better)
}

_STABILITY_SCORE = {"alta": 1.0, "media": 0.6, "baja": 0.3}
_EVIDENCE_SCORE = {"MEDIDO": 1.0, "SIMULADO": 0.6, "META_EXPLORATORIA": 0.4}
_CONFIDENCE_SCORE = {"alta": 1.0, "media": 0.7, "baja": 0.4, "muy_baja": 0.2}


def _normalize(value: float, lo: float, hi: float) -> float:
    """Scale ``value`` into [0, 1] given the set's range; 0.5 when range is flat."""
    if hi <= lo:
        return 0.5
    return (value - lo) / (hi - lo)


def rank_scenarios(items: list[dict[str, Any]]) -> list[dict[str, Any]]:
    """Return ``items`` sorted best-first, each annotated with score, priority, reason.

    Each item should provide: scenario_id, scenario_code, projected_power_mw,
    projected_stability, evidence_state, confidence_level, electrode_cost_usd,
    volume_l. Missing numeric fields are treated conservatively.
    """
    if not items:
        return []

    powers = [i.get("projected_power_mw") or 0.0 for i in items]
    costs = [i.get("electrode_cost_usd") or 30.0 for i in items]
    p_lo, p_hi = min(powers), max(powers)
    c_lo, c_hi = min(costs), max(costs)

    scored: list[dict[str, Any]] = []
    for item in items:
        power = item.get("projected_power_mw") or 0.0
        cost = item.get("electrode_cost_usd") or 30.0

        power_s = _normalize(power, p_lo, p_hi)
        stability_s = _STABILITY_SCORE.get(item.get("projected_stability"), 0.3)
        data_s = _EVIDENCE_SCORE.get(item.get("evidence_state"), 0.4)
        confidence_s = _CONFIDENCE_SCORE.get(item.get("confidence_level"), 0.2)
        cost_s = 1.0 - _normalize(cost, c_lo, c_hi)  # cheaper -> higher

        score = (
            _WEIGHTS["power"] * power_s
            + _WEIGHTS["stability"] * stability_s
            + _WEIGHTS["data_quality"] * data_s
            + _WEIGHTS["confidence"] * confidence_s
            + _WEIGHTS["cost"] * cost_s
        )

        enriched = dict(item)
        enriched["score"] = round(score, 4)
        enriched["reason"] = (
            f"Potencia proyectada {power} mW, estabilidad "
            f"{item.get('projected_stability', 'desconocida')}, dato "
            f"{item.get('evidence_state', 'SIMULADO')}, confianza "
            f"{item.get('confidence_level', 'baja')}. Prioridad calculada con pesos "
            f"visibles (potencia {_WEIGHTS['power']}, estabilidad {_WEIGHTS['stability']}, "
            f"calidad del dato {_WEIGHTS['data_quality']}, confianza {_WEIGHTS['confidence']}, "
            f"costo {_WEIGHTS['cost']})."
        )
        scored.append(enriched)

    # Sort by score desc; stable tie-break by scenario_id for determinism.
    scored.sort(key=lambda x: (-x["score"], x.get("scenario_id", 0)))
    for priority, item in enumerate(scored, start=1):
        item["priority"] = priority
    return scored
