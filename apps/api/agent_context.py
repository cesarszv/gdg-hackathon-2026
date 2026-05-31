"""Read-only SQLite context for the GreenSpark sustainability advisor.

The LLM never receives a database connection or SQL. This module exposes a
small, traceable snapshot assembled by the backend from the prototype data.
"""

from __future__ import annotations

from typing import Any

from sqlalchemy import func
from sqlalchemy.orm import Session

from database.models import (
    Institution,
    Prediction,
    Recommendation,
    Report,
    Scenario,
    SensorReading,
    Substrate,
)


def _rounded(value: float | None) -> float | None:
    return round(value, 3) if value is not None else None


def _latest_prediction(db: Session, scenario_id: int) -> Prediction | None:
    return (
        db.query(Prediction)
        .filter(Prediction.scenario_id == scenario_id)
        .order_by(Prediction.created_at.desc(), Prediction.prediction_id.desc())
        .first()
    )


def _prediction_summary(prediction: Prediction | None) -> dict[str, Any] | None:
    if prediction is None:
        return None
    return {
        "projected_voltage_v": prediction.projected_voltage_v,
        "projected_current_ma": prediction.projected_current_ma,
        "projected_power_mw": prediction.projected_power_mw,
        "projected_power_density_mw_m2": prediction.projected_power_density_mw_m2,
        "projected_stability": prediction.projected_stability,
        "confidence_level": prediction.confidence_level,
        "assumptions": prediction.assumptions,
        "warnings": prediction.warnings,
        "model_version": prediction.model_version,
        "dataset_version": prediction.dataset_version,
    }


def _telemetry_summary(db: Session, scenario_id: int) -> dict[str, Any]:
    stats = (
        db.query(
            func.count(SensorReading.sensor_reading_id),
            func.min(SensorReading.reading_datetime),
            func.max(SensorReading.reading_datetime),
            func.avg(SensorReading.voltage_v),
            func.min(SensorReading.voltage_v),
            func.max(SensorReading.voltage_v),
            func.avg(SensorReading.current_ma),
            func.min(SensorReading.current_ma),
            func.max(SensorReading.current_ma),
            func.avg(SensorReading.ph),
            func.min(SensorReading.ph),
            func.max(SensorReading.ph),
            func.avg(SensorReading.temperature_c),
            func.min(SensorReading.temperature_c),
            func.max(SensorReading.temperature_c),
        )
        .filter(SensorReading.scenario_id == scenario_id)
        .one()
    )
    evidence_states = [
        state
        for (state,) in (
            db.query(SensorReading.evidence_state)
            .filter(SensorReading.scenario_id == scenario_id)
            .distinct()
            .order_by(SensorReading.evidence_state)
            .all()
        )
    ]
    return {
        "reading_count": stats[0],
        "period_start": stats[1].isoformat() if stats[1] else None,
        "period_end": stats[2].isoformat() if stats[2] else None,
        "evidence_states": evidence_states,
        "averages": {
            "voltage_v": _rounded(stats[3]),
            "current_ma": _rounded(stats[6]),
            "ph": _rounded(stats[9]),
            "temperature_c": _rounded(stats[12]),
        },
        "minimums": {
            "voltage_v": _rounded(stats[4]),
            "current_ma": _rounded(stats[7]),
            "ph": _rounded(stats[10]),
            "temperature_c": _rounded(stats[13]),
        },
        "maximums": {
            "voltage_v": _rounded(stats[5]),
            "current_ma": _rounded(stats[8]),
            "ph": _rounded(stats[11]),
            "temperature_c": _rounded(stats[14]),
        },
    }


def _telemetry_readings(db: Session, scenario_id: int) -> list[dict[str, Any]]:
    readings = (
        db.query(SensorReading)
        .filter(SensorReading.scenario_id == scenario_id)
        .order_by(SensorReading.reading_datetime)
        .all()
    )
    return [
        {
            "reading_datetime": reading.reading_datetime.isoformat(),
            "voltage_v": reading.voltage_v,
            "current_ma": reading.current_ma,
            "ph": reading.ph,
            "temperature_c": reading.temperature_c,
            "device_id": reading.device_id,
            "evidence_state": reading.evidence_state,
        }
        for reading in readings
    ]


