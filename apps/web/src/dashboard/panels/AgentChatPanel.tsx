import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { useAsync } from "../../lib/useAsync";
import type { AgentResult, ScenarioSummary } from "../../lib/types";
import { Badge } from "../components/Badge";
import { Field } from "../components/Field";
import { ErrorState, Skeleton } from "../components/States";

interface Turn {
  role: "user" | "agent";
  text: string;
  source?: "llm" | "fallback";
  model?: string | null;
}

export function AgentChatPanel() {
  const scenarios = useAsync<ScenarioSummary[]>(() => api.scenarios(), true);
  const [scenarioId, setScenarioId] = useState<number | "">("");
  const [turns, setTurns] = useState<Turn[]>([]);
  const [thinking, setThinking] = useState(false);

  useEffect(() => {
    if (scenarioId === "" && scenarios.data?.length) setScenarioId(scenarios.data[0].scenario_id);
  }, [scenarios.data, scenarioId]);

  async function ask() {
    if (scenarioId === "") return;
    const code =
      scenarios.data?.find((s) => s.scenario_id === scenarioId)?.scenario_code ?? `#${scenarioId}`;
    setTurns((t) => [...t, { role: "user", text: `Explicame el escenario ${code}.` }]);
    setThinking(true);
    try {
      const res: AgentResult = await api.explainScenario(scenarioId as number);
      setTurns((t) => [
        ...t,
        { role: "agent", text: res.explanation, source: res.source, model: res.model },
      ]);
    } catch (err) {
      setTurns((t) => [
        ...t,
        {
          role: "agent",
          text: err instanceof Error ? err.message : "No se pudo obtener la explicacion.",
          source: "fallback",
        },
      ]);
    } finally {
      setThinking(false);
    }
  }

  return (
    <div className="panel">
      <div className="panel__head">
        <h2>Asesor de sostenibilidad (IA)</h2>
        <p>
          El agente explica un escenario en lenguaje claro. Usa el LLM si hay API key configurada; si
          no, una explicacion determinista. El origen (llm / fallback) se muestra siempre — nunca se
          finge la IA.
        </p>
      </div>

      {scenarios.loading ? (
        <Skeleton rows={3} />
      ) : scenarios.error ? (
        <ErrorState message={scenarios.error} onRetry={() => void scenarios.run()} />
      ) : (
        <div className="card">
          <div className="chat-controls">
            <div className="chat-controls__field">
              <Field label="Escenario a explicar" htmlFor="agent-scenario">
                <select
                  id="agent-scenario"
                  className="select"
                  value={scenarioId}
                  onChange={(e) => setScenarioId(Number(e.target.value))}
                >
                  {scenarios.data?.map((s) => (
                    <option key={s.scenario_id} value={s.scenario_id}>
                      {s.scenario_code} ({s.evidence_state})
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <button className="btn btn-primary chat-controls__submit" type="button" onClick={ask} disabled={thinking}>
              {thinking ? "Pensando…" : "Preguntar al agente"}
            </button>
          </div>

          <div className="chat">
            <div className="chat__thread" aria-live="polite" aria-busy={thinking}>
              {turns.length === 0 && !thinking ? (
                <div className="bubble bubble--agent">
                  Hola, soy el asesor de GreenSpark. Elige un escenario y te explico su prediccion
                  sin inventar cifras.
                </div>
              ) : null}
              {turns.map((t, i) => (
                <div key={i} className={`bubble bubble--${t.role}`}>
                  {t.text}
                  {t.role === "agent" && t.source ? (
                    <span className="bubble__source">
                      origen: {t.source}
                      {t.model ? ` · ${t.model}` : ""}
                    </span>
                  ) : null}
                </div>
              ))}
              {thinking ? (
                <div className="bubble bubble--agent bubble--typing">
                  <div className="typing" role="status" aria-label="El agente esta pensando">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              ) : null}
            </div>
            {turns.some((t) => t.source) ? (
              <div className="tag-row">
                <Badge tone="neutral">Resultados SIMULADOS — no interpretar como medicion</Badge>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
