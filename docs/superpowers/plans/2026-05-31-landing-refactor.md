# Landing Page Refactor — GreenSpark Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactorizar la landing page para cubrir las 7 secciones obligatorias del hackathon, mover el video a una sección dedicada con botón siempre accesible, y mejorar el contenido con información real de los docs.

**Architecture:** Se agregan 3 secciones nuevas (UserSection, DemoSection, NextStepsSection), se limpia HeroCinematic quitando todo el código de video, se renombra AiSection a TechSection con stack ampliado, y se actualizan eyebrows y contenido en las secciones existentes. No hay cambios de routing ni de API.

**Tech Stack:** React 18, TypeScript, GSAP 3 (solo en componentes que ya lo usan), CSS custom properties existentes.

---

## File Map

| Acción | Archivo |
|---|---|
| Modificar | `apps/web/src/landing/sections/HeroCinematic.tsx` |
| Modificar | `apps/web/src/landing/sections/ProblemSection.tsx` |
| Crear | `apps/web/src/landing/sections/UserSection.tsx` |
| Modificar | `apps/web/src/landing/sections/SolutionSection.tsx` |
| Crear | `apps/web/src/landing/sections/DemoSection.tsx` |
| Modificar | `apps/web/src/landing/sections/AiSection.tsx` → export `TechSection` |
| Modificar | `apps/web/src/landing/sections/ImpactSection.tsx` |
| Crear | `apps/web/src/landing/sections/NextStepsSection.tsx` |
| Modificar | `apps/web/src/landing/components/Nav.tsx` |
| Modificar | `apps/web/src/landing/Landing.tsx` |
| Modificar | `apps/web/src/landing/landing.css` |

---

### Task 1: Limpiar HeroCinematic — quitar todo el código de video

**Files:**
- Modify: `apps/web/src/landing/sections/HeroCinematic.tsx`

- [ ] **Step 1: Reemplazar HeroCinematic.tsx con la versión sin video**

```tsx
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { ScrollHint } from "../components/ScrollHint";

gsap.registerPlugin(ScrollTrigger);

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
          end: "+=150%",
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
          ">0.2",
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
          Plataforma de IA que convierte los residuos bioorgánicos de Santa Cruz de la Sierra en
          decisiones energéticas medibles.
        </p>
      </div>
      <ScrollHint />
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/src/landing/sections/HeroCinematic.tsx
git commit -m "refactor(hero): remove video from cinematic hero — video moves to DemoSection"
```

---

### Task 2: Actualizar ProblemSection — eyebrow y acento tipográfico

**Files:**
- Modify: `apps/web/src/landing/sections/ProblemSection.tsx`

- [ ] **Step 1: Actualizar eyebrow a "01 — Problema identificado"**

Cambiar la línea:
```tsx
<p className="section__eyebrow">01 — El problema</p>
```
Por:
```tsx
<p className="section__eyebrow">01 — Problema identificado</p>
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/src/landing/sections/ProblemSection.tsx
git commit -m "chore(landing): update ProblemSection eyebrow to match required structure"
```

---

### Task 3: Crear UserSection — "02 — A quién ayuda"

**Files:**
- Create: `apps/web/src/landing/sections/UserSection.tsx`

- [ ] **Step 1: Crear el archivo UserSection.tsx**

```tsx
import { Reveal } from "../components/Reveal";

const USERS = [
  {
    phase: "Fase 1",
    title: "Universidades privadas",
    description:
      "El cliente principal. Investigan tecnologías sostenibles con datos locales de Santa Cruz. La IA les permite comparar configuraciones de reactor MFC antes de construir cualquier prototipo.",
    highlight: true,
    benefits: ["Dataset local de residuos", "Reporte de sostenibilidad trazable", "Formación estudiantil en economía circular"],
  },
  {
    phase: "Fase 2",
    title: "Colegios privados",
    description:
      "Incorporan educación ambiental con pilotos demostrativos reales. Sus estudiantes aprenden con datos medidos, no con ejemplos de otro país.",
    highlight: false,
    benefits: ["Piloto MFC demostrativo", "Métricas comprensibles para alumnos", "Educación ambiental basada en evidencia"],
  },
  {
    phase: "Fase 2",
    title: "Restaurantes y agroindustrias",
    description:
      "Generan residuos orgánicos concentrados todos los días. Con GreenSpark pueden registrar esos residuos, comparar escenarios y demostrar circularidad antes de invertir en infraestructura.",
    highlight: false,
    benefits: ["Trazabilidad de residuos orgánicos", "Comparación de escenarios sin invertir", "Reporte de circularidad para clientes"],
  },
  {
    phase: "Fase 3",
    title: "Sector agropecuario",
    description:
      "Beneficiario indirecto del proceso. Cuando el piloto MFC produzca un subproducto estabilizado, el sector agropecuario puede evaluarlo como insumo circular.",
    highlight: false,
    benefits: ["Subproducto caracterizado y estabilizado", "Evaluación de uso agronómico", "Circularidad completa del residuo"],
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
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/src/landing/sections/UserSection.tsx
git commit -m "feat(landing): add UserSection — who GreenSpark helps, phase by phase"
```

