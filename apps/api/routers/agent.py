"""Read-only SQLite advisor endpoint with OpenAI and deterministic fallback."""

from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from apps.api.agent_context import build_agent_context
from apps.api.ai_gateway import explain
from apps.api.config import settings
from apps.api.database import get_db
from apps.api.schemas import AgentRequest

router = APIRouter(tags=["agente"])


@router.post("/agente")
def agent_explain(payload: AgentRequest, db: Session = Depends(get_db)):
    try:
        context = build_agent_context(db, scenario_id=payload.scenario_id)
    except LookupError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc

    return explain(
        context,
        api_key=settings.openai_api_key,
        question=payload.question,
        model=settings.ai_model,
        base_url=settings.ai_base_url,
        timeout=settings.ai_timeout_seconds,
    )
