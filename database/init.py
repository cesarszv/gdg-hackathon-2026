import os
import sqlite3
from database.connection import engine, init_db, SessionLocal
from database.models import Base


def create_tables():
    Base.metadata.create_all(bind=engine)
    print('Tables created successfully.')


def run_sql_file(filepath):
    if not os.path.exists(filepath):
        print(f'Seed file not found: {filepath}')
        return

    db_url = os.environ.get('DATABASE_URL', 'sqlite:///./database/greenspark.db')
    db_path = db_url.replace('sqlite:///', '')

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute('PRAGMA foreign_keys = ON')

    with open(filepath, 'r', encoding='utf-8') as f:
        sql_script = f.read()

    cursor.executescript(sql_script)
    conn.commit()
    conn.close()
    print(f'Seed data loaded from {filepath}.')


def verify_integrity():
    db = SessionLocal()
    try:
        from database.models import (
            Institution, SubstrateType, Substrate,
            ElectrodeMaterial, MfcConfiguration, Scenario,
            Prediction, Recommendation, Report
        )

        checks = {
            'institution': db.query(Institution).count(),
            'substrate_type': db.query(SubstrateType).count(),
            'substrate': db.query(Substrate).count(),
            'electrode_material': db.query(ElectrodeMaterial).count(),
            'mfc_configuration': db.query(MfcConfiguration).count(),
            'scenario': db.query(Scenario).count(),
            'prediction': db.query(Prediction).count(),
            'recommendation': db.query(Recommendation).count(),
            'report': db.query(Report).count(),
        }

        print('Database integrity check:')
        for table, count in checks.items():
            status = 'OK' if count > 0 else 'EMPTY'
            print(f'  {table}: {count} records [{status}]')

        return checks
    finally:
        db.close()


def init_database(seed=True):
    print('Initializing GreenSpark database...')
    create_tables()

    if seed:
        seed_path = os.path.join(os.path.dirname(__file__), 'seed.sql')
        run_sql_file(seed_path)

    verify_integrity()
    print('Database initialization complete.')


if __name__ == '__main__':
    init_database(seed=True)
