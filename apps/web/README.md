# GreenSpark Web

Frontend de GreenSpark (HackHeroes): **landing scrollytelling** + **Spark
Console** que consume la API FastAPI real.

- **Stack:** Vite + React + TypeScript
- **Animacion:** GSAP + ScrollTrigger + Lenis
- **Diseno:** tokens compartidos en `src/styles/tokens.css`

## Correr en desarrollo

Necesitas el backend en `:8000`; Vite proxea `/api/*` hacia ese servicio:

```bash
# Terminal 1: backend desde la raiz
.venv/Scripts/python -m uvicorn apps.api.main:app --port 8000 --reload

# Terminal 2: frontend
cd apps/web
npm install
npm run dev
```

Abre **http://localhost:5173**. La landing esta en `/`; la consola en `/app`.

## Build de produccion

```bash
npm run build
npm run preview
```

Para apuntar a otra API, define `VITE_API_BASE` (por defecto `/api`).

## Estructura

```text
src/
  landing/    # narrativa principal
  dashboard/  # Escenarios, Simulador, Asesor IA conversacional
  lib/        # cliente API y tipos
  hooks/      # smooth scroll
  styles/     # tokens y estilos globales
```

## Honestidad de la IA

El asesor responde preguntas libres usando un snapshot de solo lectura
construido por FastAPI desde SQLite: escenarios, predicciones, recomendaciones,
reportes y `192` lecturas ficticias de telemetria. Los resultados se etiquetan
`SIMULADO` / `META_EXPLORATORIA`; el asesor muestra su origen (`llm` o
`fallback`) y nunca inventa cifras. Funciona sin API key mediante fallback
determinista.
