# GreenSpark API (backend)

FastAPI backend for the GreenSpark research/simulation MVP. It runs the
deterministic validation + baseline predictor over the seeded SQLite database
(`database/greenspark.db`), ranks experiments, and optionally narrates results
with an LLM (DeepSeek) that **never invents numbers** and degrades to a
deterministic fallback.

> Every prediction is labeled `SIMULADO` and carries confidence, assumptions and
> warnings. Simulations are never presented as measurements.

## Setup (Windows, Python 3.14)

```powershell
py -m venv .venv
./.venv/Scripts/python.exe -m pip install -r requirements.txt
```

Copy the environment template (optional — defaults work without it):

```powershell
Copy-Item .env.example .env
```

## Run

```powershell
./.venv/Scripts/python.exe -m uvicorn apps.api.main:app --reload --port 8000
```

- Interactive docs: http://127.0.0.1:8000/docs
- Health + DB counts: http://127.0.0.1:8000/health

## Test

```powershell
./.venv/Scripts/python.exe -m pytest
```

Tests run against a temporary, seeded copy of the database — they never touch
`database/greenspark.db`.

## Endpoints

| Método | Ruta | Función |
| --- | --- | --- |
| `GET` | `/health` | Estado + conteos de la base. |
| `GET` | `/catalogo/instituciones` `/tipos-sustrato` `/sustratos` `/materiales-electrodo` `/configuraciones-mfc` | Catálogos de lectura. |
| `POST` / `GET` | `/escenarios` , `/escenarios/{id}` | Registrar / listar / detalle de escenarios. |
| `POST` | `/predecir` | Baseline determinístico (por `scenario_id` o `inputs`). |
| `POST` | `/comparar` | Comparar escenarios y recomendar. |
| `GET` | `/recomendar/{id}` | Priorizar el siguiente experimento. |
| `POST` / `GET` | `/reportes` , `/reportes/{id}` | Generar / listar / detalle de reportes. |
| `POST` | `/agente` | Explicación LLM opcional con fallback. |
| `POST` / `GET` | `/telemetria` , `/telemetria/{scenario_id}` | Ingesta y lectura de sensores (fase 2). |

## Layout

```
apps/api/
├── main.py            # app factory, CORS, /health, manejo de errores 422
├── config.py          # settings desde .env
├── database.py        # engine/session + get_db (seam para tests)
├── clock.py           # timestamps UTC
├── serializers.py     # ORM -> dict
├── services.py        # inputs de escenario, predicción, items de ranking
├── recommender.py     # puntuación ponderada auditable
├── ai_gateway.py      # DeepSeek + fallback determinístico
├── rules/
│   ├── validation.py  # rangos físicos (422 duro / warning suave)
│   └── baseline.py    # predictor determinístico
├── schemas/           # modelos Pydantic de request
└── routers/           # un router por dominio
```
