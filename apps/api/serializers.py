"""ORM-to-dict serializers.

Responses are built as plain dicts (not Pydantic ORM models) to keep output shapes
explicit and to avoid lazy-loading surprises. Datetimes/dates become ISO strings.
"""

from __future__ import annotations

from datetime import date, datetime
from typing import Any


def _convert(value: Any) -> Any:
    if isinstance(value, (datetime, date)):
        return value.isoformat()
    return value


def row_to_dict(obj: Any) -> dict[str, Any]:
    """Map an ORM row's own columns to a JSON-friendly dict."""
    return {c.name: _convert(getattr(obj, c.name)) for c in obj.__table__.columns}


def substrate_to_dict(substrate: Any) -> dict[str, Any]:
    data = row_to_dict(substrate)
    if substrate.substrate_type is not None:
        data["substrate_type"] = row_to_dict(substrate.substrate_type)
    return data


def mfc_configuration_to_dict(config: Any) -> dict[str, Any]:
    data = row_to_dict(config)
    if config.electrode_material is not None:
        data["electrode_material"] = row_to_dict(config.electrode_material)
    return data


def prediction_to_dict(prediction: Any) -> dict[str, Any]:
    return row_to_dict(prediction)


def scenario_summary(scenario: Any) -> dict[str, Any]:
    return row_to_dict(scenario)


def scenario_detail(scenario: Any, latest_prediction: Any | None = None) -> dict[str, Any]:
    data = row_to_dict(scenario)
    data["substrate"] = substrate_to_dict(scenario.substrate) if scenario.substrate else None
    data["institution"] = row_to_dict(scenario.institution) if scenario.institution else None
    data["mfc_configuration"] = (
        mfc_configuration_to_dict(scenario.mfc_configuration)
        if scenario.mfc_configuration else None
    )
    data["latest_prediction"] = prediction_to_dict(latest_prediction) if latest_prediction else None
    data["recommendations"] = [row_to_dict(r) for r in scenario.recommendations]
    return data


def report_to_dict(report: Any) -> dict[str, Any]:
    data = row_to_dict(report)
    data["scenario_ids"] = [rs.scenario_id for rs in report.report_scenarios]
    return data
