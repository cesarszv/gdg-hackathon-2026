# Nav UX + Video Player Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ocultar la nav hasta que el usuario llegue al CTA, y limpiar el reproductor de video eliminando bugs de performance y elementos innecesarios.

**Architecture:** Nav usa `IntersectionObserver` sobre `#cta` para activar su aparición con fade + slide. Video player cambia `preload`, elimina el placeholder visual y la etiqueta de texto del play, y corrige el estado inicial de `muted`.

**Tech Stack:** React, TypeScript, GSAP (ya instalado), CSS custom properties del design system existente.

---

### Task 1: Agregar `id="cta"` a CtaSection

**Files:**
- Modify: `apps/web/src/landing/sections/CtaSection.tsx`

- [ ] **Step 1: Agregar id al elemento raíz**

En `CtaSection.tsx`, cambiar:
```tsx
<section className="cta">
```
por:
```tsx
<section className="cta" id="cta">
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/src/landing/sections/CtaSection.tsx
git commit -m "feat(landing): add id=cta anchor for nav IntersectionObserver"
```

---

### Task 2: Nav — aparecer al llegar al CTA

**Files:**
- Modify: `apps/web/src/landing/components/Nav.tsx`
- Modify: `apps/web/src/landing/landing.css`

- [ ] **Step 1: Reemplazar lógica de Nav.tsx**

Reemplazar el contenido completo de `Nav.tsx` con:
```tsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
    <nav className={`nav nav--solid${visible ? " nav--visible" : ""}`}>
      <div className="container nav__inner">
        <a href="#hero" className="nav__brand">
          <span className="nav__spark" aria-hidden>&#9889;</span> GreenSpark
        </a>
        <div className="nav__links">
          <Link to="/app" className="btn btn-primary">Abrir consola</Link>
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Actualizar CSS de la nav**

En `landing.css`, reemplazar el bloque `.nav` y `.nav--solid` existentes con:
```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 90;
  padding: var(--space-3) 0;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border-bottom: 1px solid var(--glass-border);
  box-shadow: var(--shadow-sm);
  opacity: 0;
  pointer-events: none;
  transform: translateY(-8px);
  transition: opacity 400ms ease, transform 400ms ease;
}
.nav--visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
```
Eliminar el bloque `.nav--solid { ... }` ya que el fondo blur es ahora el estado base.

- [ ] **Step 3: Verificar en el navegador**

Iniciar el servidor de dev (`npm run dev` o el comando equivalente del proyecto) y comprobar:
- La nav es invisible al cargar la página
- Al hacer scroll hasta la sección CTA, la nav aparece con fade suave
- Una vez visible, no desaparece

- [ ] **Step 4: Commit**

```bash
git add apps/web/src/landing/components/Nav.tsx apps/web/src/landing/landing.css
git commit -m "feat(landing): nav appears only when CTA section enters viewport"
```

---

### Task 3: Video Player — limpiar y corregir bugs de performance

**Files:**
- Modify: `apps/web/src/landing/sections/HeroCinematic.tsx`
- Modify: `apps/web/src/landing/landing.css`

- [ ] **Step 1: Corregir HeroCinematic.tsx**

Reemplazar el contenido completo de `HeroCinematic.tsx` con:
```tsx
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { ScrollHint } from "../components/ScrollHint";

gsap.registerPlugin(ScrollTrigger);

const VIDEO_SRC = "/video/hero.mp4";

