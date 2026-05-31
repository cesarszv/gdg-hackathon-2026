-- GreenSpark Database Schema
-- SQLite compatible
-- Based on ERD: docs/database/erd.md

PRAGMA foreign_keys = ON;

-- Institution table
CREATE TABLE IF NOT EXISTS institution (
    institution_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('universidad', 'colegio', 'restaurante', 'agroindustria', 'otro')),
    zone TEXT,
    contact_name TEXT,
    contact_email TEXT,
    contact_phone TEXT,
    is_active INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT (datetime('now'))
);

-- Substrate type lookup table
CREATE TABLE IF NOT EXISTS substrate_type (
    substrate_type_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    typical_origin TEXT
);

-- Substrate table (concrete samples)
CREATE TABLE IF NOT EXISTS substrate (
    substrate_id INTEGER PRIMARY KEY AUTOINCREMENT,
    substrate_type_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    origin TEXT,
    humidity_pct REAL,
    cod_estimated_mg_l REAL,
    contamination_pct REAL,
    evidence_state TEXT NOT NULL DEFAULT 'SIMULADO' CHECK (evidence_state IN ('SIMULADO', 'MEDIDO', 'META_EXPLORATORIA')),
    source TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (substrate_type_id) REFERENCES substrate_type(substrate_type_id)
);

-- Electrode material lookup table
CREATE TABLE IF NOT EXISTS electrode_material (
    electrode_material_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    cost_estimate_usd REAL
);

-- MFC configuration table
CREATE TABLE IF NOT EXISTS mfc_configuration (
    mfc_configuration_id INTEGER PRIMARY KEY AUTOINCREMENT,
    electrode_material_id INTEGER,
    volume_l REAL,
    electrode_area_cm2 REAL,
    electrode_distance_cm REAL,
    external_resistance_ohm REAL,
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (electrode_material_id) REFERENCES electrode_material(electrode_material_id)
);

-- Scenario table (central table)
CREATE TABLE IF NOT EXISTS scenario (
    scenario_id INTEGER PRIMARY KEY AUTOINCREMENT,
    institution_id INTEGER,
    substrate_id INTEGER NOT NULL,
    mfc_configuration_id INTEGER,
    scenario_code TEXT NOT NULL UNIQUE,
    ph REAL,
    temperature_c REAL,
    retention_h REAL,
    feeding_frequency_h REAL,
    evidence_state TEXT NOT NULL DEFAULT 'SIMULADO' CHECK (evidence_state IN ('SIMULADO', 'MEDIDO', 'META_EXPLORATORIA')),
    source TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (institution_id) REFERENCES institution(institution_id),
    FOREIGN KEY (substrate_id) REFERENCES substrate(substrate_id),
    FOREIGN KEY (mfc_configuration_id) REFERENCES mfc_configuration(mfc_configuration_id)
);

-- Prediction table
CREATE TABLE IF NOT EXISTS prediction (
    prediction_id INTEGER PRIMARY KEY AUTOINCREMENT,
    scenario_id INTEGER NOT NULL,
    projected_voltage_v REAL,
    projected_current_ma REAL,
    projected_power_mw REAL,
    projected_power_density_mw_m2 REAL,
    projected_stability TEXT,
    confidence_level TEXT,
    assumptions TEXT,
    warnings TEXT,
    model_version TEXT,
    dataset_version TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (scenario_id) REFERENCES scenario(scenario_id)
);

-- Recommendation table
CREATE TABLE IF NOT EXISTS recommendation (
    recommendation_id INTEGER PRIMARY KEY AUTOINCREMENT,
    scenario_id INTEGER NOT NULL,
    prediction_id INTEGER,
    priority INTEGER NOT NULL,
    explanation TEXT,
    assumptions TEXT,
    warnings TEXT,
    method TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (scenario_id) REFERENCES scenario(scenario_id),
    FOREIGN KEY (prediction_id) REFERENCES prediction(prediction_id)
);

-- Sensor reading table (Phase 2)
CREATE TABLE IF NOT EXISTS sensor_reading (
    sensor_reading_id INTEGER PRIMARY KEY AUTOINCREMENT,
    scenario_id INTEGER NOT NULL,
    reading_datetime TIMESTAMP NOT NULL DEFAULT (datetime('now')),
    voltage_v REAL,
    current_ma REAL,
    ph REAL,
    temperature_c REAL,
    device_id TEXT,
    evidence_state TEXT NOT NULL DEFAULT 'MEDIDO' CHECK (evidence_state IN ('SIMULADO', 'MEDIDO', 'META_EXPLORATORIA')),
    FOREIGN KEY (scenario_id) REFERENCES scenario(scenario_id)
);

-- Report table
CREATE TABLE IF NOT EXISTS report (
    report_id INTEGER PRIMARY KEY AUTOINCREMENT,
    institution_id INTEGER,
    title TEXT NOT NULL,
    period_start DATE,
    period_end DATE,
    evidence_state TEXT NOT NULL DEFAULT 'SIMULADO' CHECK (evidence_state IN ('SIMULADO', 'MEDIDO', 'META_EXPLORATORIA')),
    content TEXT,
    generator_version TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (institution_id) REFERENCES institution(institution_id)
);

-- Report-Scenario junction table (many-to-many)
CREATE TABLE IF NOT EXISTS report_scenario (
    report_scenario_id INTEGER PRIMARY KEY AUTOINCREMENT,
    report_id INTEGER NOT NULL,
    scenario_id INTEGER NOT NULL,
    FOREIGN KEY (report_id) REFERENCES report(report_id),
    FOREIGN KEY (scenario_id) REFERENCES scenario(scenario_id),
    UNIQUE (report_id, scenario_id)
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_scenario_institution ON scenario(institution_id);
CREATE INDEX IF NOT EXISTS idx_scenario_substrate ON scenario(substrate_id);
CREATE INDEX IF NOT EXISTS idx_scenario_code ON scenario(scenario_code);
CREATE INDEX IF NOT EXISTS idx_prediction_scenario ON prediction(scenario_id);
CREATE INDEX IF NOT EXISTS idx_recommendation_scenario ON recommendation(scenario_id);
CREATE INDEX IF NOT EXISTS idx_sensor_reading_scenario ON sensor_reading(scenario_id);
CREATE INDEX IF NOT EXISTS idx_sensor_reading_datetime ON sensor_reading(reading_datetime);
CREATE INDEX IF NOT EXISTS idx_report_institution ON report(institution_id);
CREATE INDEX IF NOT EXISTS idx_report_scenario_report ON report_scenario(report_id);
CREATE INDEX IF NOT EXISTS idx_report_scenario_scenario ON report_scenario(scenario_id);
CREATE INDEX IF NOT EXISTS idx_substrate_type ON substrate(substrate_type_id);
CREATE INDEX IF NOT EXISTS idx_mfc_configuration_material ON mfc_configuration(electrode_material_id);
