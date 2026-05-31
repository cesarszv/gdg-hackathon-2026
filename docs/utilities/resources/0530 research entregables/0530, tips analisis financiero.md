## Análisis Financiero para un Proyecto de Hackathon

Un buen análisis financiero en un hackathon debe ser **claro, conciso y creíble**. No necesitas ser CFO — necesitas demostrar que entiendes la viabilidad del negocio.

---

### 🏗️ Estructura recomendada

**1. Supuestos clave (Assumptions)**
Es la base de todo. Define claramente:

- Tamaño del mercado objetivo (TAM / SAM / SOM)
- Precio del producto/servicio
- Tasa de adquisición de clientes (con justificación)
- Costos principales (fijos vs. variables)

> _Los jueces siempre preguntan "¿de dónde sacas ese número?"_ — ten la respuesta lista.

---

**2. Proyección de ingresos (Revenue Model)**

- Modelo de monetización: SaaS, freemium, por transacción, licencias, etc.
- Proyección a 12–36 meses (en hackathon suele bastar con 1–3 años)
- Curva de crecimiento realista (evita el "hockey stick" sin sustento)

---

**3. Estructura de costos**
| Categoría | Ejemplos |
|---|---|
| Costos fijos | Equipo, infraestructura, oficina |
| Costos variables | Adquisición de clientes (CAC), soporte |
| Costos únicos | Desarrollo inicial, licencias |

---

**4. Métricas financieras clave**
Estas son las que los jueces buscan:

- **CAC** (Costo de Adquisición de Cliente)
- **LTV** (Valor de Vida del Cliente)
- **LTV/CAC ratio** → idealmente > 3x
- **Punto de equilibrio** (Break-even)
- **Margen bruto**
- **Burn rate** (si piden inversión)

---

**5. Flujo de caja simplificado (Cash Flow)**
Un modelo de 12 meses que muestre:

- Entradas (ingresos por mes)
- Salidas (costos operativos)
- Saldo acumulado → ¿cuándo dejas de perder dinero?

---

**6. Necesidad de inversión (si aplica)**

- ¿Cuánto necesitas y para qué?
- ¿En qué se usará el capital? (runway)
- ¿Cuándo se recupera la inversión?

---

### ✅ Mejores prácticas

| Práctica                    | Por qué importa                                         |
| --------------------------- | ------------------------------------------------------- |
| **Sé conservador**          | Es mejor superar expectativas que quedarte corto        |
| **Muestra rangos**          | Escenario base, optimista y pesimista                   |
| **Cita fuentes**            | Reportes de industria, benchmarks del sector            |
| **Usa métricas del sector** | Cada industria tiene sus KPIs propios                   |
| **Menos es más**            | 1 slide financiero poderoso > 5 confusos                |
| **Vincula con el producto** | Los números deben contar la misma historia que el pitch |

---

### ⚠️ Errores comunes a evitar

- Proyectar un crecimiento del 300% sin explicación
- Olvidar los costos de marketing y ventas
- No incluir el costo del equipo/fundadores
- Suponer 0% de churn (pérdida de clientes)
- Usar números demasiado redondos (poco creíbles)

---

### 🎯 Formato para presentar

Para un hackathon típico (pitch de 3–5 min), con **1–2 slides** basta:

1. **Slide de modelo de negocio** → cómo ganas dinero
2. **Slide financiero** → proyección simplificada + métricas clave + necesidad de capital

¿Quieres que te ayude a construir una plantilla financiera en Excel/Google Sheets, o a estructurar los números para un proyecto específico?

---

Para un **hackathon**, el análisis financiero no tiene que parecer un Excel de consultora lleno de humo. Tiene que demostrar una cosa:

> **“Este proyecto puede convertirse en algo sostenible, escalable y defendible económicamente.”**

Nada más. Si te vas a fórmulas gigantes sin poder explicar los supuestos, los jurados te huelen el verso en 10 segundos. Ponete las pilas: **claridad > complejidad**.

---

# 1. Objetivo del análisis financiero

El análisis financiero debe responder estas preguntas:

1. **¿Quién paga?**
2. **Por qué pagaría?**
3. **Cuánto pagaría?**
4. **Cuánto cuesta entregar la solución?**
5. **Cuánto margen queda?**
6. **Cuánto se necesita para operar o escalar?**
7. **Cuándo empieza a ser rentable?**

