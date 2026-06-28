Aquí tienes una guía completa sobre la estructura y mejores prácticas para el documento de aplicación de IA en un hackathon:Aquí está el desglose detallado de cada sección:

---

**1. Descripción del problema y contexto**

Antes de mencionar la IA, el jurado necesita entender *qué problema resuelves*. Explica el dolor real, a quién afecta y por qué la solución tradicional es insuficiente. Esto sienta las bases para justificar que necesitas IA.

**2. Rol de la IA en la solución**

Esta es la sección más importante. Debes responder: ¿qué hace exactamente la IA dentro del sistema? ¿Es el núcleo de la solución o una capa de apoyo? ¿Qué pasaría si la eliminaras? Si la respuesta es "básicamente lo mismo", la IA no está bien justificada. Diferencia claramente entre lo que hace la IA y lo que hace el código tradicional.

**3. Herramientas y modelos utilizados**

Lista los modelos, APIs o frameworks usados (OpenAI, Anthropic, HuggingFace, LangChain, etc.) y justifica *por qué ese y no otro*. Por ejemplo: "elegimos Claude por su ventana de contexto larga, necesaria para analizar documentos completos". Esta justificación muestra madurez técnica.

**4. Proceso de integración técnica**

Aquí describes cómo funciona por dentro: el flujo de datos, cómo construiste los prompts o si hiciste fine-tuning, el pipeline completo. Incluye un diagrama si puedes. Los jueces técnicos aprecian ver que no solo "llamaste a una API" sino que diseñaste algo.

**5. Impacto, resultados y métricas**

Muestra evidencia concreta: capturas del sistema funcionando, comparaciones antes/después, tiempos de respuesta, precisión si aplica. Evita afirmaciones como "mejora drásticamente la experiencia" sin respaldo. Aunque sea un prototipo de hackathon, muestra los datos que tienes.

**6. Consideraciones éticas y limitaciones**

Este apartado diferencia a los equipos maduros. Identifica riesgos reales (sesgos del modelo, privacidad de datos, alucinaciones) y describe cómo los mitigaste o por qué son aceptables en este contexto. No esconder limitaciones, sino mostrar que las conoces.

---

**Tips adicionales para el hackathon**

El documento debe ser *defensible*: imagina que el jurado pregunta "¿por qué no usaron simplemente una búsqueda por palabras clave?" y tienes que tener la respuesta lista. También ayuda mucho incluir un apartado de "alternativas consideradas" donde muestres que evaluaste otras opciones antes de elegir IA. Eso proyecta rigor, no improvisación.

---

## Documento de Aplicación de IA — estructura ganadora para hackathon 🧠

La idea no es escribir: **“usamos IA porque el hackathon es de IA”**. Eso es flojo. El documento tiene que demostrar que la IA es una **decisión técnica necesaria**, no decoración para vender humo.

En hackathons, los jurados suelen mirar una mezcla de **innovación, implementación técnica, impacto, utilidad, UX y claridad de presentación**; Devpost, por ejemplo, resume criterios comunes como implementación tecnológica, innovación, impacto y presentación/demo. ([Devpost][1])
Para la parte responsable, conviene apoyarse en marcos serios: NIST organiza la gestión de riesgo de IA en funciones como **govern, map, measure, manage**, y Google presenta sus principios de IA como marco para desarrollo y uso responsable con transparencia y accountability. ([NIST][2])

---

# 1. Objetivo del documento

Este documento debe responder 5 preguntas:

1. **¿Dónde entra la IA en el producto?**
2. **¿Por qué el problema necesita IA y no lógica tradicional?**
3. **¿Qué modelo, API o técnica usan y por qué?**
4. **¿Cómo validan que la IA funciona?**
5. **¿Qué riesgos tiene y cómo los controlan?**

Si no pueden responder eso, no tienen “aplicación de IA”; tienen un feature con branding. Dale, ponete las pilas.

---

# 2. Estructura recomendada

## 1. Resumen ejecutivo

**Extensión:** 5–8 líneas.

Debe decir:

* Qué problema resuelve el proyecto.
* Qué rol cumple la IA.
* Qué valor genera.
* Qué tan viable es implementarlo.
* Qué decisión concreta mejora gracias a la IA.

Ejemplo de lógica:

