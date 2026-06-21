# GreenSpark API (backend)

FastAPI backend for the GreenSpark research/simulation MVP. It runs deterministic
validation and the baseline predictor over the seeded SQLite database
(`apps/api/database/greenspark.db`), ranks experiments, and exposes a read-only
sustainability advisor backed by OpenAI `gpt-5.4-mini`. The advisor **never
invents numbers** and degrades to a deterministic SQLite fallback.

> Every prediction is labeled `SIMULADO` and carries confidence, assumptions and
> warnings. Simulations are never presented as measurements.

## Setup (Python 3.14)

**Windows:**
```powershell
py -m venv apps/api/.venv
./apps/api/.venv/Scripts/python.exe -m pip install -r apps/api/requirements.txt
Copy-Item apps/api/.env.example apps/api/.env
```

**Linux:**
```bash
python3 -m venv apps/api/.venv
./apps/api/.venv/bin/python -m pip install -r apps/api/requirements.txt
cp apps/api/.env.example apps/api/.env
```

To enable OpenAI, edit `apps/api/.env` (or set the environment variables) and paste the local secret:

```env
OPENAI_API_KEY=
AI_MODEL=gpt-5.4-mini
AI_BASE_URL=https://api.openai.com/v1
AI_TIMEOUT_SECONDS=30
```

Leave `OPENAI_API_KEY` empty to use the deterministic SQLite fallback. The real
key stays only in `.env`, which is ignored by Git and never reaches the
frontend.

## Run

**Windows:**
```powershell
./apps/api/.venv/Scripts/python.exe -m uvicorn apps.api.main:app --reload --port 8000
```

**Linux:**
```bash
./apps/api/.venv/bin/python -m uvicorn apps.api.main:app --reload --port 8000
```

- Interactive docs: http://127.0.0.1:8000/docs
- Health + DB counts: http://127.0.0.1:8000/health

## Test

**Windows:**
```powershell
./apps/api/.venv/Scripts/python.exe -m pytest apps/api
```

**Linux:**
```bash
./apps/api/.venv/bin/pytest apps/api
```

Tests run against a temporary, seeded copy of the database and never touch
`apps/api/database/greenspark.db`.

## Endpoints

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/health` | Service state and database counts. |
| `GET` | `/catalogo/instituciones` `/tipos-sustrato` `/sustratos` `/materiales-electrodo` `/configuraciones-mfc` | Read-only catalogs. |
| `POST` / `GET` | `/escenarios` , `/escenarios/{id}` | Create, list, and inspect scenarios. |
| `POST` | `/predecir` | Deterministic baseline by `scenario_id` or `inputs`. |
| `POST` | `/comparar` | Compare scenarios and recommend an experiment. |
| `GET` | `/recomendar/{id}` | Rank the next experiment. |
| `POST` / `GET` | `/reportes` , `/reportes/{id}` | Generate and inspect reports. |
| `POST` | `/agente` | Ask the read-only SQLite advisor a free-form question. |
| `POST` / `GET` | `/telemetria` , `/telemetria/{scenario_id}` | Store and inspect telemetry. |

## Advisor request

```json
{
  "question": "¿Que escenario conviene validar primero y por que?",
  "scenario_id": 3
}
```

`scenario_id` is optional. Without it, the agent analyzes the complete SQLite
snapshot. Seed data includes `192` fictitious telemetry readings labeled
`SIMULADO`; they prepare the future sensor flow and are not physical
measurements.

## Layout

```text
apps/api/
|-- main.py            # app factory, CORS, /health, 422 handler
|-- config.py          # settings from .env
|-- database.py        # engine/session + get_db test seam
|-- clock.py           # UTC timestamps
|-- serializers.py     # ORM -> dict
|-- services.py        # scenario inputs, prediction, ranking items
|-- recommender.py     # auditable weighted score
|-- agent_context.py   # compact read-only SQLite snapshot
|-- ai_gateway.py      # OpenAI gpt-5.4-mini + deterministic fallback
|-- rules/             # physical validation + baseline
|-- schemas/           # Pydantic request models
`-- routers/           # one router per domain
```
