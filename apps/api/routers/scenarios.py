"""Scenario registration and retrieval (RF-01, RF-02)."""

from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from apps.api.clock import utcnow
from apps.api.database import get_db
from apps.api.rules.validation import validate_physical_ranges
from apps.api.schemas import ScenarioCreate
from apps.api.serializers import scenario_detail, scenario_summary
from apps.api.services import latest_prediction
from database.models import Scenario

router = APIRouter(prefix="/escenarios", tags=["escenarios"])


@router.get("")
def list_scenarios(db: Session = Depends(get_db)):
    scenarios = db.query(Scenario).order_by(Scenario.scenario_id).all()
    return [scenario_summary(s) for s in scenarios]


@router.get("/{scenario_id}")
def get_scenario(scenario_id: int, db: Session = Depends(get_db)):
    scenario = db.get(Scenario, scenario_id)
    if scenario is None:
        raise HTTPException(status_code=404, detail="Escenario no encontrado")
    return scenario_detail(scenario, latest_prediction(db, scenario_id))


@router.post("", status_code=status.HTTP_201_CREATED)
def create_scenario(payload: ScenarioCreate, db: Session = Depends(get_db)):
    # Deterministic physical validation runs before persistence; hard violations
    # raise PhysicalValidationError -> 422 (handled centrally in main).
    warnings = validate_physical_ranges(payload.model_dump())

    scenario = Scenario(
        substrate_id=payload.substrate_id,
        institution_id=payload.institution_id,
        mfc_configuration_id=payload.mfc_configuration_id,
        scenario_code=payload.scenario_code,
        ph=payload.ph,
        temperature_c=payload.temperature_c,
        retention_h=payload.retention_h,
        feeding_frequency_h=payload.feeding_frequency_h,
        evidence_state=payload.evidence_state,
        source=payload.source,
        created_at=utcnow(),
    )
    db.add(scenario)
    try:
        db.commit()
    except IntegrityError as exc:
        db.rollback()
        raise HTTPException(
            status_code=400,
            detail="No se pudo crear el escenario (codigo duplicado o referencia invalida).",
        ) from exc
    db.refresh(scenario)

    result = scenario_summary(scenario)
    result["warnings"] = warnings
    return result
