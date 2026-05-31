-- GreenSpark Seed Data
-- Sample data for Santa Cruz de la Sierra, Bolivia

-- Substrate types
INSERT INTO substrate_type (name, description, typical_origin) VALUES
    ('residuo_alimentario', 'Residuos organicos de consumo humano', 'hogares, restaurantes, mercados'),
    ('residuo_agroindustrial', 'Residuos de procesamiento agroindustrial', 'ingenios, benefiticios, plantas'),
    ('residuo_agricola', 'Residuos de cosecha y campo', 'zonas agricolas periurbanas'),
    ('residuo_pecuario', 'Estiercol y residuos animales', 'granjas, hatos ganaderos'),
    ('lodo_organico', 'Lodos con carga organica', 'plantas de tratamiento');

-- Electrode materials
INSERT INTO electrode_material (name, description, cost_estimate_usd) VALUES
    ('carbon', 'Electrodo de carbon vegetal o activado, bajo costo y disponible localmente', 15.00),
    ('grafito', 'Electrodo de grafito, buena conductividad', 45.00),
    ('acero_inoxidable', 'Malla de acero inoxidable 316, resistente a corrosion', 30.00),
    ('carbon_cloth', 'Tela de carbon, alta area superficial', 80.00);

-- Institutions (universities in Santa Cruz)
INSERT INTO institution (name, type, zone, contact_name, contact_email, contact_phone, is_active, created_at) VALUES
    ('Universidad Privada de Santa Cruz de la Sierra (UPSA)', 'universidad', 'zona norte', 'Dr. Investigador Principal', 'investigacion@upsa.edu.bo', '+591 3 3456789', 1, datetime('now')),
    ('Universidad Autonoma Gabriel Rene Moreno (UAGRM)', 'universidad', 'zona central', 'Facultad de Ciencias', 'fcia@uagrm.edu.bo', '+591 3 3456790', 1, datetime('now')),
    ('Universidad Catolica Boliviana (UCB)', 'universidad', 'zona sur', 'Centro de Investigacion Ambiental', 'ambiental@ucb.edu.bo', '+591 3 3456791', 1, datetime('now')),
    ('Colegio San Calixto', 'colegio', 'zona central', 'Direccion Academica', 'direccion@sancalixto.edu.bo', '+591 3 3456792', 1, datetime('now')),
    ('Restaurante El Arazal', 'restaurante', 'zona norte', 'Gerencia', 'gerencia@elarazal.com', '+591 3 3456793', 1, datetime('now'));

-- Substrates (concrete samples from Santa Cruz)
INSERT INTO substrate (substrate_type_id, name, origin, humidity_pct, cod_estimated_mg_l, contamination_pct, evidence_state, source, created_at) VALUES
    (1, 'residuo_mercado_abasto', 'Mercado Nuevo Abasto, Santa Cruz', 72.0, 45000.0, 8.0, 'SIMULADO', 'PMGIRS 2023 / Swisscontact', datetime('now')),
    (1, 'residuo_restaurante_norte', 'Restaurantes zona norte, Santa Cruz', 68.0, 38000.0, 5.0, 'SIMULADO', 'estimacion basada en literatura', datetime('now')),
    (2, 'cachaza_ingenio', 'Ingenio azucarero, Santa Cruz', 85.0, 60000.0, 3.0, 'SIMULADO', 'literatura MFC 2025', datetime('now')),
    (2, 'residuo_procesamiento_soya', 'Planta de soya, zona industrial', 60.0, 35000.0, 10.0, 'SIMULADO', 'estimacion basada en literatura', datetime('now')),
    (3, 'rastrojo_maiz', 'Zona agricola Warnes, Santa Cruz', 15.0, 20000.0, 12.0, 'SIMULADO', 'literatura MFC 2025', datetime('now')),
    (4, 'estiercol_vacuno', 'Hato ganadero, zona norte integrada', 78.0, 50000.0, 15.0, 'SIMULADO', 'literatura MFC 2025', datetime('now'));

-- MFC configurations
INSERT INTO mfc_configuration (electrode_material_id, volume_l, electrode_area_cm2, electrode_distance_cm, external_resistance_ohm, description, created_at) VALUES
    (1, 1.0, 50.0, 3.0, 1000.0, 'Configuracion de laboratorio, escala pequena, electrodo de carbon', datetime('now')),
    (1, 10.0, 120.0, 4.0, 1000.0, 'Configuracion intermedia para investigacion universitaria', datetime('now')),
    (2, 5.0, 80.0, 2.5, 500.0, 'Configuracion con grafito, area media, distancia reducida', datetime('now')),
    (3, 10.0, 100.0, 5.0, 1000.0, 'Configuracion con acero inoxidable, mayor durabilidad', datetime('now')),
    (4, 2.0, 200.0, 2.0, 100.0, 'Configuracion con carbon cloth, alta area superficial para experimentos', datetime('now'));

