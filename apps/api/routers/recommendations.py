"""Prioritize the next experiment to validate for a given scenario (RF-04)."""

from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from apps.api.database import get_db
from apps.api.recommender import rank_scenarios
from apps.api.services import ranking_item
from database.models import Scenario

router = APIRouter(tags=["recomendacion"])


@router.get("/recomendar/{scenario_id}")
def recommend(scenario_id: int, db: Session = Depends(get_db)):
    target = db.get(Scenario, scenario_id)
    if target is None:
        raise HTTPException(status_code=404, detail="Escenario no encontrado")

    scenarios = db.query(Scenario).order_by(Scenario.scenario_id).all()
    ranked = rank_scenarios([ranking_item(db, s) for s in scenarios])

    target_entry = next(r for r in ranked if r["scenario_id"] == scenario_id)
    return {
        "scenario_id": scenario_id,
        "scenario_code": target.scenario_code,
        "priority": target_entry["priority"],
        "score": target_entry["score"],
        "reason": target_entry["reason"],
        "ranking": ranked,
        "warnings": [
            "Priorizacion basada en proyecciones SIMULADAS. Es apoyo a la decision, "
            "no una orden automatica; la institucion elige que experimento ejecutar.",
        ],
    }