---

### Task 4: Actualizar SolutionSection — eyebrow

**Files:**
- Modify: `apps/web/src/landing/sections/SolutionSection.tsx`

- [ ] **Step 1: Actualizar eyebrow**

Cambiar:
```tsx
<p className="section__eyebrow">02 — La solucion</p>
```
Por:
```tsx
<p className="section__eyebrow">03 — Enfoque de solución</p>
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/src/landing/sections/SolutionSection.tsx
git commit -m "chore(landing): update SolutionSection eyebrow"
```

---

### Task 5: Crear DemoSection — video player siempre visible

**Files:**
- Create: `apps/web/src/landing/sections/DemoSection.tsx`

- [ ] **Step 1: Crear DemoSection.tsx**

```tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

const VIDEO_SRC = "/video/hero.mp4";

export function DemoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onEnded = () => setIsPlaying(false);
    video.addEventListener("ended", onEnded);
    return () => video.removeEventListener("ended", onEnded);
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video
      .play()
      .then(() => {
        setIsPlaying(true);
        setMuted(false);
      })
      .catch(() => {
        video.muted = true;
        video.play().then(() => {
          setIsPlaying(true);
          setMuted(true);
        });
      });
  };

  const handlePause = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !muted;
    setMuted(!muted);
  };

  return (
    <section className="section section--alt" id="demo">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">04 — Demo funcional</p>
          <h2 className="section__title">La Spark Console en acción</h2>
          <p className="section__lead">
            Así se ve GreenSpark por dentro: el usuario ingresa un escenario MFC, la IA compara
            configuraciones y el agente explica el resultado en lenguaje claro.
          </p>
        </Reveal>

        <div className="demo__player">
          <video
            ref={videoRef}
            className="demo__video"
            src={VIDEO_SRC}
            muted
            playsInline
            preload="metadata"
          />

          {!isPlaying && (
            <button
              type="button"
              className="demo__play-btn"
              onClick={handlePlay}
              aria-label="Reproducir demo"
            >
              <div className="demo__play-circle">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </div>
              <span className="demo__play-label">Ver la demo</span>
            </button>
          )}

          {isPlaying && (
            <div className="demo__controls">
              <button
                type="button"
                className="demo__ctrl-btn"
                onClick={handlePause}
                aria-label="Pausar"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              </button>
              <button
                type="button"
                className="demo__ctrl-btn"
                onClick={toggleMute}
                aria-label={muted ? "Activar sonido" : "Silenciar"}
              >
                {muted ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>

        <div className="demo__footer">
          <p className="demo__disclaimer">
            &#9888; <strong>[SIMULADO]</strong> Los escenarios mostrados son simulaciones basadas en
            literatura científica. No representan mediciones de un reactor físico construido por el
            equipo.
          </p>
          <Link to="/app" className="btn btn-primary demo__cta">
            Probar la Spark Console en vivo &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/src/landing/sections/DemoSection.tsx
git commit -m "feat(landing): add DemoSection with always-visible video player"
```

---

### Task 6: Refactorizar AiSection → TechSection con stack tecnológico

**Files:**
- Modify: `apps/web/src/landing/sections/AiSection.tsx`

- [ ] **Step 1: Reemplazar AiSection.tsx con TechSection**

