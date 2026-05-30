# GreenSpark: Análisis financiero

**Equipo:** HackHeroes · **Mención:** Energía · **Lugar:** Santa Cruz de la Sierra, Bolivia

> **Supuestos:** todas las cifras están expresadas en **bolivianos (Bs)**. La conversión referencial es **1 USD ≈ 7 Bs**. Todas las proyecciones son **[ESTIMACIÓN]**, parten de supuestos explícitos y deben validarse durante el piloto. El modelo es conservador.

## 1. Fuentes de ingresos

| Fuente | Detalle | Precio referencial |
| --- | --- | --- |
| **Suscripción SaaS: Básico** | Generador pequeño; incluye predicción y reporte ESG básico. | **Bs 350/mes** |
| **Suscripción SaaS: Pro** | Generador mediano; incluye múltiples sucursales y reporte ESG avanzado. | **Bs 1.050/mes** |
| **Suscripción SaaS: Enterprise** | Cadenas grandes y universidades. | A medida (> Bs 1.050) |
| **Tarifa de recolección y emparejamiento** | Porcentaje sobre el servicio logístico coordinado. | **~8%** |
| **Analítica para plantas** | Modelo freemium con un plan de datos para plantas. | **Bs 700/mes** |
| **Reportes ESG o de huella premium** | Certificación periódica y créditos de carbono. | Por reporte, en la fase 2 |

## 2. Mercado: TAM, SAM y SOM

| Nivel | Definición | Estimación |
| --- | --- | --- |
| **TAM** | Todos los residuos orgánicos urbanos de Santa Cruz. | ~700–900 t/día [ESTIMACIÓN] |
| **SAM** | Grandes generadores formales: restaurantes, supermercados, universidades, hoteles y mercados. | Cientos de generadores con capacidad de pago. |
| **SOM: 3 años** | Generadores que pueden captarse con un equipo pequeño. | ~250 generadores que pagan. |

## 3. Proyección a 3 años

> Escenario conservador.

| Concepto | **Año 1:** piloto y lanzamiento | **Año 2:** crecimiento | **Año 3:** expansión |
| --- | ---: | ---: | ---: |
| Generadores que pagan | 25 | 90 | 250 |
| Ticket promedio (Bs/mes) | 650 | 750 | 800 |
| **Ingresos SaaS (Bs)** | 195.000 | 810.000 | 2.400.000 |
| Plantas con analítica | — | 10 | 25 |
| **Ingresos plantas (Bs)** | — | 84.000 | 210.000 |
| **Tarifas + ESG/carbono (Bs)** | 45.000 | 220.000 | 700.000 |
| **Ingresos totales (Bs)** | **240.000** | **1.114.000** | **3.310.000** |
| Ingresos totales (USD ~) | ~$34.000 | ~$159.000 | ~$473.000 |

## 4. Estructura de costos

| Concepto | **Año 1** | **Año 2** | **Año 3** |
| --- | ---: | ---: | ---: |
| Infraestructura cloud y API LLM | 18.000 | 50.000 | 110.000 |
| Equipo de desarrollo y comercial | 150.000 | 480.000 | 1.300.000 |
| Ventas y marketing | 40.000 | 120.000 | 320.000 |
| Operaciones y asuntos legales | 25.000 | 60.000 | 170.000 |
| **Costos totales (Bs)** | **233.000** | **710.000** | **1.900.000** |

## 5. Resultado y rentabilidad

| | **Año 1** | **Año 2** | **Año 3** |
| --- | ---: | ---: | ---: |
| Ingresos (Bs) | 240.000 | 1.114.000 | 3.310.000 |
| Costos (Bs) | 233.000 | 710.000 | 1.900.000 |
| **Resultado (Bs)** | **+7.000** | **+404.000** | **+1.410.000** |
| Margen | ~3% | ~36% | ~43% |

- **Punto de equilibrio:** puede alcanzarse hacia el final del **Año 1** gracias a un modelo liviano en activos (`asset-light`) y con costos variables bajos.
- **Margen bruto SaaS:** ~80%, habitual para un producto de software.

## 6. Economía unitaria (por generador)

| Métrica | Valor [ESTIMACIÓN] | Nota |
| --- | ---: | --- |
| ARPU: ingreso promedio por mes | Bs 700 | Promedio ponderado. |
| Margen bruto | 75–80% | SaaS. |
| **CAC:** costo de adquisición | Bs 800 | Venta directa B2B. |
| Vida media del cliente | 24 meses | Escenario conservador. |
| **LTV** | ~Bs 12.600 | 700 × 0,75 × 24 |
| **LTV / CAC** | **~16x** | Relación saludable: un valor mayor que 3x es positivo. |
| **Recuperación del CAC** | < 2 meses | Retorno rápido. |

## 7. Inversión requerida

- **Ronda semilla objetivo:** **~$20.000** (≈ Bs 140.000) para cubrir entre 6 y 9 meses.
- **Uso de fondos:** piloto con una planta y generadores reales (40%), equipo (35%), área comercial (15%) y asuntos legales u operaciones (10%).
- **Fuentes posibles:** capital propio, premios/aceleradoras, cooperación internacional (fondos verdes), inversión ángel local.

## 8. Sensibilidad y riesgos financieros

| Riesgo | Efecto | Mitigación |
| --- | --- | --- |
| Adopción más lenta | Menores ingresos durante el Año 1 | Mantener costos variables bajos, un equipo pequeño y un enfoque en primeros clientes con necesidades ESG. |
| Devaluación o aumento del costo de APIs en USD | Aumenta el costo variable | Definir tarifas en Bs, almacenar en caché y optimizar las llamadas al LLM, y mantener una alternativa sin LLM. |
| Churn alto | Reduce la LTV | Ofrecer un reporte ESG recurrente que aumente el valor de permanencia. |
| Dependencia de pocas plantas | Limita la oferta | Sumar operadores de compost y nuevas plantas socias. |

> **Conclusión financiera:** GreenSpark propone un modelo **liviano en activos, escalable y con un margen alto**. Puede alcanzar un equilibrio temprano y una economía unitaria saludable (LTV/CAC ~16x) porque atiende a un cliente que **ya gasta** en resolver el problema.
