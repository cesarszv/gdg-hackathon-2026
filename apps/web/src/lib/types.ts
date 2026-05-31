// TS types mirroring the FastAPI serializers (apps/api/serializers.py) and the
// baseline predictor / agent gateway outputs. Kept narrow on purpose: only the
// fields the frontend actually reads.

export type EvidenceState = "SIMULADO" | "MEDIDO" | "META_EXPLORATORIA";
export type Stability = "alta" | "media" | "baja";

export interface SubstrateType {
  substrate_type_id: number;
  name: string;
  description: string | null;
  typical_origin: string | null;
}

export interface Substrate {
  substrate_id: number;
  substrate_type_id: number;
  name: string;
  origin: string | null;
  humidity_pct: number | null;
  cod_estimated_mg_l: number | null;
  contamination_pct: number | null;
  evidence_state: EvidenceState;
  source: string | null;
  substrate_type?: SubstrateType;
}

export interface Institution {
  institution_id: number;
  name: string;
  type: string | null;
  zone: string | null;
}

export interface ElectrodeMaterial {
  electrode_material_id: number;
  name: string;
  description: string | null;
  cost_estimate_usd: number | null;
}

export interface MfcConfiguration {
  mfc_configuration_id: number;
  electrode_material_id: number;
  volume_l: number | null;
  electrode_area_cm2: number | null;
  electrode_distance_cm: number | null;
  external_resistance_ohm: number | null;
  description: string | null;
  electrode_material?: ElectrodeMaterial;
}

export interface Prediction {
  prediction_id?: number | null;
  projected_voltage_v: number;
  projected_current_ma: number;
  projected_power_mw: number;
  projected_power_density_mw_m2: number | null;
  projected_stability: Stability;
  confidence_level: string;
  assumptions: string;
  warnings: string;
  model_version: string;
  dataset_version: string;
}

export interface ScenarioSummary {
  scenario_id: number;
  scenario_code: string;
  substrate_id: number;
  institution_id: number | null;
  mfc_configuration_id: number | null;
  ph: number | null;
  temperature_c: number | null;
  retention_h: number | null;
  feeding_frequency_h: number | null;
  evidence_state: EvidenceState;
  source: string | null;
}

export interface Recommendation {
  recommendation_id: number;
  scenario_id: number;
  priority: string;
  explanation: string;
  method: string | null;
}

export interface ScenarioDetail extends ScenarioSummary {
  substrate: Substrate | null;
  institution: Institution | null;
  mfc_configuration: MfcConfiguration | null;
  latest_prediction: Prediction | null;
  recommendations: Recommendation[];
}

// Output of POST /predecir (predict_baseline + meta fields).
export interface PredictResult {
  projected_voltage_v: number;
  projected_current_ma: number;
  projected_power_mw: number;
  projected_power_density_mw_m2: number | null;
  projected_stability: Stability;
  confidence_level: string;
  assumptions: string;
  warnings: string[];
  missing_data: string[];
  model_version: string;
  dataset_version: string;
  evidence_state: EvidenceState;
  prediction_id: number | null;
  scenario_id: number | null;
  estado_resultado: string;
}

export interface PredictInputs {
  cod_estimated_mg_l?: number | null;
  humidity_pct?: number | null;
  contamination_pct?: number | null;
  ph?: number | null;
  temperature_c?: number | null;
  electrode_area_cm2?: number | null;
  external_resistance_ohm?: number | null;
  electrode_material?: string | null;
}

// Output of POST /agente (ai_gateway.explain).
export interface AgentResult {
  explanation: string;
  source: "llm" | "fallback";
  model: string | null;
  warnings: string[];
}
