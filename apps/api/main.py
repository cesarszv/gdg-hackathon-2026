"""GreenSpark API application factory.

Wires routers, CORS, and a central handler that turns deterministic physical
validation errors into structured 422 responses.
"""

from __future__ import annotations

from fastapi import Depends, FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session

from apps.api.config import settings
from apps.api.database import get_db
from apps.api.rules.validation import PhysicalValidationError
from apps.api.routers import (
    agent, catalog, comparison, predictions, recommendations, reports,
    scenarios, telemetry,
)
from database.models import (
    Institution, Prediction, Recommendation, Report, Scenario, SensorReading,
    Substrate,
)

DESCRIPTION = (
    "API de simulacion e investigacion de economia circular (residuos -> energia) "
    "para reactores MFC en Santa Cruz de la Sierra. La capa deterministica controla "
    "validacion y calculos; las predicciones son SIMULADAS; el LLM es opcional y no "
    "inventa cifras."
)

_COUNTED_MODELS = {
    "institution": Institution,
    "substrate": Substrate,
    "scenario": Scenario,
    "prediction": Prediction,
    "recommendation": Recommendation,
    "report": Report,
    "sensor_reading": SensorReading,
}


def create_app() -> FastAPI:
    app = FastAPI(title="GreenSpark API", version="1.0.0", description=DESCRIPTION)

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origin_list,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.exception_handler(PhysicalValidationError)
    async def _physical_validation_handler(_request: Request, exc: PhysicalValidationError):
        return JSONResponse(status_code=422, content={"detail": exc.errors})

    @app.get("/", tags=["meta"])
    def root():
        return {
            "name": "GreenSpark API",
            "version": "1.0.0",
            "docs": "/docs",
            "status_label": "MVP investigativo - resultados SIMULADOS",
        }

    @app.get("/health", tags=["meta"])
    def health(db: Session = Depends(get_db)):
        counts = {name: db.query(model).count() for name, model in _COUNTED_MODELS.items()}
        return {
            "status": "ok",
            "evidence_note": "Predicciones SIMULADAS; mediciones MEDIDO; metas META_EXPLORATORIA.",
            "database": counts,
        }

    for module in (catalog, scenarios, predictions, comparison,
                   recommendations, reports, agent, telemetry):
        app.include_router(module.router)

    return app


app = create_app()
