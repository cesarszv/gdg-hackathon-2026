"""Run the deterministic baseline predictor and optionally persist results (RF-03)."""

from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from apps.api.clock import utcnow
from apps.api.database import get_db
from apps.api.rules.baseline import predict_baseline
from apps.api.schemas import PredictRequest
from apps.api.services import gather_scenario_inputs
from database.models import Prediction, Scenario

router = APIRouter(tags=["prediccion"])


@router.post("/predecir")
def predict(payload: PredictRequest, db: Session = Depends(get_db)):
    if payload.scenario_id is not None:
        scenario = db.get(Scenario, payload.scenario_id)
        if scenario is None:
            raise HTTPException(status_code=404, detail="Escenario no encontrado")
        inputs = gather_scenario_inputs(scenario)
    elif payload.inputs:
        scenario = None
        inputs = payload.inputs
    else:
        raise HTTPException(
            status_code=422, detail="Debe enviar 'scenario_id' o 'inputs'."
        )

    result = predict_baseline(inputs)

    prediction_id = None
    if scenario is not None and payload.persist:
        prediction = Prediction(
            scenario_id=scenario.scenario_id,
            projected_voltage_v=result["projected_voltage_v"],
            projected_current_ma=result["projected_current_ma"],
            projected_power_mw=result["projected_power_mw"],
            projected_power_density_mw_m2=result["projected_power_density_mw_m2"],
            projected_stability=result["projected_stability"],
            confidence_level=result["confidence_level"],
            assumptions=result["assumptions"],
            warnings=" | ".join(result["warnings"]),
            model_version=result["model_version"],
            dataset_version=result["dataset_version"],
            created_at=utcnow(),
        )
        db.add(prediction)
        db.commit()
        db.refresh(prediction)
        prediction_id = prediction.prediction_id

    result["prediction_id"] = prediction_id
    result["scenario_id"] = scenario.scenario_id if scenario else None
    result["estado_resultado"] = "SIMULACION"
    return result
