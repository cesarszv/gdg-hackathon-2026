# GreenSpark Backend API — Design

**Fecha:** 2026-05-31 · **Equipo:** HackHeroes · **Mención:** Energía

## Objetivo

Implementar el backend FastAPI de GreenSpark que arranca y funciona sin errores,
expone el contrato de endpoints documentado en `07 arquitectura tecnologica.md`
sobre la base de datos SQLite ya sembrada (`database/greenspark.db`), y respeta
las reglas de honestidad técnica: la capa determinística controla validación y
cálculos; el LLM es opcional y nunca inventa cifras; cada resultado lleva
etiqueta de evidencia, confianza, supuestos y advertencias.

## Alcance

- **Incluye:** API FastAPI sobre el paquete `database/` existente; endpoints de
  catálogo (lectura para el frontend), el contrato MVP (`/escenarios`,
  `/predecir`, `/comparar`, `/recomendar/{id}`, `/reportes`, `/agente`,
  `/telemetria`); predictor baseline determinístico; recomendador ponderado;
  gateway DeepSeek con fallback; entorno reproducible (venv + pins) y pruebas.
- **No incluye:** cambios al esquema de base de datos; entrenamiento de modelos
  scikit-learn (se elige baseline determinístico); frontend; despliegue cloud.

## Estructura

```
apps/api/
├── __init__.py
├── main.py            # app factory, CORS, routers, /health, manejo de errores
├── config.py          # Settings desde .env (DB, DeepSeek, CORS, versiones)
├── database.py        # re-exporta get_db / engine del paquete database/
├── schemas/           # modelos Pydantic de request/response por dominio
├── rules/
│   ├── validation.py  # validación de rangos físicos (reject duro / warn suave)
│   └── baseline.py    # predictor determinístico (COD, temp, pH, área → V/I/P)
├── recommender.py     # puntuación ponderada auditable → experimentos ordenados
├── ai_gateway.py      # DeepSeek (httpx) + fallback determinístico
└── routers/           # catalog, scenarios, predictions, comparison,
                       # recommendations, reports, agent, telemetry
```

El backend importa los modelos y `get_db` del paquete raíz `database/`. No
modifica el esquema ni los datos sembrados.

## Contrato de endpoints

| Método | Ruta | Función |
| --- | --- | --- |
| `GET` | `/health` | Estado del servicio y conteos de la base. |
| `GET` | `/catalogo/instituciones` | Lista instituciones. |
| `GET` | `/catalogo/tipos-sustrato` | Lista tipos de sustrato. |
| `GET` | `/catalogo/sustratos` | Lista sustratos concretos. |
| `GET` | `/catalogo/materiales-electrodo` | Lista materiales de electrodo. |
| `GET` | `/catalogo/configuraciones-mfc` | Lista configuraciones MFC. |
| `POST` | `/escenarios` | Registra un escenario validando rangos físicos. |
| `GET` | `/escenarios` | Lista escenarios con resumen anidado. |
| `GET` | `/escenarios/{id}` | Detalle de un escenario. |
| `POST` | `/predecir` | Ejecuta el baseline determinístico y persiste la predicción. |
| `POST` | `/comparar` | Compara dos o más escenarios con supuestos visibles. |
| `GET` | `/recomendar/{escenario_id}` | Prioriza el siguiente experimento. |
| `POST` | `/reportes` | Genera un resumen institucional trazable. |
| `GET` | `/reportes` / `/reportes/{id}` | Lista / detalle de reportes. |
| `POST` | `/agente` | Explicación opcional vía LLM con fallback. |
| `POST` | `/telemetria` | Ingesta de lectura de sensores (fase 2). |
| `GET` | `/telemetria/{escenario_id}` | Lista lecturas de un escenario. |

Las rutas en español coinciden con el contrato documentado (fuente de verdad
para el jurado). Los identificadores de código se mantienen en inglés.

## Comportamientos clave

### Validación de rangos físicos (`rules/validation.py`)

- pH 0–14; temperatura 0–80 °C; humedad y contaminación 0–100 %; volumen,
  área, distancia y resistencia > 0; COD ≥ 0.
- Fuera de límites duros → `422` con detalle del campo.
- Fuera de rangos operativos típicos (p. ej. pH 4–9, temp 15–45 °C) → se acepta
  pero se añade a `warnings[]`.

### Predictor baseline determinístico (`rules/baseline.py`)

Fórmula transparente informada por literatura MFC, no una caja negra:

- Voltaje base modulado por factores de COD, temperatura (óptimo mesofílico
  ~30–35 °C), pH (óptimo ~7), material de electrodo y resistencia externa.
- Corriente derivada de voltaje y resistencia; potencia = V·I; densidad =
  potencia / área de electrodo.
- Salidas: `projected_voltage_v`, `projected_current_ma`, `projected_power_mw`,
  `projected_power_density_mw_m2`, `projected_stability`, `confidence_level`,
  `assumptions`, `warnings`, `model_version`, `dataset_version`,
  `evidence_state = SIMULADO`.
- La confianza baja cuando faltan datos (`missing_data`) o hay valores extremos.

### Recomendador (`recommender.py`)

Puntuación ponderada y auditable sobre: potencia proyectada, estabilidad,
calidad/origen del dato, incertidumbre del modelo y costo experimental
(material + volumen). Devuelve lista ordenada con razón, supuestos y
advertencias visibles. Es apoyo a la decisión, no una orden automática.

### Gateway de IA (`ai_gateway.py`)

- Usa DeepSeek (API compatible con OpenAI) cuando `AI_PROVIDER_API_KEY` está
  configurada; si no, devuelve una explicación determinística por plantilla.
- Recibe únicamente resultados estructurados del backend; el prompt prohíbe
  introducir cifras nuevas. Timeout + fallback: la API nunca se rompe por el LLM.

## Entorno y verificación

- `.venv` + `requirements.txt` con límites inferiores; versiones exactas en
  `requirements.lock` (`pip freeze`). Se elimina `scikit-learn` (no usado) para
  garantizar una instalación limpia en Python 3.14.
- `.env.example` versionado; `.env` real ignorado por git.
- Suite **pytest** con `TestClient`: salud, catálogo, escenario válido/ inválido,
  predicción, recomendación, reporte, fallback del agente y telemetría.
- Criterio "funciona sin errores": pruebas en verde + arranque limpio de
  `uvicorn apps.api.main:app`.

## Verificación final

- Confirmar que ningún endpoint presenta simulación como medición.
- Confirmar que cada predicción incluye confianza, supuestos y advertencias.
- Confirmar que el agente mantiene respuesta determinística sin clave de API.
- Ejecutar la suite de pruebas y registrar el resultado.
