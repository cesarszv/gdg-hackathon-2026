import { Reveal } from "../components/Reveal";

const BEFORE = [
  "Instituciones que quieren ser sostenibles pero no saben por donde empezar.",
  "Residuos organicos que se van al vertedero sin que nadie mida su potencial.",
  "Decisiones energeticas basadas en supuestos, no en datos locales.",
  "Inversiones en infraestructura verde sin evidencia de retorno.",
  "Estudiantes sin herramientas reales para investigar economia circular.",
];

const AFTER = [
  "Una consola donde simulas escenarios MFC antes de invertir un peso.",
  "Cada sustrato registrado como oportunidad de valorizacion energetica.",
  "La IA explica resultados en lenguaje claro: cualquier persona entiende.",
  "Reportes trazables que defienden la decision ante un consejo o inversionista.",
  "Universidades que investigan con datos reales de Santa Cruz, no de papers lejanos.",
];

/** Before / after the research phase — two columns wipe in on scroll. */
export function ImpactSection() {
  return (
    <section className="section section--alt" id="impacto">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">04 — El impacto</p>
          <h2 className="section__title">De no saber que hacer a decidir con datos</h2>
          <p className="section__lead">
            El impacto no es una cifra inventada de kilowatts: es que universidades, colegios,
            restaurantes y agroindustrias de Santa Cruz tomen decisiones energeticas con evidencia
            real, no con supuestos.
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
              <h3>Despues de la fase investigativa</h3>
              <ul>
                {AFTER.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
