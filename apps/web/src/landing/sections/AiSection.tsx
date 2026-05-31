import { Reveal } from "../components/Reveal";

const ROLES = [
  { icon: "⚖️", title: "Compara", text: "Configuraciones y sustratos antes de invertir." },
  { icon: "📈", title: "Estima", text: "Potencia y estabilidad con incertidumbre visible." },
  { icon: "🎯", title: "Recomienda", text: "Que experimento conviene validar primero." },
  { icon: "🔍", title: "Detecta", text: "Anomalias cuando existan datos de sensores." },
  { icon: "💬", title: "Explica", text: "Resultados en lenguaje claro, sin inventar cifras." },
];

/** The 5 honest roles of the AI — staggered reveal. */
export function AiSection() {
  return (
    <section className="section" id="ia">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">03 — La IA</p>
          <h2 className="section__title">Inteligencia que decide mejor, con honestidad</h2>
          <p className="section__lead">
            Un baseline transparente calcula; el agente generativo explica. La IA nunca inventa
            potencia, ahorro ni emisiones: solo usa los numeros del sistema.
          </p>
        </Reveal>

        <Reveal stagger={0.12} className="roles">
          {ROLES.map((r) => (
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