-- Scenarios
INSERT INTO scenario (institution_id, substrate_id, mfc_configuration_id, scenario_code, ph, temperature_c, retention_h, feeding_frequency_h, evidence_state, source, created_at) VALUES
    (1, 1, 2, 'MFC-SCZ-001', 7.0, 28.0, 48.0, 24.0, 'SIMULADO', 'investigacion UPSA - residuo mercado', datetime('now')),
    (1, 2, 1, 'MFC-SCZ-002', 6.8, 30.0, 72.0, 24.0, 'SIMULADO', 'investigacion UPSA - residuo restaurante', datetime('now')),
    (2, 3, 3, 'MFC-SCZ-003', 7.2, 32.0, 96.0, 48.0, 'SIMULADO', 'investigacion UAGRM - cachaza', datetime('now')),
    (2, 5, 2, 'MFC-SCZ-004', 6.5, 28.0, 48.0, 24.0, 'SIMULADO', 'investigacion UAGRM - rastrojo', datetime('now')),
    (3, 4, 4, 'MFC-SCZ-005', 7.0, 29.0, 72.0, 24.0, 'SIMULADO', 'investigacion UCB - residuo soya', datetime('now')),
    (3, 6, 5, 'MFC-SCZ-006', 7.5, 30.0, 120.0, 48.0, 'SIMULADO', 'investigacion UCB - estiercol vacuno', datetime('now')),
    (4, 1, 1, 'MFC-SCZ-007', 7.0, 28.0, 48.0, 24.0, 'META_EXPLORATORIA', 'piloto futuro colegio - residuo comedor', datetime('now')),
    (5, 2, 1, 'MFC-SCZ-008', 6.8, 30.0, 48.0, 24.0, 'META_EXPLORATORIA', 'piloto futuro restaurante', datetime('now'));

-- Predictions (simulated results based on literature ranges)
INSERT INTO prediction (scenario_id, projected_voltage_v, projected_current_ma, projected_power_mw, projected_power_density_mw_m2, projected_stability, confidence_level, assumptions, warnings, model_version, dataset_version, created_at) VALUES
    (1, 0.45, 2.1, 0.945, 189.0, 'media', 'baja', 'Sustrato con humedad 72%, COD estimado 45000 mg/L. Baseline basado en literatura MFC 2025.', 'Valores simulados, no medidos. Rendimiento real puede variar significativamente.', 'baseline-v0.1', 'literature-2025-v1', datetime('now')),
    (2, 0.38, 1.8, 0.684, 136.8, 'media', 'baja', 'Residuo de restaurante con menor contaminacion. Baseline basado en literatura MFC 2025.', 'Valores simulados. La variabilidad del sustrato afecta la estabilidad.', 'baseline-v0.1', 'literature-2025-v1', datetime('now')),
    (3, 0.52, 2.8, 1.456, 182.0, 'alta', 'baja', 'Cachaza con alto COD (60000 mg/L) favorece produccion. Baseline basado en literatura.', 'Valores simulados. La cachaza puede requerir pretratamiento.', 'baseline-v0.1', 'literature-2025-v1', datetime('now')),
    (4, 0.30, 1.2, 0.360, 72.0, 'baja', 'baja', 'Rastrojo con baja humedad (15%) requiere acondicionamiento. Baseline basado en literatura.', 'Valores simulados. Baja humedad reduce disponibilidad de sustrato.', 'baseline-v0.1', 'literature-2025-v1', datetime('now')),
    (5, 0.40, 1.9, 0.760, 76.0, 'media', 'baja', 'Residuo de soya con contaminacion del 10%. Baseline basado en literatura.', 'Valores simulados. Contaminacion puede inhibir actividad microbiana.', 'baseline-v0.1', 'literature-2025-v1', datetime('now')),
    (6, 0.55, 3.0, 1.650, 825.0, 'alta', 'baja', 'Estiercol vacuno con alto COD y pH favorable. Baseline basado en literatura.', 'Valores simulados. Estiercol requiere manejo sanitario adecuado.', 'baseline-v0.1', 'literature-2025-v1', datetime('now')),
    (7, 0.42, 2.0, 0.840, 168.0, 'media', 'muy_baja', 'Meta exploratoria para piloto escolar. Baseline basado en literatura.', 'META_EXPLORATORIA: No hay medicion. Objetivo sujeto a validacion.', 'baseline-v0.1', 'literature-2025-v1', datetime('now')),
    (8, 0.36, 1.7, 0.612, 122.4, 'media', 'muy_baja', 'Meta exploratoria para piloto restaurante. Baseline basado en literatura.', 'META_EXPLORATORIA: No hay medicion. Objetivo sujeto a validacion.', 'baseline-v0.1', 'literature-2025-v1', datetime('now'));