Para hackathon, con eso alcanza. No estás haciendo una IPO, estás probando **viabilidad económica**.

---

# 2. Estructura recomendada

## A. Resumen financiero ejecutivo

Una diapositiva o sección corta.

Debe decir:

```text
Modelo de negocio:
B2B / B2G / B2C / SaaS / licencia / hardware + software / API usage / consultoría

Cliente objetivo:
Municipios, empresas, agricultores, talleres, escuelas, usuarios finales, etc.

Fuente principal de ingresos:
Suscripción mensual, venta única, comisión, licencia anual, ahorro compartido, etc.

Costo principal:
APIs, infraestructura, mantenimiento, operación, adquisición de clientes, hardware, soporte.

Punto de equilibrio estimado:
X clientes pagando Y al mes.
```

Ejemplo:

```text
El proyecto opera bajo un modelo B2B SaaS dirigido a pequeñas empresas.
El ingreso principal viene de una suscripción mensual de $19.
El costo variable principal es el uso de APIs e infraestructura.
El punto de equilibrio se alcanza con aproximadamente 85 clientes activos.
```

---

# 3. Supuestos financieros

Esta es la parte más importante. **Todo análisis financiero es basura si no muestra sus supuestos.**

Armá una tabla así:

| Supuesto                   | Valor estimado | Justificación                            |
| -------------------------- | -------------: | ---------------------------------------- |
| Precio mensual por cliente |            $15 | Comparable con herramientas SaaS simples |
| Costo API por usuario      |      $1.20/mes | Estimación por uso promedio              |
| Hosting                    |        $20/mes | VPS o cloud básico                       |
| Soporte/mantenimiento      |       $100/mes | Tiempo operativo mínimo                  |
| Conversión esperada        |             5% | Supuesto conservador                     |
| Clientes iniciales         |             50 | Piloto local o institucional             |

La clave: **mejor supuestos simples y defendibles que números mágicos.**

---

# 4. Modelo de ingresos

Acá explicás cómo entra la plata.

Modelos típicos para hackathon:

## SaaS mensual

Bueno para software recurrente.

```text
Ingreso mensual = número de clientes × precio mensual
```

Ejemplo:

```text
100 clientes × $15 = $1,500/mes
```

## Licencia institucional

Bueno para colegios, municipios, ONGs, empresas o gobierno.

```text
Ingreso anual = número de instituciones × licencia anual
```

Ejemplo:

```text
10 instituciones × $1,200/año = $12,000/año
```

## Modelo freemium

Gratis para usuarios básicos, pago para features avanzadas.

Útil si necesitás adopción masiva, pero ojo: **freemium sin estrategia de conversión es regalar laburo**.

## Ahorro compartido

Muy bueno para proyectos de energía, agua, logística o eficiencia.

```text
Cobramos un porcentaje del ahorro generado.
```

Ejemplo:

```text
Si una empresa ahorra $500/mes en energía, la solución cobra 20% = $100/mes.
```

Este modelo es fuerte porque el cliente paga desde el valor generado, no desde una promesa.

---

# 5. Estructura de costos

Separá costos fijos y variables. Básico, pero muchos lo hacen mal.

## Costos fijos

No dependen directamente del número de usuarios.

| Costo fijo                  | Estimado mensual |
| --------------------------- | ---------------: |
| Hosting                     |              $20 |
| Dominio / servicios básicos |               $2 |
| Mantenimiento técnico       |             $100 |
| Herramientas internas       |              $30 |
| Total fijo                  |             $152 |

## Costos variables

Crecen con el uso.

| Costo variable                 | Por cliente/mes |
| ------------------------------ | --------------: |
| API IA                         |           $0.80 |
| Base de datos / almacenamiento |           $0.20 |
| Mensajería / notificaciones    |           $0.10 |
| Soporte operativo              |           $0.50 |
| Total variable                 |           $1.60 |

---

# 6. Unit economics

Esto es lo que más conviene mostrar si querés sonar serio.

## Métricas mínimas

