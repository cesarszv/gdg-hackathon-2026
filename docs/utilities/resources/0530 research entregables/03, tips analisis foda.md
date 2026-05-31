## `analisis_foda.md` — mejores prácticas para hackathon

El FODA en un hackathon **no es decoración estratégica**. Sirve para demostrar que entendés **dónde tu proyecto es fuerte, dónde se puede romper, qué contexto lo favorece y qué riesgos lo pueden matar**. Si lo hacés genérico, es humo.

El orden correcto es:

```md
problema identificado → PESTEL → FODA → solución propuesta
```

Porque el FODA toma el problema + contexto externo y aterriza la estrategia del proyecto.

---

# Estructura recomendada

```md
# Análisis FODA

## 1. Objetivo del análisis

## 2. Contexto breve del proyecto

## 3. Matriz FODA

### Fortalezas

### Oportunidades

### Debilidades

### Amenazas

## 4. Cruce estratégico FODA

### Estrategias FO

### Estrategias DO

### Estrategias FA

### Estrategias DA

## 5. Priorización de factores críticos

## 6. Implicaciones para la solución propuesta

## 7. Conclusión
```

---

# 1. Objetivo del análisis

Acá explicás **para qué existe este documento**.

Ejemplo:

```md
El objetivo de este análisis FODA es evaluar las condiciones internas y externas que afectan la viabilidad del proyecto, identificando factores que pueden potenciar su desarrollo, limitar su implementación o representar riesgos durante su validación y escalabilidad.
```

No escribas poesía. Que quede claro que el FODA ayuda a tomar decisiones.

---

# 2. Contexto breve del proyecto

Resumen de 4 a 6 líneas:

```md
El proyecto propone una solución basada en inteligencia artificial para optimizar el consumo energético mediante análisis de datos, recomendaciones inteligentes y visualización de patrones de uso. La solución está orientada a usuarios, instituciones o comunidades que necesitan reducir costos, mejorar eficiencia y tomar decisiones energéticas más informadas.
```

Este bloque evita que el jurado lea un FODA flotando en el aire.

---

# 3. Matriz FODA

La matriz debe ser clara. Nada de párrafos eternos.

## Formato recomendado

| Interno / Externo | Positivo      | Negativo    |
| ----------------- | ------------- | ----------- |
| **Interno**       | Fortalezas    | Debilidades |
| **Externo**       | Oportunidades | Amenazas    |

---

## Fortalezas

Las fortalezas son **capacidades internas del equipo o del proyecto**.

Preguntas guía:

- ¿Qué tiene el proyecto que lo hace sólido?
- ¿Qué podemos construir bien en poco tiempo?
- ¿Qué ventaja técnica, narrativa o de UX tenemos?
- ¿Qué parte de la solución es defendible?

Ejemplos:

```md
- Uso de IA para analizar patrones de consumo energético y generar recomendaciones accionables.
- Arquitectura modular que permite separar frontend, backend, modelo IA y fuentes de datos.
- Posibilidad de validar la solución mediante simulaciones sin necesidad de hardware físico.
- Enfoque visual e interactivo que facilita la comprensión del impacto energético.
- Baja barrera de adopción al funcionar como herramienta web o dashboard local.
```

---

## Oportunidades

Las oportunidades son **factores externos que favorecen el proyecto**.

Preguntas guía:

- ¿Qué tendencias hacen que esta solución tenga sentido ahora?
- ¿Qué problema social, económico o ambiental está creciendo?
- ¿Qué tecnologías actuales permiten construir esto rápido?
- ¿Qué necesidad real puede aprovechar el proyecto?

Ejemplos:

```md
- Creciente interés en eficiencia energética y reducción de costos operativos.
- Mayor disponibilidad de APIs, modelos de IA y herramientas de análisis de datos.
- Necesidad de soluciones accesibles para comunidades, hogares o instituciones con poca infraestructura.
- Presión social y ambiental hacia proyectos sostenibles y medibles.
- Posibilidad de escalar el sistema hacia otros recursos como agua, residuos o movilidad.
```

---

## Debilidades

