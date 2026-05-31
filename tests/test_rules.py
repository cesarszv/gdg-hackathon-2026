"""Unit tests for the deterministic rules layer (validation + baseline predictor)."""

import pytest

from apps.api.rules.validation import validate_physical_ranges, PhysicalValidationError
from apps.api.rules.baseline import predict_baseline


# --- validation ---------------------------------------------------------------

def test_valid_inputs_produce_no_errors_or_warnings():
    warnings = validate_physical_ranges(
        {"ph": 7.0, "temperature_c": 30.0, "humidity_pct": 70.0,
         "contamination_pct": 5.0, "volume_l": 10.0, "electrode_area_cm2": 120.0,
         "electrode_distance_cm": 4.0, "external_resistance_ohm": 1000.0,
         "cod_estimated_mg_l": 45000.0}
    )
    assert warnings == []


def test_ph_above_hard_limit_is_rejected():
    with pytest.raises(PhysicalValidationError) as exc:
        validate_physical_ranges({"ph": 15.0})
    assert any(e["field"] == "ph" for e in exc.value.errors)


def test_negative_temperature_is_rejected():
    with pytest.raises(PhysicalValidationError) as exc:
        validate_physical_ranges({"temperature_c": -5.0})
    assert any(e["field"] == "temperature_c" for e in exc.value.errors)


def test_zero_volume_is_rejected():
    with pytest.raises(PhysicalValidationError):
        validate_physical_ranges({"volume_l": 0.0})


def test_ph_outside_operational_range_is_warning_not_error():
    warnings = validate_physical_ranges({"ph": 3.0})
    assert any("ph" in w.lower() for w in warnings)


# --- baseline predictor -------------------------------------------------------

REQUIRED_OUTPUT_KEYS = {
    "projected_voltage_v", "projected_current_ma", "projected_power_mw",
    "projected_power_density_mw_m2", "projected_stability", "confidence_level",
    "assumptions", "warnings", "missing_data", "model_version",
    "dataset_version", "evidence_state",
}


def _base_inputs(**overrides):
    data = {
        "cod_estimated_mg_l": 45000.0, "humidity_pct": 72.0, "contamination_pct": 5.0,
        "ph": 7.0, "temperature_c": 32.0, "retention_h": 48.0,
        "volume_l": 10.0, "electrode_area_cm2": 120.0, "electrode_distance_cm": 4.0,
        "external_resistance_ohm": 1000.0, "electrode_material": "carbon",
    }
    data.update(overrides)
    return data


def test_prediction_has_all_required_keys():
    result = predict_baseline(_base_inputs())
    assert REQUIRED_OUTPUT_KEYS.issubset(result.keys())


def test_prediction_is_always_labeled_simulated():
    assert predict_baseline(_base_inputs())["evidence_state"] == "SIMULADO"


def test_higher_cod_yields_higher_projected_power():
    low = predict_baseline(_base_inputs(cod_estimated_mg_l=20000.0))
    high = predict_baseline(_base_inputs(cod_estimated_mg_l=58000.0))
    assert high["projected_power_mw"] > low["projected_power_mw"]


def test_temperature_far_from_optimum_reduces_power():
    optimal = predict_baseline(_base_inputs(temperature_c=32.0))
    cold = predict_baseline(_base_inputs(temperature_c=10.0))
    assert cold["projected_power_mw"] < optimal["projected_power_mw"]


def test_missing_cod_is_reported_and_lowers_confidence():
    result = predict_baseline(_base_inputs(cod_estimated_mg_l=None))
    assert "cod_estimated_mg_l" in result["missing_data"]
    assert result["confidence_level"] in {"muy_baja", "baja"}


def test_power_density_uses_electrode_area():
    result = predict_baseline(_base_inputs(electrode_area_cm2=120.0))
    expected = result["projected_power_mw"] * 10000.0 / 120.0
    assert result["projected_power_density_mw_m2"] == pytest.approx(expected, rel=1e-6)
