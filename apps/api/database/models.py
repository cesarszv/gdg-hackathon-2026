from sqlalchemy import (
    Column, Integer, String, Float, Boolean, Text, Date, DateTime, ForeignKey, CheckConstraint, UniqueConstraint
)
from sqlalchemy.orm import relationship, declarative_base

Base = declarative_base()


class Institution(Base):
    __tablename__ = 'institution'

    institution_id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    type = Column(String, nullable=False)
    zone = Column(String)
    contact_name = Column(String)
    contact_email = Column(String)
    contact_phone = Column(String)
    is_active = Column(Integer, nullable=False, default=1)
    created_at = Column(DateTime, nullable=False)

    scenarios = relationship('Scenario', back_populates='institution')
    reports = relationship('Report', back_populates='institution')

    __table_args__ = (
        CheckConstraint(
            "type IN ('universidad', 'colegio', 'restaurante', 'agroindustria', 'otro')",
            name='ck_institution_type'
        ),
    )


class SubstrateType(Base):
    __tablename__ = 'substrate_type'

    substrate_type_id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False, unique=True)
    description = Column(Text)
    typical_origin = Column(String)

    substrates = relationship('Substrate', back_populates='substrate_type')


class Substrate(Base):
    __tablename__ = 'substrate'

    substrate_id = Column(Integer, primary_key=True, autoincrement=True)
    substrate_type_id = Column(Integer, ForeignKey('substrate_type.substrate_type_id'), nullable=False)
    name = Column(String, nullable=False)
    origin = Column(String)
    humidity_pct = Column(Float)
    cod_estimated_mg_l = Column(Float)
    contamination_pct = Column(Float)
    evidence_state = Column(String, nullable=False, default='SIMULADO')
    source = Column(String)
    created_at = Column(DateTime, nullable=False)

    substrate_type = relationship('SubstrateType', back_populates='substrates')
    scenarios = relationship('Scenario', back_populates='substrate')

    __table_args__ = (
        CheckConstraint(
            "evidence_state IN ('SIMULADO', 'MEDIDO', 'META_EXPLORATORIA')",
            name='ck_substrate_evidence_state'
        ),
    )


class ElectrodeMaterial(Base):
    __tablename__ = 'electrode_material'

    electrode_material_id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False, unique=True)
    description = Column(Text)
    cost_estimate_usd = Column(Float)

    mfc_configurations = relationship('MfcConfiguration', back_populates='electrode_material')


class MfcConfiguration(Base):
    __tablename__ = 'mfc_configuration'

    mfc_configuration_id = Column(Integer, primary_key=True, autoincrement=True)
    electrode_material_id = Column(Integer, ForeignKey('electrode_material.electrode_material_id'))
    volume_l = Column(Float)
    electrode_area_cm2 = Column(Float)
    electrode_distance_cm = Column(Float)
    external_resistance_ohm = Column(Float)
    description = Column(Text)
    created_at = Column(DateTime, nullable=False)

    electrode_material = relationship('ElectrodeMaterial', back_populates='mfc_configurations')
    scenarios = relationship('Scenario', back_populates='mfc_configuration')


class Scenario(Base):
    __tablename__ = 'scenario'

    scenario_id = Column(Integer, primary_key=True, autoincrement=True)
    institution_id = Column(Integer, ForeignKey('institution.institution_id'))
    substrate_id = Column(Integer, ForeignKey('substrate.substrate_id'), nullable=False)
    mfc_configuration_id = Column(Integer, ForeignKey('mfc_configuration.mfc_configuration_id'))
    scenario_code = Column(String, nullable=False, unique=True)
    ph = Column(Float)
    temperature_c = Column(Float)
    retention_h = Column(Float)
    feeding_frequency_h = Column(Float)
    evidence_state = Column(String, nullable=False, default='SIMULADO')
    source = Column(String)
    created_at = Column(DateTime, nullable=False)

    institution = relationship('Institution', back_populates='scenarios')
    substrate = relationship('Substrate', back_populates='scenarios')
    mfc_configuration = relationship('MfcConfiguration', back_populates='scenarios')
    predictions = relationship('Prediction', back_populates='scenario')
    recommendations = relationship('Recommendation', back_populates='scenario')
    sensor_readings = relationship('SensorReading', back_populates='scenario')
    report_scenarios = relationship('ReportScenario', back_populates='scenario')

    __table_args__ = (
        CheckConstraint(
            "evidence_state IN ('SIMULADO', 'MEDIDO', 'META_EXPLORATORIA')",
            name='ck_scenario_evidence_state'
        ),
    )