Las debilidades son **limitaciones internas reales**. No las escondas. Un jurado serio valora que sepas dónde está flojo el sistema.

Preguntas guía:

- ¿Qué no podemos validar completamente?
- ¿Qué dependencia técnica tenemos?
- ¿Dónde falta hardware, datos, tiempo o precisión?
- ¿Qué parte del sistema es todavía prototipo?

Ejemplos:

```md
- Falta de hardware físico para medir consumo energético en tiempo real.
- Dependencia inicial de datos simulados o datasets públicos.
- Tiempo limitado para validar el modelo con usuarios reales.
- Riesgo de que las recomendaciones de IA sean demasiado generales si los datos de entrada son pobres.
- Necesidad de mayor investigación para adaptar el sistema a distintos tipos de infraestructura energética.
```

---

## Amenazas

Las amenazas son **factores externos que pueden complicar el proyecto**.

Preguntas guía:

- ¿Qué puede impedir la adopción?
- ¿Qué regulaciones o costos pueden afectar?
- ¿Qué pasa si los datos no están disponibles?
- ¿Qué soluciones competidoras existen?

Ejemplos:

```md
- Baja disponibilidad de datos energéticos reales en algunos contextos.
- Costos de integración con sensores, medidores inteligentes o infraestructura existente.
- Posible desconfianza del usuario frente a recomendaciones generadas por IA.
- Variabilidad en tarifas, regulaciones y condiciones energéticas según región.
- Competencia de plataformas comerciales avanzadas con acceso directo a hardware.
```

---

# 4. Cruce estratégico FODA

Esta es la parte que separa un FODA mediocre de uno útil.

No alcanza con listar cosas. Tenés que cruzarlas.

## Estrategias FO

**Usar fortalezas para aprovechar oportunidades.**

Ejemplo:

```md
Aprovechar la arquitectura modular y el uso de IA para crear una solución escalable que pueda adaptarse a distintos contextos de eficiencia energética, comenzando con simulaciones y luego integrándose con datos reales.
```

---

## Estrategias DO

**Reducir debilidades aprovechando oportunidades.**

Ejemplo:

```md
Compensar la falta de hardware físico utilizando datasets públicos, simulaciones y APIs externas que permitan validar el flujo de análisis energético durante el hackathon.
```

---

## Estrategias FA

**Usar fortalezas para defenderse de amenazas.**

Ejemplo:

```md
Usar una interfaz visual clara y explicaciones interpretables para reducir la desconfianza del usuario frente a recomendaciones generadas por IA.
```

---

## Estrategias DA

**Reducir debilidades y evitar amenazas.**

Ejemplo:

```md
Delimitar el alcance del prototipo como herramienta de análisis y recomendación inicial, evitando prometer precisión de medición en tiempo real sin hardware validado.
```

---

# 5. Priorización de factores críticos

Acá le mostrás al jurado que pensás como arquitecto, no como alguien tirando post-its.

Podés usar esta tabla:

| Factor                           | Tipo        | Impacto | Probabilidad | Prioridad |
| -------------------------------- | ----------- | ------: | -----------: | --------: |
| Falta de datos reales            | Debilidad   |    Alta |         Alta |   Crítica |
| Uso de IA para recomendaciones   | Fortaleza   |    Alta |         Alta |      Alta |
| Interés en eficiencia energética | Oportunidad |    Alta |        Media |      Alta |
| Desconfianza en IA               | Amenaza     |   Media |        Media |     Media |

Escala simple:

```md
Impacto: Bajo / Medio / Alto
Probabilidad: Baja / Media / Alta
Prioridad: Baja / Media / Alta / Crítica
```

No te vayas a fórmulas complejas. Es hackathon, no tesis doctoral.

---

# 6. Implicaciones para la solución propuesta

Esta sección conecta el FODA con lo que van a construir.

Ejemplo:

```md
A partir del análisis FODA, la solución debe priorizar una validación clara mediante datos simulados, una experiencia visual comprensible y una justificación sólida del uso de IA. La arquitectura debe mantenerse modular para permitir futuras integraciones con sensores, medidores inteligentes o fuentes externas de datos energéticos.

El proyecto no debe presentarse como una solución completamente industrializada, sino como un prototipo funcional y escalable que demuestra cómo la IA puede asistir en la toma de decisiones energéticas.
```

