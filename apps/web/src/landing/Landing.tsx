import { useEffect } from "react";
import { useLenis } from "../hooks/useLenis";
import { useReducedMotion } from "../lib/useReducedMotion";
import { Nav } from "./components/Nav";
import { ScrollProgress } from "./components/ScrollProgress";
import { HeroCinematic } from "./sections/HeroCinematic";
import { ProblemSection } from "./sections/ProblemSection";
import { SolutionSection } from "./sections/SolutionSection";
import { AiSection } from "./sections/AiSection";
import { ImpactSection } from "./sections/ImpactSection";
import { TeamSection } from "./sections/TeamSection";
import { CtaSection } from "./sections/CtaSection";
import "./landing.css";

export function Landing() {
  const reduced = useReducedMotion();
  // Smooth scroll only when motion is welcome; native scroll otherwise.
  useLenis(!reduced);

  // Start at the top (cinematic intro) regardless of prior scroll position.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing">
      <ScrollProgress />
      <Nav />
      <HeroCinematic />
      <ProblemSection />
      <SolutionSection />
      <AiSection />
      <ImpactSection />
      <TeamSection />
      <CtaSection />
      <footer className="landing-footer">
        <p>
          <b>GreenSpark</b> &middot; Equipo HackHeroes &middot; Build With AI 2026 &middot; Santa
          Cruz de la Sierra, Bolivia
        </p>
        <p style={{ marginTop: 8, opacity: 0.7 }}>
          Mencion Energia &middot; Resultados de simulacion etiquetados como SIMULADO /
          META_EXPLORATORIA.
        </p>
      </footer>
    </div>
  );
}
