# GreenSpark Web

Frontend de GreenSpark (HackHeroes): **landing scrollytelling** + **Spark Console** (dashboard que consume la API FastAPI real).

- **Stack:** Vite + React + TypeScript
- **Animación:** GSAP + ScrollTrigger + Lenis (scroll-driven, parallax, pinned sections). Degrada a contenido estático con `prefers-reduced-motion`.
- **Diseño:** estricto a `DESIGN.md` (tokens en `src/styles/tokens.css`).

## Correr en desarrollo

Necesitas el **backend** corriendo en `:8000` (Vite proxea `/api/*` hacia ahí):

```bash
# Terminal 1 — backend (desde la raíz del repo, con el venv)
.venv/Scripts/python -m uvicorn apps.api.main:app --port 8000 --reload

# Terminal 2 — frontend
cd apps/web
npm install
npm run dev
```

Abre **http://localhost:5173**. La landing está en `/`; la consola en `/app`.

## Build de producción

```bash
npm run build      # tsc -b && vite build  -> dist/
npm run preview    # sirve dist/ localmente
```

Para apuntar a una API en otro origen, define `VITE_API_BASE` (por defecto `/api`).

## Estructura

```
src/
  landing/    # intro cinemática, problema, solución (pinned), IA, impacto, equipo (3+3), CTA
  dashboard/  # Spark Console: Escenarios, Simulador (POST /predecir), Asesor IA (POST /agente)
  lib/        # api.ts (cliente tipado), types.ts, useAsync, useReducedMotion
  hooks/      # useLenis (smooth scroll + ScrollTrigger sync)
  styles/     # tokens.css (DESIGN.md), global.css
```

## Honestidad de la IA

Los resultados se etiquetan `SIMULADO` / `META_EXPLORATORIA`; el asesor muestra su `source` (`llm` o `fallback`) y nunca inventa cifras. Funciona sin API key (fallback determinista).
