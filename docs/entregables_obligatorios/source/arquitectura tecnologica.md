# GreenSpark: Arquitectura tecnológica

**Equipo:** HackHeroes · **Mención:** Energía · **Lugar:** Santa Cruz de la Sierra, Bolivia

> **Principio de diseño:** sin hardware, orientado a APIs, desplegable en planes gratuitos, construible en un día y completamente replicable.

## 1. Stack tecnológico

| Capa | Tecnología | Por qué |
| --- | --- | --- |
| **Frontend** | React | Portal del generador, panel de impacto, mapa y chat del agente. |
| **Backend** | Python + FastAPI | Rápido de construir, ideal para servir modelos de IA |
| **Base de datos** | SQLite (MVP) → PostgreSQL (escala) | No requiere configuración para el MVP y permite una migración directa al crecer. |
| **IA — predicción** | scikit-learn (Gradient Boosting / Random Forest) | Modelo ligero, corre en CPU, sin GPU |
| **IA — optimización** | Google OR-Tools (VRP) | Ruteo de recolección, librería abierta |
| **IA — agente** | DeepSeek API | LLM por API: sin modelo local, sin hardware |
| **Clima** | Open-Meteo API | Estacionalidad de Santa Cruz, gratis y sin clave. |
| **Mapa** | Leaflet + OpenStreetMap | Visualización de generadores, plantas y rutas, gratis y sin clave. |
| **Despliegue** | Frontend: Vercel · Backend: Render/Railway | Planes gratuitos y despliegue en minutos. |

## 2. Flujo de datos

```text
┌──────────────────────────────────────────────────────────────┐
│                     FRONTEND (React)                          │
│  Portal generador │ Panel impacto │ Mapa │ Chat agente        │
└───────────────────────────┬──────────────────────────────────┘
                            │ HTTPS / REST (JSON)
┌───────────────────────────▼──────────────────────────────────┐
│                    BACKEND (FastAPI / Python)                 │
│                                                              │
│  /residuos        → registra residuo                         │
│  /predecir        → [scikit-learn]  biogás · kWh · CO₂       │
│  /optimizar-ruta  → [OR-Tools]      ruta de recolección      │
│  /impacto         → agrega métricas (generador / ciudad)     │
│  /agente          → [DeepSeek API]  function calling + ESG   │
└───────┬───────────────────┬───────────────────┬──────────────┘
        │                   │                   │
   ┌────▼─────┐      ┌──────▼───────┐   ┌───────▼─────────┐
   │ SQLite   │      │ APIs externas│   │ Modelo IA (.pkl)│
   │ (datos)  │      │ • DeepSeek   │   │ entrenado offline│
   └──────────┘      │ • Open-Meteo │   └─────────────────┘
                     │ • OSM/Leaflet│
                     └──────────────┘
```

## 3. Modelo de datos (MVP, simplificado)

```text
Generador(id, nombre, tipo, zona, lat, lng, volumen_diario_kg)
Planta(id, nombre, tipo, lat, lng, capacidad_t_dia, sustratos_aceptados)
Residuo(id, generador_id, tipo, kg, fecha, humedad, contaminacion)
Prediccion(id, residuo_id, m3_biogas, kwh, kg_compost, kg_co2e, valor_bs)
Match(id, generador_id, planta_id, ruta_orden, distancia_km, emisiones_kg)
ReporteESG(id, generador_id, periodo, texto, kwh_total, co2e_total)
```

## 4. Endpoints principales de la API REST

| Método | Ruta | Función |
| --- | --- | --- |
| `POST` | `/residuos` | Registrar un residuo |
| `POST` | `/predecir` | Predecir rendimiento (modelo IA) |
| `GET` | `/impacto/{generador_id}` | Métricas de impacto del generador |
| `GET` | `/impacto/ciudad` | Métricas agregadas de la ciudad |
| `POST` | `/optimizar-ruta` | Ruta de recolección óptima (OR-Tools) |
| `POST` | `/agente` | Pregunta al asesor IA / generar reporte ESG |

## 5. Flujo técnico de la demo

1. **React** envía `POST /residuos` con tipo + kg.
2. **FastAPI** llama al **modelo de scikit-learn** y devuelve biogás, kWh, CO₂ y valor económico.
3. React muestra el resultado y envía `POST /optimizar-ruta`. **OR-Tools** devuelve la ruta y **Leaflet** la dibuja en el mapa.
4. El usuario escribe en el chat. `POST /agente` permite que **DeepSeek** invoque funciones del backend, lea los valores reales, responda y redacte el **reporte ESG**.
5. El **panel** consulta `/impacto/ciudad` y muestra los datos agregados.

## 6. Seguridad, escalabilidad y sostenibilidad técnica

- **Escalabilidad:** migración de SQLite a PostgreSQL, backend sin estado desplegable en múltiples instancias y modelo servido como artefacto versionado.
- **Costos bajos:** todo el MVP funciona con planes gratuitos. El único costo variable es la API del LLM, de centavos por consulta.
- **Resiliencia:** el núcleo de predicción y ruteo **no depende del LLM**. Si DeepSeek falla, la plataforma continúa entregando resultados numéricos.
- **Replicabilidad:** el repositorio incluye `requirements.txt`, `README` e instrucciones de ejecución para levantar el proyecto en un entorno local.

## 7. Instrucciones de ejecución (resumen)

```bash
# Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

# Frontend
cd frontend
npm install
npm run dev
```
Variables de entorno: `DEEPSEEK_API_KEY`. (Detalle completo en el README del repositorio.)
