# Aplicación de IA — GreenSpark

**Equipo:** HackHeroes · **Mención:** ENERGÍA · **Lugar:** Santa Cruz de la Sierra, Bolivia

> Este documento cubre los criterios **"Calidad técnica de la IA" (20 pts)** e **"Integración de API, agentes de IA y librerías" (15 pts)**. La IA de GreenSpark es **real, ejecutable y no decorativa**.

---

## 1. Resumen: 3 usos reales de IA

| # | Componente de IA | Tipo de IA | Tecnología | Valor que aporta |
|---|---|---|---|---|
| 1 | **Predicción de rendimiento energético** | Aprendizaje supervisado (regresión) | scikit-learn | Estima energía/CO₂ por residuo mejor que una regla fija |
| 2 | **Optimización de recolección** | Optimización combinatoria (VRP) | Google OR-Tools | Rutas que minimizan km, costo y emisiones |
| 3 | **Agente "Asesor GreenSpark"** | LLM / agente conversacional | DeepSeek API | Explica resultados y redacta el reporte ESG |

---

## 2. Componente 1 — Predicción de rendimiento energético (el corazón)

**Problema que resuelve:** ¿cuánta energía, compost y CO₂ evitado produce *este* residuo específico? Una regla de tres no basta: el rendimiento varía por mezcla, humedad y estacionalidad.

- **Entrada (features):**
  - `tipo_residuo` (comida cocida, frutas/verduras, poda, mixto, etc.)
  - `volumen_kg`
  - `humedad_estimada` (derivada del tipo + clima vía Open-Meteo)
  - `mes / estacionalidad` (época seca/húmeda en Santa Cruz)
  - `nivel_contaminacion` (proporción de inorgánico mezclado)
- **Salida (targets):** `m3_biogas`, `kwh_electricidad`, `kg_compost`, `kg_co2e_evitado`.
- **Modelo recomendado:** regresión con **Gradient Boosting / RandomForest** (scikit-learn). Ligero, corre en CPU, sin GPU, entrena en segundos. Alternativa simple: regresión lineal multivariable como baseline interno.
- **Datos de entrenamiento:**
  - **Base real:** coeficientes de potencial bioquímico de metano (BMP) por sustrato, de literatura (FAO / IEA Bioenergy) → ver coeficientes canónicos del documento técnico.
  - **Aumento:** generación de un dataset con variación realista (ruido, mezclas, estacionalidad) sobre esos coeficientes, claramente documentado como derivado.
- **Métricas de evaluación:** MAE y RMSE sobre conjunto de prueba; R².
- **Prueba de que la IA aporta valor (clave para el jurado):**
  - **Baseline:** coeficiente fijo (200 kWh/t para todo).
  - **Modelo:** ajusta por tipo, humedad y estacionalidad.
  - Mostramos que el modelo **reduce el error** frente al baseline ante residuos heterogéneos → la IA no es decorativa, *mejora la decisión*.
- **Flujo de inferencia:** el backend FastAPI carga el modelo entrenado (`.pkl`) y responde la predicción en milisegundos al registrar un residuo.

---

## 3. Componente 2 — Optimización de recolección (VRP)

**Problema que resuelve:** dadas N ubicaciones de generadores y M plantas, ¿cuál es la ruta de recolección más eficiente?

- **Tecnología:** **Google OR-Tools** (librería abierta de optimización), problema de ruteo de vehículos (VRP).
- **Entrada:** coordenadas de generadores y plantas, volúmenes, capacidad del vehículo.
- **Objetivo:** minimizar distancia/costo/emisiones; priorizar generadores de mayor rendimiento y residuo más fresco.
- **Salida:** secuencia de recolección + distancia total + emisiones de transporte estimadas, dibujada en el mapa (Leaflet/OpenStreetMap).
- **Por qué cuenta como IA:** es **optimización combinatoria** (búsqueda en espacio NP-duro), una rama clásica de la IA, no una simple ordenación.

---

## 4. Componente 3 — Agente conversacional "Asesor GreenSpark"

**Problema que resuelve:** el usuario de negocio no quiere leer tablas; quiere preguntar y entender.

- **Tecnología:** **DeepSeek API** (LLM por API — sin modelo local, sin hardware, cumple la restricción del equipo).
- **Patrón:** **agente con herramientas (function calling) + RAG ligero**:
  - El LLM **no inventa números**: invoca funciones del backend (`predecir_rendimiento`, `consultar_impacto`, `optimizar_ruta`) y **razona sobre los resultados reales**.
  - Contexto inyectado: datos del generador + coeficientes + resultados del modelo.
- **Capacidades:**
  - Responde: *"¿Cuánta energía genera la UCB al mes y cuánto CO₂ evita?"*
  - Explica el porqué de una predicción.
  - **Redacta el reporte de sostenibilidad (ESG)** en lenguaje formal listo para presentar.
- **Anti-alucinación:** todas las cifras provienen del backend; el LLM solo interpreta y redacta. Esto cumple el punto 14 de los lineamientos ("no falsificar IA").
- **Fallback documentado:** si la API no responde, el sistema entrega los resultados numéricos del backend sin la capa conversacional (degradación elegante).

---

## 5. APIs, librerías y herramientas (criterio de integración — 15 pts)

| Herramienta | Rol | Tipo |
|---|---|---|
| **DeepSeek API** | Agente conversacional + redacción ESG | API LLM |
| **scikit-learn** | Modelo de predicción de rendimiento | Librería ML |
| **Google OR-Tools** | Optimización de rutas (VRP) | Librería |
| **Open-Meteo API** | Clima/estacionalidad de Santa Cruz | API abierta (gratis) |
| **Leaflet + OpenStreetMap** | Mapa y visualización de rutas | Librería + datos abiertos |
| **pandas / numpy** | Procesamiento de datos | Librerías |
| **FastAPI** | Orquestación de los servicios de IA | Framework |

---

## 6. Diagrama del flujo de IA

```
Usuario (generador)
   │  registra residuo (tipo, kg)
   ▼
FastAPI ──► [scikit-learn] predice biogás/kWh/CO₂   ◄── Open-Meteo (estacionalidad)
   │                                   │
   │        [OR-Tools] optimiza ruta   │
   │                                   ▼
   └──► [DeepSeek API] el agente lee los resultados reales,
        explica al usuario y redacta el reporte ESG
   ▼
Respuesta: números (modelo) + ruta (mapa) + texto (agente)
```

---

## 7. Cómo se demuestra en vivo (evidencia funcional)

1. Registrar un residuo y ver la **predicción del modelo** al instante.
2. Cambiar el tipo/estacionalidad y ver cómo **la predicción cambia** (el modelo "razona", no es fijo).
3. Ver la **ruta optimizada** en el mapa.
4. Preguntarle al **agente** en lenguaje natural y recibir respuesta + reporte ESG.
5. Mostrar la **métrica modelo vs. baseline** (la IA mejora la estimación).

> Resultado: cubrimos calidad técnica de IA (modelo entrenado y evaluado), integración (4+ APIs/librerías) y agentes (LLM con function calling), de forma **ejecutable y honesta**.
