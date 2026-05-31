# Landing Page Refactor — GreenSpark

**Fecha:** 2026-05-31  
**Equipo:** HackHeroes · Build With AI 2026

---

## Problema que resuelve este refactor

1. El botón de reproducir video está dentro de `hero__video-wrap`, que arranca con `opacity: 0` controlado por GSAP. Si el scroll no sincroniza correctamente, el botón queda invisible o inaccesible.
2. La página no cubre las 7 secciones obligatorias del hackathon: falta "Usuario o beneficiario", "Demo funcional" como sección propia, y "Próximos pasos".
3. El contenido no refleja toda la información de los documentos técnicos del proyecto.

---

## Estructura aprobada

| Orden | ID | Componente | Cambio |
|---|---|---|---|
| — | `#hero` | `HeroCinematic` | Eliminar todo el bloque de video |
| 01 | `#problema` | `ProblemSection` | Actualizar eyebrow |
| 02 | `#beneficiarios` | `UserSection` | **Nuevo** |
| 03 | `#solucion` | `SolutionSection` | Actualizar eyebrow y contenido |
| 04 | `#demo` | `DemoSection` | **Nuevo** — video player aquí |
| 05 | `#tecnologia` | `TechSection` | Renombrar AiSection + expandir stack |
| 06 | `#impacto` | `ImpactSection` | Actualizar eyebrow + contenido |
| 07 | `#proximos-pasos` | `NextStepsSection` | **Nuevo** |
| — | `#equipo` | `TeamSection` | Sin cambios |
| — | `#cta` | `CtaSection` | Sin cambios |

---

## Cambios por componente

### HeroCinematic.tsx
- Eliminar: `videoRef`, `isPlaying`, `muted`, `handlePlay`, `toggleMute`, el div `.hero__video-wrap` completo y todo su contenido.
- Conservar: GSAP animation (`hero__presents` → `hero__title-wrap` + `hero__tagline`), `ScrollHint`.
- Resultado: hero limpio y cinematico, sin dependencia de video.

### UserSection.tsx (nuevo)
- Eyebrow: `02 — A quién ayuda`
- Título: `Instituciones que necesitan medir su impacto ambiental`
- 4 tarjetas de actores:
  - Universidades privadas (cliente principal fase 1): investigación aplicada, dataset local, reporte de sostenibilidad.
  - Colegios + restaurantes + agroindustrias (fase 2): pilotos, trazabilidad de residuos.
  - Sector agropecuario (fase 3): subproductos caracterizados.
- Tarjeta de universidades destacada visualmente.
- Contenido desde: `04 solucion propuesta.md` sección "Usuario objetivo".

### DemoSection.tsx (nuevo)
- Eyebrow: `04 — Demo funcional`
- Título: `La Spark Console en acción`
- Video player: `/video/hero.mp4`, siempre visible (sin GSAP opacity 0).
- Botón play centrado sobre el video desde el primer render.
- Control de mute en esquina inferior derecha cuando está reproduciendo.
- Disclaimer debajo: `[SIMULADO] Los escenarios mostrados son simulaciones basadas en literatura científica.`
- Enlace secundario: "Probar la consola en vivo →"

### TechSection.tsx (renombrado de AiSection)
- Eyebrow: `05 — Tecnología utilizada`
- Título: `Un stack construido para investigar, no para impresionar`
- Mantener los 5 roles de la IA (Compara, Estima, Recomienda, Detecta, Explica) bajo subtítulo "Cómo funciona la IA".
- Agregar fila de tecnologías: React · FastAPI · scikit-learn · LLM opcional (Gemini) · SQLite.
- Contenido desde: `07 arquitectura tecnologica.md` y `06 aplicacion de ia.md`.

### ImpactSection.tsx
- Eyebrow: `06 — Impacto esperado`
- Actualizar before/after con contenido de `05 impacto esperado.md`.
- Agregar 3 métricas de impacto como tarjetas: energético, ambiental, educativo.

### NextStepsSection.tsx (nuevo)
- Eyebrow: `07 — Próximos pasos`
- Título: `La ruta desde la investigación hasta el piloto`
- 3 bloques de horizonte temporal:
  - Corto plazo (hackathon → fase investigativa): simulación, diseño MFC, validación universitaria.
  - Mediano plazo (piloto físico): reactor real, sensores, dataset local.
  - Largo plazo (escalamiento): biodigestores o soluciones híbridas cuando la evidencia lo justifique.
- Contenido desde: `05 impacto esperado.md` sección "Horizonte temporal".

### Nav.tsx
- Agregar links visibles: `#demo` y `#proximos-pasos`.

### Landing.tsx
- Reordenar imports y JSX con el nuevo orden de secciones.
- Renombrar `AiSection` → `TechSection`.

---

## Principios de contenido

- Lenguaje simple y humano: nada de jerga sin explicar.
- Honestidad técnica: datos etiquetados como `[SIMULADO]` o `[META EXPLORATORIA]`.
- Números reales donde los hay (971 t/día, PMGIRS 2023).
- No prometer lo que no está construido.

---

## Archivos a crear
- `apps/web/src/landing/sections/UserSection.tsx`
- `apps/web/src/landing/sections/DemoSection.tsx`
- `apps/web/src/landing/sections/NextStepsSection.tsx`

## Archivos a modificar
- `apps/web/src/landing/sections/HeroCinematic.tsx`
- `apps/web/src/landing/sections/ProblemSection.tsx`
- `apps/web/src/landing/sections/SolutionSection.tsx`
- `apps/web/src/landing/sections/AiSection.tsx` → renombrar export a `TechSection`
- `apps/web/src/landing/sections/ImpactSection.tsx`
- `apps/web/src/landing/components/Nav.tsx`
- `apps/web/src/landing/Landing.tsx`
- `apps/web/src/landing/landing.css` (estilos para secciones nuevas)
