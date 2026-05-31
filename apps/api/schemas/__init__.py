"""Pydantic request models for the GreenSpark API.

Responses are returned as explicit dicts (see ``apps/api/serializers.py``); these
models validate and document incoming request bodies.
"""

from __future__ import annotations

from datetime import date
from typing import Any, Literal, Optional

from pydantic import BaseModel, Field

EvidenceState = Literal["SIMULADO", "MEDIDO", "META_EXPLORATORIA"]


class ScenarioCreate(BaseModel):
    substrate_id: int
    scenario_code: str
    institution_id: Optional[int] = None
    mfc_configuration_id: Optional[int] = None
    ph: Optional[float] = None
    temperature_c: Optional[float] = None
    retention_h: Optional[float] = None
    feeding_frequency_h: Optional[float] = None
    evidence_state: EvidenceState = "SIMULADO"
    source: Optional[str] = None


class PredictRequest(BaseModel):
    """Predict from a stored scenario (``scenario_id``) or ad-hoc ``inputs``."""

    scenario_id: Optional[int] = None
    inputs: Optional[dict[str, Any]] = None
    persist: bool = True


class CompareRequest(BaseModel):
    scenario_ids: list[int] = Field(min_length=2)


class ReportCreate(BaseModel):
    title: str
    institution_id: Optional[int] = None
    scenario_ids: list[int] = Field(default_factory=list)
    period_start: Optional[date] = None
    period_end: Optional[date] = None
    use_llm: bool = False


class AgentRequest(BaseModel):
    question: str = Field(min_length=3, max_length=600)
    scenario_id: Optional[int] = None


class TelemetryCreate(BaseModel):
    scenario_id: int
    voltage_v: Optional[float] = None
    current_ma: Optional[float] = None
    ph: Optional[float] = None
    temperature_c: Optional[float] = None
    device_id: Optional[str] = None
