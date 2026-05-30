# Análisis Financiero — GreenSpark

**Equipo:** HackHeroes · **Mención:** ENERGÍA · **Lugar:** Santa Cruz de la Sierra, Bolivia

> **Supuestos:** cifras en **Bolivianos (Bs)**; conversión referencial **1 USD ≈ 7 Bs**. Todas las proyecciones son **[ESTIMACIÓN]** con supuestos explícitos; deben validarse en el piloto. Modelo conservador.

---

## 1. Modelo de ingresos

| Fuente | Detalle | Precio referencial |
|---|---|---|
| **Suscripción SaaS — Básico** | Generador pequeño; predicción + reporte ESG básico | **Bs 350/mes** |
| **Suscripción SaaS — Pro** | Generador mediano; multi-sucursal, ESG avanzado | **Bs 1.050/mes** |
| **Suscripción — Enterprise** | Cadenas grandes / universidades | a medida (> Bs 1.050) |
| **Fee de recolección/match** | % sobre el servicio logístico coordinado | **~8%** |
| **Analítica para plantas** | Freemium → plan de datos para plantas | **Bs 700/mes** |
| **Reportes ESG/huella premium** | Certificación periódica / créditos de carbono | por reporte (fase 2) |

---

## 2. Mercado (TAM–SAM–SOM)

| Nivel | Definición | Estimación |
|---|---|---|
| **TAM** | Todo el residuo orgánico urbano de Santa Cruz | ~700–900 t/día [ESTIMACIÓN] |
| **SAM** | Grandes generadores formales (restaurantes, super, universidades, hoteles, mercados) | cientos de generadores con capacidad de pago |
| **SOM (3 años)** | Generadores que podemos captar con un equipo lean | ~250 generadores pagos |

---

## 3. Proyección a 3 años (escenario conservador)

| Concepto | **Año 1** (piloto+lanzamiento) | **Año 2** (crecimiento) | **Año 3** (expansión) |
|---|---:|---:|---:|
| Generadores pagos | 25 | 90 | 250 |
| Ticket promedio (Bs/mes) | 650 | 750 | 800 |
| **Ingresos SaaS (Bs)** | 195.000 | 810.000 | 2.400.000 |
| Plantas con analítica | — | 10 | 25 |
| **Ingresos plantas (Bs)** | — | 84.000 | 210.000 |
| **Fees + ESG/carbono (Bs)** | 45.000 | 220.000 | 700.000 |
| **INGRESOS TOTALES (Bs)** | **240.000** | **1.114.000** | **3.310.000** |
| Ingresos totales (USD ~) | ~$34.000 | ~$159.000 | ~$473.000 |

---

## 4. Estructura de costes

| Concepto | **Año 1** | **Año 2** | **Año 3** |
|---|---:|---:|---:|
| Infraestructura cloud + API LLM | 18.000 | 50.000 | 110.000 |
| Equipo (dev + comercial) | 150.000 | 480.000 | 1.300.000 |
| Ventas y marketing | 40.000 | 120.000 | 320.000 |
| Operaciones / legal | 25.000 | 60.000 | 170.000 |
| **COSTES TOTALES (Bs)** | **233.000** | **710.000** | **1.900.000** |

---

## 5. Resultado y rentabilidad

| | **Año 1** | **Año 2** | **Año 3** |
|---|---:|---:|---:|
| Ingresos (Bs) | 240.000 | 1.114.000 | 3.310.000 |
| Costes (Bs) | 233.000 | 710.000 | 1.900.000 |
| **Resultado (Bs)** | **+7.000** | **+404.000** | **+1.410.000** |
| Margen | ~3% | ~36% | ~43% |

- **Punto de equilibrio:** alcanzable hacia fin del **Año 1** (modelo asset-light, costos variables bajos).
- **Margen bruto SaaS:** ~80% (típico de software).

---

## 6. Economía unitaria (por generador)

| Métrica | Valor [ESTIMACIÓN] | Nota |
|---|---:|---|
| ARPU (ingreso medio/mes) | Bs 700 | promedio ponderado |
| Margen bruto | 75–80% | SaaS |
| **CAC** (costo de adquisición) | Bs 800 | venta directa B2B |
| Vida media del cliente | 24 meses | conservador |
| **LTV** | ~Bs 12.600 | 700 × 0,75 × 24 |
| **LTV / CAC** | **~16x** | saludable (>3x es bueno) |
| **Payback del CAC** | < 2 meses | rápido retorno |

---

## 7. Inversión requerida

- **Ronda semilla objetivo:** **~$20.000** (≈ Bs 140.000) para 6–9 meses.
- **Uso de fondos:** piloto con planta + generadores reales (40%), equipo (35%), comercial (15%), legal/ops (10%).
- **Fuentes posibles:** capital propio, premios/aceleradoras, cooperación internacional (fondos verdes), inversión ángel local.

---

## 8. Sensibilidad y riesgos financieros

| Riesgo | Efecto | Mitigación |
|---|---|---|
| Adopción más lenta | Ingresos Y1 menores | Costos variables bajos; equipo lean; foco en early adopters ESG |
| Devaluación / costo API en USD | Sube costo variable | Tarifas en Bs; cachear/optimizar llamadas al LLM; fallback sin LLM |
| Churn alto | Baja LTV | Reporte ESG recurrente = alto valor de permanencia |
| Dependencia de pocas plantas | Limita oferta | Sumar compostaje y nuevas plantas socias |

> **Conclusión financiera:** modelo **asset-light, de alto margen y escalable**, con equilibrio temprano y una economía unitaria saludable (LTV/CAC ~16x), sostenido por un cliente que **ya gasta** en el problema.
