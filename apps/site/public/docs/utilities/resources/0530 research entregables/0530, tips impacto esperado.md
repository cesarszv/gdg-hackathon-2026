Para un hackathon, el **Documento de Impacto Esperado** no es para decir *“nuestro proyecto va a cambiar el mundo”*. Eso es humo. Sirve para demostrar que entendés **qué problema atacás, a quién afecta, qué cambio concreto esperás producir y cómo lo medirías**. 📌

La clave: **impacto = cambio observable + beneficiarios claros + métricas defendibles**.

---

# Estructura recomendada del Documento de Impacto Esperado

## 1. Resumen ejecutivo del impacto

Un párrafo corto que diga:

* qué problema se busca resolver;
* quiénes se benefician;
* qué tipo de impacto se espera;
* por qué importa.

Ejemplo:

> El proyecto busca reducir el desperdicio energético mediante una solución de análisis asistido por IA que permite identificar patrones de consumo ineficiente y proponer acciones correctivas. El impacto esperado se concentra en la optimización del uso de energía, la reducción de costos operativos y la mejora en la toma de decisiones para usuarios, instituciones o comunidades con recursos limitados.

No arranques con métricas inventadas. Primero explicá la lógica.

---

## 2. Problema actual

Acá describís la situación que existe **antes** de tu solución.

Debería responder:

* ¿Qué problema existe?
* ¿A quién afecta?
* ¿Por qué es importante resolverlo?
* ¿Qué pasa si no se hace nada?

Ejemplo de estructura:

```md
Actualmente, muchas organizaciones y hogares no cuentan con herramientas simples para interpretar su consumo energético. Esto genera decisiones basadas en intuición, falta de priorización y desperdicio de recursos. El problema no es solamente técnico, sino también económico y ambiental.
```

Best practice: **no exageres**. Los jurados huelen el chamuyo al toque.

---

## 3. Población beneficiaria

Separá bien los tipos de beneficiarios.

| Tipo                     | Descripción                                                  |
| ------------------------ | ------------------------------------------------------------ |
| Beneficiarios directos   | Usuarios que interactúan con la solución                     |
| Beneficiarios indirectos | Personas o instituciones que reciben efectos positivos       |
| Actores clave            | Quienes podrían implementar, financiar o escalar la solución |

Ejemplo:

```md
Los beneficiarios directos son usuarios, hogares, instituciones educativas o pequeñas organizaciones que necesitan interpretar y optimizar su consumo energético. Los beneficiarios indirectos incluyen comunidades locales, proveedores de servicios y entidades interesadas en sostenibilidad.
```

---

## 4. Impacto esperado por dimensión

Esta es la sección más importante. No pongas todo mezclado como ensalada, boludo. Separá por dimensiones.

### A. Impacto social

Preguntas guía:

* ¿Mejora la calidad de vida?
* ¿Reduce desigualdad de acceso?
* ¿Facilita decisiones para personas no técnicas?
* ¿Educa o genera conciencia?

Ejemplo:

```md
Se espera que la solución facilite el acceso a información energética comprensible para usuarios no técnicos, permitiendo que más personas puedan tomar decisiones informadas sobre su consumo.
```

---

### B. Impacto económico

Preguntas guía:

* ¿Reduce costos?
* ¿Evita pérdidas?
* ¿Mejora eficiencia?
* ¿Permite priorizar inversiones?

Ejemplo:

```md
El impacto económico esperado se relaciona con la reducción de gastos asociados al consumo energético innecesario y con la capacidad de priorizar acciones de bajo costo pero alto retorno.
```

---

### C. Impacto ambiental

Preguntas guía:

* ¿Reduce consumo?
* ¿Disminuye emisiones indirectas?
* ¿Promueve sostenibilidad?
* ¿Evita desperdicio de recursos?

Ejemplo:

```md
Al identificar patrones de consumo ineficiente, el sistema puede contribuir a una reducción indirecta de la huella ambiental asociada al uso innecesario de energía.
```

Cuidado: no digas “reduce CO₂ en X toneladas” si no tenés cálculo. Decí **“podría contribuir”** o **“se proyecta medir mediante…”**.

---

### D. Impacto tecnológico

Preguntas guía:

* ¿Qué mejora técnica aporta?
* ¿Automatiza análisis?
* ¿Usa IA de manera útil, no decorativa?
* ¿Es replicable o escalable?

Ejemplo:

```md
El proyecto propone una arquitectura tecnológica replicable que combina análisis de datos, visualización e inteligencia artificial para transformar datos energéticos en recomendaciones accionables.
```

---

### E. Impacto educativo o de concientización

Esto suele sumar mucho en hackathons.

```md
Además del resultado operativo, la solución tiene un componente educativo: permite que los usuarios comprendan mejor sus hábitos de consumo y visualicen las consecuencias de sus decisiones.
```

---

## 5. Indicadores de impacto

Acá ponés métricas. Sin métricas, el impacto queda como discurso motivacional barato.

Separalas así:

| Dimensión  |                              Indicador | Cómo se mediría                    |
| ---------- | -------------------------------------: | ---------------------------------- |
| Energética |          Reducción estimada de consumo | Comparación antes/después          |
| Económica  |                      Ahorro proyectado | Estimación sobre tarifa energética |
| Social     | Usuarios que entienden recomendaciones | Encuesta o test de usabilidad      |
| Ambiental  |                        Consumo evitado | Conversión energética estimada     |
| Técnica    |            Tiempo de análisis reducido | Comparación manual vs sistema      |

Ejemplo:

```md
El impacto podría medirse mediante indicadores como reducción porcentual del consumo energético, ahorro económico estimado, cantidad de recomendaciones generadas, nivel de comprensión del usuario y tiempo reducido en el análisis de datos.
```

