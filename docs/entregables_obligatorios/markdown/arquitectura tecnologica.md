# GreenSpark: Arquitectura tecnológica

**Equipo:** HackHeroes · **Mención:** Energía · **Lugar:** Santa Cruz de la Sierra, Bolivia

> **Estado:** arquitectura propuesta para el simulador investigativo y su evolución hacia un piloto MFC instrumentado. Este documento no afirma que todos los componentes estén implementados durante la hackathon.

## 1. Principios

- **Transparencia:** distinguir simulaciones, metas y mediciones.
- **Modularidad:** separar interfaz, API, modelo, reportes y telemetría.
- **Evolución gradual:** comenzar con datos de literatura y conectar sensores cuando exista un reactor físico.
- **Trazabilidad:** conservar supuestos, versión del modelo y origen de cada dato.

## 2. Arquitectura de fase 1: investigación y simulación

```text
┌──────────────────────────────────────────────────────────┐
│                 INTERFAZ INSTITUCIONAL                   │
│ escenario MFC │ comparación │ recomendación │ reporte    │
└──────────────────────────┬───────────────────────────────┘
                           │ HTTPS / JSON
┌──────────────────────────▼───────────────────────────────┐
│                  API DE APLICACIÓN                      │
│ /escenarios     → validar y guardar variables           │
│ /predecir       → baseline + modelo predictivo          │
│ /comparar       → ordenar escenarios                    │
│ /recomendar     → sugerir siguiente experimento         │
│ /reportes       → métricas de sostenibilidad            │
│ /agente         → explicación opcional mediante LLM     │
└───────────────┬───────────────────┬──────────────────────┘
                │                   │
       ┌────────▼────────┐  ┌───────▼────────────────┐
       │ Base de datos  │  │ Artefactos del modelo │
       │ escenarios     │  │ baseline + regresión  │
       └─────────────────┘  └────────────────────────┘
```

## 3. Arquitectura de fase 2: piloto físico

```text
[ Reactor MFC ]
   │ sensores: voltaje · corriente · pH · temperatura
   ▼
[ Captura de telemetría ]
   ▼
[ API de ingestión ] ──► [ dataset local versionado ]
   │                              │
   ├──► alertas de anomalías       └──► reentrenamiento
   └──► panel de rendimiento real
```

## 4. Stack propuesto

| Capa | Tecnología | Motivo |
| --- | --- | --- |
| **Frontend** | React | Panel institucional y comparación de escenarios. |
| **Backend** | Python + FastAPI | Integración sencilla con modelos y validación de datos. |
| **Persistencia** | SQLite en prototipo → PostgreSQL al escalar | Inicio simple y migración posterior. |
| **ML** | pandas, numpy y scikit-learn | Regresión, baseline y métricas reproducibles. |
| **Agente** | LLM por API | Explicación y reporte, sin delegar cálculos numéricos. |
| **Telemetría futura** | Microcontrolador + sensores | Captura de variables del reactor físico. |

## 5. Modelo de datos

```text
Institucion(id, nombre, tipo, zona)
Sustrato(id, nombre, origen, humedad, cod_estimado, contaminacion)
ConfiguracionMFC(id, volumen_l, area_electrodo_cm2, material, distancia_cm, resistencia_ohm)
Escenario(id, institucion_id, sustrato_id, configuracion_id, ph, temperatura_c, retencion_h, estado_dato)
Prediccion(id, escenario_id, voltaje_v, corriente_ma, potencia_mw, densidad_mw_m2, confianza, version_modelo)
Recomendacion(id, escenario_id, prioridad, explicacion, supuestos)
LecturaSensor(id, escenario_id, fecha_hora, voltaje_v, corriente_ma, ph, temperatura_c)
Reporte(id, institucion_id, periodo, estado_dato, texto)
```

`estado_dato` debe distinguir `SIMULADO`, `MEDIDO` y `META_EXPLORATORIA`.

## 6. Endpoints principales

| Método | Ruta | Función |
| --- | --- | --- |
| `POST` | `/escenarios` | Registrar variables del escenario MFC. |
| `POST` | `/predecir` | Estimar rendimiento proyectado y mostrar supuestos. |
| `POST` | `/comparar` | Comparar configuraciones. |
| `GET` | `/recomendar/{escenario_id}` | Priorizar el siguiente experimento. |
| `POST` | `/reportes` | Generar métricas institucionales. |
| `POST` | `/agente` | Explicar resultados estructurados mediante LLM. |
| `POST` | `/telemetria` | Recibir sensores durante la fase 2. |

## 7. Seguridad y calidad de datos

- Validar rangos físicos antes de almacenar escenarios.
- Conservar fuente, fecha y versión de cada coeficiente.
- Mostrar si un valor es simulado o medido.
- Limitar acceso a datos institucionales.
- Evitar que el LLM calcule cifras: solo interpreta resultados del backend.
- Versionar modelos y registrar métricas de evaluación.

## 8. Escalabilidad

La escalabilidad no consiste únicamente en agregar servidores. GreenSpark debe acumular evidencia:

1. datos de literatura;
2. escenarios simulados;
3. mediciones universitarias;
4. pilotos sectoriales;
5. prefactibilidad de biodigestores;
6. evaluación regulatoria para autoconsumo y excedentes.
