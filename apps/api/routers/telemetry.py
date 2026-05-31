"""Phase-2 telemetry ingestion: store measured sensor readings (RF-07).

Readings are labeled MEDIDO to keep them strictly separated from SIMULADO
projections. During the hackathon this endpoint exists but is not presented as a
live capability.
"""

from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from apps.api.clock import utcnow
from apps.api.database import get_db
from apps.api.schemas import TelemetryCreate
from apps.api.serializers import row_to_dict
from database.models import Scenario, SensorReading

router = APIRouter(prefix="/telemetria", tags=["telemetria"])


@router.post("", status_code=status.HTTP_201_CREATED)
def ingest_reading(payload: TelemetryCreate, db: Session = Depends(get_db)):
    if db.get(Scenario, payload.scenario_id) is None:
        raise HTTPException(status_code=404, detail="Escenario no encontrado")

    reading = SensorReading(
        scenario_id=payload.scenario_id,
        reading_datetime=utcnow(),
        voltage_v=payload.voltage_v,
        current_ma=payload.current_ma,
        ph=payload.ph,
        temperature_c=payload.temperature_c,
        device_id=payload.device_id,
        evidence_state="MEDIDO",
    )
    db.add(reading)
    db.commit()
    db.refresh(reading)
    return row_to_dict(reading)


@router.get("/{scenario_id}")
def list_readings(scenario_id: int, db: Session = Depends(get_db)):
    readings = (
        db.query(SensorReading)
        .filter(SensorReading.scenario_id == scenario_id)
        .order_by(SensorReading.reading_datetime)
        .all()
    )
    return [row_to_dict(r) for r in readings]
