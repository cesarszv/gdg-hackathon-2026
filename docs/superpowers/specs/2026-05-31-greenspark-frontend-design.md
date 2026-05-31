# GreenSpark Frontend — Diseño (spec)

**Proyecto:** GreenSpark · **Equipo:** HackHeroes · **Mención:** Energía
**Fecha:** 2026-05-31 · **Estado:** Aprobado para implementación

> Fuente de verdad visual: `DESIGN.md`. Contenido narrativo: `docs/entregables_obligatorios/markdown/*`. API existente: `apps/api`.

---

## 1. Objetivo

Construir el frontend de GreenSpark: una **landing page cinematográfica con scrollytelling** que cuenta la historia del proyecto y conduce a una **consola dinámica ("Spark Console")** que consume la API FastAPI real. Debe ser **funcional de verdad** (datos en vivo, no maquetas) y respetar al pie `DESIGN.md` y los principios de honestidad de la IA (resultados SIMULADO / META_EXPLORATORIA etiquetados).

### Criterios de éxito

1. `npm run build` pasa con TypeScript en modo strict.
2. Con el backend corriendo, la consola muestra **datos en vivo** en sus 3 features (escenarios, simulador, asesor IA).
3. La landing reproduce intro cinemática → narrativa → equipo (3+3) → CTA, con scroll-linked / parallax / pinned sections.
4. Todo el movimiento degrada correctamente con `prefers-reduced-motion` (contenido 100% legible sin animación).
5. La paleta, tipografía, radios y sombras coinciden con los tokens de `DESIGN.md`.

---

## 2. Arquitectura y stack

- **Stack:** Vite + React + TypeScript (SPA). Decidido con el usuario.
- **Animación:** Lenis (smooth scroll) + GSAP + ScrollTrigger.
- **Routing:** `react-router-dom`. Dos rutas:
  - `/` → Landing
  - `/app` → Spark Console (dashboard)
- **Estado:** estado local de componente + hook de fetch delgado. Sin Redux/Zustand.
- **Conexión API:** Vite dev proxy `/api/*` → `http://localhost:8000`. Variable `VITE_API_BASE` opcional para producción; por defecto `/api`.

### Estructura de carpetas

```
apps/web/
  index.html
  package.json
  vite.config.ts          # proxy /api -> http://localhost:8000
  tsconfig.json
  src/
    main.tsx
    App.tsx
    router.tsx
    styles/
      tokens.css          # variables CSS de DESIGN.md (§12), verbatim
      global.css          # reset, base, fuentes Google, utilidades
    lib/
      api.ts              # cliente fetch tipado + tipos TS
      types.ts            # tipos de respuesta (escenarios, predicción, agente, catálogo)
      useReducedMotion.ts
    hooks/
      useLenis.ts         # provee smooth scroll global
      useScrollTrigger.ts # helper para registrar/limpiar ScrollTrigger
    landing/
      Landing.tsx
      sections/
        HeroCinematic.tsx
        ProblemSection.tsx
        SolutionSection.tsx
        AiSection.tsx
        ImpactSection.tsx
        TeamSection.tsx
        CtaSection.tsx
      components/
        Reveal.tsx        # fade/translate on enter
        Parallax.tsx      # capa con desplazamiento scroll-linked
        Counter.tsx       # número que scrub de 0 -> valor
        ScrollProgress.tsx
        ScrollHint.tsx
        Nav.tsx
    dashboard/
      Console.tsx         # layout + navegación entre paneles
      panels/
        ScenariosPanel.tsx
        SimulatorPanel.tsx
        AgentChatPanel.tsx
      components/
        Card.tsx
        Badge.tsx          # SIMULADO / MEDIDO / META_EXPLORATORIA / estabilidad / confianza
        Metric.tsx         # dato numérico en JetBrains Mono
        Field.tsx          # input/select segun DESIGN.md §4.5
        Skeleton.tsx
        EmptyState.tsx
        ErrorState.tsx
```

---

## 3. Sistema de diseño

- `tokens.css` copia las variables de `DESIGN.md` §12 (colores, gradientes, sombras, radios, tipografía, espaciado, transiciones) sin alterarlas.
- Fuentes Google: **Outfit** (display), **Inter** (cuerpo), **JetBrains Mono** (datos) vía `<link>` en `index.html`.
- Componentes siguen DESIGN.md: tarjetas radius 16px + sombra suave; botones CTA con gradiente *Amanecer Verde*; inputs con focus verde; badges por estado (§4.8); burbujas de chat (§4.7).
- **Verde funcional, no decorativo:** el verde se reserva para acciones/datos importantes; el lienzo es blanco/Niebla de Pradera.

---

## 4. Landing page (scrollytelling)

Global: barra de **scroll-progress** superior (ancho scroll-linked, Verde Cruceño) + nav minimal sticky con CTA "Consola".