```tsx
import { Reveal } from "../components/Reveal";

const AI_ROLES = [
  { icon: "⚖️", title: "Compara", text: "Configuraciones de reactor y sustratos antes de gastar un peso en hardware." },
  { icon: "📈", title: "Estima", text: "Potencia proyectada y estabilidad con nivel de confianza visible, no cifras inventadas." },
  { icon: "🎯", title: "Recomienda", text: "Qué experimento validar primero para maximizar aprendizaje con mínimo recurso." },
  { icon: "🔍", title: "Detecta", text: "Anomalías en tiempo real cuando se conecten sensores al reactor físico en fase 2." },
  { icon: "💬", title: "Explica", text: "Cada resultado en lenguaje claro: el agente generativo nunca inventa datos, solo usa los números del sistema." },
];

const STACK = [
  { label: "React", desc: "Interfaz de usuario" },
  { label: "FastAPI", desc: "API y orquestación" },
  { label: "scikit-learn", desc: "Modelos predictivos" },
  { label: "LLM (Gemini)", desc: "Agente explicativo" },
  { label: "SQLite", desc: "Persistencia local" },
];

export function TechSection() {
  return (
    <section className="section" id="tecnologia">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">05 — Tecnología utilizada</p>
          <h2 className="section__title">Un stack construido para investigar, no para impresionar</h2>
          <p className="section__lead">
            Cada tecnología tiene una función específica. La IA no es un accesorio: es el núcleo que
            permite comparar escenarios, estimar rendimiento y explicar resultados sin inventar
            cifras.
          </p>
        </Reveal>

        <Reveal stagger={0.08} className="stack__row">
          {STACK.map((s) => (
            <div className="stack-chip" key={s.label}>
              <div className="stack-chip__label">{s.label}</div>
              <div className="stack-chip__desc">{s.desc}</div>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <h3 className="tech__subtitle">Cómo trabaja la IA</h3>
        </Reveal>

        <Reveal stagger={0.1} className="roles">
          {AI_ROLES.map((r) => (
            <div className="role" key={r.title}>
              <div className="role__icon" aria-hidden>{r.icon}</div>
              <div className="role__title">{r.title}</div>
              <div className="role__text">{r.text}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/src/landing/sections/AiSection.tsx
git commit -m "refactor(landing): rename AiSection to TechSection, add tech stack row"
```

---

### Task 7: Actualizar ImpactSection — eyebrow y métricas de impacto

**Files:**
- Modify: `apps/web/src/landing/sections/ImpactSection.tsx`

- [ ] **Step 1: Reemplazar ImpactSection.tsx con contenido actualizado**

```tsx
import { Reveal } from "../components/Reveal";

const BEFORE = [
  "Instituciones que quieren ser sostenibles pero no saben por dónde empezar.",
  "Residuos orgánicos que se van al vertedero sin que nadie mida su potencial.",
  "Decisiones energéticas basadas en supuestos, no en datos locales.",
  "Inversiones en infraestructura verde sin evidencia de retorno.",
  "Estudiantes sin herramientas reales para investigar economía circular.",
];

const AFTER = [
  "Una consola donde simulás escenarios MFC antes de invertir un peso.",
  "Cada sustrato registrado como oportunidad de valorización energética.",
  "La IA explica resultados en lenguaje claro: cualquier persona entiende.",
  "Reportes trazables que defienden la decisión ante un consejo o inversionista.",
  "Universidades que investigan con datos reales de Santa Cruz, no de papers lejanos.",
];

const METRICS = [
  {
    icon: "⚡",
    title: "Impacto energético",
    text: "Explorar un aporte de hasta 10% para cargas eléctricas seleccionadas en fases 1 y 2, y hasta 20% en fase 3 con tecnologías de mayor capacidad.",
    tag: "META EXPLORATORIA",
  },
  {
    icon: "🌿",
    title: "Impacto ambiental",
    text: "Medir y trazar cada kilogramo de residuo orgánico que ingresa al proceso. Las emisiones evitadas se calcularán solo después de definir una línea base local.",
    tag: "A VALIDAR",
  },
  {
    icon: "🎓",
    title: "Impacto educativo",
    text: "Universidades y colegios como laboratorios vivos de sostenibilidad. Estudiantes aprenden con datos reales de Santa Cruz, no con ejemplos importados.",
    tag: "FASE 1",
  },
];

export function ImpactSection() {
  return (
    <section className="section section--alt" id="impacto">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">06 — Impacto esperado</p>
          <h2 className="section__title">De no saber qué hacer a decidir con datos</h2>
          <p className="section__lead">
            El impacto real no es una cifra inventada de kilowatts: es que las instituciones de
            Santa Cruz tomen decisiones energéticas con evidencia propia, no con supuestos de otro
            país.
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
              <h3>Después de la fase investigativa</h3>
              <ul>
                {AFTER.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal stagger={0.1} className="impact__metrics">
          {METRICS.map((m) => (
            <div className="impact-metric" key={m.title}>
              <div className="impact-metric__icon" aria-hidden>{m.icon}</div>
              <div className="impact-metric__title">{m.title}</div>
              <p className="impact-metric__text">{m.text}</p>
              <span className="impact-metric__tag">{m.tag}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/src/landing/sections/ImpactSection.tsx
git commit -m "refactor(landing): update ImpactSection with metrics and corrected eyebrow"
```