def _missing_data(scenario: Scenario) -> list[str]:
    substrate = scenario.substrate
    values = {
        "scenario.ph": scenario.ph,
        "scenario.temperature_c": scenario.temperature_c,
        "scenario.retention_h": scenario.retention_h,
        "scenario.feeding_frequency_h": scenario.feeding_frequency_h,
        "substrate.humidity_pct": substrate.humidity_pct if substrate else None,
        "substrate.cod_estimated_mg_l": substrate.cod_estimated_mg_l if substrate else None,
        "substrate.contamination_pct": substrate.contamination_pct if substrate else None,
    }
    return [name for name, value in values.items() if value is None]


def _scenario_summary(db: Session, scenario: Scenario) -> dict[str, Any]:
    configuration = scenario.mfc_configuration
    material = configuration.electrode_material if configuration else None
    return {
        "scenario_id": scenario.scenario_id,
        "scenario_code": scenario.scenario_code,
        "evidence_state": scenario.evidence_state,
        "source": scenario.source,
        "institution": scenario.institution.name if scenario.institution else None,
        "substrate": scenario.substrate.name if scenario.substrate else None,
        "operation": {
            "ph": scenario.ph,
            "temperature_c": scenario.temperature_c,
            "retention_h": scenario.retention_h,
            "feeding_frequency_h": scenario.feeding_frequency_h,
        },
        "mfc_configuration": {
            "volume_l": configuration.volume_l if configuration else None,
            "electrode_area_cm2": configuration.electrode_area_cm2 if configuration else None,
            "electrode_distance_cm": configuration.electrode_distance_cm if configuration else None,
            "external_resistance_ohm": (
                configuration.external_resistance_ohm if configuration else None
            ),
            "electrode_material": material.name if material else None,
        },
        "latest_prediction": _prediction_summary(_latest_prediction(db, scenario.scenario_id)),
        "missing_data": _missing_data(scenario),
    }


def build_agent_context(db: Session, scenario_id: int | None = None) -> dict[str, Any]:
    """Build a compact, read-only snapshot for one advisor question."""
    scenarios = db.query(Scenario).order_by(Scenario.scenario_id).all()
    scenario_summaries = [_scenario_summary(db, scenario) for scenario in scenarios]
    telemetry = [
        {
            "scenario_id": scenario.scenario_id,
            "scenario_code": scenario.scenario_code,
            **_telemetry_summary(db, scenario.scenario_id),
        }
        for scenario in scenarios
    ]
    recommendations = (
        db.query(Recommendation)
        .join(Scenario, Scenario.scenario_id == Recommendation.scenario_id)
        .order_by(Recommendation.priority, Recommendation.recommendation_id)
        .all()
    )
    reports = db.query(Report).order_by(Report.report_id).all()

    context: dict[str, Any] = {
        "data_policy": {
            "access": "read_only",
            "telemetry_evidence": "SIMULADO",
            "note": (
                "La telemetria actual es ficticia y prepara el flujo para sensores futuros. "
                "No proviene de reactores fisicos."
            ),
        },
        "overview": {
            "institutions": db.query(Institution).count(),
            "substrates": db.query(Substrate).count(),
            "scenarios": len(scenarios),
            "predictions": db.query(Prediction).count(),
            "recommendations": len(recommendations),
            "reports": len(reports),
            "sensor_readings": db.query(SensorReading).count(),
        },
        "recommendation_ranking": [
            {
                "priority": recommendation.priority,
                "scenario_code": recommendation.scenario.scenario_code,
                "explanation": recommendation.explanation,
                "warnings": recommendation.warnings,
            }
            for recommendation in recommendations
        ],
        "scenarios": scenario_summaries,
        "telemetry_by_scenario": telemetry,
        "reports": [
            {
                "title": report.title,
                "evidence_state": report.evidence_state,
                "content": report.content,
            }
            for report in reports
        ],
    }

    if scenario_id is not None:
        selected = next(
            (scenario for scenario in scenarios if scenario.scenario_id == scenario_id),
            None,
        )
        if selected is None:
            raise LookupError(f"Escenario {scenario_id} no encontrado")
        context["focused_scenario"] = {
            **_scenario_summary(db, selected),
            "telemetry_summary": _telemetry_summary(db, scenario_id),
            "telemetry_readings": _telemetry_readings(db, scenario_id),
        }

    return context
