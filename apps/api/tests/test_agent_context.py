"""Read-only SQLite context supplied to the GreenSpark advisor."""

from sqlalchemy.orm import sessionmaker

from apps.api.agent_context import build_agent_context


def test_global_agent_context_summarizes_seeded_sqlite_data(seeded_engine):
    Session = sessionmaker(bind=seeded_engine)
    with Session() as db:
        context = build_agent_context(db)

    assert context["data_policy"]["access"] == "read_only"
    assert context["data_policy"]["telemetry_evidence"] == "SIMULADO"
    assert context["overview"]["scenarios"] == 8
    assert context["overview"]["sensor_readings"] == 192
    assert context["recommendation_ranking"][0]["priority"] == 1
    assert context["recommendation_ranking"][0]["scenario_code"] == "MFC-SCZ-003"


def test_focused_agent_context_includes_scenario_and_simulated_telemetry(seeded_engine):
    Session = sessionmaker(bind=seeded_engine)
    with Session() as db:
        context = build_agent_context(db, scenario_id=3)

    focused = context["focused_scenario"]
    assert focused["scenario_code"] == "MFC-SCZ-003"
    assert focused["latest_prediction"]["projected_power_mw"] == 1.456
    assert focused["telemetry_summary"]["reading_count"] == 24
    assert focused["telemetry_summary"]["evidence_states"] == ["SIMULADO"]
    assert len(focused["telemetry_readings"]) == 24
    assert all(row["evidence_state"] == "SIMULADO" for row in focused["telemetry_readings"])
