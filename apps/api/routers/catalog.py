"""Read-only catalog endpoints that feed the frontend's dropdowns and tables."""

from __future__ import annotations

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from apps.api.database import get_db
from apps.api.serializers import (
    mfc_configuration_to_dict, row_to_dict, substrate_to_dict,
)
from database.models import (
    ElectrodeMaterial, Institution, MfcConfiguration, Substrate, SubstrateType,
)

router = APIRouter(prefix="/catalogo", tags=["catalogo"])


@router.get("/instituciones")
def list_institutions(db: Session = Depends(get_db)):
    return [row_to_dict(i) for i in db.query(Institution).order_by(Institution.institution_id).all()]


@router.get("/tipos-sustrato")
def list_substrate_types(db: Session = Depends(get_db)):
    return [row_to_dict(t) for t in db.query(SubstrateType).order_by(SubstrateType.substrate_type_id).all()]


@router.get("/sustratos")
def list_substrates(db: Session = Depends(get_db)):
    return [substrate_to_dict(s) for s in db.query(Substrate).order_by(Substrate.substrate_id).all()]


@router.get("/materiales-electrodo")
def list_electrode_materials(db: Session = Depends(get_db)):
    return [row_to_dict(m) for m in db.query(ElectrodeMaterial).order_by(ElectrodeMaterial.electrode_material_id).all()]


@router.get("/configuraciones-mfc")
def list_mfc_configurations(db: Session = Depends(get_db)):
    return [mfc_configuration_to_dict(c) for c in db.query(MfcConfiguration).order_by(MfcConfiguration.mfc_configuration_id).all()]
