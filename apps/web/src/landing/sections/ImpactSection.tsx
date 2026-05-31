import { Reveal } from "../components/Reveal";

const BEFORE = [
  "Instituciones que quieren ser sostenibles pero no saben por dónde empezar.",
  "Residuos orgánicos que se van al vertedero sin que nadie mida su potencial.",
  "Decisiones energéticas basadas en supuestos, no en datos locales.",
  "Inversiones en infraestructura verde sin evidencia de retorno.",
  "Estudiantes sin herramientas reales para investigar economía circular.",
];

const AFTER = [
  "Una consola donde simulás escenarios MFC antes de invertir un peso.",
  "Cada sustrato registrado como oportunidad de valorización energética.",
  "La IA explica resultados en lenguaje claro: cualquier persona entiende.",
  "Reportes trazables que defienden la decisión ante un consejo o inversionista.",
  "Universidades que investigan con datos reales de Santa Cruz, no de papers lejanos.",
];

const METRICS = [
  {
    icon: "⚡",
    title: "Impacto energético",
    text: "Explorar un aporte de hasta 10% para cargas eléctricas seleccionadas en fases 1 y 2, y hasta 20% en fase 3 con tecnologías de mayor capacidad.",
    tag: "META EXPLORATORIA",
  },
  {
    icon: "🌿",
    title: "Impacto ambiental",
    text: "Medir y trazar cada kilogramo de residuo orgánico que ingresa al proceso. Las emisiones evitadas se calcularán solo después de definir una línea base local.",
    tag: "A VALIDAR",
  },
  {
    icon: "🎓",
    title: "Impacto educativo",
    text: "Universidades y colegios como laboratorios vivos de sostenibilidad. Estudiantes aprenden con datos reales de Santa Cruz, no con ejemplos importados.",
    tag: "FASE 1",
  },
];

export function ImpactSection() {
  return (
    <section className="section section--alt" id="impacto">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">06 — Impacto esperado</p>
          <h2 className="section__title">De no saber qué hacer a decidir con datos</h2>
          <p className="section__lead">
            El impacto real no es una cifra inventada de kilowatts: es que las instituciones de
            Santa Cruz tomen decisiones energéticas con evidencia propia, no con supuestos de otro
            país.
          </p>
        </Reveal>

        <div className="beforeafter">
          <Reveal>
            <div className="ba-col ba-col--before">
              <h3>Antes de GreenSpark</h3>
              <ul>
                {BEFORE.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="ba-col ba-col--after">
              <h3>Después de la fase investigativa</h3>
              <ul>
                {AFTER.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal stagger={0.1} className="impact__metrics">
          {METRICS.map((m) => (
            <div className="impact-metric" key={m.title}>
              <div className="impact-metric__icon" aria-hidden>{m.icon}</div>
              <div className="impact-metric__title">{m.title}</div>
              <p className="impact-metric__text">{m.text}</p>
              <span className="impact-metric__tag">{m.tag}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
