import { Reveal } from "../components/Reveal";

const STEPS = [
  {
    horizon: "Corto plazo",
    subtitle: "Hackathon → Fase investigativa",
    items: [
      "Validar interés universitario con entrevistas o carta de intención.",
      "Ejecutar un lote de escenarios MFC reproducibles y documentar supuestos.",
      "Establecer el baseline del modelo predictivo y reportar MAE, RMSE y R².",
      "Definir el generador de residuos para el primer piloto.",
    ],
  },
  {
    horizon: "Mediano plazo",
    subtitle: "Piloto físico instrumentado",
    items: [
      "Construir el primer reactor MFC con residuos de un generador local.",
      "Conectar sensores de voltaje, corriente, pH y temperatura.",
      "Reemplazar supuestos de literatura con mediciones locales reales.",
      "Comparar el rendimiento proyectado contra el rendimiento medido.",
    ],
  },
  {
    horizon: "Largo plazo",
    subtitle: "Escalamiento sujeto a evidencia",
    items: [
      "Replicar módulos MFC en más generadores cuando los datos lo respalden.",
      "Evaluar biodigestores o soluciones híbridas con volumen suficiente.",
      "Estudiar la generación distribuida bajo el Decreto Supremo N.° 4477.",
      "Medir el potencial agronómico del subproducto antes de cualquier uso agrícola.",
    ],
  },
];

export function NextStepsSection() {
  return (
    <section className="section" id="proximos-pasos">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">07 — Próximos pasos</p>
          <h2 className="section__title">La ruta desde la investigación hasta el piloto</h2>
          <p className="section__lead">
            GreenSpark no promete saltar directo a la infraestructura. Cada paso requiere evidencia
            del anterior: primero datos, luego piloto, luego escalar.
          </p>
        </Reveal>

        <Reveal stagger={0.12} className="nextsteps__grid">
          {STEPS.map((s) => (
            <div className="nextstep-card" key={s.horizon}>
              <div className="nextstep-card__horizon">{s.horizon}</div>
              <div className="nextstep-card__subtitle">{s.subtitle}</div>
              <ul className="nextstep-card__list">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
