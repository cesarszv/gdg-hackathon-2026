import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { useAsync } from "../../lib/useAsync";
import type { ScenarioDetail, ScenarioSummary } from "../../lib/types";
import { Badge, evidenceTone, stabilityTone } from "../components/Badge";
import { Metric } from "../components/Metric";
import { EmptyState, ErrorState, Skeleton } from "../components/States";

export function ScenariosPanel() {
  const list = useAsync<ScenarioSummary[]>(() => api.scenarios(), true);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const detail = useAsync<ScenarioDetail>(() => api.scenario(selectedId as number));

  // Auto-select the first scenario once the list loads.
  useEffect(() => {
    if (selectedId === null && list.data && list.data.length > 0) {
      setSelectedId(list.data[0].scenario_id);
    }
  }, [list.data, selectedId]);

  useEffect(() => {
    if (selectedId !== null) void detail.run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);

  return (
    <div className="panel">
      <div className="panel__head">
        <h2>Escenarios MFC</h2>
        <p>
          Escenarios de investigacion registrados para Santa Cruz de la Sierra. Datos en vivo desde
          la API. Selecciona uno para ver su detalle y su ultima prediccion.
        </p>
      </div>

      {list.loading ? (
        <Skeleton rows={5} />
      ) : list.error ? (
        <ErrorState message={list.error} onRetry={() => void list.run()} />
      ) : !list.data || list.data.length === 0 ? (
        <EmptyState title="Sin escenarios" message="La base de datos no tiene escenarios cargados." />
      ) : (
        <div className="scenarios">
          <div className="scenario-list">
            {list.data.map((s) => (
              <button
                key={s.scenario_id}
                className={`scenario-item ${s.scenario_id === selectedId ? "scenario-item--active" : ""}`}
                type="button"
                aria-pressed={s.scenario_id === selectedId}
                onClick={() => setSelectedId(s.scenario_id)}
              >
                <div className="scenario-item__code">{s.scenario_code}</div>
                <div className="scenario-item__meta">
                  pH {s.ph ?? "—"} &middot; {s.temperature_c ?? "—"} &deg;C
                </div>
                <div className="scenario-item__badge">
                  <Badge tone={evidenceTone(s.evidence_state)}>{s.evidence_state}</Badge>
                </div>
              </button>
            ))}
          </div>

          <div className="card" aria-live="polite" aria-busy={detail.loading}>
            {detail.loading ? (
              <Skeleton rows={4} />
            ) : detail.error ? (
              <ErrorState message={detail.error} onRetry={() => void detail.run()} />
            ) : detail.data ? (
              <ScenarioDetailView detail={detail.data} />
            ) : (
              <EmptyState title="Elige un escenario" message="Selecciona una tarjeta de la izquierda." />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ScenarioDetailView({ detail }: { detail: ScenarioDetail }) {
  const p = detail.latest_prediction;
  return (
    <div>
      <div className="scenario-detail__head">
        <h3 className="mono scenario-detail__title">{detail.scenario_code}</h3>
        <Badge tone={evidenceTone(detail.evidence_state)}>{detail.evidence_state}</Badge>
      </div>

      <dl className="scenario-detail__grid">
        <div className="detail-row">
          <dt>Institucion</dt>
          <dd>{detail.institution?.name ?? "—"}</dd>
        </div>
        <div className="detail-row">
          <dt>Sustrato</dt>
          <dd>{detail.substrate?.name ?? "—"}</dd>
        </div>
        <div className="detail-row">
          <dt>Configuracion MFC</dt>
          <dd>{detail.mfc_configuration?.description ?? "—"}</dd>
        </div>
        <div className="detail-row">
          <dt>Material de electrodo</dt>
          <dd>{detail.mfc_configuration?.electrode_material?.name ?? "—"}</dd>
        </div>
        <div className="detail-row">
          <dt>pH / Temperatura</dt>
          <dd>{detail.ph ?? "—"} / {detail.temperature_c ?? "—"} &deg;C</dd>
        </div>
        <div className="detail-row">
          <dt>Retencion / Alimentacion</dt>
          <dd>{detail.retention_h ?? "—"} h / {detail.feeding_frequency_h ?? "—"} h</dd>
        </div>
      </dl>

      <h4 className="scenario-detail__subtitle">Ultima prediccion</h4>
      {p ? (
        <>
          <div className="metrics">
            <Metric label="Voltaje" value={p.projected_voltage_v} unit="V" />
            <Metric label="Corriente" value={p.projected_current_ma} unit="mA" />
            <Metric label="Potencia" value={p.projected_power_mw} unit="mW" />
            <Metric label="Densidad" value={p.projected_power_density_mw_m2} unit="mW/m²" />
          </div>
          <div className="tag-row">
            <Badge tone={stabilityTone(p.projected_stability)}>
              estabilidad: {p.projected_stability}
            </Badge>
            <Badge tone="neutral">confianza: {p.confidence_level}</Badge>
            <Badge tone="neutral">{p.model_version}</Badge>
          </div>
        </>
      ) : (
        <p className="scenario-detail__empty">
          Sin prediccion almacenada. Usa el Simulador para generar una.
        </p>
      )}
    </div>
  );
}
