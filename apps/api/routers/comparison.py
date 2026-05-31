"""Compare two or more scenarios with visible assumptions, then recommend (RF-03/RF-04)."""

from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from apps.api.database import get_db
from apps.api.recommender import rank_scenarios
from apps.api.schemas import CompareRequest
from apps.api.services import predict_for_scenario
from database.models import Scenario

router = APIRouter(tags=["comparacion"])


@router.post("/comparar")
def compare(payload: CompareRequest, db: Session = Depends(get_db)):
    scenarios = (
        db.query(Scenario).filter(Scenario.scenario_id.in_(payload.scenario_ids)).all()
    )
    found = {s.scenario_id for s in scenarios}
    missing = [sid for sid in payload.scenario_ids if sid not in found]
    if missing:
        raise HTTPException(
            status_code=404, detail=f"Escenarios no encontrados: {missing}"
        )

    compared = []
    items = []
    for scenario in scenarios:
        prediction = predict_for_scenario(scenario)
        compared.append({
            "scenario_id": scenario.scenario_id,
            "scenario_code": scenario.scenario_code,
            "evidence_state": scenario.evidence_state,
            "prediction": prediction,
        })
        items.append({
            "scenario_id": scenario.scenario_id,
            "scenario_code": scenario.scenario_code,
            "projected_power_mw": prediction["projected_power_mw"],
            "projected_stability": prediction["projected_stability"],
            "evidence_state": scenario.evidence_state,
            "confidence_level": prediction["confidence_level"],
            "electrode_cost_usd": (
                scenario.mfc_configuration.electrode_material.cost_estimate_usd
                if scenario.mfc_configuration and scenario.mfc_configuration.electrode_material
                else None
            ),
            "volume_l": scenario.mfc_configuration.volume_l if scenario.mfc_configuration else None,
        })

    ranked = rank_scenarios(items)
    best = ranked[0]
    return {
        "compared": compared,
        "ranking": ranked,
        "recommended": {
            "scenario_id": best["scenario_id"],
            "scenario_code": best["scenario_code"],
            "priority": best["priority"],
            "reason": best["reason"],
        },
        "warnings": [
            "Comparacion basada en proyecciones SIMULADAS, no en mediciones fisicas.",
        ],
    }
