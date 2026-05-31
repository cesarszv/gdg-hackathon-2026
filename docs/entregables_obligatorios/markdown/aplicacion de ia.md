# GreenSpark: Aplicación de IA

**Equipo:** HackHeroes · **Mención:** Energía · **Lugar:** Santa Cruz de la Sierra, Bolivia

> **Principio:** la IA de GreenSpark debe mejorar una decisión técnica. No reemplaza mediciones ni convierte una simulación en un resultado experimental.

## 1. Pregunta que resuelve

> ¿Qué configuración de reactor MFC y qué mezcla de sustrato conviene validar primero para maximizar un rendimiento eléctrico estable bajo condiciones definidas?

La IA reduce el espacio de búsqueda antes de construir y operar múltiples prototipos físicos.

## 2. Componente 1: predicción de escenarios MFC

### 2.1 Entradas

| Grupo | Variables |
| --- | --- |
| **Sustrato** | `tipo_residuo`, `masa_kg`, `humedad`, `cod_estimado`, `contaminacion` |
| **Operación** | `ph`, `temperatura_c`, `retencion_h`, `frecuencia_alimentacion` |
| **Reactor** | `volumen_l`, `area_electrodo_cm2`, `material_electrodo`, `distancia_electrodos_cm`, `resistencia_externa_ohm` |

### 2.2 Salidas

- `voltaje_proyectado_v`
- `corriente_proyectada_ma`
- `potencia_proyectada_mw`
- `densidad_potencia_proyectada_mw_m2`
- `estabilidad_proyectada`
- `nivel_confianza`

Todas las salidas del MVP se muestran como **[SIMULACIÓN]**.

### 2.3 Modelo

- **Inicio:** regresión lineal como baseline interpretable.
- **Comparación:** Random Forest o Gradient Boosting mediante `scikit-learn`.
- **Datos iniciales:** valores extraídos de literatura y escenarios sintéticos documentados.
- **Evolución:** reentrenamiento con datos del piloto físico universitario.

### 2.4 Evaluación

| Métrica | Propósito |
| --- | --- |
| **MAE** | Medir el error medio de predicción. |
| **RMSE** | Penalizar errores grandes. |
| **R²** | Comparar capacidad explicativa. |
| **Error frente a baseline** | Demostrar si el modelo aporta valor frente a una regla simple. |

No corresponde afirmar que el modelo supera el baseline hasta ejecutar y documentar la comparación.

## 3. Componente 2: recomendador de experimentos

El recomendador ordena escenarios según:

1. potencia proyectada;
2. estabilidad esperada;
3. disponibilidad local del sustrato;
4. costo y complejidad experimental;
5. incertidumbre del modelo.

La salida no es una orden automática. Es una lista priorizada para que el equipo universitario decida qué experimento físico realizar primero.

## 4. Componente 3: detección de anomalías

Esta capacidad pertenece a la **fase 2**, cuando existan sensores:

- compara potencia observada y esperada;
- detecta caídas abruptas de voltaje;
- alerta sobre desviaciones de pH o temperatura;
- identifica pérdida de estabilidad;
- sugiere revisar alimentación, conexión o condiciones del reactor.

## 5. Componente 4: agente explicativo

Un LLM por API puede transformar resultados estructurados en lenguaje comprensible:

- explica por qué un escenario fue priorizado;
- responde preguntas institucionales;
- prepara un reporte de sostenibilidad;
- diferencia valores simulados, medidos y metas exploratorias.

### Regla anti-alucinación

El agente recibe resultados calculados por el backend. No inventa potencia, ahorro, emisiones ni porcentajes. Si no existe un dato, debe responder que todavía requiere validación.

## 6. Flujo propuesto

```text
Usuario registra escenario MFC
   │
   ▼
API valida variables
   │
   ├──► baseline interpretable
   ├──► modelo predictivo
   └──► recomendador de experimentos
   │
   ▼
Panel muestra resultado [SIMULACIÓN] + supuestos
   │
   └──► agente explica y redacta reporte

Fase 2:
sensores ──► telemetría ──► anomalías ──► dataset local ──► reentrenamiento
```

## 7. Tecnologías propuestas

| Herramienta | Función |
| --- | --- |
| **Python + pandas + numpy** | Preparación de datos. |
| **scikit-learn** | Baseline, regresión y evaluación. |
| **FastAPI** | API para simulación y reportes. |
| **SQLite → PostgreSQL** | Persistencia del MVP y crecimiento posterior. |
| **LLM por API** | Explicación y reporte institucional, si se implementa. |
| **Sensores e IoT** | Telemetría del reactor en fase 2. |

## 8. Evidencia que debe mostrar la demo

1. Un escenario MFC etiquetado como **[SIMULADO]**.
2. Variables editables y supuestos visibles.
3. Comparación entre dos configuraciones.
4. Recomendación del siguiente experimento.
5. Diferenciación explícita entre proyección, medición y meta.

> **Resultado esperado:** el jurado entiende para qué sirve la IA y qué evidencia todavía falta recolectar.
