"""Application configuration loaded from environment / .env file.

Secrets (LLM API key) live only in the backend and are never hard-coded.
"""

from __future__ import annotations

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # protected_namespaces=() lets us use model_version without clashing with
    # pydantic's reserved "model_" namespace.
    model_config = SettingsConfigDict(
        env_file=".env", env_file_encoding="utf-8", extra="ignore",
        protected_namespaces=(),
    )

    app_env: str = "development"
    database_url: str = "sqlite:///./database/greenspark.db"

    # Optional OpenAI advisor. Without a key, the deterministic fallback stays active.
    openai_api_key: str | None = None
    ai_model: str = "gpt-5.4-mini"
    ai_base_url: str = "https://api.openai.com/v1"
    ai_timeout_seconds: float = 30.0

    # Comma-separated list of allowed CORS origins ("*" allows all).
    cors_origins: str = "*"

    # Traceability stamps recorded with every prediction.
    model_version: str = "baseline-v0.1"
    dataset_version: str = "literature-2025-v1"
    report_generator_version: str = "report-gen-v0.1"

    @property
    def cors_origin_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]


settings = Settings()
