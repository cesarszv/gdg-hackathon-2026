# Entity Relationship Diagram (ERD)

Este documento contiene un **ERD compacto** para GreenSpark, construido
desde los procesos documentados: instituciones, sustratos, configuraciones MFC,
escenarios de simulacion, predicciones, recomendaciones de experimentos,
reportes institucionales y telemetria futura.

El objetivo no es meter todas las tablas posibles. El objetivo es modelar el
nucleo del sistema investigativo sin duplicar informacion y dejando relaciones
claras.

Para estudiar la logica operativa que justifica estas tablas, revisar tambien:
[Arquitectura tecnologica](../entregables_obligatorios/markdown/07%20arquitectura%20tecnologica.md) y
[Aplicacion de IA](../entregables_obligatorios/markdown/06%20aplicacion%20de%20ia.md).

## Diagrama base

```mermaid
erDiagram
    INSTITUTION ||--o{ SCENARIO : registra
    INSTITUTION ||--o{ REPORT : recibe

    SUBSTRATE ||--o{ SCENARIO : se_usa_en
    MFC_CONFIGURATION ||--o{ SCENARIO : se_aplica_en

    SCENARIO ||--o{ PREDICTION : genera
    SCENARIO ||--o{ RECOMMENDATION : produce
    SCENARIO ||--o{ SENSOR_READING : recibe_telemetria

    SUBSTRATE_TYPE ||--o{ SUBSTRATE : clasifica
    ELECTRODE_MATERIAL ||--o{ MFC_CONFIGURATION : define_material

    PREDICTION ||--o{ RECOMMENDATION : alimenta
    SCENARIO ||--o{ REPORT_SCENARIO : aparece_en
    REPORT ||--o{ REPORT_SCENARIO : incluye

    INSTITUTION {
        int institution_id PK
        varchar name
        varchar type
        varchar zone
        varchar contact_name
        varchar contact_email
        varchar contact_phone
        boolean is_active
        timestamp created_at
    }

    SUBSTRATE_TYPE {
        int substrate_type_id PK
        varchar name UK
        varchar description
        varchar typical_origin
    }

    SUBSTRATE {
        int substrate_id PK
        int substrate_type_id FK
        varchar name
        varchar origin
        decimal humidity_pct
        decimal cod_estimated_mg_l
        decimal contamination_pct
        varchar evidence_state
        varchar source
        timestamp created_at
    }

    ELECTRODE_MATERIAL {
        int electrode_material_id PK
        varchar name UK
        varchar description
        decimal cost_estimate_usd
    }

    MFC_CONFIGURATION {
        int mfc_configuration_id PK
        int electrode_material_id FK
        decimal volume_l
        decimal electrode_area_cm2
        decimal electrode_distance_cm
        decimal external_resistance_ohm
        varchar description
        timestamp created_at
    }

    SCENARIO {
        int scenario_id PK
        int institution_id FK
        int substrate_id FK
        int mfc_configuration_id FK
        varchar scenario_code UK
        decimal ph
        decimal temperature_c
        decimal retention_h
        decimal feeding_frequency_h
        varchar evidence_state
        varchar source
        timestamp created_at
    }

    PREDICTION {
        int prediction_id PK
        int scenario_id FK
        decimal projected_voltage_v
        decimal projected_current_ma
        decimal projected_power_mw
        decimal projected_power_density_mw_m2
        varchar projected_stability
        varchar confidence_level
        text assumptions
        text warnings
        varchar model_version
        varchar dataset_version
        timestamp created_at
    }

    RECOMMENDATION {
        int recommendation_id PK
        int scenario_id FK
        int prediction_id FK
        int priority
        text explanation
        text assumptions
        text warnings
        varchar method
        timestamp created_at
    }

    SENSOR_READING {
        int sensor_reading_id PK
        int scenario_id FK
        timestamp reading_datetime
        decimal voltage_v
        decimal current_ma
        decimal ph
        decimal temperature_c
        varchar device_id
        varchar evidence_state
    }

    REPORT {
        int report_id PK
        int institution_id FK
        varchar title
        date period_start
        date period_end
        varchar evidence_state
        text content
        varchar generator_version
        timestamp created_at
    }

    REPORT_SCENARIO {
        int report_scenario_id PK
        int report_id FK
        int scenario_id FK
    }
```

## Decisiones de diseno

- `INSTITUTION` identifica al actor que investiga o pilota (universidad,
  colegio, restaurante, agroindustria). El campo `type` distingue la categoria
  sin necesidad de tablas separadas por rol.
- `SUBSTRATE` separa la muestra concreta del `SUBSTRATE_TYPE` (categoria
  general como `residuo_alimentario`, `residuo_agroindustrial`, etc.). Asi
  se pueden registrar multiples lotes del mismo tipo con condiciones distintas.
- `ELECTRODE_MATERIAL` normaliza materiales de electrodo (carbon, grafito,
  acero inoxidable, etc.) para evitar texto libre y facilitar comparaciones.
- `MFC_CONFIGURATION` describe el reactor evaluado. Cada escenario referencia
  una configuracion concreta para mantener trazabilidad.
- `SCENARIO` es la tabla central. Combina institucion, sustrato, configuracion
  y condiciones operativas. El campo `evidence_state` distingue `SIMULADO`,
  `MEDIDO` y `META_EXPLORATORIA` segun la documentacion del proyecto.
- `PREDICTION` guarda resultados proyectados con `model_version` y
  `dataset_version`. NO dependas de una unica prediccion: el modelo cambia
  y cada version debe ser trazable.
- `RECOMMENDATION` guarda la priorizacion de experimentos. Referencia tanto
  al escenario como a la prediccion que la alimento, permitiendo auditar
  por que se recomendo un experimento.
- `SENSOR_READING` pertenece a la **fase 2** (piloto fisico). Registra
  telemetria del reactor instrumentado vinculada al escenario correspondiente.
- `REPORT` genera resumenes institucionales trazables. La tabla intermedia
  `REPORT_SCENARIO` permite que un reporte incluya multiples escenarios
  y que un escenario aparezca en multiples reportes.
- `evidence_state` aparece en `SUBSTRATE`, `SCENARIO`, `SENSOR_READING` y
  `REPORT` para cumplir el principio de honestidad tecnica del proyecto:
  nunca mezclar simulacion con medicion sin etiqueta.

## Alcance no incluido en este ERD compacto

Para mantener el modelo corto, quedan fuera del diagrama principal:

- usuarios, roles y permisos (necesarios al pasar de prototipo a piloto)
- historial de versiones de modelos y datasets (se puede extender con una
  tabla `MODEL_VERSION` cuando se implemente el pipeline de ML)
- detalle de anomalias detectadas por el sistema (fase 2)
- configuracion del gateway de IA y logs de llamadas al LLM
- movimientos historicos de sustratos (recoleccion, transporte, recepcion)
- evaluacion de biodigestores (fase 3, cuando exista volumen suficiente)
- subproductos y su caracterizacion agronomica
- facturacion, convenios y documentos contractuales con instituciones
