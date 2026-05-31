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

    # Optional LLM gateway (DeepSeek by default; OpenAI-compatible).
    ai_provider_api_key: str | None = None
    ai_model: str = "deepseek-chat"
    ai_base_url: str = "https://api.deepseek.com"
    ai_timeout_seconds: float = 20.0

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
