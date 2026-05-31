import { Reveal } from "../components/Reveal";

const ROLES = [
  { icon: "⚖️", title: "Compara", text: "Configuraciones de reactor y sustratos antes de gastar un solo peso en hardware." },
  { icon: "📈", title: "Estima", text: "Potencia proyectada y estabilidad con intervalos de confianza visibles, no cifras inventadas." },
  { icon: "🎯", title: "Recomienda", text: "Que experimento validar primero para maximizar aprendizaje con minimo recurso." },
  { icon: "🔍", title: "Detecta", text: "Anomalias en tiempo real cuando se conecten sensores de campo a la plataforma." },
  { icon: "💬", title: "Explica", text: "Cada resultado en lenguaje claro: el agente generativo nunca inventa datos, solo usa los numeros del sistema." },
];

/** The 5 honest roles of the AI — staggered reveal. */
export function AiSection() {
  return (
    <section className="section" id="ia">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">03 — Inteligencia Artificial</p>
          <h2 className="section__title">La IA es el producto, no un accesorio</h2>
          <p className="section__lead">
            GreenSpark existe gracias a la IA. Un modelo baseline calcula rendimiento con datos
            reales; un agente generativo (Gemini) explica resultados y recomienda proximos pasos.
            Sin IA, no hay simulacion, no hay comparacion, no hay decision informada.
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
