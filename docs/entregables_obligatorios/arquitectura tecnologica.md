# Arquitectura Tecnológica — GreenSpark

**Equipo:** HackHeroes · **Mención:** ENERGÍA · **Lugar:** Santa Cruz de la Sierra, Bolivia

> Principio de diseño: **sin hardware, API-first, tiers gratuitos, construible en 1 día y 100% replicable.**

---

## 1. Stack tecnológico

| Capa | Tecnología | Por qué |
|---|---|---|
| **Frontend** | React | Portal del generador, dashboard de impacto, mapa y chat del agente |
| **Backend** | Python + FastAPI | Rápido de construir, ideal para servir modelos de IA |
| **Base de datos** | SQLite (MVP) → PostgreSQL (escala) | Cero configuración para el MVP; migración directa al crecer |
| **IA — predicción** | scikit-learn (Gradient Boosting/RandomForest) | Modelo ligero, corre en CPU, sin GPU |
| **IA — optimización** | Google OR-Tools (VRP) | Ruteo de recolección, librería abierta |
| **IA — agente** | DeepSeek API | LLM por API: sin modelo local, sin hardware |
| **Clima** | Open-Meteo API | Estacionalidad de Santa Cruz (gratis, sin key) |
| **Mapa** | Leaflet + OpenStreetMap | Visualización de generadores, plantas y rutas (gratis, sin key) |
| **Despliegue** | Frontend: Vercel · Backend: Render/Railway | Tiers gratuitos, deploy en minutos |

---

## 2. Diagrama de arquitectura (flujo de datos)

```
┌──────────────────────────────────────────────────────────────┐
│                     FRONTEND (React)                          │
│  Portal generador │ Dashboard impacto │ Mapa │ Chat agente    │
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

---

## 3. Modelo de datos (MVP, simplificado)

```
Generador(id, nombre, tipo, zona, lat, lng, volumen_diario_kg)
Planta(id, nombre, tipo, lat, lng, capacidad_t_dia, sustratos_aceptados)
Residuo(id, generador_id, tipo, kg, fecha, humedad, contaminacion)
Prediccion(id, residuo_id, m3_biogas, kwh, kg_compost, kg_co2e, valor_bs)
Match(id, generador_id, planta_id, ruta_orden, distancia_km, emisiones_kg)
ReporteESG(id, generador_id, periodo, texto, kwh_total, co2e_total)
```

---

## 4. Endpoints principales (API REST)

| Método | Ruta | Función |
|---|---|---|
| `POST` | `/residuos` | Registrar un residuo |
| `POST` | `/predecir` | Predecir rendimiento (modelo IA) |
| `GET`  | `/impacto/{generador_id}` | Métricas de impacto del generador |
| `GET`  | `/impacto/ciudad` | Métricas agregadas de ciudad |
| `POST` | `/optimizar-ruta` | Ruta de recolección óptima (OR-Tools) |
| `POST` | `/agente` | Pregunta al asesor IA / generar reporte ESG |

---

## 5. Flujo de la demo (lo que ocurre técnicamente)

1. **React** envía `POST /residuos` con tipo + kg.
2. **FastAPI** llama al **modelo scikit-learn** → devuelve biogás, kWh, CO₂, valor.
3. React pinta el resultado y dispara `POST /optimizar-ruta` → **OR-Tools** devuelve la ruta → se dibuja en **Leaflet**.
4. El usuario pregunta en el chat → `POST /agente` → **DeepSeek** invoca funciones del backend, lee los números reales y responde + redacta el **reporte ESG**.
5. El **dashboard** consume `/impacto/ciudad` y muestra el agregado.

---

## 6. Seguridad, escalabilidad y sostenibilidad técnica

- **Escalabilidad:** SQLite → PostgreSQL; backend stateless desplegable en múltiples instancias; modelo servido como artefacto versionado.
- **Costos bajos:** todo el MVP corre en tiers gratuitos; el único costo variable es la API del LLM (centavos por consulta).
- **Resiliencia:** el núcleo (predicción + ruteo) **no depende del LLM**; si DeepSeek falla, la plataforma sigue entregando números (degradación elegante).
- **Replicabilidad:** repositorio con `requirements.txt`, `README` e instrucciones de ejecución; cualquiera lo levanta en local.

---

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
