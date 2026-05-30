# GreenSpark: Aplicación de IA

**Equipo:** HackHeroes · **Mención:** Energía · **Lugar:** Santa Cruz de la Sierra, Bolivia

> Este documento cubre los criterios **"Calidad técnica de la IA" (20 puntos)** e **"Integración de API, agentes de IA y librerías" (15 puntos)**. La IA de GreenSpark es **real, ejecutable y útil para la toma de decisiones**.

## 1. Resumen: 3 usos reales de IA

| # | Componente de IA | Tipo de IA | Tecnología | Valor que aporta |
| --- | --- | --- | --- | --- |
| 1 | **Predicción de rendimiento energético** | Aprendizaje supervisado (regresión) | scikit-learn | Estima energía/CO₂ por residuo mejor que una regla fija |
| 2 | **Optimización de recolección** | Optimización combinatoria (VRP) | Google OR-Tools | Rutas que minimizan km, costo y emisiones |
| 3 | **Agente "Asesor GreenSpark"** | LLM / agente conversacional | DeepSeek API | Explica resultados y redacta el reporte ESG |

## 2. Componente 1: predicción de rendimiento energético

**Problema que resuelve:** ¿cuánta energía, compost y CO₂ evitado produce *este* residuo específico? Una regla de tres no basta: el rendimiento varía por mezcla, humedad y estacionalidad.

### 2.1 Entradas

- **Variables (`features`):**
  - `tipo_residuo` (comida cocida, frutas/verduras, poda, mixto, etc.)
  - `volumen_kg`
  - `humedad_estimada` (derivada del tipo y del clima mediante Open-Meteo)
  - `mes / estacionalidad` (época seca o húmeda en Santa Cruz)
  - `nivel_contaminacion` (proporción de inorgánico mezclado)

### 2.2 Salidas

- **Resultados (`targets`):** `m3_biogas`, `kwh_electricidad`, `kg_compost`, `kg_co2e_evitado`.

### 2.3 Modelo y datos de entrenamiento

- **Modelo recomendado:** regresión con **Gradient Boosting** o **Random Forest** mediante scikit-learn. Es ligero, funciona en CPU, no requiere GPU y puede entrenarse en segundos.
- **Alternativa simple:** regresión lineal multivariable como baseline interno.
- **Base real:** coeficientes de potencial bioquímico de metano (BMP) por sustrato, obtenidos de literatura de FAO e IEA Bioenergy. Consulta los coeficientes canónicos del documento técnico.
- **Aumento de datos:** dataset derivado de esos coeficientes con variaciones realistas de ruido, mezcla y estacionalidad, claramente documentado como tal.

### 2.4 Evaluación y aporte de la IA

- **Métricas:** MAE, RMSE y R² sobre el conjunto de prueba.
- **Prueba de valor para el jurado:**
  - **Baseline:** coeficiente fijo (200 kWh/t para todo).
  - **Modelo:** ajusta por tipo, humedad y estacionalidad.
  - La demostración muestra que el modelo **reduce el error** frente al baseline cuando procesa residuos heterogéneos. La IA *mejora la decisión*.
- **Inferencia:** el backend FastAPI carga el modelo entrenado (`.pkl`) y responde en milisegundos cuando se registra un residuo.

## 3. Componente 2: optimización de la recolección

**Problema que resuelve:** dadas N ubicaciones de generadores y M plantas, ¿cuál es la ruta de recolección más eficiente?

- **Tecnología:** **Google OR-Tools**, una librería abierta de optimización para resolver el problema de ruteo de vehículos (VRP).
- **Entrada:** coordenadas de generadores y plantas, volúmenes, capacidad del vehículo.
- **Objetivo:** reducir distancia, costo y emisiones; priorizar generadores con mayor rendimiento y residuos más frescos.
- **Salida:** secuencia de recolección, distancia total y emisiones estimadas del transporte. La ruta se dibuja en un mapa con Leaflet y OpenStreetMap.
- **Por qué cuenta como IA:** utiliza **optimización combinatoria**, una búsqueda en un espacio NP-duro. Es una rama clásica de la IA, no una simple ordenación.

## 4. Componente 3: agente conversacional "Asesor GreenSpark"

**Problema que resuelve:** el usuario de negocio necesita comprender los resultados sin interpretar tablas complejas.

- **Tecnología:** **DeepSeek API**. El LLM se consume mediante una API, sin modelo local ni hardware.
- **Patrón:** **agente con herramientas (`function calling`) y RAG ligero**:
  - El LLM **no inventa números**: invoca funciones del backend (`predecir_rendimiento`, `consultar_impacto`, `optimizar_ruta`) y **razona sobre los resultados reales**.
  - El contexto incluye datos del generador, coeficientes y resultados del modelo.
- **Capacidades:**
  - Responde: *"¿Cuánta energía genera la UCB al mes y cuánto CO₂ evita?"*
  - Explica por qué se obtuvo una predicción.
  - **Redacta el reporte de sostenibilidad (ESG)** en lenguaje formal listo para presentar.
- **Anti-alucinación:** todas las cifras provienen del backend; el LLM solo interpreta y redacta. Esto cumple el punto 14 de los lineamientos ("no falsificar IA").
- **Alternativa documentada:** si la API no responde, el sistema entrega los resultados numéricos del backend sin la capa conversacional.

## 5. APIs, librerías y herramientas

| Herramienta | Rol | Tipo |
| --- | --- | --- |
| **DeepSeek API** | Agente conversacional + redacción ESG | API LLM |
| **scikit-learn** | Modelo de predicción de rendimiento | Librería ML |
| **Google OR-Tools** | Optimización de rutas (VRP) | Librería |
| **Open-Meteo API** | Clima/estacionalidad de Santa Cruz | API abierta (gratis) |
| **Leaflet + OpenStreetMap** | Mapa y visualización de rutas | Librería + datos abiertos |
| **pandas / numpy** | Procesamiento de datos | Librerías |
| **FastAPI** | Orquestación de los servicios de IA | Framework |

## 6. Diagrama del flujo de IA

```text
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

## 7. Evidencia funcional en la demo

1. Registrar un residuo y ver la **predicción del modelo** al instante.
2. Cambiar el tipo o la estacionalidad y ver cómo **la predicción cambia**. El resultado no es fijo.
3. Ver la **ruta optimizada** en el mapa.
4. Preguntar al **agente** en lenguaje natural y recibir una respuesta junto con el reporte ESG.
5. Comparar las **métricas del modelo frente al baseline** para demostrar que la IA mejora la estimación.

> **Resultado:** GreenSpark cubre calidad técnica de IA mediante un modelo entrenado y evaluado; integración mediante más de cuatro APIs y librerías; y uso de agentes mediante un LLM con `function calling`. Todo se demuestra de forma **ejecutable y honesta**.
