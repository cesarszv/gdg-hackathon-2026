import { Reveal } from "../components/Reveal";

const AI_ROLES = [
  { icon: "⚖️", title: "Compara", text: "Configuraciones de reactor y sustratos antes de gastar un peso en hardware." },
  { icon: "📈", title: "Estima", text: "Potencia proyectada y estabilidad con nivel de confianza visible, no cifras inventadas." },
  { icon: "🎯", title: "Recomienda", text: "Qué experimento validar primero para maximizar aprendizaje con mínimo recurso." },
  { icon: "🔍", title: "Detecta", text: "Anomalías en tiempo real cuando se conecten sensores al reactor físico en fase 2." },
  { icon: "💬", title: "Explica", text: "Cada resultado en lenguaje claro: el agente generativo nunca inventa datos, solo usa los números del sistema." },
];

const STACK = [
  { label: "React", desc: "Interfaz de usuario" },
  { label: "FastAPI", desc: "API y orquestación" },
  { label: "scikit-learn", desc: "Modelos predictivos" },
  { label: "LLM (Gemini)", desc: "Agente explicativo" },
  { label: "SQLite", desc: "Persistencia local" },
];

export function TechSection() {
  return (
    <section className="section" id="tecnologia">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">05 — Tecnología utilizada</p>
          <h2 className="section__title">Un stack construido para investigar, no para impresionar</h2>
          <p className="section__lead">
            Cada tecnología tiene una función específica. La IA no es un accesorio: es el núcleo que
            permite comparar escenarios, estimar rendimiento y explicar resultados sin inventar
            cifras.
          </p>
        </Reveal>

        <Reveal stagger={0.08} className="stack__row">
          {STACK.map((s) => (
            <div className="stack-chip" key={s.label}>
              <div className="stack-chip__label">{s.label}</div>
              <div className="stack-chip__desc">{s.desc}</div>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <h3 className="tech__subtitle">Cómo trabaja la IA</h3>
        </Reveal>

        <Reveal stagger={0.1} className="roles">
          {AI_ROLES.map((r) => (
            <div className="role" key={r.title}>
              <div className="role__icon" aria-hidden>{r.icon}</div>
              <div className="role__title">{r.title}</div>
              <div className="role__text">{r.text}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
