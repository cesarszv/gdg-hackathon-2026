"""Unit tests for the optional OpenAI explanation gateway."""

import json

from apps.api.ai_gateway import explain


def _context():
    return {
        "scenario_code": "MFC-SCZ-003",
        "projected_power_mw": 1.456,
        "projected_stability": "alta",
        "priority": 1,
        "evidence_state": "SIMULADO",
        "assumptions": "COD alto favorece produccion.",
        "warnings": ["Valores simulados, no medidos."],
    }


def test_without_api_key_uses_deterministic_fallback():
    result = explain(_context(), api_key=None)
    assert result["source"] == "fallback"
    assert result["model"] is None


def test_fallback_text_references_backend_numbers_not_invented_ones():
    result = explain(_context(), api_key=None)
    assert "MFC-SCZ-003" in result["explanation"]
    assert "1.456" in result["explanation"]


def test_fallback_never_raises_on_minimal_context():
    result = explain({}, api_key=None)
    assert result["source"] == "fallback"
    assert isinstance(result["explanation"], str)


def test_invalid_api_endpoint_falls_back_gracefully():
    # Unroutable host + tiny timeout -> the call fails and must degrade, not crash.
    result = explain(_context(), api_key="dummy",
                     base_url="http://127.0.0.1:1", timeout=0.5)
    assert result["source"] == "fallback"
    assert any("LLM" in w for w in result["warnings"])


def test_openai_gateway_posts_question_and_structured_context(monkeypatch):
    captured = {}

    class FakeResponse:
        def raise_for_status(self):
            return None

        def json(self):
            return {"choices": [{"message": {"content": "Analisis trazable."}}]}

    def fake_post(url, **kwargs):
        captured["url"] = url
        captured.update(kwargs)
        return FakeResponse()

    monkeypatch.setattr("apps.api.ai_gateway.httpx.post", fake_post)
    context = {
        "overview": {"scenarios": 8, "sensor_readings": 192},
        "data_policy": {"telemetry_evidence": "SIMULADO"},
    }

    result = explain(
        context,
        api_key="sk-test",
        question="¿Que escenario conviene validar primero?",
    )

    assert result["source"] == "llm"
    assert result["model"] == "gpt-5.4-mini"
    assert captured["url"] == "https://api.openai.com/v1/chat/completions"
    assert captured["headers"]["Authorization"] == "Bearer sk-test"
    assert captured["json"]["model"] == "gpt-5.4-mini"
    user_prompt = captured["json"]["messages"][1]["content"]
    assert "¿Que escenario conviene validar primero?" in user_prompt
    assert json.dumps(context, ensure_ascii=False, sort_keys=True) in user_prompt
    assert any("sensores fisicos" in warning for warning in result["warnings"])


def test_database_fallback_mentions_simulated_sqlite_summary():
    context = {
        "overview": {"scenarios": 8, "sensor_readings": 192},
        "data_policy": {"telemetry_evidence": "SIMULADO"},
        "recommendation_ranking": [
            {
                "priority": 1,
                "scenario_code": "MFC-SCZ-003",
                "explanation": "Validar cachaza primero.",
            }
        ],
    }

    result = explain(
        context,
        api_key=None,
        question="¿Que escenario conviene validar primero?",
    )

    assert result["source"] == "fallback"
    assert "8 escenarios" in result["explanation"]
    assert "192 lecturas" in result["explanation"]
    assert "MFC-SCZ-003" in result["explanation"]
    assert "SIMULADO" in result["explanation"]
