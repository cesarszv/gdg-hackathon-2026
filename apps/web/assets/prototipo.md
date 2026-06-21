**\# GreenSpark: Documento técnico con investigación**

**\*\*Equipo:\*\*** HackHeroes · **\*\*Hackathon:\*\*** Build With AI 2026 · **\*\*Mención:\*\*** Energía · **\*\*Lugar:\*\*** Santa Cruz de la Sierra, Bolivia

**\*\*Fecha:\*\*** 31 de mayo de 2026

\> **\*\*En una frase:\*\*** GreenSpark diseña y simula una ruta de economía circular basada inicialmente en reactores MFC para investigar la conversión de residuos bioorgánicos en electricidad y, cuando exista evidencia y volumen suficiente, evaluar biodigestores para escalar capacidad.

**\#\# 0\. Nota de honestidad técnica**

Este documento distingue cuatro tipos de información:

\- **\*\*\[DATO\]:\*\*** información publicada por una fuente verificable.  
\- **\*\*\[CÁLCULO\]:\*\*** operación explícita derivada de un dato.  
\- **\*\*\[SIMULACIÓN\]:\*\*** resultado generado por un modelo o escenario, todavía no observado en un reactor local.  
\- **\*\*\[META EXPLORATORIA\]:\*\*** objetivo sujeto a medición y validación.

GreenSpark no presenta un reactor físico construido por el equipo ni electricidad medida durante la hackathon. El entregable es un diseño respaldado por investigación, una simulación conceptual y una hoja de ruta experimental. Tampoco afirma que el subproducto sea un fertilizante comercial: su posible uso agronómico requiere caracterización, estabilización y revisión regulatoria.

**\#\# 1\. Resumen ejecutivo**

