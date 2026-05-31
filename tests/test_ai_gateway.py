"""Unit tests for the optional LLM explanation gateway (fallback behavior)."""

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
