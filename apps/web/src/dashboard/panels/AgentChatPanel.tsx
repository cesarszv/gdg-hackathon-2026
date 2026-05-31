import { useState, useRef, useEffect, type FormEvent, type KeyboardEvent } from "react";
import ReactMarkdown from "react-markdown";
import { api } from "../../lib/api";
import { useAsync } from "../../lib/useAsync";
import type { AgentResult, ScenarioSummary } from "../../lib/types";
import { Field } from "../components/Field";
import { ErrorState, Skeleton } from "../components/States";

interface Turn {
  role: "user" | "agent";
  text: string;
  source?: "llm" | "fallback";
  model?: string | null;
}

const SUGGESTED_CARDS = [
  {
    title: "Elegir experimento",
    prompt: "¿Que escenario conviene validar primero y por que?",
  },
  {
    title: "Comparar escenarios",
    prompt: "Compara estabilidad y potencia proyectada entre escenarios.",
  },
  {
    title: "Revisar datos faltantes",
    prompt: "¿Que datos faltan antes de construir un piloto fisico?",
  },
  {
    title: "Analizar telemetria",
    prompt: "Resume la telemetria simulada del escenario seleccionado.",
  },
];

const STEPS = [
  "Selecciona un escenario",
  "Haz una pregunta",
  "Revisa la recomendación",
];

export function AgentChatPanel() {
  const scenarios = useAsync<ScenarioSummary[]>(() => api.scenarios(), true);
  const [scenarioId, setScenarioId] = useState<number | "">("");
  const [question, setQuestion] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]);
  const [thinking, setThinking] = useState(false);
  const threadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (threadRef.current) {
      threadRef.current.scrollTop = threadRef.current.scrollHeight;
    }
  }, [turns, thinking]);

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
        <div className="agent-panel__eyebrow">Asesor para priorizar experimentos</div>
        <h2>Asesor IA</h2>
        <p>
          Analiza escenarios simulados y explica qué conviene validar primero.
        </p>
      </div>

      <div className="agent-steps" aria-label="Cómo funciona">
        {STEPS.map((step, i) => (
          <div className="agent-step" key={step}>
            <span className="agent-step__number">{i + 1}</span>
            <span className="agent-step__text">{step}</span>
          </div>
        ))}
      </div>

      {scenarios.loading ? (
        <Skeleton rows={3} />
      ) : scenarios.error ? (
        <ErrorState message={scenarios.error} onRetry={() => void scenarios.run()} />
      ) : (
        <div className="card agent-workbench">
          <div className="agent-sim-banner">
            <strong>SIMULADO</strong> — Los datos actuales son ficticios y no provienen de sensores físicos.
          </div>

          {turns.length === 0 && !thinking ? (
            <div className="agent-cards" aria-label="Preguntas sugeridas">
              {SUGGESTED_CARDS.map((card) => (
                <button
                  className="agent-card"
                  key={card.title}
                  type="button"
                  onClick={() => void ask(card.prompt)}
                  disabled={thinking}
                >
                  <span className="agent-card__title">{card.title}</span>
                </button>
              ))}
            </div>
          ) : null}

          <div className="chat">
            <div
              className="chat__thread"
              ref={threadRef}
              aria-live="polite"
              aria-busy={thinking}
            >
              {turns.length === 0 && !thinking ? (
                <div className="bubble bubble--agent">
                  Hola. Puedo ayudarte a comparar escenarios, interpretar telemetría simulada
                  o identificar qué falta antes del piloto físico. Elige una tarjeta o escribe
                  tu pregunta abajo.
                </div>
              ) : null}
              {turns.map((turn, index) => (
                <div key={`${turn.role}-${index}`} className={`bubble bubble--${turn.role}`}>
                  {turn.role === "agent" ? (
                    <div className="bubble__markdown">
                      <ReactMarkdown>{turn.text}</ReactMarkdown>
                    </div>
                  ) : (
                    turn.text
                  )}
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
                  <div className="typing" role="status" aria-label="El agente esta analizando">
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
                  label="Escenario"
                  htmlFor="agent-scenario"
                  hint="Opcional"
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
                    <option value="">General</option>
                    {scenarios.data?.map((scenario) => (
                      <option key={scenario.scenario_id} value={scenario.scenario_id}>
                        {scenario.scenario_code}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="agent-composer__question">
                <Field
                  label="Pregunta"
                  htmlFor="agent-question"
                  hint="Ctrl + Enter para enviar"
                >
                  <textarea
                    id="agent-question"
                    className="input agent-composer__textarea"
                    rows={2}
                    value={question}
                    onChange={(event) => setQuestion(event.target.value)}
                    onKeyDown={handleComposerKeyDown}
                    placeholder="Escribe tu pregunta..."
                  />
                </Field>
              </div>

              <button
                className="btn btn-primary agent-composer__submit"
                type="submit"
                disabled={thinking || !question.trim()}
              >
                {thinking ? "Analizando..." : "Consultar"}
              </button>
            </form>

            {turns.some((turn) => turn.source) ? (
              <details className="agent-transparency">
                <summary>Transparencia técnica</summary>
                <div className="agent-transparency__content">
                  <span>Acceso SQLite de solo lectura</span>
                  <span>Datos etiquetados como SIMULADO</span>
                  {turns
                    .filter((t) => t.model)
                    .map((t, i) => (
                      <span key={i}>Modelo: {t.model}</span>
                    ))}
                </div>
              </details>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