Santa Cruz de la Sierra produce **\*\*1.909,86 t/día\*\*** de residuos y el **\*\*50,84%\*\*** corresponde a residuos orgánicos compostables: aproximadamente **\*\*970,97 t/día\*\***, redondeadas a **\*\*971 t/día\*\*** \[DATO \+ CÁLCULO: \`1.909,86 × 0,5084 \= 970,97\`\]. En mayo de 2026 se inauguró una planta municipal de compostaje con capacidad inicial de hasta **\*\*7 t/día\*\*** y Swisscontact reportó más de **\*\*20 t/día\*\*** de residuos bioorgánicos en el Mercado Nuevo Abasto \[DATO\]. Estos avances demuestran que existe interés local y un flujo aprovechable, pero no agotan la necesidad de nuevas rutas circulares.

GreenSpark propone tres fases:

1\. **\*\*Investigación universitaria:\*\*** diseño y simulación de reactores de celdas de combustible microbianas (MFC).  
2\. **\*\*Pilotos instrumentados:\*\*** módulos MFC con colegios privados, restaurantes y agroindustrias.  
3\. **\*\*Escalamiento:\*\*** evaluación de biodigestores o configuraciones híbridas cuando exista suficiente volumen segregado.

La IA compara escenarios, estima rendimiento eléctrico proyectado, recomienda experimentos y traduce resultados en métricas de sostenibilidad. Su valor aumenta a medida que el piloto físico incorpora mediciones locales.

**\#\# 2\. Contexto e investigación del problema**

**\#\#\# 2.1 Evidencia local**

| Evidencia | Interpretación |  
| \--- | \--- |  
| **\*\*1.909,86 t/día\*\*** de residuos sólidos y **\*\*50,84%\*\*** de orgánicos compostables según PMGIRS 2023\. \[Fuente\](https://www.gmsantacruz.gob.bo/Noticias/Detalle/?id=517) | La materia bioorgánica es un flujo local relevante. |  
| Planta municipal de compostaje con capacidad inicial de hasta **\*\*7 t/día\*\***. \[Fuente\](https://www.swisscontact.org/es/noticias/un-nuevo-rumbo-para-los-residuos-organicos-santa-cruz-inaugura-su-planta-de-compostaje) | Existen avances locales, pero también espacio para rutas complementarias. |  
| Más de **\*\*20 t/día\*\*** de residuos bioorgánicos reportados en el Mercado Nuevo Abasto. \[Fuente\](https://www.swisscontact.org/es/noticias/nace-una-alternativa-sostenible-para-la-gestion-y-aprovechamiento-de-los-residuos-organicos) | Hay generadores concentrados que pueden facilitar estudios futuros. |  
| DS 4477, modificado por DS 5167 y DS 5549\. \[Fuente\](https://www.aetn.gob.bo/docfly/app/webroot/uploads/26/8998-P5JK.pdf) | Bolivia regula la generación distribuida con fuentes renovables y distingue mecanismos según escala. Una futura solución conectada a red debe validar su encaje técnico y regulatorio con la AETN y la empresa distribuidora. |

**\#\#\# 2.2 Problema definido**

Las instituciones de Santa Cruz de la Sierra interesadas en economía circular no cuentan con datos locales suficientes para decidir qué residuos bioorgánicos conviene valorizar energéticamente, qué rendimiento esperar de una configuración MFC ni cuándo escalar hacia tecnologías de mayor capacidad. Esta incertidumbre aumenta el riesgo de invertir en infraestructura sobredimensionada o comunicar ahorros que todavía no pueden demostrarse.

El desafío es construir una ruta de investigación que permita **\*\*comparar escenarios, priorizar experimentos y reemplazar supuestos con mediciones locales\*\*** antes de escalar.

**\#\#\# 2.3 Causas y consecuencias**

| Causa | Consecuencia |  
| \--- | \--- |  
| No existen mediciones propias que relacionen sustrato, operación y configuración MFC con rendimiento eléctrico local. | Las decisiones se apoyan en literatura general y no en evidencia cruceña. |  
| Los residuos bioorgánicos varían por origen, composición y contaminación. | Un piloto puede rendir de forma distinta según el generador y el lote. |  
| Las MFC y los biodigestores responden a escalas y objetivos diferentes. | Elegir una tecnología sin medir volumen y demanda puede conducir a inversiones inadecuadas. |  
| Los indicadores técnicos son difíciles de comunicar a usuarios no especializados. | La sostenibilidad se presenta como discurso general en lugar de métricas trazables. |

**\#\#\# 2.4 Cliente inicial**

El primer cliente no es toda la ciudad. Son **\*\*universidades privadas\*\*** capaces de financiar investigación aplicada y utilizar su campus como laboratorio vivo. Su incentivo combina aprendizaje, reputación, participación estudiantil y métricas de sostenibilidad.

Consulta el análisis ampliado en \[problema identificado\](\<./01 problema identificado.md\>).

**\#\# 3\. Objetivos**

**\#\#\# 3.1 Objetivo general**

Diseñar una ruta técnica verificable para investigar la conversión de residuos bioorgánicos de Santa Cruz de la Sierra en electricidad mediante reactores MFC, utilizando simulación asistida por IA para priorizar experimentos y preparar pilotos físicos instrumentados.

**\#\#\# 3.2 Objetivos específicos**

1\. Documentar las variables del sustrato, la operación y el reactor que afectan el rendimiento MFC.  
2\. Diferenciar datos publicados, simulaciones, mediciones y metas exploratorias.  
3\. Diseñar un pipeline que compare un baseline interpretable con modelos predictivos candidatos.  
4\. Priorizar escenarios experimentales con criterios técnicos, económicos y de disponibilidad local.  
5\. Traducir resultados estructurados en reportes comprensibles sin delegar cálculos críticos a un LLM.  
6\. Definir cómo incorporar telemetría local y evaluar escalamiento cuando exista evidencia suficiente.

**\#\# 4\. Alcance y limitaciones**

**\#\#\# 4.1 Incluido en el entregable de hackathon**

\- investigación del problema local y fundamento técnico de MFC;  
\- diseño conceptual del reactor y variables experimentales;  
\- arquitectura propuesta para simulación, trazabilidad y reportes;  
\- contratos de entrada y salida para escenarios MFC;  
\- estrategia de baseline, modelos candidatos y evaluación;  
\- diseño de un agente explicativo opcional con controles anti-alucinación;  
\- hoja de ruta para piloto instrumentado y escalamiento.

**\#\#\# 4.2 Fuera de alcance durante la hackathon**

\- reactor físico construido por el equipo;  
\- aplicación ejecutable desplegada;  
\- electricidad medida en condiciones locales;  
\- modelo predictivo entrenado y evaluado con datos locales;  
\- conexión o venta de energía a la red;  
\- garantía de ahorro energético;  
\- fertilizante comercial certificado;  
\- créditos de carbono.

\> Debido al tiempo limitado de la hackathon y la ausencia de hardware físico, GreenSpark prioriza un diseño investigativo transparente sobre una integración incompleta presentada como producto terminado.

**\#\# 5\. Investigación técnica**

**\#\#\# 5.1 Fundamento MFC**

Una celda de combustible microbiana o **\*\*MFC\*\*** es un sistema bioelectroquímico. En la cámara anódica, microorganismos oxidan materia orgánica y liberan electrones. Estos circulan por un circuito externo hacia el cátodo y producen corriente eléctrica.

\`\`\`text  
Residuo bioorgánico acondicionado  
   → cámara anódica: actividad microbiana  
   → liberación de electrones y protones  
   → circuito externo: corriente eléctrica  
   → cámara catódica: reacción de reducción  
\`\`\`

El rendimiento depende del sustrato, el diseño, los materiales, el pH, la temperatura y la resistencia externa. Una revisión académica de 2025 identifica como barreras para la comercialización la baja densidad de potencia, el costo de electrodos, la estabilidad operativa y la escalabilidad. Por eso GreenSpark plantea MFC como una ruta de investigación y piloto, no como una fuente comercial demostrada.

**\#\#\# 5.2 Hallazgos de la literatura que condicionan el diseño**

| Hallazgo verificado | Decisión para GreenSpark |  
| \--- | \--- |  
| Una revisión de 2025 describe a las MFC como sistemas que convierten materia orgánica en electricidad mediante actividad microbiana, pero todavía identifica barreras de potencia, costo y escalamiento. | Empezar con investigación y telemetría; no prometer cobertura eléctrica sin medición. |  
| Un estudio comparativo entre MFC y digestión anaerobia encontró diferencias de biodegradación y generación eléctrica según el sustrato; la digestión anaerobia produjo más corriente en ese estudio, mientras la MFC entregó voltaje más estable y electricidad directamente utilizable. | Comparar tecnologías con datos del generador antes de elegir una ruta de mayor capacidad. |  
| Un estudio de 2025 evaluó regresión lineal, Random Forest, KNN y Gradient Boosting para predecir voltaje y densidad de potencia en MFC con residuos de suelo y ganadería. | Mantener un baseline interpretable y comparar candidatos; no fijar un modelo ganador antes de evaluar el dataset local. |  
| La recuperación de fósforo como estruvita está documentada en un sistema MFC alimentado con orina separada en origen. | Tratar la recuperación agronómica como hipótesis específica por sustrato; no extrapolarla automáticamente a residuos alimentarios. |

**\#\#\# 5.3 Alternativas evaluadas**

| Necesidad | Alternativa | Ventaja | Limitación | Decisión |  
| \--- | \--- | \--- | \--- | \--- |  
| Valorización inicial | Compostaje | Tecnología útil y ya aplicada localmente. | Prioriza valorización material, no investigación de generación eléctrica directa. | Complementaria. |  
| Mayor capacidad energética | Biodigestor desde el inicio | Mayor madurez para procesar volumen y producir biogás. | Requiere sustrato suficiente, infraestructura e inversión mayor. | Evaluar en fase 3\. |  
| Investigación bioelectroquímica | MFC sin fase investigativa | Narrativa atractiva. | Riesgo alto de sobreprometer potencia y ahorro. | Descartada. |  
| Ruta elegida | Investigación MFC, simulación y piloto | Permite aprender, medir y escalar con evidencia. | Requiere disciplina experimental. | **\*\*Elegida.\*\*** |  
| Predicción | Reglas fijas | Transparentes y económicas. | No aprenden interacciones complejas. | Conservar como baseline y control. |  
| Predicción | Modelos supervisados | Pueden comparar relaciones y mejorar con datos locales. | Exigen dataset trazable y evaluación. | Propuestos después del baseline. |  
| Explicación | LLM por API | Traduce resultados técnicos a lenguaje comprensible. | Puede alucinar y generar dependencia externa. | Opcional, desacoplado y sin cálculos críticos. |

**\#\# 6\. Justificación del uso de IA**

La IA responde una pregunta concreta:

\> **\*\*¿Qué configuración de reactor MFC y qué mezcla de sustrato conviene validar primero para maximizar un rendimiento eléctrico estable bajo condiciones definidas?\*\***

La IA aporta valor en cuatro niveles:

1\. compara relaciones entre sustrato, operación y configuración;  
2\. estima rendimiento eléctrico proyectado;  
3\. prioriza experimentos antes de construir múltiples prototipos;  
4\. explica resultados estructurados a usuarios no especializados.

La literatura reciente respalda explorar IA para predicción, monitoreo y optimización de MFC. GreenSpark adopta esa idea como hipótesis técnica: baseline primero, evaluación reproducible después y telemetría local antes de utilizar una predicción para decidir una inversión.

Las reglas determinísticas conservan el control de rangos físicos, cálculos críticos y etiquetas de evidencia. Un modelo más complejo solo se justifica si mejora de forma consistente frente al baseline. El LLM opcional redacta explicaciones, pero no inventa potencia, ahorro ni emisiones.

Consulta el detalle en \[aplicación de IA\](\<./06 aplicacion de ia.md\>).

**\#\# 7\. Arquitectura de la solución**

**\#\#\# 7.1 Componentes principales**

| Componente | Responsabilidad |  
| \--- | \--- |  
| **\*\*Frontend institucional\*\*** | Capturar variables, mostrar etiquetas y comparar escenarios. |  
| **\*\*API de aplicación\*\*** | Orquestar validación, persistencia, modelos y respuesta estructurada. |  
| **\*\*Reglas y cálculos\*\*** | Validar rangos físicos y calcular métricas controladas. |  
| **\*\*Baseline y modelos candidatos\*\*** | Estimar resultados proyectados y comparar desempeño. |  
| **\*\*Recomendador\*\*** | Ordenar experimentos con criterios visibles. |  
| **\*\*Gateway de IA opcional\*\*** | Encapsular el proveedor LLM y validar explicaciones. |  
| **\*\*Persistencia\*\*** | Conservar escenarios, fuentes, estados y versiones. |  
| **\*\*Telemetría de fase 2\*\*** | Incorporar mediciones del reactor físico. |

**\#\#\# 7.2 Flujo general**

\`\`\`mermaid  
flowchart TD  
    U\[Usuario institucional\] \--\> FE\[Frontend\]  
    FE \--\> API\[API de aplicación\]  
    API \--\> VAL\[Validación física y esquema\]  
    VAL \--\> DATA\[(Dataset trazable)\]  
    VAL \--\> BASE\[Baseline interpretable\]  
    DATA \--\> ML\[Modelos candidatos\]  
    BASE \--\> COMP\[Comparación\]  
    ML \--\> COMP  
    COMP \--\> REC\[Recomendador de experimentos\]  
    REC \--\> OUT\[Simulación, supuestos y advertencias\]  
    OUT \--\> FE  
    OUT \-. contexto mínimo .-\> GATE\[Gateway de IA opcional\]  
    GATE \-. explicación estructurada .-\> FE  
    SENSOR\[Sensores MFC: fase 2\] \-. telemetría .-\> DATA  
\`\`\`

\> **\*\*Nota:\*\*** el diagrama representa una arquitectura propuesta. No demuestra que los componentes estén implementados en el checkout actual.

La arquitectura separa predicción, explicación y evidencia física. Consulta el detalle en \[arquitectura tecnológica\](\<./07 arquitectura tecnologica.md\>).

**\#\# 8\. Stack tecnológico propuesto**

El checkout actual es documental. Las versiones exactas deben fijarse al iniciar una implementación.

| Capa | Tecnología | Justificación | Estado |  
| \--- | \--- | \--- | \--- |  
| **\*\*Frontend\*\*** | React | Permite construir un panel interactivo para comparar escenarios. | **\*\*\[PROPUESTO\]\*\*** |  
| **\*\*Backend\*\*** | Python \+ FastAPI | Integra validación, APIs y herramientas científicas con baja complejidad inicial. | **\*\*\[PROPUESTO\]\*\*** |  
| **\*\*Persistencia MVP\*\*** | SQLite | Reduce operación durante la validación del flujo. | **\*\*\[PROPUESTO\]\*\*** |  
| **\*\*Persistencia escalada\*\*** | PostgreSQL | Soporta telemetría y operación multiinstitución. | **\*\*\[FASE 3\]\*\*** |  
| **\*\*Datos\*\*** | pandas \+ numpy | Facilitan preparación y análisis reproducible. | **\*\*\[PROPUESTO\]\*\*** |  
| **\*\*ML\*\*** | scikit-learn | Permite evaluar un baseline lineal y candidatos como Random Forest o Gradient Boosting sin infraestructura compleja. La selección final depende del dataset y las métricas observadas. | **\*\*\[PROPUESTO\]\*\*** |  
| **\*\*Explicación\*\*** | LLM por API | Redacta reportes comprensibles a partir de contexto mínimo estructurado. | **\*\*\[OPCIONAL\]\*\*** |  
| **\*\*Piloto físico\*\*** | Microcontrolador \+ sensores | Registra voltaje, corriente, pH y temperatura. | **\*\*\[FASE 2\]\*\*** |

**\#\# 9\. Modelo de datos**

| Entidad | Propósito | Campos principales |  
| \--- | \--- | \--- |  
| **\*\*Institución\*\*** | Identificar al actor que investiga o pilota. | \`id\`, \`nombre\`, \`tipo\`, \`zona\` |  
| **\*\*Sustrato\*\*** | Registrar origen y calidad del residuo. | \`id\`, \`nombre\`, \`origen\`, \`humedad\_pct\`, \`cod\_estimado\_mg\_l\`, \`contaminacion\_pct\` |  
| **\*\*ConfiguraciónMFC\*\*** | Describir el reactor evaluado. | \`volumen\_l\`, \`area\_electrodo\_cm2\`, \`material\`, \`distancia\_cm\`, \`resistencia\_ohm\` |  
| **\*\*Escenario\*\*** | Combinar sustrato, operación y reactor. | \`ph\`, \`temperatura\_c\`, \`retencion\_h\`, \`estado\_dato\`, \`fuente\` |  
| **\*\*Predicción\*\*** | Conservar resultados proyectados y versión del modelo. | \`voltaje\_v\`, \`corriente\_ma\`, \`potencia\_mw\`, \`densidad\_mw\_m2\`, \`confianza\`, \`version\_modelo\` |  
| **\*\*Recomendación\*\*** | Explicar qué experimento priorizar. | \`prioridad\`, \`explicacion\`, \`supuestos\`, \`advertencias\` |  
| **\*\*LecturaSensor\*\*** | Incorporar telemetría en fase 2\. | \`fecha\_hora\`, \`voltaje\_v\`, \`corriente\_ma\`, \`ph\`, \`temperatura\_c\` |  
| **\*\*Reporte\*\*** | Entregar un resumen institucional trazable. | \`periodo\`, \`estado\_dato\`, \`texto\`, \`version\_generador\` |

\`estado\_dato\` debe distinguir \`SIMULADO\`, \`MEDIDO\` y \`META\_EXPLORATORIA\`.

**\#\# 10\. Lógica del sistema**

1\. El usuario registra tipo y masa de residuo, humedad, pH, temperatura y configuración MFC.  
2\. El backend valida esquema y rangos físicos antes de persistir.  
3\. Las reglas determinísticas calculan indicadores controlados.  
4\. El baseline y los modelos candidatos estiman rendimiento proyectado.  
5\. El sistema compara resultados y ordena experimentos según potencia, estabilidad, disponibilidad local, costo experimental e incertidumbre.  
6\. La API devuelve una respuesta estructurada con supuestos, advertencias y versión del modelo.  
7\. Si se solicita un reporte, el gateway entrega contexto mínimo a un LLM opcional y valida que no aparezcan cifras nuevas.  
8\. Durante la fase 2, la telemetría permite contrastar predicción con medición y mejorar el dataset local.

**\#\# 11\. Diseño de interacción con IA**

**\#\#\# 11.1 Entrada estructurada**

\`\`\`json  
{  
  "scenario\_id": "mfc-scz-001",  
  "estado\_dato": "SIMULADO",  
  "sustrato": {  
    "tipo\_residuo": "residuo\_alimentario",  
    "masa\_kg": 5,  
    "humedad\_pct": 72  
  },  
  "operacion": {  
    "ph": 7,  
    "temperatura\_c": 28,  
    "retencion\_h": 48  
  },  
  "reactor": {  
    "volumen\_l": 10,  
    "area\_electrodo\_cm2": 120,  
    "material\_electrodo": "carbon",  
    "distancia\_electrodos\_cm": 4,  
    "resistencia\_externa\_ohm": 1000  
  }  
}  
\`\`\`

**\#\#\# 11.2 Regla para el agente explicativo**

\`\`\`text  
Explica únicamente los resultados estructurados recibidos.  
No calcules ni inventes potencia, ahorro, emisiones o porcentajes.  
Diferencia datos publicados, simulaciones, mediciones y metas exploratorias.  
Si falta información, decláralo de forma explícita.  
\`\`\`

**\#\#\# 11.3 Controles aplicados**

| Control | Propósito |  
| \--- | \--- |  
| Validación de rangos físicos | Rechazar entradas inválidas antes de invocar modelos. |  
| Esquema estructurado | Evitar respuestas libres difíciles de validar. |  
| Etiquetado obligatorio | Separar \`SIMULADO\`, \`MEDIDO\` y \`META\_EXPLORATORIA\`. |  
| Cálculos fuera del LLM | Mantener métricas críticas bajo control determinístico. |  
| Contexto mínimo | Reducir exposición de datos y riesgo de alucinación. |  
| Fallback | Conservar respuesta determinística si falla el modelo o la API externa. |  
| Control humano | Presentar recomendaciones como apoyo, no como orden automática. |

**\#\# 12\. Validación del prototipo**

**\#\#\# 12.1 Estado actual**

El repositorio documenta el diseño conceptual. No corresponde reportar métricas medidas del modelo ni electricidad producida por un reactor local.

**\#\#\# 12.2 Hipótesis y método de validación**

| Código | Hipótesis | Método de validación |  
| \--- | \--- | \--- |  
| **\*\*H1\*\*** | Una universidad privada pagaría por investigación aplicada y métricas de sostenibilidad. | Entrevistas, carta de interés y propuesta de convenio. |  
| **\*\*H2\*\*** | Los residuos locales pueden segregarse con consistencia suficiente para experimentos MFC. | Registro de tipo, masa, frecuencia y contaminación. |  
| **\*\*H3\*\*** | Un modelo puede priorizar escenarios mejor que una regla fija. | Comparación mediante MAE, RMSE y R² frente a baseline, con partición de datos y validación cruzada cuando el volumen lo permita. |  
| **\*\*H4\*\*** | Un piloto físico permite construir un dataset local útil. | Medición de voltaje, corriente, potencia, pH, temperatura y estabilidad. |  
| **\*\*H5\*\*** | El volumen segregado puede justificar una evaluación posterior de biodigestores. | Inventario por generador y estudio de prefactibilidad. |  
| **\*\*H6\*\*** | El subproducto posee potencial agronómico después del tratamiento correspondiente. | Caracterización fisicoquímica, estabilización y revisión regulatoria. |

**\#\#\# 12.3 Casos mínimos de prueba para una implementación futura**

1\. escenario válido con variables completas;  
2\. escenario con datos faltantes;  
3\. escenario con valores físicamente inválidos;  
4\. comparación de dos configuraciones;  
5\. fallo del modelo o de la API externa;  
6\. telemetría anómala simulada para preparar la fase 2\.

**\#\# 13\. Riesgos técnicos y mitigaciones**

| Riesgo | Impacto | Mitigación |  
| \--- | \--- | \--- |  
| Dataset inicial pequeño | Predicción poco confiable. | Baseline interpretable, validación cruzada y reentrenamiento con datos locales. |  
| Datos sintéticos confundidos con evidencia | Sobrepromesa técnica. | Etiquetas visibles y separación estricta entre simulación y medición. |  
| Alucinación del LLM | Reporte incorrecto. | Contexto mínimo, esquema estructurado, cálculos fuera del LLM y fallback. |  
| Sesgo por literatura no local | Priorización débil para Santa Cruz. | Registrar fuentes y sustituir supuestos con telemetría del piloto. |  
| Dependencia de API externa | Fallo, latencia o costo elevado. | Mantener el LLM opcional y medir antes de seleccionar proveedor. |  
| Potencia MFC insuficiente | Caso de uso energético inviable. | Validar por fases y evaluar biodigestores o soluciones híbridas al escalar. |  
| Sustrato variable o contaminado | Resultados poco estables. | Registrar composición, fuente y criterios de aceptación. |

**\#\# 14\. Impacto esperado**

| Dimensión | Resultado esperado | Cómo se mide |  
| \--- | \--- | \--- |  
| **\*\*Investigación\*\*** | Decisiones experimentales basadas en escenarios comparables. | Escenarios evaluados, supuestos documentados y protocolo priorizado. |  
| **\*\*IA\*\*** | Priorización verificable frente a una regla simple. | MAE, RMSE y R² contra baseline. |  
| **\*\*Circularidad\*\*** | Trazabilidad de residuos bioorgánicos utilizados. | Masa segregada, masa procesada y destino del subproducto. |  
| **\*\*Energía\*\*** | Aporte medido o proyectado a cargas seleccionadas. | \`kWh generados / kWh consumidos por la carga elegida\`, siempre separando simulación y medición. |  
| **\*\*Educación\*\*** | Participación universitaria y aprendizaje aplicado. | Sesiones, estudiantes involucrados y retroalimentación. |  
| **\*\*Escalamiento\*\*** | Decisión informada sobre piloto o biodigestor. | Volumen, demanda, costo, desempeño y requisitos regulatorios. |

GreenSpark no fija un porcentaje de cobertura eléctrica antes de disponer de una línea base de consumo y mediciones físicas. Cualquier meta posterior debe indicar la carga seleccionada, el período, la fuente del dato y si el resultado es simulado o medido.

Consulta el detalle en \[impacto esperado\](\<./05 impacto esperado.md\>) y \[análisis financiero\](\<./08 analisis financiero.md\>).

**\#\# 15\. Roadmap**

| Etapa | Alcance | Evidencia requerida |  
| \--- | \--- | \--- |  
| **\*\*Hackathon\*\*** | Investigación, diseño MFC, arquitectura, contratos y escenarios documentados. | Entregables coherentes y supuestos visibles. |  
| **\*\*MVP investigativo\*\*** | Interfaz, API, baseline, modelos candidatos, recomendador y persistencia local. | Pruebas de flujo, trazabilidad y comparación frente a baseline. |  
| **\*\*Piloto MFC\*\*** | Reactor físico, sensores, telemetría y dataset local. | Potencia, energía, estabilidad, pH, temperatura y calidad del sustrato medidos. |  
| **\*\*Operación multiinstitución\*\*** | Monitoreo, autenticación, auditoría y reportes recurrentes. | Convenios, renovaciones y carga operativa observada. |  
| **\*\*Escalamiento energético\*\*** | Prefactibilidad de biodigestor o solución híbrida. | Volumen, demanda, costos y revisión regulatoria. |

**\#\# 16\. Marco regulatorio**

El **\*\*DS 4477\*\*** estableció el marco boliviano para generación distribuida con fuentes renovables. El **\*\*DS 5167\*\*** incorporó modificaciones en 2024 y el **\*\*DS 5549\*\***, promulgado el **\*\*18 de febrero de 2026\*\***, volvió a modificar el marco. El DS 5549 define escalas, exige autorización de la AETN para el autoproductor y distingue dos rutas: compensación económica mensual para generación distribuida conectada a la red y venta mediante contrato con la empresa distribuidora para proyectos de media escala.

GreenSpark no afirma que un piloto MFC pueda conectarse automáticamente a la red ni incorpora ingresos por excedentes en su escenario base. La aplicabilidad del marco a una futura solución MFC, biodigestor o sistema híbrido debe confirmarse con la **\*\*AETN\*\*** y la empresa distribuidora antes de diseñar una conexión.

Para GreenSpark, la secuencia correcta es:

1\. investigar y medir;  
2\. priorizar autoconsumo en cargas seleccionadas;  
3\. evaluar requisitos técnicos, registro y adecuaciones;  
4\. confirmar la fuente renovable, escala y modalidad aplicable con la AETN y la empresa distribuidora;  
5\. estudiar compensación o contrato por excedentes únicamente si el escalamiento lo permite.

**\#\# 17\. Fuentes consultadas**

**\#\#\# 17.1 Contexto local y normativa**

\- \[GAMSC: campaña CompostArte y datos del PMGIRS 2023\](https://www.gmsantacruz.gob.bo/Noticias/Detalle/?id=517)  
\- \[Swisscontact: planta municipal de compostaje, 14/05/2026\](https://www.swisscontact.org/es/noticias/un-nuevo-rumbo-para-los-residuos-organicos-santa-cruz-inaugura-su-planta-de-compostaje)  
\- \[Swisscontact: Semilla Urbana, 28/04/2026\](https://www.swisscontact.org/es/noticias/nace-una-alternativa-sostenible-para-la-gestion-y-aprovechamiento-de-los-residuos-organicos)  
\- \[AETN: Decreto Supremo N.º 4477\](https://www.aetn.gob.bo/docfly/app/webroot/uploads/norma-rloza-2021-05-27-i.pdf)  
\- \[AETN: Decreto Supremo N.º 5167\](https://www.aetn.gob.bo/docfly/app/webroot/uploads/AETN24-0611151515%28admin%29.pdf)  
\- \[AETN: Decreto Supremo N.º 5549, promulgado el 18/02/2026\](https://www.aetn.gob.bo/docfly/app/webroot/uploads/26/8998-P5JK.pdf)

**\#\#\# 17.2 Fundamento MFC, IA y recuperación de nutrientes**

\- \[Bioresources and Bioprocessing: revisión crítica de MFC para bioenergía sostenible, 2025\](https://link.springer.com/article/10.1186/s13068-025-02649-y)  
\- \[Discover Sustainability: revisión de IA aplicada a MFC, 2025\](https://link.springer.com/article/10.1007/s43621-025-01619-6)  
\- \[Heliyon: predicción de potencia y voltaje MFC mediante aprendizaje automático, 2025\](https://pmc.ncbi.nlm.nih.gov/articles/PMC11754162/)  
\- \[Science of the Total Environment: estudio comparativo de MFC y digestión anaerobia\](https://pubmed.ncbi.nlm.nih.gov/29428783/)  
\- \[Environmental Science & Technology: recuperación de fósforo como estruvita mediante MFC alimentada con orina separada en origen\](https://pubmed.ncbi.nlm.nih.gov/21411312/)

**\#\# 18\. Conclusión técnica**

GreenSpark presenta una ruta de innovación aplicada, no una central eléctrica terminada. La propuesta parte de un problema local verificable, utiliza IA donde puede reducir el costo de aprender y conserva cálculos críticos bajo control determinístico. La arquitectura permite comenzar con investigación universitaria, incorporar mediciones en un piloto MFC y decidir con evidencia cuándo evaluar biodigestores o soluciones híbridas de mayor capacidad.

**\# GreenSpark: Impacto esperado**

**\*\*Equipo:\*\*** HackHeroes · **\*\*Mención:\*\*** Energía · **\*\*Lugar:\*\*** Santa Cruz de la Sierra, Bolivia

\> **\*\*Criterio de honestidad:\*\*** GreenSpark presenta impacto esperado y un plan de validación. El equipo todavía no cuenta con un reactor físico propio, una línea base institucional ni resultados energéticos medidos localmente. Por ello, este documento distingue datos publicados, cálculos, metas exploratorias y aspectos pendientes de validación.

**\#\# 1\. Resumen ejecutivo del impacto**

GreenSpark busca convertir residuos bioorgánicos de Santa Cruz de la Sierra en una oportunidad medible de investigación, bioenergía y economía circular. La propuesta comienza con universidades privadas: un simulador asistido por IA permite comparar sustratos y configuraciones de celdas de combustible microbianas (MFC), priorizar experimentos y reducir el riesgo de invertir prematuramente en infraestructura.

El impacto inmediato no es una cantidad ficticia de electricidad. Es una mejora en la calidad de las decisiones: identificar qué residuos conviene estudiar, qué variables deben medirse y cuándo existe evidencia suficiente para construir un piloto. En etapas posteriores, GreenSpark medirá residuos segregados, rendimiento eléctrico, cobertura de cargas seleccionadas y potencial agronómico del subproducto antes de evaluar biodigestores o soluciones híbridas de mayor capacidad.

**\#\# 2\. Situación actual**

Santa Cruz de la Sierra produce **\*\*1.909,86 toneladas de residuos por día\*\*** y el **\*\*50,84%\*\*** corresponde a residuos orgánicos compostables, según datos del PMGIRS 2023 citados por el Gobierno Autónomo Municipal de Santa Cruz de la Sierra (GAMSC). Esto equivale a aproximadamente **\*\*971 t/día\*\*** de materia orgánica compostable \[DATO \+ CÁLCULO: \`1.909,86 × 0,5084 \= 970,97\`\].

La ciudad ya impulsa acciones de valorización. En mayo de 2026 se inauguró una planta municipal de compostaje con capacidad de hasta **\*\*7 t/día\*\*** que recibe inicialmente residuos de los mercados Antiguo y Nuevo Abasto \[DATO\]. Swisscontact también reporta que el Mercado Mayorista Nuevo Abasto genera más de **\*\*20 t/día\*\*** de residuos orgánicos \[DATO\]. Estos avances no demuestran cuánto residuo está disponible para GreenSpark, pero sí justifican investigar rutas complementarias con generadores identificables.

El problema que aborda GreenSpark no es únicamente la existencia de residuos. Las instituciones todavía necesitan datos locales para decidir qué sustratos conviene valorizar, qué rendimiento MFC puede alcanzarse, qué cargas seleccionadas podrían recibir un aporte medible, cuándo evaluar tecnologías de mayor capacidad y cómo tratar el subproducto antes de plantear un uso agronómico.

**\#\# 3\. Teoría de cambio**

\> **\*\*Si\*\*** universidades privadas investigan residuos bioorgánicos locales mediante escenarios MFC trazables y luego validan los escenarios prioritarios con pilotos instrumentados, **\*\*entonces\*\*** podrán comparar alternativas con datos propios. Esto permitirá decidir qué configuraciones escalar, qué residuos valorizar y cuándo evaluar biodigestores o soluciones híbridas, generando impacto energético, ambiental, educativo y económico sin depender de promesas no verificadas.

| Etapa | Acción de GreenSpark | Resultado inmediato | Cambio esperado |  
| \--- | \--- | \--- | \--- |  
| **\*\*1. Investigación\*\*** | Simular escenarios MFC y recomendar experimentos. | Supuestos visibles, escenarios comparables y protocolo experimental. | La universidad prioriza pruebas con evidencia en lugar de intuición. |  
| **\*\*2. Piloto\*\*** | Instrumentar módulos MFC y registrar telemetría. | Datos locales de voltaje, corriente, potencia, estabilidad, pH y temperatura. | La institución mide rendimiento real y mejora el modelo. |  
| **\*\*3. Escalamiento\*\*** | Evaluar biodigestores o soluciones híbridas cuando el volumen lo justifique. | Prefactibilidad técnica, económica y regulatoria. | La organización decide si invierte en una solución de mayor capacidad. |

**\#\# 4\. Beneficiarios**

| Tipo | Beneficiarios | Beneficio esperado |  
| \--- | \--- | \--- |  
| **\*\*Directos en fase 1\*\*** | Universidades privadas | Investigación aplicada, formación estudiantil, visibilidad y métricas de sostenibilidad. |  
| **\*\*Directos en fase 2\*\*** | Colegios privados | Pilotos demostrativos y educación ambiental basada en mediciones. |  
| **\*\*Directos en fase 2\*\*** | Restaurantes y agroindustrias | Trazabilidad de residuos y evaluación de alternativas de valorización. |  
| **\*\*Indirectos\*\*** | Sector agropecuario | Evaluación de subproductos caracterizados y estabilizados con potencial agronómico. |  
| **\*\*Indirectos\*\*** | Ciudadanía | Cultura circular y menor presión futura sobre la disposición final cuando existan pilotos operativos. |  
| **\*\*Actores clave\*\*** | Universidades, generadores, laboratorios y entidades reguladoras | Datos, validación experimental y revisión de requisitos para escalar. |

**\#\# 5\. Tipos de impacto esperado**

**\#\#\# 5.1 Impacto energético**

GreenSpark investigará generación eléctrica directa mediante MFC y medirá voltaje, corriente, potencia, energía y estabilidad en pilotos físicos. La meta es explorar un aporte de hasta **\*\*10%\*\*** para cargas seleccionadas en fases 1 y 2 y evaluar hasta **\*\*20%\*\*** en fase 3 mediante tecnologías de mayor capacidad \[METAS EXPLORATORIAS\]. Estos porcentajes no representan ahorro garantizado ni cobertura de la factura total.

**\#\#\# 5.2 Impacto ambiental**

El piloto promoverá la segregación y valorización trazable de residuos bioorgánicos. Medirá la masa que ingresa al proceso, su destino posterior y el estado del subproducto. Las emisiones evitadas solo se estimarán después de definir una línea base local y una metodología explícita.

UNEP señala que el sector residuos representa el **\*\*20%\*\*** de las emisiones antropogénicas globales de metano y que estas se generan cuando la materia orgánica se descompone, frecuentemente en rellenos y botaderos \[DATO GLOBAL\]. Este dato justifica medir el desvío de orgánicos, pero no permite atribuir automáticamente una reducción de emisiones a GreenSpark.

**\#\#\# 5.3 Impacto económico**

GreenSpark busca reducir el riesgo de invertir en infraestructura sin conocer el sustrato, el rendimiento ni la demanda. El modelo prioriza servicios de investigación, implementación, monitoreo y reporte. El autoconsumo se medirá antes de evaluar generación distribuida y retribución de excedentes.

**\#\#\# 5.4 Impacto social y educativo**

Universidades y colegios pueden convertirse en laboratorios vivos de sostenibilidad. Estudiantes e instituciones podrán recibir indicadores comprensibles sobre IA, bioenergía, experimentación y economía circular.

**\#\#\# 5.5 Impacto tecnológico**

La solución busca construir un dataset local de sustratos y condiciones MFC, comparar modelos predictivos contra un baseline interpretable y priorizar experimentos con supuestos trazables. Cuando exista un piloto físico, incorporará telemetría y detección de anomalías.

La literatura reciente describe las MFC como una tecnología prometedora para convertir biomasa y residuos orgánicos en electricidad, pero también identifica baja potencia, costos operativos y dificultades de escalamiento comercial. GreenSpark responde a esa limitación con una ruta experimental gradual, no con una promesa de despliegue industrial inmediato.

**\#\# 6\. Métricas de impacto**

| Dimensión | Métrica | Método de medición | Meta estimada |  
| \--- | \--- | \--- | \--- |  
| **\*\*Investigación\*\*** | Escenarios MFC comparados | Registro versionado del simulador. | Ejecutar un lote reproducible y documentar sus supuestos \[META DE FASE 1\]. |  
| **\*\*IA\*\*** | Error del modelo frente al baseline | MAE, RMSE y R² sobre el dataset disponible. | Establecer baseline y reportar resultados sin ocultar incertidumbre \[META DE FASE 1\]. |  
| **\*\*Vinculación\*\*** | Interés universitario | Entrevistas, cartas de interés o convenio exploratorio. | Lograr al menos una validación institucional \[META DE FASE 1\]. |  
| **\*\*Circularidad\*\*** | Masa segregada y procesada | Pesaje por tipo de residuo, generador y período. | Medir el \`100%\` del residuo que ingrese al piloto \[META DE PILOTO\]. |  
| **\*\*Calidad del sustrato\*\*** | Contaminación del residuo | Registro de impropios por lote. | Construir línea base y definir criterios de aceptación \[META DE PILOTO\]. |  
| **\*\*Técnica\*\*** | Potencia, energía y estabilidad MFC | Sensores y telemetría del reactor físico. | Construir línea base local antes de prometer cobertura \[META DE PILOTO\]. |  
| **\*\*Energética\*\*** | Cobertura de carga seleccionada | \`kWh medidos o proyectados / kWh consumidos por la carga elegida\`. | Explorar hasta \`10%\` en fases 1 y 2 y evaluar hasta \`20%\` en fase 3 \[META EXPLORATORIA\]. |  
| **\*\*Ambiental\*\*** | Residuo desviado de disposición final | Pesaje y trazabilidad del destino de cada lote. | Cuantificar únicamente lotes con destino verificado \[META DE PILOTO\]. |  
| **\*\*Ambiental\*\*** | Emisiones evitadas estimadas | Línea base local y metodología documentada. | No fijar toneladas de CO₂e antes de validar datos y factores \[A VALIDAR\]. |  
| **\*\*Agronómica\*\*** | Estado del subproducto | Caracterización, estabilización y revisión aplicable. | No plantear uso agrícola sin validación previa \[META DE CONTROL\]. |  
| **\*\*Educativa\*\*** | Participación y comprensión | Asistencia, encuesta breve y retroalimentación. | Ejecutar al menos una sesión demostrativa durante el piloto \[META DE PILOTO\]. |

**\#\# 7\. Escenario antes y después**

| Antes de GreenSpark | Después de la fase investigativa |  
| \--- | \--- |  
| Decisiones energéticas basadas en supuestos generales. | Escenarios comparables con supuestos visibles. |  
| Residuos tratados únicamente como descarte. | Sustratos registrados como oportunidad de valorización. |  
| Porcentajes de ahorro difíciles de defender. | Metas separadas de las mediciones reales. |  
| Sostenibilidad comunicada de forma genérica. | Reportes institucionales trazables. |  
| Escalamiento prematuro. | Decisiones de inversión sujetas a evidencia. |

**\#\# 8\. Escenarios de impacto**

| Escenario | Condición | Impacto esperado |  
| \--- | \--- | \--- |  
| **\*\*Conservador\*\*** | Una universidad utiliza el simulador y valida el protocolo experimental. | Escenarios comparables, supuestos documentados y decisión informada sobre el primer piloto. |  
| **\*\*Moderado\*\*** | Una universidad implementa un piloto MFC instrumentado con residuo segregado. | Dataset local, rendimiento medido, reporte de circularidad y mejora progresiva del modelo. |  
| **\*\*Alto impacto\*\*** | Varios generadores aportan residuos trazables y una institución demuestra volumen suficiente para escalar. | Replicación de pilotos y prefactibilidad de biodigestor o solución híbrida con evaluación económica y regulatoria. |

**\#\# 9\. Horizonte temporal**

| Plazo | Impacto esperado |  
| \--- | \--- |  
| **\*\*Corto plazo: hackathon y fase investigativa\*\*** | Simulación, diseño MFC, protocolo experimental, validación con universidades y métricas definidas. |  
| **\*\*Mediano plazo: piloto físico\*\*** | Telemetría local, pesaje de residuos, comparación del modelo contra baseline y reporte institucional. |  
| **\*\*Largo plazo: escalamiento sujeto a evidencia\*\*** | Evaluación de biodigestores o soluciones híbridas, autoconsumo y posible retribución regulada de excedentes. |

**\#\# 10\. Rol de la IA en el impacto**

La IA permite analizar relaciones entre sustrato, condiciones operativas y rendimiento eléctrico proyectado. Su valor no consiste en automatizar por moda, sino en:

1\. comparar escenarios antes de construir múltiples prototipos;  
2\. estimar rendimiento y estabilidad con incertidumbre visible;  
3\. recomendar qué experimento conviene validar primero;  
4\. detectar anomalías cuando existan sensores;  
5\. explicar resultados estructurados sin inventar cifras.

Una revisión académica de 2025 sobre MFC e IA destaca aplicaciones de modelado predictivo y optimización del rendimiento. GreenSpark aplicará esa lógica de forma verificable: baseline primero, modelo después y reentrenamiento con datos locales cuando exista un piloto.

**\#\# 11\. Supuestos y limitaciones**

| Supuesto o limitación | Estado | Cómo se valida o mitiga |  
| \--- | \--- | \--- |  
| Una universidad privada valora financiar investigación aplicada. | **\*\*A validar\*\*** | Entrevistas, carta de interés o convenio exploratorio. |  
| Existen residuos segregables para un piloto. | **\*\*A validar\*\*** | Pesaje, frecuencia y contaminación por generador. |  
| La simulación ayuda a priorizar experimentos. | **\*\*A validar\*\*** | Comparación del modelo frente a un baseline. |  
| Un reactor MFC puede aportar energía estable a una carga seleccionada. | **\*\*A validar\*\*** | Telemetría del piloto físico. |  
| El subproducto posee potencial agronómico. | **\*\*A validar\*\*** | Caracterización, estabilización y revisión aplicable. |  
| La tecnología MFC escala comercialmente por sí sola. | **\*\*No asumido\*\*** | Evaluar límites técnicos y considerar biodigestores o soluciones híbridas. |  
| Las emisiones evitadas pueden calcularse con factores externos sin adaptación. | **\*\*No asumido\*\*** | Definir línea base local y documentar metodología. |

**\#\# 12\. Plan de validación**

| Paso | Comparación | Evidencia requerida |  
| \--- | \--- | \--- |  
| **\*\*1. Línea base del residuo\*\*** | Situación inicial vs. residuo segregable. | Tipo, masa, frecuencia, contaminación y destino actual por generador. |  
| **\*\*2. Simulación reproducible\*\*** | Regla simple vs. modelo predictivo. | Dataset versionado, supuestos, MAE, RMSE y R². |  
| **\*\*3. Piloto instrumentado\*\*** | Rendimiento proyectado vs. rendimiento medido. | Voltaje, corriente, potencia, energía, pH, temperatura y estabilidad. |  
| **\*\*4. Circularidad\*\*** | Destino inicial vs. destino trazable del lote piloto. | Pesaje de ingreso, proceso aplicado y destino del subproducto. |  
| **\*\*5. Decisión de escalamiento\*\*** | Continuar MFC vs. evaluar biodigestor o solución híbrida. | Volumen, demanda, costos, desempeño técnico y requisitos regulatorios. |

**\#\# 13\. Relación con los objetivos del hackathon**

GreenSpark se alinea con la mención **\*\*Energía\*\*** porque investiga generación renovable a partir de residuos y define cómo medir su aporte a cargas seleccionadas. También responde a los criterios de evaluación:

| Criterio | Aporte de GreenSpark |  
| \--- | \--- |  
| **\*\*Impacto y relevancia\*\*** | Parte de un flujo bioorgánico local documentado y propone métricas verificables. |  
| **\*\*Calidad técnica de IA\*\*** | Modelado predictivo, baseline, incertidumbre y recomendación de experimentos. |  
| **\*\*Innovación\*\*** | Combina MFC, economía circular y una ruta gradual hacia mayor capacidad. |  
| **\*\*Escalabilidad y sostenibilidad\*\*** | Escala únicamente cuando residuos, demanda y mediciones justifican la inversión. |  
| **\*\*Aplicabilidad local\*\*** | Prioriza universidades y generadores de Santa Cruz de la Sierra. |

**\#\# 14\. Conclusión**

GreenSpark tiene potencial para transformar residuos bioorgánicos en decisiones energéticas medibles. Su impacto inicial consiste en construir evidencia local: comparar escenarios MFC, priorizar experimentos y preparar un piloto instrumentado. Si los datos validan la hipótesis, el proyecto puede avanzar hacia módulos replicables y evaluar tecnologías de mayor capacidad. La propuesta no confunde simulación con resultado: demuestra una ruta viable para investigar, medir y escalar economía circular en Santa Cruz de la Sierra.

**\#\# 15\. Fuentes consultadas**

| Fuente | Uso en este documento |  
| \--- | \--- |  
| \[GAMSC: campaña CompostArte y datos del PMGIRS 2023\](https://www.gmsantacruz.gob.bo/Noticias/Detalle/?id=517) | Volumen diario de residuos y porcentaje de orgánicos compostables. |  
| \[Swisscontact: planta municipal de compostaje, 14/05/2026\](https://www.swisscontact.org/es/noticias/un-nuevo-rumbo-para-los-residuos-organicos-santa-cruz-inaugura-su-planta-de-compostaje) | Capacidad de hasta 7 t/día y procedencia inicial del residuo. |  
| \[Swisscontact: Semilla Urbana, 28/04/2026\](https://www.swisscontact.org/es/noticias/nace-una-alternativa-sostenible-para-la-gestion-y-aprovechamiento-de-los-residuos-organicos) | Más de 20 t/día de residuos orgánicos en el Mercado Mayorista Nuevo Abasto. |  
| \[Servicio Estatal de Autonomías: Ley N.º 755 de Gestión Integral de Residuos\](https://sea.gob.bo/digesto/CompendioII/N/142\_L\_755.pdf) | Prioridad normativa de prevención, aprovechamiento y disposición final segura. |  
| AETN: \[DS 4477\](https://www.aetn.gob.bo/docfly/app/webroot/uploads/norma-rloza-2021-05-27-i.pdf), \[DS 5167\](https://www.aetn.gob.bo/docfly/app/webroot/uploads/AETN24-0611151515%28admin%29.pdf) y \[DS 5549\](https://www.aetn.gob.bo/docfly/app/webroot/uploads/26/8998-P5JK.pdf) | Secuencia regulatoria de generación distribuida. |  
| \[UNEP: mitigación de metano\](https://www.unep.org/topics/food-systems/nature-positive-resilient-agriculture/ghg-slcp-mitigation-particular-methane) | Contexto global sobre residuos orgánicos y metano. |  
| \[US EPA: emisiones de metano por residuos alimentarios en rellenos\](https://www.epa.gov/land-research/quantifying-methane-emissions-landfilled-food-waste) | Referencia metodológica para estimar emisiones evitadas por tonelada desviada; requiere adaptación local. |  
| \[Biotechnology for Biofuels and Bioproducts: revisión de MFC, 2025\](https://link.springer.com/article/10.1186/s13068-025-02649-y) | Potencial de las MFC y límites de comercialización a gran escala. |  
| \[Discover Sustainability: revisión de MFC e IA, 2025\](https://link.springer.com/article/10.1007/s43621-025-01619-6) | Aplicaciones de IA en modelado predictivo y optimización de rendimiento MFC. |

**\# GreenSpark: Solución propuesta**

**\*\*Equipo:\*\*** HackHeroes · **\*\*Mención:\*\*** Energía · **\*\*Lugar:\*\*** Santa Cruz de la Sierra, Bolivia

**\#\# 1\. Resumen ejecutivo**

GreenSpark es una propuesta de economía circular que ayuda inicialmente a universidades privadas de Santa Cruz de la Sierra a investigar cómo convertir residuos bioorgánicos en electricidad mediante reactores de celdas de combustible microbianas (MFC). El MVP combina un diseño de reactor respaldado por literatura con una simulación asistida por IA que compara sustratos, estima rendimiento eléctrico y recomienda escenarios de validación. En etapas posteriores, GreenSpark plantea pilotos MFC para colegios privados, restaurantes y agroindustrias, además de evaluar biodigestores cuando exista suficiente volumen segregado para escalar capacidad.

\> **\*\*Propuesta de valor:\*\*** *\*"Convertimos residuos bioorgánicos en decisiones energéticas medibles: investigamos, simulamos y trazamos la ruta desde el primer reactor MFC hasta una solución circular escalable."\**

**\#\# 2\. Problema que resuelve**

Santa Cruz de la Sierra genera aproximadamente **\*\*971 t/día\*\*** de residuos orgánicos compostables \[DATO \+ CÁLCULO\], pero todavía faltan alternativas diversificadas y datos locales para aprovecharlos como recurso energético. Las instituciones interesadas en sostenibilidad no saben qué sustratos funcionan mejor, cuánto podrían aportar a cargas eléctricas seleccionadas ni cuándo conviene escalar hacia tecnologías de mayor capacidad.

**\#\# 3\. Usuario objetivo**

**\#\#\# Usuario principal de la fase 1**

**\*\*Universidades privadas\*\*** interesadas en investigación aplicada, innovación visible y métricas de sostenibilidad. Pueden financiar el diseño, la simulación y la futura validación experimental del reactor MFC.

**\#\#\# Usuarios potenciales de la fase 2**

\- **\*\*Colegios privados:\*\*** pilotos demostrativos y educación ambiental.  
\- **\*\*Restaurantes:\*\*** valorización de residuos bioorgánicos frecuentes y reporte de sostenibilidad.  
\- **\*\*Empresas agroindustriales:\*\*** pilotos con residuos concentrados, medición energética y evaluación del subproducto.

**\#\#\# Beneficiarios de la fase 3**

\- Empresas con suficiente volumen segregado para evaluar biodigestores.  
\- Sector agropecuario interesado en subproductos caracterizados y estabilizados.  
\- La ciudad, por la reducción progresiva de residuos enviados a disposición final.

**\#\# 4\. Propuesta de valor**

Para instituciones privadas que necesitan convertir compromisos ambientales en acciones medibles, GreenSpark ofrece una ruta gradual de valorización bioenergética,primero ofrece una métrica de sostenibilidad a todo aquel negocio que opte por  nuestros servicios,segundo aprovechar el decreto supremo 4477 para proporcionar beneficio economico al usuario pot utilizar nuestras tecnologias sostenibles,y por último ahorrar hasta un 10 por ciento de energia al mes a través de nuestra propuesta de economía circular. A diferencia de una promesa energética genérica, cada etapa distingue resultados simulados, metas exploratorias y datos medidos.

**\#\# 5\. Cómo funciona**

\`\`\`text  
1\. La institución registra un escenario  
   → tipo y masa de residuo · humedad · pH · temperatura · configuración MFC

2\. La IA compara configuraciones  
   → potencia proyectada · estabilidad esperada · supuestos · nivel de confianza

3\. El sistema recomienda el siguiente experimento  
   → mezcla de sustrato · variables críticas · métricas que deben medirse

4\. El panel traduce resultados  
   → residuo valorizado · energía proyectada o medida · avance de sostenibilidad

5\. El agente explica el escenario  
   → reporte institucional trazable sin inventar cifras  
\`\`\`

Cuando exista un piloto físico, los datos medidos reemplazarán progresivamente los supuestos de literatura y permitirán reentrenar el modelo.

**\#\# 6\. Funcionalidades principales**

| Funcionalidad | MVP documental | Piloto físico | Valor |  
| \--- | \---: | \---: | \--- |  
| Escenarios simulados MFC | Incluidos | Sí | Compara configuraciones antes de invertir. |  
| Diseño de predicción asistida por IA | Incluido | Sí | Estima rendimiento y prioriza experimentos cuando se implemente. |  
| Diseño del panel de sostenibilidad | Incluido | Sí | Hace visible el impacto proyectado y medido. |  
| Diseño del agente explicativo | Incluido | Sí | Traduce resultados en reportes comprensibles. |  
| Captura automática desde sensores | No | Sí | Alimenta el modelo con voltaje, corriente, pH y temperatura reales. |  
| Reactor MFC físico | No | Sí | Valida las predicciones en condiciones locales. |  
| Evaluación de biodigestor | No | Fase 3 | Escala capacidad cuando exista volumen suficiente. |

**\#\# 7\. Uso real de la IA**

La IA interpreta relaciones entre sustrato, condiciones operativas y rendimiento eléctrico proyectado. Su función es:

1\. estimar potencia y estabilidad esperadas;  
2\. comparar configuraciones;  
3\. recomendar qué escenario conviene validar primero;  
4\. detectar anomalías cuando existan datos físicos;  
5\. generar un reporte de sostenibilidad basado exclusivamente en resultados del sistema.

El agente generativo explica los resultados, pero no calcula ni inventa cifras.

**\#\# 8\. Diferenciador**

\- **\*\*Ruta por fases:\*\*** comienza con investigación pagable y evita invertir prematuramente en infraestructura.  
\- **\*\*Enfoque local:\*\*** construye un dataset de residuos y condiciones de Santa Cruz.  
\- **\*\*IA verificable:\*\*** compara el modelo con un baseline y muestra supuestos.  
\- **\*\*Sustentabilidad medible:\*\*** integra energía, residuos valorizados y evaluación agronómica.  
\- **\*\*Escalamiento tecnológico:\*\*** MFC para aprender y validar; biodigestores para evaluar mayor capacidad cuando el volumen lo justifica.

**\#\#\# 8.1 Tres innovaciones**

1\. **\*\*MFC aplicada al contexto cruceño:\*\*** investigar generación eléctrica directa con residuos bioorgánicos locales.  
2\. **\*\*IA para decidir mejor:\*\*** comparar escenarios, recomendar experimentos y explicar métricas de sostenibilidad.  
3\. **\*\*Escalamiento circular gradual:\*\*** evaluar biodigestores, generación distribuida y aprovechamiento agronómico únicamente cuando la evidencia lo justifique.

**\#\# 9\. Alcance del MVP**

**\#\#\# Incluido en la demostración del 31/05/2026**

\- diseño conceptual del reactor MFC respaldado por investigación;  
\- escenarios de simulación etiquetados como **\*\*\[SIMULADOS\]\*\***;  
\- diseño del modelo de predicción de rendimiento eléctrico proyectado;  
\- diseño de la comparación de configuraciones y recomendaciones;  
\- diseño del panel de sostenibilidad;  
\- diseño del agente que explicará resultados y redactará un reporte institucional.

**\#\#\# Fuera del MVP**

\- reactor físico construido por el equipo;  
\- electricidad medida en condiciones locales;  
\- garantía de ahorro energético;  
\- conexión o venta de energía a la red;  
\- fertilizante comercial certificado;  
\- créditos de carbono.

**\#\# 10\. Supuestos**

| Supuesto | Estado | Cómo se valida |  
| \--- | \--- | \--- |  
| Una universidad privada valora financiar investigación aplicada. | A validar | Entrevistas, carta de interés o convenio exploratorio. |  
| Existen residuos bioorgánicos segregables para un piloto. | A validar | Pesaje, frecuencia y nivel de contaminación por generador. |  
| La simulación permite priorizar experimentos mejor que una regla fija. | A validar | Comparación del modelo frente a baseline. |  
| El piloto puede producir electricidad estable para una carga seleccionada. | A validar | Telemetría del reactor físico. |  
| El subproducto posee potencial agronómico. | A validar | Caracterización, estabilización y revisión aplicable. |

**\#\# 11\. Beneficios esperados**

| Actor | Beneficio |  
| \--- | \--- |  
| **\*\*Universidad\*\*** | Investigación visible, formación estudiantil, datos locales y reporte de sostenibilidad. |  
| **\*\*Colegio\*\*** | Consumidor de nuestro servicio y proporcionar educación ambiental mediante un piloto demostrativo. |  
| **\*\*Restaurante\*\*** | Consumidor de nuestro servicio y proporcionar registro de circularidad y ruta futura para valorizar residuos frecuentes. |  
| **\*\*Agroindustria\*\*** | Comparación de escenarios antes de invertir en infraestructura de mayor capacidad. |  
| **\*\*Sector agropecuario\*\*** | Evaluación de un posible subproducto caracterizado y estabilizado. |

**\#\# 12\. Metas por fase**

| Fase | Cliente principal | Tecnología | Meta energética |  
| \--- | \--- | \--- | \--- |  
| **\*\*1. Investigación\*\*** | Universidades privadas | Diseño y simulación MFC | Explorar escenarios de aporte de hasta **\*\*10%\*\*** para cargas seleccionadas. |  
| **\*\*2. Pilotos\*\*** | Colegios privados, restaurantes y agroindustrias | Módulos MFC instrumentados | Medir y validar escenarios de aporte de hasta **\*\*10%\*\*** para cargas seleccionadas. |  
| **\*\*3. Escalamiento\*\*** | Instituciones y empresas con suficiente residuo segregado | Biodigestores o soluciones híbridas | Evaluar escenarios de aporte de hasta **\*\*20%\*\*** para cargas seleccionadas. |

\> Los porcentajes son **\*\*metas exploratorias sujetas a validación\*\***, no ahorros garantizados ni resultados observados.

**\#\# 13\. Modelo de negocio**

| Fase | Quién paga | Por qué paga | Ingreso a validar |  
| \--- | \--- | \--- | \--- |  
| **\*\*1\*\*** | Universidades privadas | Investigación aplicada, innovación visible, métricas y hoja de ruta experimental. | Convenio de investigación o licencia institucional del simulador. |  
| **\*\*2\*\*** | Colegios privados, restaurantes y agroindustrias | Piloto MFC, monitoreo y reporte de sostenibilidad. | Implementación, mantenimiento y suscripción de monitoreo. |  
| **\*\*3\*\*** | Empresas e instituciones con volumen suficiente | Prefactibilidad, instalación y operación de soluciones de mayor capacidad. | Proyecto energético, servicio técnico y participación en valor generado. |

**\#\# 14\. Alternativas consideradas**

| Alternativa | Ventaja | Limitación | Decisión |  
| \--- | \--- | \--- | \--- |  
| **\*\*Compostaje\*\*** | Tecnología útil y ya aplicada localmente. | Prioriza valorización material, no investigación de generación eléctrica. | Complementaria. |  
| **\*\*Biodigestor desde el inicio\*\*** | Mayor madurez para procesar volumen y producir biogás. | Requiere sustrato suficiente, infraestructura e inversión mayor. | Reservarlo para la fase 3\. |  
| **\*\*MFC sin fase investigativa\*\*** | Narrativa atractiva. | Riesgo alto de sobreprometer potencia y ahorro. | Descartada. |  
| **\*\*Investigación MFC \+ simulación \+ piloto\*\*** | Permite aprender, medir y escalar con evidencia. | Requiere disciplina experimental. | **\*\*Elegida.\*\*** |

**\#\# 15\. Validación inicial**

| Métrica | Qué mide | Cómo se evalúa |  
| \--- | \--- | \--- |  
| Error de predicción frente al baseline | Aporte real de la IA | MAE, RMSE y R² sobre datos de literatura y, después, datos experimentales. |  
| Interés universitario | Viabilidad de la fase 1 | Entrevistas, carta de interés o convenio exploratorio. |  
| Residuos segregables | Disponibilidad de sustrato | Registro por tipo, masa, frecuencia y contaminación. |  
| Rendimiento del piloto | Viabilidad técnica local | Voltaje, corriente, potencia, estabilidad, pH y temperatura medidos. |  
| Cobertura de carga seleccionada | Valor energético | Energía medida o proyectada dividida entre consumo del circuito elegido. |  
| Potencial agronómico | Viabilidad del subproducto | Caracterización, estabilización y revisión regulatoria aplicable. |

\> **\*\*Criterio central:\*\*** GreenSpark no vende humo técnico. Presenta una investigación aplicable, una simulación transparente y una ruta concreta para convertir residuos bioorgánicos en energía y métricas de sustentabilidad.