export function HeroCinematic() {
  const root = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useLayoutEffect(() => {
    if (reduced || !root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=200%",
          scrub: 0.6,
          pin: true,
        },
      });
      tl.fromTo(".hero__presents", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1 })
        .to(".hero__presents", { opacity: 0, y: -24, duration: 1 }, ">0.4")
        .fromTo(
          ".hero__video-wrap",
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 1 },
          ">0.2",
        )
        .to(".hero__video-wrap", { opacity: 0, scale: 0.96, duration: 1 }, ">1.5")
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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onEnded = () => {
      gsap.to(".hero__video-wrap", { opacity: 0, scale: 0.96, duration: 0.6, overwrite: true });
      gsap.fromTo(
        ".hero__title-wrap",
        { opacity: 0, scale: 0.86, filter: "blur(8px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, delay: 0.3 },
      );
      gsap.fromTo(
        ".hero__tagline",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6 },
      );
      setIsPlaying(false);
    };
    video.addEventListener("ended", onEnded);
    return () => video.removeEventListener("ended", onEnded);
  }, []);

  const handlePlay = () => {
    if (!videoRef.current) return;
    gsap.to(".hero__presents", { opacity: 0, duration: 0.3, overwrite: true });
    gsap.fromTo(
      ".hero__video-wrap",
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 0.6, overwrite: true },
    );
    videoRef.current.muted = false;
    videoRef.current.play().catch(() => {
      videoRef.current!.muted = true;
      setMuted(true);
      videoRef.current!.play();
    });
    setIsPlaying(true);
    setMuted(false);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <header className="hero" id="hero" ref={root}>
      <div className="hero__glow" aria-hidden="true" style={{ opacity: reduced ? 1 : undefined }} />
      {!reduced && (
        <p className="hero__presents">
          <b>HackHeroes</b>&nbsp; presenta&hellip;
        </p>
      )}
      {!reduced && (
        <div className="hero__video-wrap" aria-hidden="true">
          <video
            ref={videoRef}
            className="hero__video"
            src={VIDEO_SRC}
            muted
            playsInline
            preload="metadata"
            loop={false}
          />
          {!isPlaying && (
            <button
              type="button"
              className="hero__video-play"
              onClick={handlePlay}
              aria-label="Reproducir video con sonido"
            >
              <div className="hero__play-circle">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </div>
            </button>
          )}
          {isPlaying && (
            <button
              type="button"
              className="hero__video-sound"
              onClick={toggleMute}
              aria-label={muted ? "Activar sonido" : "Silenciar"}
            >
              {muted ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          )}
        </div>
      )}
      <div className="hero__title-wrap">
        <h1 className="hero__title">
          Green<span className="spark">Spark</span>
        </h1>
        <p className="hero__tagline">
          Plataforma de IA que convierte los residuos bioorganicos de Santa Cruz de la Sierra en decisiones energeticas medibles.
        </p>
      </div>
      <ScrollHint />
    </header>
  );
}
```

**Cambios clave respecto al original:**
- `preload="metadata"` (antes `"auto"`) — no descarga el video al cargar la página
- `useState(true)` para `muted` — refleja el estado real del elemento `<video muted>`
- Eliminado `videoLoaded` state y `hero__video-placeholder` — el video-wrap empieza con `opacity: 0` por GSAP
- Eliminado `onLoadedData` del video
- Eliminado `.hero__play-label` del JSX
- `setMuted(false)` en `handlePlay` al intentar reproducir con sonido
- Segundo `useLayoutEffect` → `useEffect` (no necesita sincronía con el DOM)

- [ ] **Step 2: Limpiar CSS en landing.css**

Eliminar los siguientes bloques CSS (ya no tienen elementos correspondientes en el JSX):

```css
/* ELIMINAR este bloque completo: */
.hero__video-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  background: linear-gradient(135deg, rgba(26, 46, 34, 0.85), rgba(27, 122, 61, 0.7));
  color: rgba(255, 255, 255, 0.8);
  font-family: var(--font-mono);
  font-size: 14px;
  letter-spacing: 0.04em;
}
.hero__video-placeholder svg {
  opacity: 0.6;
}

/* ELIMINAR este bloque completo: */
.hero__play-label {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  opacity: 0.9;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}
```

- [ ] **Step 3: Verificar comportamiento del video**

Comprobar en el navegador:
- La página carga sin descargar el video completo (verificar en Network tab de DevTools — el video no debe aparecer como cargado al abrir la página)
- El botón de play aparece sobre el video (sin la etiqueta de texto debajo)
- Al hacer click en play, el video intenta reproducir con sonido; si el navegador lo bloquea, cae a muted automáticamente
- El botón de mute/unmute funciona correctamente durante la reproducción
- Al terminar el video, el hero vuelve al título

- [ ] **Step 4: Commit**

```bash
git add apps/web/src/landing/sections/HeroCinematic.tsx apps/web/src/landing/landing.css
git commit -m "perf(landing): fix video preload, clean player UI, fix muted state"
```