| Métrica                 | Fórmula                        | Qué demuestra                      |
| ----------------------- | ------------------------------ | ---------------------------------- |
| ARPU                    | ingreso promedio por usuario   | cuánto genera cada cliente         |
| Costo variable unitario | costo por usuario              | cuánto cuesta servirlo             |
| Margen bruto            | ARPU - costo variable          | rentabilidad base                  |
| Margen bruto %          | margen / ARPU                  | eficiencia económica               |
| Break-even              | costos fijos / margen unitario | clientes necesarios para no perder |

Ejemplo:

```text
ARPU = $15/mes
Costo variable = $1.60/mes
Margen bruto = $13.40
Margen bruto % = 89.3%
Costos fijos = $152/mes

Break-even = 152 / 13.40 = 12 clientes aprox.
```

Esto es potente para un pitch. Cortito, entendible, defendible.

---

# 7. Punto de equilibrio

El **break-even** es obligatorio si querés presentar bien.

```text
Punto de equilibrio = Costos fijos mensuales / Margen bruto por cliente
```

Ejemplo:

```text
Costos fijos: $300/mes
Precio por cliente: $20/mes
Costo variable por cliente: $4/mes
Margen por cliente: $16/mes

Break-even = 300 / 16 = 18.75
```

Resultado:

```text
El proyecto alcanza punto de equilibrio con 19 clientes activos.
```

Eso se entiende rápido. Eso vende.

---

# 8. Escenarios financieros

No presentes un solo escenario. Eso parece ingenuo.

Mostrá 3:

| Escenario   | Clientes | Precio mensual | Ingreso mensual | Costos estimados | Resultado |
| ----------- | -------: | -------------: | --------------: | ---------------: | --------: |
| Conservador |       25 |            $15 |            $375 |             $250 |      $125 |
| Base        |      100 |            $15 |          $1,500 |             $450 |    $1,050 |
| Optimista   |      500 |            $15 |          $7,500 |           $1,300 |    $6,200 |

Esto demuestra madurez. No estás diciendo “vamos a conquistar el mundo”, estás mostrando sensibilidad.

---

# 9. Proyección simple a 12 meses

Para hackathon, no hagas proyección a 5 años. Eso suele ser humo. Hacé **6 a 12 meses**.

| Mes | Clientes | Ingreso | Costos | Resultado |
| --: | -------: | ------: | -----: | --------: |
|   1 |       10 |    $150 |   $250 |     -$100 |
|   2 |       25 |    $375 |   $280 |       $95 |
|   3 |       50 |    $750 |   $330 |      $420 |
|   6 |      150 |  $2,250 |   $600 |    $1,650 |
|  12 |      500 |  $7,500 | $1,300 |    $6,200 |

No tiene que ser perfecto. Tiene que ser **razonable y explicable**.

---

# 10. Para proyectos de hackathon con impacto social

Acá muchos se equivocan. Dicen “impacto social” y se olvidan de quién paga. Error de principiante.

Podés tener impacto social, pero alguien tiene que financiarlo:

## Opciones

| Modelo            | Quién paga                        | Cuándo sirve                    |
| ----------------- | --------------------------------- | ------------------------------- |
| B2G               | Gobierno / municipio              | Agua, energía, salud, educación |
| B2B               | Empresa privada                   | Eficiencia, reducción de costos |
| ONG / cooperación | Fundaciones                       | Impacto social directo          |
| Freemium          | Usuarios premium subsidian gratis | Escala masiva                   |
| Ahorro compartido | Cliente paga según ahorro         | Energía, logística, recursos    |

Para energía, agua o agricultura, el modelo más defendible suele ser:

```text
B2B/B2G + ahorro medible + licencia mensual/anual
```

---

# 11. Métricas que sí impresionan a jurados

No metas EBITDA, WACC, VAN o TIR si no los vas a defender. No te disfraces de McKinsey, boludo.

Para hackathon, estas métricas son más útiles:

| Métrica                   | Valor |
| ------------------------- | ----- |
| Costo por usuario         |       |
| Margen bruto              |       |
| Punto de equilibrio       |       |
| Costo de implementación   |       |
| Ahorro generado           |       |
| ROI para el cliente       |       |
| Payback period            |       |
| Escalabilidad del costo   |       |
| Tamaño de mercado inicial |       |
| Pricing defendible        |       |

---

# 12. ROI para el cliente

Esto es MUY fuerte.

```text
ROI = beneficio neto / costo de la solución
```

Ejemplo:

