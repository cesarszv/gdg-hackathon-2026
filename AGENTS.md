# 🌿 GreenSpark — Agent Instructions

> **Proyecto:** GreenSpark · **Equipo:** HackHeroes · **Mención:** Energía
> **Evento:** Hackathon Build With AI 2026 — GDG & WTM Santa Cruz
> **Ubicación:** Santa Cruz de la Sierra, Bolivia

---

## 1. Contexto del proyecto

GreenSpark es una plataforma de **investigación y simulación de economía circular** que convierte residuos bioorgánicos de Santa Cruz de la Sierra en **decisiones energéticas medibles** mediante Inteligencia Artificial.

Santa Cruz produce **1.909,86 t de residuos/día**; el **50,84 %** es orgánico compostable (~971 t/día). GreenSpark investiga cómo transformar ese flujo en energía distribuida y subproductos con potencial agronómico.

### Ruta de implementación

| Fase | Descripción | Meta energética |
| --- | --- | --- |
| **Fase 1** | Universidades financian investigación y simulación de reactores MFC | Explorar hasta **10 %** de aporte a cargas seleccionadas |
| **Fase 2** | Pilotos MFC instrumentados en colegios, restaurantes e industrias | Explorar hasta **10 %** de aporte a cargas seleccionadas |
| **Fase 3** | Evaluación de biodigestores o soluciones híbridas a escala | Evaluar hasta **20 %** de aporte con tecnologías de mayor capacidad |

> ⚠️ Los porcentajes son **metas exploratorias sujetas a validación**, no ahorros garantizados.

---

## 2. Instrucción obligatoria

Antes de tomar cualquier decisión de diseño, arquitectura o contenido, **revisa y alinéate** con los siguientes documentos:

- `docs/Build_With_AI_2026_Lineamientos_CompletosV1.md` — Bases oficiales de la hackathon
- `DESIGN.md` — Sistema de diseño visual (*source of truth* del frontend)
- `README.md` — Descripción general, arquitectura y documentación enlazada

---

## 3. Plazos y deadlines

| Hito | Fecha y hora |
| --- | --- |
| Inicio oficial del evento | `2026-05-29 18:00` (BOT) |
| Desarrollo intensivo | `2026-05-29` — `2026-05-30` |
| **Entrega final** | `2026-05-31 10:00` (BOT) — **sin extensión** |
| Demo Day — Fase 1 | `2026-05-31 10:00` |
| Demo Day — Fase 2 y premiación | `2026-05-31 14:00` |

> 🚨 Todo debe estar pusheado al repositorio **antes de las 10:00 del 31 de mayo**. No hay prórroga.

---

## 4. Equipo HackHeroes

- Cesar Sebastian Zambrana Ventura
- Emanuel Justiniano Peralta
- Fabian Serrano Catari
- Juan David Mercado Montenegro
- Raquel Sahonero Salas
- Thiago Andre Moreno Velasco

---

## 5. Criterios de evaluación

| Criterio | Puntaje | Cómo lo abordamos |
| --- | ---: | --- |
| Impacto y relevancia del problema | 20 pts | Datos reales de residuos de SCZ (PMGIRS 2023), problema verificable y local |
| Calidad técnica de la IA | 20 pts | Modelos predictivos con pandas/numpy/scikit-learn + agente explicativo vía LLM |
| Innovación y creatividad | 15 pts | MFC + IA + escalamiento circular: ruta tecnológica original |
| Integración de API, agentes de IA y librerías | 15 pts | FastAPI, Google OR-Tools, LLM API, telemetría futura |
| Aplicación de FODA, PESTEL y Lean Canvas | 10 pts | Documentos completos en `docs/entregables_obligatorios/` |
| Escalabilidad y sostenibilidad | 10 pts | SQLite → PostgreSQL, modelo de negocio con universidades y CAINCO |
| Calidad del pitch y presentación | 10 pts | Pitch en `docs/pitch/PITCH.md`, video ≤ 2 min |
| **Bonus** | +10 pts | Solución 100 % aplicable y funcional demostrada |
| **Total posible** | **110 pts** | |

---

## 6. Stack tecnológico

| Capa | Tecnología |
| --- | --- |
| Frontend | React |
| Backend | Python + FastAPI |
| Base de datos | SQLite |
| IA / ML | pandas, numpy, scikit-learn |
| Agente explicativo | LLM por API |
| Optimización de rutas | Google OR-Tools |
| Piloto futuro | Microcontrolador + sensores (voltaje, corriente, pH, temperatura) |

---

## 7. Arquitectura del sistema

```text
[ Interfaz institucional (React) ]
          │
          ▼
[ API de simulación y reportes (FastAPI) ]
          │
          ├──► [ baseline + modelo predictivo ]
          ├──► [ recomendador de experimentos ]
          └──► [ agente explicativo (LLM) ]

Fase 2 (futura):
[ sensores del reactor MFC ] ──► [ telemetría ] ──► [ dataset local ]
```

---

## 10. Convenciones para agentes

### Localización

- Todo contenido, ejemplo, mapa o analogía debe estar enfocado en **Santa Cruz de la Sierra, Bolivia**.

### Principios de IA

- **Transparencia:** No falsificar funcionalidades de IA. Mostrar confiabilidad de predicciones.
- **Trazabilidad:** Cada predicción debe incluir indicador de confianza y fuente de datos.
- **Honestidad:** Los resultados energéticos son exploratorios, no garantías comerciales.

### Código

- Priorizar legibilidad y documentación.
- Mantener comentarios existentes que no estén relacionados con cambios actuales.
- Paths con forward slashes (`/`), no backslashes (`\`).

---

## 11. Reglas de la hackathon (resumen)

- ✅ Permitido: herramientas cloud, APIs, frameworks, modelos open-source.
- ❌ Prohibido: plagio, falsificar IA.

---
