// Single typed fetch client for the GreenSpark FastAPI backend.
// In dev, requests go to /api/* and Vite proxies them to http://localhost:8000.
// Override with VITE_API_BASE for other environments.

import type {
  AgentResult,
  Institution,
  MfcConfiguration,
  PredictInputs,
  PredictResult,
  ScenarioDetail,
  ScenarioSummary,
  Substrate,
} from "./types";

const BASE = (import.meta.env.VITE_API_BASE as string | undefined) ?? "/api";

/** Error carrying the HTTP status and parsed body so callers can show field-level
 *  validation (422 from the deterministic physical checks) or a generic message. */
export class ApiError extends Error {
  status: number;
  detail: unknown;
  constructor(status: number, detail: unknown, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.detail = detail;
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${BASE}${path}`, {
      headers: { "Content-Type": "application/json" },
      ...init,
    });
  } catch (cause) {
    throw new ApiError(
      0,
      cause,
      "No se pudo conectar con la API. Verifica que el backend este corriendo en :8000.",
    );
  }

  const text = await res.text();
  const body = text ? safeJson(text) : null;

  if (!res.ok) {
    const message =
      (body && typeof body === "object" && "detail" in body && typeof body.detail === "string"
        ? (body.detail as string)
        : null) ?? `Error ${res.status} en ${path}`;
    throw new ApiError(res.status, (body as { detail?: unknown })?.detail ?? body, message);
  }
  return body as T;
}

function safeJson(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export const api = {
  scenarios: () => request<ScenarioSummary[]>("/escenarios"),
  scenario: (id: number) => request<ScenarioDetail>(`/escenarios/${id}`),
  substrates: () => request<Substrate[]>("/catalogo/sustratos"),
  institutions: () => request<Institution[]>("/catalogo/instituciones"),
  mfcConfigurations: () => request<MfcConfiguration[]>("/catalogo/configuraciones-mfc"),
  predict: (inputs: PredictInputs) =>
    request<PredictResult>("/predecir", {
      method: "POST",
      body: JSON.stringify({ inputs, persist: false }),
    }),
  askAgent: (question: string, scenarioId?: number) =>
    request<AgentResult>("/agente", {
      method: "POST",
      body: JSON.stringify({ question, scenario_id: scenarioId }),
    }),
};