Esto es clave: **no prometas más de lo que podés defender**. Si no tienen hardware, ni en pedo digan que miden consumo real en producción.

---

# 7. Conclusión

Cerrá con una síntesis fuerte.

Ejemplo:

```md
El análisis FODA muestra que el proyecto cuenta con fortalezas relevantes en modularidad, uso estratégico de IA y potencial de visualización de impacto. Sin embargo, también enfrenta debilidades vinculadas a la disponibilidad de datos reales y la ausencia de hardware físico para validación directa.

La estrategia más adecuada para el hackathon es enfocar el prototipo en simulación, análisis inteligente y demostración de valor, dejando claramente planteado el camino de evolución hacia una solución integrada con datos reales e infraestructura energética.
```

---

# Template listo para usar

```md
# Análisis FODA

## 1. Objetivo del análisis

El objetivo de este análisis FODA es identificar los factores internos y externos que pueden influir en la viabilidad, desarrollo, validación y escalabilidad del proyecto.

## 2. Contexto breve del proyecto

[Describir en 4-6 líneas qué problema aborda el proyecto, para quién, mediante qué tipo de solución y qué rol cumple la IA.]

## 3. Matriz FODA

| Categoría     | Factores identificados                                          |
| ------------- | --------------------------------------------------------------- |
| Fortalezas    | - [Fortaleza 1] <br> - [Fortaleza 2] <br> - [Fortaleza 3]       |
| Oportunidades | - [Oportunidad 1] <br> - [Oportunidad 2] <br> - [Oportunidad 3] |
| Debilidades   | - [Debilidad 1] <br> - [Debilidad 2] <br> - [Debilidad 3]       |
| Amenazas      | - [Amenaza 1] <br> - [Amenaza 2] <br> - [Amenaza 3]             |

## 4. Cruce estratégico FODA

### Estrategias FO

[Cómo usar las fortalezas para aprovechar oportunidades.]

### Estrategias DO

[Cómo reducir debilidades aprovechando oportunidades.]

### Estrategias FA

[Cómo usar fortalezas para mitigar amenazas.]

### Estrategias DA

[Cómo reducir debilidades y evitar amenazas.]

## 5. Priorización de factores críticos

| Factor     | Tipo      | Impacto           | Probabilidad      | Prioridad                 |
| ---------- | --------- | ----------------- | ----------------- | ------------------------- |
| [Factor 1] | [F/O/D/A] | [Bajo/Medio/Alto] | [Baja/Media/Alta] | [Baja/Media/Alta/Crítica] |
| [Factor 2] | [F/O/D/A] | [Bajo/Medio/Alto] | [Baja/Media/Alta] | [Baja/Media/Alta/Crítica] |

## 6. Implicaciones para la solución propuesta

[Explicar qué decisiones concretas salen del FODA: alcance, arquitectura, validación, UX, uso de IA, datasets, riesgos.]

## 7. Conclusión

[Resumen de los puntos más importantes y cómo el proyecto debe posicionarse frente al jurado.]
```

---

# Errores típicos que hay que evitar

| Error                                                  | Por qué está mal                         |
| ------------------------------------------------------ | ---------------------------------------- |
| Poner “uso de IA” como fortaleza sin explicar para qué | IA decorativa = humo                     |
| Confundir debilidad con amenaza                        | Debilidad es interna; amenaza es externa |
| Hacer listas genéricas                                 | El jurado nota cuando copiaste plantilla |
| No conectar el FODA con decisiones del proyecto        | El análisis queda inútil                 |
| Ocultar limitaciones reales                            | Te destruyen en preguntas                |
| Prometer validación real sin datos ni hardware         | Te regalás solo                          |

---

## Regla brutal para este documento

Cada punto del FODA debería responder:

> “¿Esto cambia alguna decisión del proyecto?”

Si no cambia nada, sacalo. No estás escribiendo para llenar páginas. Estás armando munición para defender el proyecto frente al jurado.
