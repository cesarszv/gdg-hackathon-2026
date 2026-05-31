"""Generate and retrieve traceable institutional reports (RF-06)."""

from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from apps.api.ai_gateway import explain
from apps.api.clock import utcnow
from apps.api.config import settings
from apps.api.schemas import ReportCreate
from apps.api.database import get_db
from apps.api.serializers import report_to_dict
from apps.api.services import predict_for_scenario
from database.models import Report, ReportScenario, Scenario

router = APIRouter(prefix="/reportes", tags=["reportes"])


def _build_content(db: Session, scenarios: list[Scenario]) -> str:
    lines = [
        "Resumen institucional GreenSpark (valores SIMULADOS salvo indicacion).",
        f"Escenarios incluidos: {len(scenarios)}.",
    ]
    for scenario in scenarios:
        prediction = predict_for_scenario(scenario)
        lines.append(
            f"- {scenario.scenario_code} [{scenario.evidence_state}]: "
            f"potencia proyectada {prediction['projected_power_mw']} mW, "
            f"estabilidad {prediction['projected_stability']}, "
            f"confianza {prediction['confidence_level']}."
        )
    lines.append(
        "Advertencia: las proyecciones se basan en literatura y requieren "
        "validacion experimental; no constituyen mediciones ni garantias."
    )
    return "\n".join(lines)


@router.post("", status_code=status.HTTP_201_CREATED)
def create_report(payload: ReportCreate, db: Session = Depends(get_db)):
    scenarios = (
        db.query(Scenario).filter(Scenario.scenario_id.in_(payload.scenario_ids)).all()
        if payload.scenario_ids else []
    )
    found = {s.scenario_id for s in scenarios}
    missing = [sid for sid in payload.scenario_ids if sid not in found]
    if missing:
        raise HTTPException(status_code=404, detail=f"Escenarios no encontrados: {missing}")

    content = _build_content(db, scenarios)
    if payload.use_llm:
        narration = explain(
            {"scenario_code": payload.title, "assumptions": content,
             "evidence_state": "SIMULADO", "warnings": []},
            api_key=settings.ai_provider_api_key,
            model=settings.ai_model,
            base_url=settings.ai_base_url,
            timeout=settings.ai_timeout_seconds,
        )
        content = f"{content}\n\nNarrativa ({narration['source']}):\n{narration['explanation']}"

    report = Report(
        institution_id=payload.institution_id,
        title=payload.title,
        period_start=payload.period_start,
        period_end=payload.period_end,
        evidence_state="SIMULADO",
        content=content,
        generator_version=settings.report_generator_version,
        created_at=utcnow(),
    )
    db.add(report)
    db.commit()
    db.refresh(report)

    for scenario in scenarios:
        db.add(ReportScenario(report_id=report.report_id, scenario_id=scenario.scenario_id))
    db.commit()
    db.refresh(report)
    return report_to_dict(report)


@router.get("")
def list_reports(db: Session = Depends(get_db)):
    return [report_to_dict(r) for r in db.query(Report).order_by(Report.report_id).all()]


@router.get("/{report_id}")
def get_report(report_id: int, db: Session = Depends(get_db)):
    report = db.get(Report, report_id)
    if report is None:
        raise HTTPException(status_code=404, detail="Reporte no encontrado")
    return report_to_dict(report)
