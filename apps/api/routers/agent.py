"""Optional LLM explanation endpoint with deterministic fallback (RF-06, agente opcional)."""

from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from apps.api.ai_gateway import explain
from apps.api.config import settings
from apps.api.database import get_db
from apps.api.schemas import AgentRequest
from apps.api.services import latest_prediction, predict_for_scenario
from database.models import Scenario

router = APIRouter(tags=["agente"])


def _context_from_scenario(db: Session, scenario: Scenario) -> dict:
    stored = latest_prediction(db, scenario.scenario_id)
    if stored is not None:
        power = stored.projected_power_mw
        stability = stored.projected_stability
    else:
        result = predict_for_scenario(scenario)
        power = result["projected_power_mw"]
        stability = result["projected_stability"]
    return {
        "scenario_code": scenario.scenario_code,
        "projected_power_mw": power,
        "projected_stability": stability,
        "evidence_state": scenario.evidence_state,
        "assumptions": scenario.source,
        "warnings": ["Resultados SIMULADOS; no interpretar como medicion."],
    }


@router.post("/agente")
def agent_explain(payload: AgentRequest, db: Session = Depends(get_db)):
    if payload.context is not None:
        context = payload.context
    elif payload.scenario_id is not None:
        scenario = db.get(Scenario, payload.scenario_id)
        if scenario is None:
            raise HTTPException(status_code=404, detail="Escenario no encontrado")
        context = _context_from_scenario(db, scenario)
    else:
        raise HTTPException(status_code=422, detail="Debe enviar 'scenario_id' o 'context'.")

    return explain(
        context,
        api_key=settings.ai_provider_api_key,
        model=settings.ai_model,
        base_url=settings.ai_base_url,
        timeout=settings.ai_timeout_seconds,
    )
