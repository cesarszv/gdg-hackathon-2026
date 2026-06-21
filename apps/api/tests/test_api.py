"""Integration tests for the GreenSpark API (FastAPI TestClient)."""


# --- health & catalog ---------------------------------------------------------

def test_health_reports_ok_and_table_counts(client):
    res = client.get("/health")
    assert res.status_code == 200
    body = res.json()
    assert body["status"] == "ok"
    assert body["database"]["scenario"] == 8
    assert body["database"]["sensor_reading"] == 192


def test_catalog_lists_seeded_institutions(client):
    res = client.get("/catalogo/instituciones")
    assert res.status_code == 200
    items = res.json()
    assert len(items) == 5
    assert {"institution_id", "name", "type"}.issubset(items[0].keys())


def test_catalog_lists_substrates_types_materials_configs(client):
    assert len(client.get("/catalogo/sustratos").json()) == 6
    assert len(client.get("/catalogo/tipos-sustrato").json()) == 5
    assert len(client.get("/catalogo/materiales-electrodo").json()) == 4
    assert len(client.get("/catalogo/configuraciones-mfc").json()) == 5


# --- scenarios ----------------------------------------------------------------

def test_list_scenarios_returns_all_seeded(client):
    res = client.get("/escenarios")
    assert res.status_code == 200
    assert len(res.json()) == 8


def test_get_scenario_detail_includes_substrate(client):
    res = client.get("/escenarios/1")
    assert res.status_code == 200
    body = res.json()
    assert body["scenario_code"] == "MFC-SCZ-001"
    assert body["substrate"]["substrate_id"] == 1


def test_get_unknown_scenario_returns_404(client):
    assert client.get("/escenarios/99999").status_code == 404


def test_create_valid_scenario_returns_201_with_label(client):
    payload = {
        "substrate_id": 1, "institution_id": 1, "mfc_configuration_id": 2,
        "scenario_code": "MFC-SCZ-TEST-CREATE", "ph": 7.0, "temperature_c": 30.0,
        "retention_h": 48.0, "feeding_frequency_h": 24.0,
        "evidence_state": "SIMULADO", "source": "pytest",
    }
    res = client.post("/escenarios", json=payload)
    assert res.status_code == 201
    body = res.json()
    assert body["scenario_id"] > 0
    assert body["evidence_state"] == "SIMULADO"
    assert "warnings" in body


def test_create_scenario_with_invalid_ph_is_rejected_422(client):
    payload = {
        "substrate_id": 1, "scenario_code": "MFC-SCZ-TEST-BADPH",
        "ph": 15.0, "temperature_c": 30.0,
    }
    res = client.post("/escenarios", json=payload)
    assert res.status_code == 422
    assert any(e.get("field") == "ph" for e in res.json()["detail"])


# --- prediction ---------------------------------------------------------------

def test_predict_by_scenario_id_is_labeled_and_persisted(client):
    res = client.post("/predecir", json={"scenario_id": 1})
    assert res.status_code == 200
    body = res.json()
    assert body["evidence_state"] == "SIMULADO"
    assert body["projected_power_mw"] is not None
    assert body["prediction_id"] > 0
    assert body["confidence_level"] in {"baja", "muy_baja", "media", "alta"}


# --- comparison ---------------------------------------------------------------

def test_compare_scenarios_returns_ranked_recommendation(client):
    res = client.post("/comparar", json={"scenario_ids": [1, 3, 4]})
    assert res.status_code == 200
    body = res.json()
    assert len(body["compared"]) == 3
    assert body["recommended"]["scenario_id"] in {1, 3, 4}


# --- recommendation -----------------------------------------------------------

def test_recommend_returns_priority_and_ranking(client):
    res = client.get("/recomendar/3")
    assert res.status_code == 200
    body = res.json()
    assert body["scenario_id"] == 3
    assert body["priority"] >= 1
    assert body["reason"]
    assert len(body["ranking"]) >= 1


# --- reports ------------------------------------------------------------------

def test_create_report_persists_and_lists(client):
    payload = {
        "institution_id": 1, "title": "Reporte pytest",
        "scenario_ids": [1, 2], "period_start": "2026-01-01",
        "period_end": "2026-03-31", "use_llm": False,
    }
    res = client.post("/reportes", json=payload)
    assert res.status_code == 201
    report_id = res.json()["report_id"]
    assert res.json()["content"]

    listing = client.get("/reportes")
    assert listing.status_code == 200
    assert any(r["report_id"] == report_id for r in listing.json())


# --- agent (LLM optional, fallback in tests) ----------------------------------

def test_agent_explains_with_deterministic_fallback(client):
    res = client.post(
        "/agente",
        json={"question": "Resume el escenario seleccionado.", "scenario_id": 3},
    )
    assert res.status_code == 200
    body = res.json()
    assert body["source"] == "fallback"
    assert "MFC-SCZ-003" in body["explanation"]


def test_agent_answers_free_form_question_from_sqlite(client):
    res = client.post(
        "/agente",
        json={
            "question": "¿Que muestra la telemetria y que escenario conviene validar primero?",
            "scenario_id": 3,
        },
    )
    assert res.status_code == 200
    body = res.json()
    assert body["source"] == "fallback"
    assert "MFC-SCZ-003" in body["explanation"]
    assert "24 lecturas" in body["explanation"]
    assert "SIMULADO" in body["explanation"]
    assert any("sensores fisicos" in warning for warning in body["warnings"])


# --- telemetry (phase 2 ingestion) --------------------------------------------

def test_seeded_telemetry_is_simulated_and_has_hourly_series(client):
    res = client.get("/telemetria/3")
    assert res.status_code == 200
    readings = res.json()
    assert len(readings) == 24
    assert all(row["evidence_state"] == "SIMULADO" for row in readings)
    assert all(row["device_id"] == "simulator-mfc-scz-003" for row in readings)


def test_telemetry_ingests_reading_and_lists(client):
    payload = {
        "scenario_id": 1, "voltage_v": 0.42, "current_ma": 2.0,
        "ph": 7.0, "temperature_c": 30.0, "device_id": "sensor-pytest",
    }
    res = client.post("/telemetria", json=payload)
    assert res.status_code == 201
    assert res.json()["sensor_reading_id"] > 0
    assert res.json()["evidence_state"] == "MEDIDO"

    listing = client.get("/telemetria/1")
    assert listing.status_code == 200
    assert len(listing.json()) >= 1
