import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { ScrollHint } from "../components/ScrollHint";

gsap.registerPlugin(ScrollTrigger);

/** Cinematic intro: "HackHeroes presenta..." resolves into the Green Spark title.
 *  The whole section is pinned and the reveal is scrubbed to scroll. With reduced
 *  motion it is a static, centered title (both lines visible, no pin). */
export function HeroCinematic() {
  const root = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=140%",
          scrub: 0.6,
          pin: true,
        },
      });
      tl.fromTo(".hero__presents", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1 })
        .to(".hero__presents", { opacity: 0, y: -24, duration: 1 }, ">0.4")
        .fromTo(
          ".hero__title-wrap",
          { opacity: 0, scale: 0.86, filter: "blur(8px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.4 },
          "<0.2",
        )
        .fromTo(".hero__tagline", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1 }, ">-0.2")
        .to(".hero__glow", { opacity: 1, duration: 1.4 }, 0);
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <header className="hero" id="hero" ref={root}>
      <div className="hero__glow" aria-hidden="true" style={{ opacity: reduced ? 1 : undefined }} />
      {!reduced && (
        <p className="hero__presents">
          <b>HackHeroes</b>&nbsp; presenta&hellip;
        </p>
      )}
      <div className="hero__title-wrap">
        <h1 className="hero__title">
          Green<span className="spark">Spark</span>
        </h1>
        <p className="hero__tagline">
          Inteligencia Artificial que convierte los residuos bioorganicos de Santa Cruz de la
          Sierra en decisiones energeticas medibles.
        </p>
      </div>
      <ScrollHint />
    </header>
  );
}
