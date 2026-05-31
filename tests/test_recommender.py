"""Unit tests for the deterministic experiment recommender."""

from apps.api.recommender import rank_scenarios


def _item(scenario_id, power, stability="media", evidence="SIMULADO",
          confidence="baja", electrode_cost=30.0, volume_l=10.0):
    return {
        "scenario_id": scenario_id,
        "scenario_code": f"MFC-{scenario_id}",
        "projected_power_mw": power,
        "projected_stability": stability,
        "evidence_state": evidence,
        "confidence_level": confidence,
        "electrode_cost_usd": electrode_cost,
        "volume_l": volume_l,
    }


def test_rank_orders_by_power_when_other_factors_equal():
    ranked = rank_scenarios([_item(1, 0.5), _item(2, 1.5), _item(3, 0.9)])
    assert [r["scenario_id"] for r in ranked] == [2, 3, 1]


def test_priorities_are_contiguous_starting_at_one():
    ranked = rank_scenarios([_item(1, 0.5), _item(2, 1.5), _item(3, 0.9)])
    assert [r["priority"] for r in ranked] == [1, 2, 3]


def test_higher_stability_breaks_ties_in_favor():
    ranked = rank_scenarios([
        _item(1, 1.0, stability="baja"),
        _item(2, 1.0, stability="alta"),
    ])
    assert ranked[0]["scenario_id"] == 2


def test_each_recommendation_has_a_visible_reason():
    ranked = rank_scenarios([_item(1, 1.0)])
    assert ranked[0]["reason"]
    assert "1.0" in ranked[0]["reason"] or "1" in ranked[0]["reason"]


def test_empty_input_returns_empty_list():
    assert rank_scenarios([]) == []