-- Simulated telemetry (24 hourly readings per scenario).
-- These rows prepare the read-only advisor flow for future physical sensors.
-- They are deliberately labeled SIMULADO and must never be shown as measurements.
WITH RECURSIVE hour_offsets(hour_offset) AS (
    SELECT 0
    UNION ALL
    SELECT hour_offset + 1 FROM hour_offsets WHERE hour_offset < 23
)
INSERT INTO sensor_reading (scenario_id, reading_datetime, voltage_v, current_ma, ph, temperature_c, device_id, evidence_state)
SELECT
    s.scenario_id,
    datetime('2026-05-31 00:00:00', printf('+%d hours', h.hour_offset)),
    round(p.projected_voltage_v * (0.96 + ((h.hour_offset % 5) * 0.02)), 3),
    round(p.projected_current_ma * (0.95 + ((h.hour_offset % 6) * 0.02)), 3),
    round(s.ph + (((h.hour_offset % 5) - 2) * 0.03), 2),
    round(s.temperature_c + (((h.hour_offset % 7) - 3) * 0.12), 2),
    printf('simulator-mfc-scz-%03d', s.scenario_id),
    'SIMULADO'
FROM scenario s
JOIN prediction p ON p.scenario_id = s.scenario_id
CROSS JOIN hour_offsets h;

-- Recommendations
INSERT INTO recommendation (scenario_id, prediction_id, priority, explanation, assumptions, warnings, method, created_at) VALUES
    (3, 3, 1, 'La cachaza de ingenio presenta el mayor rendimiento proyectado (1.456 mW) con estabilidad alta. Es el primer experimento recomendado para validar con medicion local.', 'COD alto favorece produccion. Temperatura de 32C es adecuada para actividad microbiana mesofilica.', 'Requiere acceso a ingenio azucarero. Pretratamiento puede ser necesario. Valores simulados, no garantizados.', 'baseline_comparison', datetime('now')),
    (6, 6, 2, 'El estiercol vacuno proyecta 1.650 mW con estabilidad alta. Segundo experimento recomendado para diversificar sustratos evaluados.', 'pH de 7.5 es favorable. Alto COD (50000 mg/L) sustenta actividad microbiana.', 'Manejo sanitario requerido. Disponibilidad de sustrato debe confirmarse. Valores simulados.', 'baseline_comparison', datetime('now')),
    (1, 1, 3, 'El residuo del Mercado Abasto es relevante para Santa Cruz (20 t/dia reportados). Tercer experimento para validar impacto local.', 'Humedad del 72% es adecuada. COD de 45000 mg/L es consistente con residuo alimentario.', 'Contaminacion del 8% puede afectar rendimiento. Segregacion en fuente es clave. Valores simulados.', 'baseline_comparison', datetime('now')),
    (2, 2, 4, 'Residuo de restaurante con buena proyeccion. Cuarto experimento para comparar con residuo de mercado.', 'Menor contaminacion (5%) favorece estabilidad. Temperatura de 30C es adecuada.', 'Variabilidad diaria del sustrato. Recoleccion constante requerida. Valores simulados.', 'baseline_comparison', datetime('now')),
    (5, 5, 5, 'Residuo de soya con rendimiento medio. Quinto experimento para evaluar sustrato agroindustrial alternativo.', 'Contaminacion del 10% requiere atencion. pH neutro es favorable.', 'Disponibilidad estacional. Pretratamiento puede mejorar rendimiento. Valores simulados.', 'baseline_comparison', datetime('now')),
    (4, 4, 6, 'Rastrojo de maiz con menor rendimiento proyectado por baja humedad. Ultimo en prioridad pero importante para evaluar residuos agricolas.', 'Humedad del 15% es limitante. Acondicionamiento con agua es necesario.', 'Rendimiento bajo esperado. Logistica de recoleccion en zona agricola. Valores simulados.', 'baseline_comparison', datetime('now'));

-- Reports
INSERT INTO report (institution_id, title, period_start, period_end, evidence_state, content, generator_version, created_at) VALUES
    (1, 'Reporte de Investigacion MFC - UPSA Q1 2026', '2026-01-01', '2026-03-31', 'SIMULADO', 'Resumen de escenarios simulados para residuos organicos de Santa Cruz de la Sierra. Se evaluaron 2 configuraciones con sustratos de mercado y restaurante. Resultados proyectados basados en literatura MFC 2025. Todos los valores son SIMULADOS y requieren validacion experimental.', 'report-gen-v0.1', datetime('now')),
    (2, 'Reporte de Investigacion MFC - UAGRM Q1 2026', '2026-01-01', '2026-03-31', 'SIMULADO', 'Resumen de escenarios simulados para cachaza de ingenio y rastrojo de maiz. La cachaza mostro el mayor rendimiento proyectado. Resultados basados en baseline v0.1 con datos de literatura. Valores SIMULADOS.', 'report-gen-v0.1', datetime('now')),
    (3, 'Reporte de Investigacion MFC - UCB Q1 2026', '2026-01-01', '2026-03-31', 'SIMULADO', 'Resumen de escenarios simulados para residuo de soya y estiercol vacuno. El estiercol vacuno mostro alta estabilidad proyectada. Todos los valores son SIMULADOS y requieren validacion con piloto fisico.', 'report-gen-v0.1', datetime('now'));

-- Report-Scenario associations
INSERT INTO report_scenario (report_id, scenario_id) VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (2, 4),
    (3, 5),
    (3, 6);
