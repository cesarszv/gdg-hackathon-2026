import { Reveal } from "../components/Reveal";
import { Parallax } from "../components/Parallax";
import { Counter } from "../components/Counter";

/** The local, verifiable problem — numbers scrub up as they enter (PMGIRS 2023). */
export function ProblemSection() {
  return (
    <section className="section" id="problema">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">01 — Problema identificado</p>
          <h2 className="section__title">971 toneladas de energia organica se pudren cada dia en Santa Cruz</h2>
          <p className="section__lead">
            Mientras universidades, colegios y restaurantes pagan facturas de luz crecientes, casi
            mil toneladas de materia organica se van al vertedero sin que nadie pueda medir
            cuanta energia se esta perdiendo. No faltan residuos: faltan datos para decidir.
          </p>
        </Reveal>

        <Parallax amount={-40}>
          <div className="problem__stats">
            <div className="stat-card">
              <div className="stat-card__value">
                <Counter value={1909.86} decimals={2} />
              </div>
              <div className="stat-card__label">toneladas de residuos por dia en SCZ</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__value">
                <Counter value={50.84} decimals={2} suffix="%" />
              </div>
              <div className="stat-card__label">es organico compostable</div>
            </div>
            <div className="stat-card stat-card--highlight">
              <div className="stat-card__value">
                ~<Counter value={971} /> t
              </div>
              <div className="stat-card__label">de materia organica desaprovechada al dia</div>
            </div>
          </div>
        </Parallax>

        <p className="problem__source">
          Fuente: PMGIRS 2023, citado por el GAMSC. 1.909,86 &times; 0,5084 = 970,97 t/dia.
        </p>
      </div>
    </section>
  );
}
