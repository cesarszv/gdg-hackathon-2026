import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

/** Closing call to action into the live Spark Console. */
export function CtaSection() {
  return (
    <section className="cta">
      <div className="container">
        <Reveal>
          <h2>Entra a la consola y simula tu primer escenario</h2>
          <p>
            Explora escenarios MFC reales, corre una prediccion en vivo y deja que el asesor de IA
            te lo explique — con datos de Santa Cruz de la Sierra.
          </p>
          <Link to="/app" className="btn">
            Abrir la Spark Console &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