> Nuestro sistema usa IA para transformar datos dispersos del usuario/entorno en recomendaciones accionables. La IA no reemplaza al usuario, sino que actúa como motor de análisis, priorización y explicación, reduciendo tiempo de diagnóstico y mejorando la calidad de decisión.

---

## 2. Problema que justifica IA

Acá tienen que explicar **por qué el problema es ambiguo, variable o difícil de resolver con reglas fijas**.

La IA se justifica bien cuando hay:

| Condición                      | Por qué justifica IA                                          |
| ------------------------------ | ------------------------------------------------------------- |
| Datos incompletos              | La IA puede inferir patrones o generar estimaciones razonadas |
| Lenguaje natural               | Un sistema tradicional no entiende contexto ni intención      |
| Muchas variables               | La IA ayuda a priorizar y sintetizar                          |
| Recomendaciones personalizadas | Las reglas fijas se vuelven rígidas                           |
| Explicación para usuario       | Un LLM puede traducir análisis técnico a lenguaje simple      |
| Simulación o predicción        | Modelos pueden estimar escenarios futuros                     |

**Mala justificación:**

> “Usamos IA para hacerlo más innovador.”

No. Eso es cartón pintado.

**Buena justificación:**

> “El problema requiere interpretar múltiples señales, priorizar restricciones y generar recomendaciones explicables. Una solución basada únicamente en reglas sería rígida, difícil de escalar y menos adaptable a contextos variables.”

---

## 3. Rol exacto de la IA en el sistema

No digan “la IA analiza todo”. Eso no dice nada.

Usen esta estructura:

```text
Entrada → Procesamiento IA → Salida → Acción del usuario/sistema
```

Ejemplo:

```text
Datos del usuario + contexto energético
→ Modelo IA analiza patrones, restricciones y oportunidades
→ Genera recomendación priorizada con explicación
→ Usuario toma decisión o el sistema muestra plan de acción
```

También pueden clasificar el rol:

| Rol de IA                | Descripción                                   |
| ------------------------ | --------------------------------------------- |
| Clasificación            | Detecta categorías, riesgos, prioridades      |
| Recomendación            | Sugiere mejores acciones                      |
| Generación               | Produce reportes, explicaciones, planes       |
| Predicción               | Estima resultados futuros                     |
| Optimización             | Propone la mejor configuración posible        |
| Asistente conversacional | Permite interacción natural con el sistema    |
| Análisis multimodal      | Procesa texto, imagen, audio o datos visuales |

---

## 4. Arquitectura de IA

Esta sección es clave. Si el jurado técnico pregunta y ustedes responden “usamos Gemini/ChatGPT y ya”, pierden seriedad.

Estructura mínima:

```text
Frontend
  ↓
Backend / API Layer
  ↓
AI Orchestrator
  ↓
Modelo IA / API externa
  ↓
Post-procesamiento / Validación
  ↓
Respuesta al usuario
```

Ejemplo más sólido:

```text
Usuario ingresa datos
→ Frontend valida formato
→ Backend estructura el contexto
→ AI Orchestrator arma prompt controlado
→ LLM genera análisis/recomendación
→ Sistema valida salida con reglas mínimas
→ Se muestra explicación y acciones sugeridas
```

### Componentes recomendados

| Componente         | Función                                             |
| ------------------ | --------------------------------------------------- |
| `Prompt Builder`   | Construye instrucciones consistentes para el modelo |
| `Context Provider` | Agrega datos relevantes del usuario/proyecto        |
| `AI Gateway`       | Encapsula llamadas a Gemini/OpenAI/etc.             |
| `Output Parser`    | Convierte respuesta IA a JSON usable                |
| `Validation Layer` | Revisa límites, formato, seguridad y coherencia     |
| `Fallback Logic`   | Respuesta alternativa si falla la IA                |
| `Audit Log`        | Guarda input/output para evaluación posterior       |

Esto muestra arquitectura. No tutorial-programming de pegar API keys en el frontend, dejate de joder.

---

## 5. Modelo o tecnología elegida

Acá justifican **por qué eligieron esa IA**.

Ejemplo de tabla:

| Opción               | Ventaja                               | Desventaja                       | Decisión                         |
| -------------------- | ------------------------------------- | -------------------------------- | -------------------------------- |
| API externa LLM      | Rápida, potente, buena para hackathon | Costo, dependencia externa       | Elegida por límite de tiempo     |
| Modelo local         | Control y privacidad                  | Requiere hardware/configuración  | No viable para 24–48h            |
| Reglas tradicionales | Predecible y barato                   | Poco flexible                    | Usado como validación secundaria |
| ML propio            | Personalizable                        | Requiere dataset y entrenamiento | No viable sin datos suficientes  |

