import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

/** Closing call to action into the live Spark Console. */
export function CtaSection() {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <Reveal>
          <h2>Mira la IA en accion: simula tu primer escenario MFC</h2>
          <p>
            Entra a la Spark Console, elige un sustrato de Santa Cruz, corre una prediccion en
            vivo y deja que el agente de IA te explique el resultado en lenguaje claro.
          </p>
          <Link to="/app" className="btn">
            Probar la Spark Console &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
