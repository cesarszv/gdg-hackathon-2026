import { Reveal } from "../components/Reveal";

const USERS = [
  {
    phase: "Fase 1",
    title: "Universidades privadas",
    description:
      "El cliente principal. Investigan tecnologías sostenibles con datos locales de Santa Cruz. La IA les permite comparar configuraciones de reactor MFC antes de construir cualquier prototipo.",
    highlight: true,
    benefits: [
      "Dataset local de residuos bioorgánicos",
      "Reporte de sostenibilidad trazable",
      "Formación estudiantil en economía circular",
    ],
  },
  {
    phase: "Fase 2",
    title: "Colegios privados",
    description:
      "Incorporan educación ambiental con pilotos demostrativos reales. Sus estudiantes aprenden con datos medidos, no con ejemplos de otro país.",
    highlight: false,
    benefits: [
      "Piloto MFC demostrativo en el colegio",
      "Métricas comprensibles para alumnos",
      "Educación ambiental basada en evidencia",
    ],
  },
  {
    phase: "Fase 2",
    title: "Restaurantes y agroindustrias",
    description:
      "Generan residuos orgánicos concentrados todos los días. Con GreenSpark pueden registrar esos residuos, comparar escenarios y demostrar circularidad antes de invertir en infraestructura.",
    highlight: false,
    benefits: [
      "Trazabilidad de residuos orgánicos",
      "Comparación de escenarios sin invertir antes",
      "Reporte de circularidad para clientes e inversionistas",
    ],
  },
  {
    phase: "Fase 3",
    title: "Sector agropecuario",
    description:
      "Beneficiario indirecto del proceso. Cuando el piloto MFC produzca un subproducto estabilizado, el sector puede evaluarlo como insumo circular con datos reales.",
    highlight: false,
    benefits: [
      "Subproducto caracterizado y estabilizado",
      "Evaluación de uso agronómico con datos",
      "Cierre del ciclo de residuos orgánicos",
    ],
  },
];

export function UserSection() {
  return (
    <section className="section section--alt" id="beneficiarios">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">02 — A quién ayuda</p>
          <h2 className="section__title">Instituciones que necesitan medir su impacto ambiental</h2>
          <p className="section__lead">
            GreenSpark empieza con universidades y escala solo cuando la evidencia lo justifica. Cada
            actor entra en la etapa que le corresponde, no antes.
          </p>
        </Reveal>

        <Reveal stagger={0.1} className="users__grid">
          {USERS.map((u) => (
            <div className={`user-card${u.highlight ? " user-card--main" : ""}`} key={u.title}>
              <div className="user-card__phase">{u.phase}</div>
              <div className="user-card__title">{u.title}</div>
              <p className="user-card__desc">{u.description}</p>
              <ul className="user-card__benefits">
                {u.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