Para un hackathon de 1 día, una defensa madura sería:

> Elegimos una API de IA externa porque el objetivo del hackathon es validar valor, flujo y experiencia. Entrenar o correr modelos locales consumiría tiempo en infraestructura y no mejoraría proporcionalmente el resultado. Priorizamos una arquitectura modular que permitiría cambiar de proveedor o mover a modelo local en una etapa posterior.

Eso sí suena a decisión técnica. No a desesperación.

---

## 6. Datos usados por la IA

Deben explicar:

* Qué datos entran.
* De dónde salen.
* Si son reales, simulados o ingresados por el usuario.
* Qué datos **no** se usan.
* Cómo evitan inventar resultados.

Ejemplo:

| Tipo de dato                 | Fuente                           | Uso en IA                       |
| ---------------------------- | -------------------------------- | ------------------------------- |
| Datos ingresados por usuario | Formulario/app                   | Personalizar recomendación      |
| Parámetros técnicos          | Base interna / valores simulados | Calcular escenarios             |
| Contexto del problema        | Documento del proyecto           | Guiar análisis                  |
| Histórico                    | No disponible en MVP             | Futuro entrenamiento/evaluación |

Si no tienen hardware ni datos reales, díganlo con elegancia:

> En esta versión MVP se utilizan datos simulados y parámetros configurables para demostrar el flujo de decisión. La arquitectura permite reemplazar estos datos por sensores o fuentes reales en una versión productiva.

Eso es honesto y defendible.

---

## 7. Prompting / instrucciones del modelo

Si usan LLM, documenten el diseño del prompt.

Incluyan:

* Rol del modelo.
* Contexto.
* Restricciones.
* Formato de salida.
* Criterios de decisión.
* Límites: “no inventar datos”, “marcar incertidumbre”, “pedir datos faltantes”.

Ejemplo:

```text
Rol:
Actúa como asistente técnico para analizar eficiencia energética.

Contexto:
Recibirás datos del usuario, restricciones y objetivos.

Tarea:
Genera un diagnóstico, prioriza problemas y recomienda acciones.

Restricciones:
- No inventes mediciones.
- Indica nivel de confianza.
- Si faltan datos críticos, decláralo.
- Devuelve respuesta en JSON estructurado.

Formato:
{
  "diagnosis": "...",
  "recommendations": [],
  "confidence": "low | medium | high",
  "missing_data": []
}
```

Esto es mucho más profesional que mandar un prompt suelto como si fuera WhatsApp.

---

## 8. Evaluación de resultados

Esta es la parte que casi todos ignoran. Error de junior.

La IA debe tener algún criterio de evaluación, aunque sea simple.

| Criterio       | Cómo evaluarlo en hackathon                 |
| -------------- | ------------------------------------------- |
| Coherencia     | Las recomendaciones tienen sentido técnico  |
| Utilidad       | El usuario entiende qué hacer después       |
| Consistencia   | Inputs similares producen outputs similares |
| Seguridad      | No da recomendaciones peligrosas o falsas   |
| Explicabilidad | Justifica por qué recomienda algo           |
| Latencia       | Responde en tiempo aceptable                |
| Robustez       | Maneja datos incompletos                    |

Ejemplo de redacción:

> Evaluamos la IA con casos de prueba representativos: escenario básico, escenario con datos incompletos, escenario extremo y escenario ambiguo. En cada caso revisamos si la respuesta fue útil, coherente, explicable y accionable.

---

## 9. Riesgos, límites y mitigaciones

Acá se gana confianza. No oculten debilidades. El jurado sabe que un MVP tiene límites.

| Riesgo                     | Impacto                      | Mitigación                                |
| -------------------------- | ---------------------------- | ----------------------------------------- |
| Alucinación                | Recomendaciones incorrectas  | Validación con reglas y límites           |
| Datos incompletos          | Diagnóstico débil            | Campo `missing_data` y nivel de confianza |
| Dependencia de API         | Fallo si no hay conexión     | Fallback local o mensaje controlado       |
| Sesgo en recomendaciones   | Priorización incorrecta      | Casos de prueba diversos                  |
| Privacidad                 | Exposición de datos          | No enviar datos sensibles innecesarios    |
| Sobreconfianza del usuario | Decisiones automáticas malas | Human-in-the-loop                         |

