import { Reveal } from "../components/Reveal";

const BEFORE = [
  "Decisiones energeticas basadas en supuestos generales.",
  "Residuos tratados unicamente como descarte.",
  "Porcentajes de ahorro dificiles de defender.",
  "Sostenibilidad comunicada de forma generica.",
  "Escalamiento prematuro y riesgoso.",
];

const AFTER = [
  "Escenarios comparables con supuestos visibles.",
  "Sustratos registrados como oportunidad de valorizacion.",
  "Metas separadas de las mediciones reales.",
  "Reportes institucionales trazables.",
  "Inversion sujeta a evidencia.",
];

/** Before / after the research phase — two columns wipe in on scroll. */
export function ImpactSection() {
  return (
    <section className="section section--alt" id="impacto">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">04 — El impacto</p>
          <h2 className="section__title">De la intuicion a la evidencia</h2>
          <p className="section__lead">
            El impacto inmediato no es una cifra ficticia de electricidad: es mejorar la calidad de
            las decisiones de universidades, colegios, restaurantes y agroindustrias.
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