---

### Task 8: Crear NextStepsSection — "07 — Próximos pasos"

**Files:**
- Create: `apps/web/src/landing/sections/NextStepsSection.tsx`

- [ ] **Step 1: Crear NextStepsSection.tsx**

```tsx
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
      "Reemplazar supuestos de literatura con mediciones locales.",
      "Comparar el rendimiento proyectado contra el rendimiento medido.",
    ],
  },
  {
    horizon: "Largo plazo",
    subtitle: "Escalamiento sujeto a evidencia",
    items: [
      "Replicar módulos MFC en más generadores cuando los datos lo respalden.",
      "Evaluar biodigestores o soluciones híbridas cuando exista volumen suficiente.",
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
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/src/landing/sections/NextStepsSection.tsx
git commit -m "feat(landing): add NextStepsSection — short/medium/long-term roadmap"
```

---

### Task 9: Actualizar Nav — agregar links de navegación

**Files:**
- Modify: `apps/web/src/landing/components/Nav.tsx`

- [ ] **Step 1: Reemplazar Nav.tsx con links completos**

```tsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#problema", label: "Problema" },
  { href: "#demo", label: "Demo" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#proximos-pasos", label: "Próximos pasos" },
];

export function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cta = document.getElementById("cta");
    if (!cta) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(cta);
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`nav${visible ? " nav--visible" : ""}`} aria-label="Navegación principal">
      <div className="container nav__inner">
        <a href="#hero" className="nav__brand">
          <span className="nav__spark" aria-hidden>&#9889;</span> GreenSpark
        </a>
        <div className="nav__links">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="nav__link">
              {label}
            </a>
          ))}
          <Link to="/app" className="btn btn-primary">Abrir consola</Link>
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/src/landing/components/Nav.tsx
git commit -m "feat(landing): add nav links for all 7 sections"
```

---

### Task 10: Actualizar Landing.tsx — nuevo orden de secciones

**Files:**
- Modify: `apps/web/src/landing/Landing.tsx`

- [ ] **Step 1: Reemplazar Landing.tsx con el nuevo orden**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/src/landing/Landing.tsx
git commit -m "refactor(landing): reorder sections to match 7-section hackathon structure"
```

---

### Task 11: Agregar CSS para secciones nuevas

**Files:**
- Modify: `apps/web/src/landing/landing.css`

- [ ] **Step 1: Agregar estilos al final de landing.css**

Agregar al final del archivo:

```css
/* ---- Nav links ---- */
.nav__link {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  transition: color var(--transition-base), background var(--transition-base);
}
.nav__link:hover {
  color: var(--color-primary);
  background: rgba(27, 122, 61, 0.06);
}
@media (max-width: 860px) {
  .nav__link { display: none; }
}

/* ---- User section ---- */
.users__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-12);
}
@media (max-width: 720px) {
  .users__grid { grid-template-columns: 1fr; }
}
.user-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  box-shadow: var(--shadow-md);
  transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms ease;
}
.user-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}
.user-card--main {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 1px var(--color-primary), var(--shadow-md);
  grid-column: 1 / -1;
}
@media (max-width: 720px) {
  .user-card--main { grid-column: 1; }
}
.user-card__phase {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: var(--space-3);
}
.user-card__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 22px;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
}
.user-card__desc {
  color: var(--color-text-secondary);
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: var(--space-5);
}
.user-card__benefits {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.user-card__benefits li {
  font-size: 14px;
  color: var(--color-text-secondary);
  padding-left: var(--space-5);
  position: relative;
  line-height: 1.5;
}
.user-card__benefits li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: 700;
}

