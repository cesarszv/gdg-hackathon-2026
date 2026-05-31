import { useEffect } from "react";
import { useLenis } from "../hooks/useLenis";
import { useReducedMotion } from "../lib/useReducedMotion";
import { Nav } from "./components/Nav";
import { ScrollProgress } from "./components/ScrollProgress";
import { HeroCinematic } from "./sections/HeroCinematic";
import { ProblemSection } from "./sections/ProblemSection";
import { UserSection } from "./sections/UserSection";
import { SolutionSection } from "./sections/SolutionSection";
import { DemoSection } from "./sections/DemoSection";
import { TechSection } from "./sections/AiSection";
import { ImpactSection } from "./sections/ImpactSection";
import { NextStepsSection } from "./sections/NextStepsSection";
import { TeamSection } from "./sections/TeamSection";
import { CtaSection } from "./sections/CtaSection";
import "./landing.css";

export function Landing() {
  const reduced = useReducedMotion();
  useLenis(!reduced);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing">
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <ScrollProgress />
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <HeroCinematic />
        <ProblemSection />
        <UserSection />
        <SolutionSection />
        <DemoSection />
        <TechSection />
        <ImpactSection />
        <NextStepsSection />
        <TeamSection />
        <CtaSection />
      </main>
      <footer className="landing-footer">
        <p>
          <b>GreenSpark</b> &middot; Equipo HackHeroes &middot; Build With AI 2026 &middot; Santa
          Cruz de la Sierra, Bolivia
        </p>
        <p style={{ marginTop: 8, opacity: 0.7 }}>
          Mención Energía &middot; Resultados de simulación etiquetados como [SIMULADO] /
          [META_EXPLORATORIA].
        </p>
      </footer>
    </div>
  );
}