```text
Costo de la solución: $100/mes
Ahorro energético generado: $400/mes
Beneficio neto: $300/mes

ROI = 300 / 100 = 3x
```

Traducción para pitch:

```text
Por cada $1 invertido, el cliente recupera $4 en ahorro bruto o $3 en beneficio neto.
```

Eso es mejor que decir “usamos IA”. A nadie serio le importa que uses IA si no genera valor.

---

# 13. Payback period

Otra métrica piola.

```text
Payback = inversión inicial / beneficio mensual
```

Ejemplo:

```text
Instalación inicial: $500
Ahorro mensual: $250

Payback = 500 / 250 = 2 meses
```

Frase para jurado:

```text
El cliente recupera su inversión inicial en aproximadamente 2 meses.
```

Muy defendible.

---

# 14. Estructura ideal para una slide financiera

Una sola slide puede tener esto:

```text
FINANCIAL VIABILITY

Business model:
B2B SaaS + performance-based savings.

Pricing:
$20/month per site or 15% of verified monthly savings.

Unit economics:
ARPU: $20/month
Variable cost: $3/month
Gross margin: $17/month
Gross margin: 85%

Break-even:
Fixed costs: $300/month
Break-even: 18 active clients

Customer ROI:
Estimated monthly savings: $80–$150
Payback period: 1–3 months

Scalability:
Main costs scale with API usage and monitoring volume, not with manual labor.
```

Eso está bastante sólido para hackathon.

---

# 15. Errores comunes

## ❌ Error 1: “El proyecto es gratis”

Gratis no es modelo de negocio. Gratis es una estrategia de adquisición, subsidio o distribución.

## ❌ Error 2: “Después conseguimos inversión”

Eso no responde la viabilidad. Inversión no arregla un modelo malo.

## ❌ Error 3: “Usamos IA, entonces escala”

No. Escala si tus costos marginales bajan o se mantienen controlados.

## ❌ Error 4: “Nuestro mercado es todo el mundo”

Mala señal. Mejor:

```text
Mercado inicial: talleres pequeños de Santa Cruz
Expansión: talleres medianos de Bolivia
Luego: red regional LATAM
```

Eso es más creíble.

## ❌ Error 5: No distinguir usuario de cliente

El usuario usa.
El cliente paga.

A veces son la misma persona. Muchas veces no.

---

# 16. Plantilla final recomendada

Usá esta estructura:

```markdown
# Financial Analysis

## 1. Business Model

- Type:
- Target customer:
- User:
- Payer:
- Revenue source:

## 2. Pricing Strategy

- Initial price:
- Justification:
- Comparable alternatives:
- Free/pilot strategy:

## 3. Cost Structure

### Fixed costs

- Hosting:
- Maintenance:
- Tools:
- Admin:

### Variable costs

- API usage:
- Storage:
- Support:
- Notifications:

## 4. Unit Economics

- ARPU:
- Variable cost per user:
- Gross margin:
- Gross margin percentage:

## 5. Break-even Point

- Fixed monthly cost:
- Margin per customer:
- Break-even customers:

## 6. Customer ROI

- Estimated savings/value:
- Cost of solution:
- Net benefit:
- Payback period:

## 7. 3 Scenarios

- Conservative:
- Base:
- Optimistic:

## 8. Financial Risks

- API costs may increase.
- Customer acquisition may be slower than expected.
- Hardware/implementation costs may limit adoption.
- Maintenance may require operational support.

## 9. Conclusion

- Why this can be economically viable:
- Why it can scale:
- Why it is worth funding or piloting:
```

---

# Recomendación final

Para un hackathon, el mejor análisis financiero es este:

> **simple, visual, con supuestos explícitos, unit economics claros, punto de equilibrio y ROI para el cliente.**

No vendas fantasía. Vendé una hipótesis económica razonable.

La fórmula ganadora es:

```text
Problema caro + solución barata + ahorro medible + cliente claro + margen positivo = proyecto financiable
```

Para tu caso, especialmente si van por **energía**, meté sí o sí:

1. **Ahorro energético estimado**
2. **Costo mensual de operación**
3. **ROI para el cliente**
4. **Payback**
5. **Break-even**
6. **Escenarios conservador/base/optimista**

Eso te deja muy por encima del típico equipo que solo dice: “hicimos una app con IA”.