Una frase fuerte:

> La IA no toma decisiones finales; funciona como sistema de apoyo. El usuario conserva control y la interfaz comunica incertidumbre cuando los datos no son suficientes.

Eso es oro para defensa.

---

## 10. Roadmap de IA

Separar MVP de visión futura.

| Etapa              | Función IA                                         |
| ------------------ | -------------------------------------------------- |
| MVP hackathon      | Recomendaciones con LLM + datos simulados          |
| Versión 1          | Integración con datos reales/sensores/API          |
| Versión 2          | Evaluación automática y memoria histórica          |
| Versión 3          | Modelo ajustado al dominio o RAG especializado     |
| Versión productiva | Monitoreo, auditoría, métricas y control de riesgo |

---

# 3. Orden ideal del documento final

Mi recomendación: **4 a 6 páginas máximo**. Más que eso en hackathon suele ser ruido.

```markdown
# Documento de Aplicación de IA

## 1. Resumen ejecutivo
## 2. Problema y justificación del uso de IA
## 3. Rol de la IA dentro del producto
## 4. Arquitectura de la solución
## 5. Modelo / API / técnica utilizada
## 6. Datos utilizados
## 7. Diseño de prompts o lógica de inferencia
## 8. Evaluación de calidad
## 9. Riesgos, limitaciones y mitigaciones
## 10. Roadmap de mejora
## 11. Conclusión
```

---

# 4. Versión ultra corta para pitch

Esto les sirve para decirlo oralmente:

> Usamos IA porque el problema no es solo mostrar datos, sino interpretarlos, priorizarlos y convertirlos en recomendaciones accionables. La IA actúa como motor de análisis y explicación, mientras que el sistema mantiene validaciones, límites y control humano. En el MVP usamos una API externa por eficiencia de desarrollo, pero la arquitectura está desacoplada para permitir cambiar de proveedor, integrar datos reales o evolucionar hacia un modelo especializado.

---

# 5. Qué NO hacer

Eviten estas frases porque suenan mediocres:

| Frase débil                   | Mejor decir                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------- |
| “Usamos IA para automatizar”  | “Usamos IA para interpretar variables y generar recomendaciones explicables” |
| “La IA analiza todo”          | “La IA procesa X entradas y produce Y salida estructurada”                   |
| “Es inteligente”              | “Prioriza acciones según criterios definidos”                                |
| “Usamos ChatGPT/Gemini”       | “Usamos un LLM vía API encapsulado en una capa de orquestación”              |
| “La IA decide”                | “La IA asiste; el usuario conserva la decisión final”                        |
| “Funciona con cualquier dato” | “Funciona dentro de límites definidos y declara incertidumbre”               |

---

# 6. Checklist antes de entregar ✅

Antes de mandar el documento, revisen esto:

* ¿Se entiende **por qué IA era necesaria**?
* ¿Está claro **dónde entra la IA en la arquitectura**?
* ¿Justifican API externa vs modelo local?
* ¿Explican qué datos entran y qué sale?
* ¿Tienen formato de salida definido?
* ¿Incluyen riesgos y mitigaciones?
* ¿Muestran evaluación aunque sea básica?
* ¿Separan MVP de visión futura?
* ¿Evitan humo tipo “IA revolucionaria”?
* ¿Pueden defenderlo oralmente en 2 minutos?

---

# 7. Fórmula ganadora

Para hackathon, la defensa debería seguir esta fórmula:

```text
Problema real
→ IA necesaria por ambigüedad/complejidad
→ Arquitectura simple pero modular
→ Output accionable
→ Validación mínima
→ Riesgos reconocidos
→ Roadmap creíble
```

La clave: **no vendan IA como magia; véndanla como una pieza técnica bien ubicada dentro del sistema**. Ahí el proyecto deja de parecer demo improvisada y empieza a parecer producto.

[1]: https://info.devpost.com/blog/understanding-hackathon-submission-and-judging-criteria?utm_source=chatgpt.com "Understanding hackathon submission and judging criteria"
[2]: https://www.nist.gov/itl/ai-risk-management-framework?utm_source=chatgpt.com "AI Risk Management Framework"
