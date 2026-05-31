# GreenSpark Demo Video — Spec

**Fecha:** 2026-05-31  
**Duración:** 2 min (120 s · 3600 frames · 30fps)  
**Resolución:** 1920×1080  
**Herramienta:** Remotion (carpeta `Video/`)

## Objetivo

Video demo para el hackathon Build With AI 2026 (mención ENERGÍA).  
Audiencia: jurado. Combina pitch de producto + demo técnica del dashboard.

## Estilo visual

- Fondo: `#0d1a10` (verde casi negro), glow radial verde en centro
- Screenshots del app real montados como ventanas browser flotantes
- Tipografía: Outfit (display), Inter (body) — mismas que el app
- Colores de overlay: blanco + verde `#2e9e5e`
- Sin transiciones CSS; solo `interpolate()` + `Sequence` de Remotion

## Estructura de escenas

| Tiempo | Frames | Escena | Contenido |
|--------|--------|--------|-----------|
| 0:00–0:08 | 0–240 | Intro | Logo "GreenSpark" fade-in con glow verde |
| 0:08–0:22 | 240–660 | Problema | "971 t/día" + stat cards animados |
| 0:22–0:40 | 660–1200 | Solución | Screenshot landing (hero + fases) |
| 0:40–0:58 | 1200–1740 | Dashboard — Escenarios | Screenshot ScenariosPanel |
| 0:58–1:20 | 1740–2400 | Simulador MFC | Screenshot SimulatorPanel con métricas |
| 1:20–1:38 | 2400–2940 | Asesor IA | Screenshot AgentChatPanel |
| 1:38–1:50 | 2940–3300 | Impacto | 5.8 GWh/año · 14 600 t CO₂e |
| 1:50–2:00 | 3300–3600 | Cierre | Logo + "HackHeroes · Build With AI 2026" |

## Implementación

1. Scaffoldear Remotion en `Video/` con `create-video@latest --blank --no-tailwind`
2. Levantar API (`py -m uvicorn apps.api.main:app --port 8000`) y frontend (`npm run dev` en `apps/web/`)
3. Capturar screenshots con Playwright en `Video/public/`
4. Construir composición en Remotion usando screenshots + animaciones
5. Preview con `npx remotion studio`
