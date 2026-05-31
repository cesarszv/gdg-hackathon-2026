import { useEffect, useMemo, useState } from "react";
import { api, ApiError } from "../../lib/api";
import { useAsync } from "../../lib/useAsync";
import type {
  MfcConfiguration,
  PredictInputs,
  PredictResult,
  Substrate,
} from "../../lib/types";
import { Badge, evidenceTone, stabilityTone } from "../components/Badge";
import { Field } from "../components/Field";
import { Metric } from "../components/Metric";
import { EmptyState, ErrorState, Skeleton } from "../components/States";

export function SimulatorPanel() {
  const substrates = useAsync<Substrate[]>(() => api.substrates(), true);
  const configs = useAsync<MfcConfiguration[]>(() => api.mfcConfigurations(), true);

  const [substrateId, setSubstrateId] = useState<number | "">("");
  const [configId, setConfigId] = useState<number | "">("");
  const [ph, setPh] = useState("7.0");
  const [temperature, setTemperature] = useState("30");

  const [result, setResult] = useState<PredictResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Default the selects to the first option once catalogs load.
  useEffect(() => {
    if (substrateId === "" && substrates.data?.length) setSubstrateId(substrates.data[0].substrate_id);
  }, [substrates.data, substrateId]);
  useEffect(() => {
    if (configId === "" && configs.data?.length) setConfigId(configs.data[0].mfc_configuration_id);
  }, [configs.data, configId]);

  const substrate = useMemo(
    () => substrates.data?.find((s) => s.substrate_id === substrateId) ?? null,
    [substrates.data, substrateId],
  );
  const config = useMemo(
    () => configs.data?.find((c) => c.mfc_configuration_id === configId) ?? null,
    [configs.data, configId],
  );

  const catalogsLoading = substrates.loading || configs.loading;
  const catalogsError = substrates.error || configs.error;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!substrate) return;
    setSubmitting(true);
    setError(null);
    setResult(null);

    // Build the baseline inputs: substrate carries COD/humidity/contamination,
    // the MFC config carries electrode geometry/material, the form adds pH/temp.
    const inputs: PredictInputs = {
      cod_estimated_mg_l: substrate.cod_estimated_mg_l,
      humidity_pct: substrate.humidity_pct,
      contamination_pct: substrate.contamination_pct,
      ph: parseFloat(ph),
      temperature_c: parseFloat(temperature),
      electrode_area_cm2: config?.electrode_area_cm2 ?? null,
      external_resistance_ohm: config?.external_resistance_ohm ?? null,
      electrode_material: config?.electrode_material?.name ?? null,
    };

    try {
      setResult(await api.predict(inputs));
    } catch (err) {
      if (err instanceof ApiError && Array.isArray(err.detail)) {
        setError(err.detail.map((d: { msg?: string }) => d?.msg ?? String(d)).join(" · "));
      } else {
        setError(err instanceof Error ? err.message : "Error al simular.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="panel">
      <div className="panel__head">
        <h2>Simulador de prediccion</h2>
        <p>
          Estima el rendimiento electrico de un escenario MFC con el baseline determinista. Los
          resultados son SIMULADOS (basados en literatura), no mediciones.
        </p>
      </div>

      {catalogsLoading ? (
        <Skeleton rows={4} />
      ) : catalogsError ? (
        <ErrorState message={catalogsError} onRetry={() => { void substrates.run(); void configs.run(); }} />
      ) : (
        <div className="sim-layout">
          <form className="card" onSubmit={onSubmit} autoComplete="off">
            <Field label="Sustrato" htmlFor="substrate">
              <select
                id="substrate"
                className="select"
                value={substrateId}
                onChange={(e) => setSubstrateId(Number(e.target.value))}
              >
                {substrates.data?.map((s) => (
                  <option key={s.substrate_id} value={s.substrate_id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              label="Configuracion MFC"
              htmlFor="config"
              hint={
                config
                  ? `Electrodo: ${config.electrode_material?.name ?? "—"} · area ${config.electrode_area_cm2 ?? "—"} cm² · R ${config.external_resistance_ohm ?? "—"} Ω`
                  : undefined
              }
            >
              <select
                id="config"
                className="select"
                value={configId}
                onChange={(e) => setConfigId(Number(e.target.value))}
              >
                {configs.data?.map((c) => (
                  <option key={c.mfc_configuration_id} value={c.mfc_configuration_id}>
                    {c.description ?? `Config #${c.mfc_configuration_id}`}
                  </option>
                ))}
              </select>
            </Field>

            <div className="field-row">
              <Field label="pH" htmlFor="ph" hint="optimo ~7">
                <input
                  id="ph"
                  className="input"
                type="number"
                  name="ph"
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder="Ej. 7.0…"
                  step="0.1"
                  min="0"
                  max="14"
                  value={ph}
                  onChange={(e) => setPh(e.target.value)}
                />
              </Field>
              <Field label="Temperatura (°C)" htmlFor="temp" hint="optimo ~32">
                <input
                  id="temp"
                  className="input"
                  type="number"
                  name="temperature"
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder="Ej. 32…"
                  step="1"
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                />
              </Field>
            </div>

            {substrate ? (
              <p className="field__hint">
                Sustrato aporta: COD {substrate.cod_estimated_mg_l ?? "—"} mg/L · humedad{" "}
                {substrate.humidity_pct ?? "—"}% · contaminacion {substrate.contamination_pct ?? "—"}%
              </p>
            ) : null}

            <button className="btn btn-primary sim-submit" type="submit" disabled={submitting}>
              {submitting ? "Simulando…" : "Correr simulacion"}
            </button>
            {error ? <p className="field__error sim-error" role="alert">{error}</p> : null}
          </form>

          <div className="card" aria-live="polite" aria-atomic="true">
            {result ? (
              <ResultView result={result} />
            ) : (
              <EmptyState
                title="Sin resultados aun"
                message="Configura el escenario y corre la simulacion para ver la prediccion."
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ResultView({ result }: { result: PredictResult }) {
  return (
    <div>
      <div className="sim-banner">
        {result.estado_resultado} · modelo {result.model_version} · dataset {result.dataset_version}
      </div>

      <div className="metrics">
        <Metric label="Voltaje" value={result.projected_voltage_v} unit="V" />
        <Metric label="Corriente" value={result.projected_current_ma} unit="mA" />
        <Metric label="Potencia" value={result.projected_power_mw} unit="mW" />
        <Metric label="Densidad" value={result.projected_power_density_mw_m2} unit="mW/m²" />
      </div>

      <div className="tag-row">
        <Badge tone={stabilityTone(result.projected_stability)}>
          estabilidad: {result.projected_stability}
        </Badge>
        <Badge tone="neutral">confianza: {result.confidence_level}</Badge>
        <Badge tone={evidenceTone(result.evidence_state)}>{result.evidence_state}</Badge>
      </div>

      <p className="assumptions">{result.assumptions}</p>

      {result.warnings.length > 0 ? (
        <ul className="warnings">
          {result.warnings.map((w, i) => (
            <li key={i}>{w}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
