"""Cross-router helpers: turn scenarios into model inputs, predictions and ranking items."""

from __future__ import annotations

from typing import Any

from sqlalchemy.orm import Session

from apps.api.rules.baseline import predict_baseline
from database.models import Prediction, Scenario


def gather_scenario_inputs(scenario: Scenario) -> dict[str, Any]:
    """Collect substrate / operation / reactor inputs for the baseline predictor."""
    substrate = scenario.substrate
    config = scenario.mfc_configuration
    material = config.electrode_material if config else None
    return {
        "cod_estimated_mg_l": substrate.cod_estimated_mg_l if substrate else None,
        "humidity_pct": substrate.humidity_pct if substrate else None,
        "contamination_pct": substrate.contamination_pct if substrate else None,
        "ph": scenario.ph,
        "temperature_c": scenario.temperature_c,
        "retention_h": scenario.retention_h,
        "volume_l": config.volume_l if config else None,
        "electrode_area_cm2": config.electrode_area_cm2 if config else None,
        "electrode_distance_cm": config.electrode_distance_cm if config else None,
        "external_resistance_ohm": config.external_resistance_ohm if config else None,
        "electrode_material": material.name if material else None,
    }


def predict_for_scenario(scenario: Scenario) -> dict[str, Any]:
    """Run the deterministic baseline for a stored scenario."""
    return predict_baseline(gather_scenario_inputs(scenario))


def latest_prediction(db: Session, scenario_id: int) -> Prediction | None:
    return (
        db.query(Prediction)
        .filter(Prediction.scenario_id == scenario_id)
        .order_by(Prediction.prediction_id.desc())
        .first()
    )


def ranking_item(db: Session, scenario: Scenario) -> dict[str, Any]:
    """Build a recommender input item, preferring a stored prediction over a fresh one."""
    stored = latest_prediction(db, scenario.scenario_id)
    if stored is not None:
        power = stored.projected_power_mw
        stability = stored.projected_stability
        confidence = stored.confidence_level
    else:
        result = predict_for_scenario(scenario)
        power = result["projected_power_mw"]
        stability = result["projected_stability"]
        confidence = result["confidence_level"]

    config = scenario.mfc_configuration
    material = config.electrode_material if config else None
    return {
        "scenario_id": scenario.scenario_id,
        "scenario_code": scenario.scenario_code,
        "projected_power_mw": power,
        "projected_stability": stability,
        "evidence_state": scenario.evidence_state,
        "confidence_level": confidence,
        "electrode_cost_usd": material.cost_estimate_usd if material else None,
        "volume_l": config.volume_l if config else None,
    }
