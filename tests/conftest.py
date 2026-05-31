"""Shared test fixtures: a temporary, seeded database and a TestClient.

The test database mirrors production: tables are created from the ORM models
(as ``database/init.py`` does) and data is loaded from ``database/seed.sql``.
"""

import sqlite3
from pathlib import Path

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

ROOT = Path(__file__).resolve().parents[1]


@pytest.fixture(scope="session")
def seeded_engine(tmp_path_factory):
    from database.models import Base

    db_file = tmp_path_factory.mktemp("data") / "test_greenspark.db"
    engine = create_engine(
        f"sqlite:///{db_file}", connect_args={"check_same_thread": False}
    )
    Base.metadata.create_all(bind=engine)

    seed_sql = (ROOT / "database" / "seed.sql").read_text(encoding="utf-8")
    raw = sqlite3.connect(db_file)
    raw.executescript(seed_sql)
    raw.commit()
    raw.close()
    return engine


@pytest.fixture()
def client(seeded_engine):
    from apps.api.main import app
    from apps.api.database import get_db

    TestingSessionLocal = sessionmaker(
        bind=seeded_engine, autocommit=False, autoflush=False
    )

    def override_get_db():
        db = TestingSessionLocal()
        try:
            yield db
        finally:
            db.close()

    app.dependency_overrides[get_db] = override_get_db
    with TestClient(app) as test_client:
        yield test_client
    app.dependency_overrides.clear()