---

## 6. Escenario antes y después

Esto es muy potente para jurados.

| Antes del proyecto                 | Después del proyecto             |
| ---------------------------------- | -------------------------------- |
| Datos dispersos o inexistentes     | Datos organizados y visualizados |
| Decisiones por intuición           | Decisiones basadas en evidencia  |
| Baja conciencia energética         | Mayor comprensión del consumo    |
| Dificultad para priorizar acciones | Recomendaciones concretas        |
| Impacto difícil de medir           | Indicadores definidos            |

Esto hace que el impacto sea fácil de defender oralmente.

---

## 7. Alcance realista del impacto

Acá mostrás madurez. No prometas que en 24 horas resolviste la crisis energética de Bolivia. Dejá eso para LinkedIn, no para un jurado serio.

Dividilo en tres horizontes:

| Horizonte     | Impacto esperado                                                |
| ------------- | --------------------------------------------------------------- |
| Corto plazo   | Validar la idea, prototipo funcional, visualización de datos    |
| Mediano plazo | Implementar con datos reales, mejorar recomendaciones           |
| Largo plazo   | Escalar a instituciones, barrios o sistemas energéticos mayores |

Ejemplo:

```md
En el corto plazo, el proyecto busca demostrar la viabilidad de una solución asistida por IA para interpretar consumo energético. En el mediano plazo, podría integrarse con datos reales de sensores o facturación. En el largo plazo, la solución podría escalarse como herramienta de apoyo para programas de eficiencia energética.
```

---

## 8. Relación con los objetivos del hackathon

Importantísimo. El documento no vive aislado. Tiene que decir por qué el impacto encaja con el reto.

Podés usar esta lógica:

```md
El impacto esperado se alinea con el eje de energía al proponer una solución orientada a eficiencia, reducción de desperdicio y toma de decisiones informada. Además, puede generar efectos positivos en dimensiones económicas, ambientales y educativas.
```

Si el hackathon evalúa **innovación, impacto, viabilidad, UX y narrativa**, esta sección tiene que conectar con eso.

---

## 9. Riesgos y limitaciones

Esto suma más de lo que parece. Demuestra criterio técnico.

| Riesgo                        | Mitigación                                         |
| ----------------------------- | -------------------------------------------------- |
| Falta de datos reales         | Uso de datasets simulados o escenarios controlados |
| Recomendaciones poco precisas | Validación progresiva con datos reales             |
| Baja adopción del usuario     | Interfaz simple y explicaciones claras             |
| Limitaciones de hardware      | Arquitectura preparada para integración futura     |
| Dependencia de APIs           | Diseño modular para cambiar proveedores            |

No escondas debilidades. Convertí las debilidades en decisiones conscientes.

---

## 10. Conclusión del impacto

Cerrá con una síntesis fuerte:

```md
El impacto esperado del proyecto no se limita a la creación de una herramienta tecnológica, sino a la transformación de datos energéticos en decisiones prácticas. La propuesta busca hacer visible el desperdicio, facilitar recomendaciones accionables y sentar las bases para una solución escalable en eficiencia energética.
```

---

# Orden recomendado del documento

Usá este orden:

```md
# Documento de Impacto Esperado

## 1. Resumen ejecutivo
## 2. Problema actual
## 3. Población beneficiaria
## 4. Impacto esperado por dimensión
   - Social
   - Económico
   - Ambiental
   - Tecnológico
   - Educativo
## 5. Indicadores de impacto
## 6. Escenario antes y después
## 7. Alcance temporal del impacto
   - Corto plazo
   - Mediano plazo
   - Largo plazo
## 8. Relación con los objetivos del hackathon
## 9. Riesgos y limitaciones
## 10. Conclusión
```

---

# Best practices para que el documento se vea serio

## Hacé esto ✅

* Usá métricas aunque sean **proyectadas**.
* Separá impacto real de impacto potencial.
* Mostrá beneficiarios concretos.
* Conectá el impacto con el problema inicial.
* Explicá cómo se mediría.
* Usá tablas para que el jurado escanee rápido.
* Admití limitaciones.
* Mantenelo en **2 a 4 páginas máximo**.

## Evitá esto ❌

* “Vamos a revolucionar…”
* “Impactaremos a millones de personas…”
* “Reduciremos la contaminación global…”
* Métricas sin cálculo.
* Texto emocional sin evidencia.
* Hablar solo de tecnología y olvidarte del usuario.
* Decir “usamos IA” como si eso fuera impacto.

---

# Fórmula útil para redactar impacto

Usá esta estructura mental:

```txt
Si el problema es X,
y afecta a Y,
entonces nuestra solución permite Z,
lo cual genera impacto en A, B y C,
medido mediante indicadores D, E y F.
```

Ejemplo:

```txt
Si el problema es el desperdicio energético por falta de información clara,
y afecta a hogares, instituciones o pequeñas organizaciones,
entonces nuestra solución permite interpretar datos de consumo y generar recomendaciones,
lo cual produce impacto económico, ambiental y educativo,
medido mediante reducción estimada de consumo, ahorro proyectado y comprensión del usuario.
```

---

# Versión corta para hackathon

Si tienen poco tiempo, el documento mínimo debería tener estas 5 secciones:

```md
# Impacto Esperado

## 1. Problema que se busca impactar
## 2. Beneficiarios
## 3. Impacto esperado
## 4. Indicadores de medición
## 5. Escalabilidad y limitaciones
```

Eso ya es defendible. No perfecto, pero defendible.

La diferencia entre un documento mediocre y uno competitivo está en esto: **no digas que tu proyecto tiene impacto; demostrá cómo se produciría, sobre quién, en qué dimensión y cómo lo medirías**.