/* ---- Demo section ---- */
.demo__player {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: var(--space-12) auto 0;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: #000;
  box-shadow: 0 24px 80px rgba(26, 46, 34, 0.2), 0 0 0 1px rgba(27, 122, 61, 0.12);
}
.demo__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.demo__play-btn {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  color: #fff;
  cursor: pointer;
  transition: background var(--transition-base);
}
.demo__play-btn:hover {
  background: rgba(0, 0, 0, 0.55);
}
.demo__play-btn:hover .demo__play-circle {
  transform: scale(1.08);
  box-shadow: 0 8px 32px rgba(27, 122, 61, 0.4);
}
.demo__play-circle {
  width: 88px;
  height: 88px;
  border-radius: var(--radius-full);
  background: var(--gradient-primary);
  display: grid;
  place-items: center;
  box-shadow: 0 4px 20px rgba(27, 122, 61, 0.3);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}
.demo__play-circle svg { margin-left: 4px; }
.demo__play-label {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.demo__controls {
  position: absolute;
  bottom: var(--space-4);
  right: var(--space-4);
  display: flex;
  gap: var(--space-2);
}
.demo__ctrl-btn {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background var(--transition-base), transform var(--transition-base);
}
.demo__ctrl-btn:hover {
  background: rgba(0, 0, 0, 0.75);
  transform: scale(1.08);
}
.demo__ctrl-btn:active { transform: scale(0.95); }
.demo__footer {
  max-width: 900px;
  margin: var(--space-6) auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  flex-wrap: wrap;
}
.demo__disclaimer {
  font-size: 13px;
  color: var(--color-warning);
  background: var(--color-warning-bg);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid rgba(212, 147, 10, 0.15);
  flex: 1;
  min-width: 200px;
}
.demo__cta { flex-shrink: 0; }

/* ---- Tech section stack row ---- */
.stack__row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-8);
  margin-bottom: var(--space-12);
}
.stack-chip {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.stack-chip__label {
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 14px;
  color: var(--color-primary);
}
.stack-chip__desc {
  font-size: 12px;
  color: var(--color-text-secondary);
}
.tech__subtitle {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
}

/* ---- Impact metrics ---- */
.impact__metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-12);
}
@media (max-width: 860px) {
  .impact__metrics { grid-template-columns: 1fr; }
}
.impact-metric {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  box-shadow: var(--shadow-sm);
}
.impact-metric__icon {
  font-size: 28px;
  margin-bottom: var(--space-4);
}
.impact-metric__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
}
.impact-metric__text {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-4);
}
.impact-metric__tag {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-warning);
  background: var(--color-warning-bg);
  padding: 3px 8px;
  border-radius: var(--radius-sm);
  font-weight: 600;
}

/* ---- Next steps section ---- */
.nextsteps__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-12);
}
@media (max-width: 860px) {
  .nextsteps__grid { grid-template-columns: 1fr; }
}
.nextstep-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  box-shadow: var(--shadow-md);
  transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms ease;
}
.nextstep-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}
.nextstep-card__horizon {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: var(--space-2);
}
.nextstep-card__subtitle {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 20px;
  color: var(--color-text-primary);
  margin-bottom: var(--space-5);
  line-height: 1.3;
}
.nextstep-card__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.nextstep-card__list li {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.55;
  padding-left: var(--space-5);
  position: relative;
}
.nextstep-card__list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: 700;
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/src/landing/landing.css
git commit -m "feat(landing): add CSS for UserSection, DemoSection, TechSection, ImpactSection, NextStepsSection"
```

---

### Task 12: Verificación visual final

- [ ] **Step 1: Iniciar el servidor de desarrollo**

```bash
cd apps/web && npm run dev
```

- [ ] **Step 2: Verificar en el navegador**

Abrir `http://localhost:5173` y comprobar:
- [ ] Hero muestra solo la animación cinematica (sin video)
- [ ] Sección 01 "Problema identificado" es visible con los 3 stat-cards
- [ ] Sección 02 "A quién ayuda" muestra 4 tarjetas (universidad destacada arriba)
- [ ] Sección 03 "Enfoque de solución" muestra las 3 fases
- [ ] Sección 04 "Demo funcional" muestra el video con botón de play siempre visible
- [ ] El botón de play inicia el video correctamente
- [ ] Sección 05 "Tecnología utilizada" muestra el stack + 5 roles de IA
- [ ] Sección 06 "Impacto esperado" muestra before/after + 3 métricas
- [ ] Sección 07 "Próximos pasos" muestra 3 tarjetas de horizonte temporal
- [ ] Sección "El equipo" y CTA están intactas
- [ ] La Nav muestra los links correctos
- [ ] No hay errores en consola
