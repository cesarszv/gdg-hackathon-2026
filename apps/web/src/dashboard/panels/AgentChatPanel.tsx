import { useState, type FormEvent, type KeyboardEvent } from "react";
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

const SUGGESTED_QUESTIONS = [
  "¿Que escenario conviene validar primero y por que?",
  "Resume la telemetria simulada del escenario seleccionado.",
  "¿Que datos faltan antes de construir un piloto fisico?",
  "Compara estabilidad y potencia proyectada.",
];

const INITIAL_QUESTION = SUGGESTED_QUESTIONS[0];

export function AgentChatPanel() {
  const scenarios = useAsync<ScenarioSummary[]>(() => api.scenarios(), true);
  const [scenarioId, setScenarioId] = useState<number | "">("");
  const [question, setQuestion] = useState(INITIAL_QUESTION);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [thinking, setThinking] = useState(false);

  async function ask(prompt = question) {
    const trimmed = prompt.trim();
    if (!trimmed || thinking) return;

    setTurns((current) => [...current, { role: "user", text: trimmed }]);
    setQuestion("");
    setThinking(true);
    try {
      const selectedScenarioId = scenarioId === "" ? undefined : scenarioId;
      const res: AgentResult = await api.askAgent(trimmed, selectedScenarioId);
      setTurns((current) => [
        ...current,
        { role: "agent", text: res.explanation, source: res.source, model: res.model },
      ]);
    } catch (err) {
      setTurns((current) => [
        ...current,
        {
          role: "agent",
          text: err instanceof Error ? err.message : "No se pudo obtener el analisis.",
          source: "fallback",
        },
      ]);
    } finally {
      setThinking(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void ask();
  }

  function handleComposerKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      void ask();
    }
  }

  return (
    <div className="panel agent-panel">
      <div className="panel__head">
        <div className="agent-panel__eyebrow">SQLite research copilot</div>
        <h2>Asesor de sostenibilidad (IA)</h2>
        <p>
          Consulta los datos ficticios del prototipo en modo de solo lectura. El backend analiza
          escenarios, predicciones, recomendaciones, reportes y telemetria simulada antes de pedir
          una explicacion a OpenAI.
        </p>
      </div>

      <div className="agent-ledger" aria-label="Alcance del asesor">
        <span>solo lectura</span>
        <span>escenarios + ranking</span>
        <span>telemetria simulada</span>
        <span>fallback activo</span>
      </div>

      {scenarios.loading ? (
        <Skeleton rows={3} />
      ) : scenarios.error ? (
        <ErrorState message={scenarios.error} onRetry={() => void scenarios.run()} />
      ) : (
        <div className="card agent-workbench">
          <div className="agent-suggestions" aria-label="Preguntas sugeridas">
            <span className="agent-suggestions__label">Prueba una consulta</span>
            <div className="agent-suggestions__list">
              {SUGGESTED_QUESTIONS.map((suggestion) => (
                <button
                  className="agent-suggestion"
                  key={suggestion}
                  type="button"
                  onClick={() => {
                    setQuestion(suggestion);
                    void ask(suggestion);
                  }}
                  disabled={thinking}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <div className="chat">
            <div className="chat__thread" aria-live="polite" aria-busy={thinking}>
              {turns.length === 0 && !thinking ? (
                <div className="bubble bubble--agent">
                  Hola. Puedo revisar la base SQLite del prototipo y ayudarte a comparar escenarios,
                  interpretar telemetria simulada o identificar que falta antes del piloto fisico.
                </div>
              ) : null}
              {turns.map((turn, index) => (
                <div key={`${turn.role}-${index}`} className={`bubble bubble--${turn.role}`}>
                  {turn.text}
                  {turn.role === "agent" && turn.source ? (
                    <span className="bubble__source">
                      origen: {turn.source}
                      {turn.model ? ` · ${turn.model}` : " · resumen SQLite"}
                    </span>
                  ) : null}
                </div>
              ))}
              {thinking ? (
                <div className="bubble bubble--agent bubble--typing">
                  <div className="typing" role="status" aria-label="El agente esta analizando SQLite">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              ) : null}
            </div>

            <form className="agent-composer" onSubmit={submit}>
              <div className="agent-composer__context">
                <Field
                  label="Enfoque de la consulta"
                  htmlFor="agent-scenario"
                  hint="Elige un escenario o consulta el conjunto completo."
                >
                  <select
                    id="agent-scenario"
                    className="select"
                    value={scenarioId}
                    onChange={(event) => {
                      const value = event.target.value;
                      setScenarioId(value === "" ? "" : Number(value));
                    }}
                  >
                    <option value="">Analisis general de SQLite</option>
                    {scenarios.data?.map((scenario) => (
                      <option key={scenario.scenario_id} value={scenario.scenario_id}>
                        {scenario.scenario_code} ({scenario.evidence_state})
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="agent-composer__question">
                <Field
                  label="Pregunta para el asesor"
                  htmlFor="agent-question"
                  hint="Ctrl + Enter para enviar. El agente no modifica registros."
                >
                  <textarea
                    id="agent-question"
                    className="input agent-composer__textarea"
                    rows={3}
                    value={question}
                    onChange={(event) => setQuestion(event.target.value)}
                    onKeyDown={handleComposerKeyDown}
                    placeholder="Ej.: compara escenarios y explica cual conviene validar primero."
                  />
                </Field>
              </div>

              <button
                className="btn btn-primary agent-composer__submit"
                type="submit"
                disabled={thinking || !question.trim()}
              >
                {thinking ? "Analizando SQLite..." : "Consultar datos"}
              </button>
            </form>

            <div className="agent-simulation-note">
              <strong>Datos de laboratorio virtual.</strong> La telemetria actual es ficticia y esta
              etiquetada como SIMULADO. Todavia no proviene de sensores fisicos.
            </div>

            {turns.some((turn) => turn.source) ? (
              <div className="tag-row">
                <Badge tone="neutral">SIMULADO · no interpretar como medicion</Badge>
                <Badge tone="neutral">SQLite · acceso de solo lectura</Badge>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
