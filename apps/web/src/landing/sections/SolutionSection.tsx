import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const PHASES = [
  {
    num: "Fase 1",
    name: "Investigacion con IA",
    goal: "hasta 10%",
    desc: "Universidades simulan reactores MFC en la Spark Console: la IA compara sustratos, estima potencia y recomienda el primer experimento.",
  },
  {
    num: "Fase 2",
    name: "Pilotos reales",
    goal: "hasta 10%",
    desc: "Colegios, restaurantes y agroindustrias prueban modulos MFC instrumentados con datos reales que alimentan el modelo.",
  },
  {
    num: "Fase 3",
    name: "Escalamiento",
    goal: "hasta 20%",
    desc: "Biodigestores o soluciones hibridas solo cuando la evidencia medida lo justifique, sin promesas vacias.",
  },
];

/** Pinned section: as the user scrolls, the phase track fills and each phase
 *  card lights up in sequence. Static cards under reduced motion. */
export function SolutionSection() {
  const root = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !root.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".phase");
      gsap.set(cards, { opacity: 0.35, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=180%",
          scrub: 0.6,
          pin: ".solution__pin",
        },
      });
      tl.to(".phases__track-fill", { width: "100%", ease: "none", duration: PHASES.length });
      cards.forEach((card, i) => {
        tl.to(card, { opacity: 1, y: 0, duration: 0.6 }, i);
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="section section--alt" id="solucion" ref={root}>
      <div className="solution__pin">
        <div className="container">
          <p className="section__eyebrow">03 — Enfoque de solución</p>
          <h2 className="section__title">Una consola de IA que investiga antes de invertir</h2>
          <p className="section__lead">
            GreenSpark es una plataforma que usa inteligencia artificial para simular reactores
            MFC, comparar sustratos y recomendar experimentos. No saltamos a la infraestructura:
            investigamos, validamos y escalamos solo cuando los datos lo respaldan.
          </p>

          <div className="phases">
            {PHASES.map((p) => (
              <div className="phase" key={p.num}>
                <div className="phase__num">{p.num}</div>
                <div className="phase__name">{p.name}</div>
                <div className="phase__goal">{p.goal}</div>
                <div className="phase__desc">{p.desc}</div>
              </div>
            ))}
          </div>

          <div className="phases__track">
            <div className="phases__track-fill" style={{ width: reduced ? "100%" : undefined }} />
          </div>

          <div className="disclaimer">
            &#9888; Los porcentajes son metas exploratorias sujetas a validacion, no ahorros
            garantizados.
          </div>
        </div>
      </div>
    </section>
  );
}