class Prediction(Base):
    __tablename__ = 'prediction'

    prediction_id = Column(Integer, primary_key=True, autoincrement=True)
    scenario_id = Column(Integer, ForeignKey('scenario.scenario_id'), nullable=False)
    projected_voltage_v = Column(Float)
    projected_current_ma = Column(Float)
    projected_power_mw = Column(Float)
    projected_power_density_mw_m2 = Column(Float)
    projected_stability = Column(String)
    confidence_level = Column(String)
    assumptions = Column(Text)
    warnings = Column(Text)
    model_version = Column(String)
    dataset_version = Column(String)
    created_at = Column(DateTime, nullable=False)

    scenario = relationship('Scenario', back_populates='predictions')
    recommendations = relationship('Recommendation', back_populates='prediction')


class Recommendation(Base):
    __tablename__ = 'recommendation'

    recommendation_id = Column(Integer, primary_key=True, autoincrement=True)
    scenario_id = Column(Integer, ForeignKey('scenario.scenario_id'), nullable=False)
    prediction_id = Column(Integer, ForeignKey('prediction.prediction_id'))
    priority = Column(Integer, nullable=False)
    explanation = Column(Text)
    assumptions = Column(Text)
    warnings = Column(Text)
    method = Column(String)
    created_at = Column(DateTime, nullable=False)

    scenario = relationship('Scenario', back_populates='recommendations')
    prediction = relationship('Prediction', back_populates='recommendations')


class SensorReading(Base):
    __tablename__ = 'sensor_reading'

    sensor_reading_id = Column(Integer, primary_key=True, autoincrement=True)
    scenario_id = Column(Integer, ForeignKey('scenario.scenario_id'), nullable=False)
    reading_datetime = Column(DateTime, nullable=False)
    voltage_v = Column(Float)
    current_ma = Column(Float)
    ph = Column(Float)
    temperature_c = Column(Float)
    device_id = Column(String)
    evidence_state = Column(String, nullable=False, default='MEDIDO')

    scenario = relationship('Scenario', back_populates='sensor_readings')

    __table_args__ = (
        CheckConstraint(
            "evidence_state IN ('SIMULADO', 'MEDIDO', 'META_EXPLORATORIA')",
            name='ck_sensor_reading_evidence_state'
        ),
    )


class Report(Base):
    __tablename__ = 'report'

    report_id = Column(Integer, primary_key=True, autoincrement=True)
    institution_id = Column(Integer, ForeignKey('institution.institution_id'))
    title = Column(String, nullable=False)
    period_start = Column(Date)
    period_end = Column(Date)
    evidence_state = Column(String, nullable=False, default='SIMULADO')
    content = Column(Text)
    generator_version = Column(String)
    created_at = Column(DateTime, nullable=False)

    institution = relationship('Institution', back_populates='reports')
    report_scenarios = relationship('ReportScenario', back_populates='report')

    __table_args__ = (
        CheckConstraint(
            "evidence_state IN ('SIMULADO', 'MEDIDO', 'META_EXPLORATORIA')",
            name='ck_report_evidence_state'
        ),
    )


class ReportScenario(Base):
    __tablename__ = 'report_scenario'

    report_scenario_id = Column(Integer, primary_key=True, autoincrement=True)
    report_id = Column(Integer, ForeignKey('report.report_id'), nullable=False)
    scenario_id = Column(Integer, ForeignKey('scenario.scenario_id'), nullable=False)

    report = relationship('Report', back_populates='report_scenarios')
    scenario = relationship('Scenario', back_populates='report_scenarios')

    __table_args__ = (
        UniqueConstraint('report_id', 'scenario_id', name='uq_report_scenario'),
    )