| # | Sección | Contenido (verbatim de entregables) | Técnica de scroll |
|---|---------|-------------------------------------|-------------------|
| 0 | **HeroCinematic** | "HackHeroes presenta…" aparece y se desvanece → resuelve en logotipo **Green Spark** con glow sutil tipo chispa/hoja | Pinned full-screen; opacidad/escala **scrubbed** al scroll; ScrollHint |
| 1 | **Problema** | `1.909,86 t/día`, `50,84%`, **`971 t/día`** orgánico compostable (PMGIRS 2023) | Counters scrub 0→valor; capas parallax de fondo |
| 2 | **Solución (ruta MFC)** | Fase 1 Investigación (hasta 10%), Fase 2 Pilotos (hasta 10%), Fase 3 Escalamiento (hasta 20%). Etiqueta: *metas exploratorias sujetas a validación* | **Pinned**; track horizontal de fases avanza con el scroll |
| 3 | **IA honesta** | 5 roles: comparar · estimar · recomendar · detectar anomalías · explicar — "no inventa cifras"; baseline transparente | Reveals escalonados scroll-linked |
| 4 | **Impacto** | Tabla Antes → Después; beneficiarios (universidades, colegios, restaurantes, agroindustria) | Wipe a dos columnas on-enter |
| 5 | **Equipo HackHeroes** | 6 integrantes en **grid 3+3**: Cesar Sebastian Zambrana Ventura, Emanuel Justiniano Peralta, Fabian Serrano Catari, Juan David Mercado Montenegro, Raquel Sahonero Salas, Thiago Andre Moreno Velasco | Cards suben y se asientan con stagger al entrar |
| 6 | **CTA** | "Entrá a la consola" → `/app` | Botón gradiente *Amanecer Verde* |

Toda cifra mantiene su etiqueta de evidencia/honestidad. Con `prefers-reduced-motion`, las secciones se renderizan estáticas y legibles (sin pin/scrub/parallax).

---

## 5. Dashboard — Spark Console

Layout con navegación entre 3 paneles. Todos con estados loading (Skeleton) / vacío (EmptyState) / error (ErrorState).

### 5.1 Panel Escenarios
- `GET /api/escenarios` → lista de tarjetas (MFC-SCZ-001…008) con badge de `evidence_state`.
- Click en tarjeta → `GET /api/escenarios/{id}` → panel de detalle: sustrato, institución, configuración MFC, `latest_prediction` (si existe), recomendaciones.

### 5.2 Panel Simulador
- Carga catálogos: `GET /api/catalogo/sustratos`, `/api/catalogo/instituciones`, `/api/catalogo/configuraciones-mfc`.
- Formulario: sustrato (select), institución (select, opcional), configuración MFC (select, opcional), pH, temperatura_c (campos numéricos). Mapea a `inputs` de `predict_baseline`: `cod_estimated_mg_l`, `humidity_pct`, `contamination_pct` (derivados del sustrato elegido), `ph`, `temperature_c`, `electrode_area_cm2`, `external_resistance_ohm`, `electrode_material` (de la config elegida).
- `POST /api/predecir` con `{ inputs, persist:false }` → muestra: voltaje (V), corriente (mA), potencia (mW), densidad (mW/m²), **badge estabilidad** (alta/media/baja), **indicador de confianza** (baja/muy_baja), `assumptions`, `warnings`, y banner "SIMULACIÓN".
- Errores 422 (validación física) → se muestran inline desde `detail`.

### 5.3 Panel Asesor IA (chat)
- Selección de escenario (de la lista) → `POST /api/agente` con `{ scenario_id }`.
- Render en burbujas estilo DESIGN.md §4.7. Muestra `source` (`llm` o `fallback`) explícitamente → nunca finge la IA.
- Funciona sin API key (fallback determinista). `warnings` se muestran como nota.

> Fuera de alcance en este pase: comparador, recomendador, reportes, mapa OR-Tools (sin endpoint de ruteo). Documentado como extensión futura.

---

## 6. Capa de datos y errores

- `lib/api.ts`: cliente `fetch` único, base configurable, parseo JSON, manejo de errores HTTP. Convierte 422 `{detail: [...]}` en errores de formulario; otros errores → `ErrorState` con reintento.
- `lib/types.ts`: tipos TS estrechos que reflejan los serializers (`scenario_summary`, `scenario_detail`, salida de `predict_baseline`, salida de `explain`, dicts de catálogo).
- Hook de fetch delgado (`useAsync`) con `{ data, loading, error, run }`.

---

## 7. Cómo correr / verificación

- Backend: `uvicorn apps.api.main:app --reload` (puerto 8000). DB ya sembrada (`database/greenspark.db`).
- Frontend: `cd apps/web && npm install && npm run dev` (proxy a 8000).
- **Verificación antes de declarar completo:**
  1. `npm run build` pasa (TS strict).
  2. Con backend arriba: los 3 paneles devuelven datos en vivo (escenarios reales, predicción calculada, explicación del agente con `source` visible).
  3. Landing: intro cinemática, counters, pinned solución, equipo 3+3, CTA navega a `/app`.
  4. `prefers-reduced-motion`: contenido legible sin animación.

---

## 8. Decisiones y exclusiones

- Sin charts en v1 (KPIs numéricos en mono). Sin librería de estado global. Sin SSR.
- Mapa OR-Tools, comparador, recomendador y reportes: **excluidos** de este pase (riesgo de deadline / falta endpoint de ruteo). Posible extensión posterior con el mismo cliente API.
- Paths con forward slashes; localización 100% Santa Cruz de la Sierra.
