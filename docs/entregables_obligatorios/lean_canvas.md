# Lean Canvas — GreenSpark

**Equipo:** HackHeroes · **Mención:** ENERGÍA · **Lugar:** Santa Cruz de la Sierra, Bolivia

---

## Vista de tabla (Lean Canvas completo)

| **1. PROBLEMA** | **4. SOLUCIÓN** | **3. PROPUESTA DE VALOR ÚNICA** | **9. VENTAJA ESPECIAL** | **2. SEGMENTO DE CLIENTES** |
|---|---|---|---|---|
| Residuo orgánico urbano enterrado/quemado (metano) con valor energético perdido. Generadores pagan por botar y necesitan ESG; plantas sin sustrato predecible; nadie conecta/predice/cuantifica. | Plataforma de IA: ① predice energía/CO₂ por residuo ② optimiza recolección ③ conecta generador↔planta ④ agente que redacta reporte ESG. | **"Tu residuo orgánico, convertido en energía medible y en un reporte de sostenibilidad — en un clic."** Capa de inteligencia, no una máquina. | Dataset local propietario que aprende · efecto red · neutralidad de hardware · know-how circular local. | **Ancla (paga):** grandes generadores urbanos (restaurantes, supermercados, universidades, hoteles, mercados). **Oferta:** plantas de biogás/compost. **Beneficiario:** ciudad/medio ambiente. |
| **8. MÉTRICAS CLAVE** | | | **5. CANALES** | |
| t orgánico desviadas · kWh generados · t CO₂e evitadas · generadores activos · MRR · LTV/CAC · error del modelo vs baseline. | | | Venta directa B2B · alianzas (CAINCO, universidades, GDG) · marketing ESG/sostenibilidad · referidos · municipio (fase 2). | |
| **7. ESTRUCTURA DE COSTES** | | | **6. FLUJO DE INGRESOS** | |
| Infraestructura cloud + API LLM (variable, bajo) · equipo (dev + comercial) · ventas/marketing · operaciones/legal. | | | Suscripción SaaS por volumen (incluye ESG) · fee por recolección/match (~8%) · analítica para plantas · reportes ESG/carbono premium. | |

---

## Detalle por bloque

### 1. Problema
- Miles de toneladas de residuo orgánico urbano se entierran/queman emitiendo metano (~28× CO₂).
- Generadores **pagan** por desechar y carecen de trazabilidad/reporte ESG.
- Plantas de biogás/compost **sin** flujo de sustrato predecible.
- **Alternativas actuales:** botar al relleno, recolección informal, sin datos ni optimización.

### 2. Segmento de clientes
- **Cliente ancla que paga:** grandes generadores urbanos de residuo orgánico — cadenas de restaurantes, supermercados, **universidades**, hoteles, mercados de Santa Cruz.
- **Lado oferta:** plantas de biogás, biodigestores, operadores de compost, recicladores.
- **Early adopters:** universidades (ej. UCB) y cadenas con marca y agenda ESG.

### 3. Propuesta de valor única
> **"Tu residuo orgánico, convertido en energía medible y en un reporte de sostenibilidad — en un clic."**
- Convierte un costo y pasivo ambiental en ahorro + activo reputacional.
- **Concepto de alto nivel:** "el Waze + la calculadora de energía del residuo orgánico".

### 4. Solución
1. Predicción de rendimiento energético (IA).
2. Optimización de recolección (OR-Tools).
3. Matchmaking generador ↔ planta.
4. Dashboard de impacto + **reporte ESG automático** (agente IA).

### 5. Canales
- Venta directa B2B (equipo comercial).
- Alianzas con CAINCO, universidades, redes GDG/Women Techmakers.
- Marketing de contenido ESG / sostenibilidad.
- Referidos y casos de éxito.
- Convenios con el municipio (fase de escalamiento).

### 6. Flujo de ingresos
- **Suscripción SaaS** por volumen (Básico/Pro/Enterprise), incluye reporte ESG.
- **Fee por recolección/match** (~8% del valor del servicio).
- **Analítica para plantas** (freemium → pago).
- **Reportes ESG/huella certificados** y, a futuro, **originación de créditos de carbono**.

### 7. Estructura de costes
- Infraestructura cloud + **API LLM** (variable, bajo; centavos por consulta).
- Equipo: desarrollo + comercial.
- Ventas y marketing.
- Operaciones, legal y cumplimiento.
- *(Detalle cuantitativo en `analisis_financiero.md`.)*

### 8. Métricas clave
- **Impacto:** toneladas de orgánico desviadas, kWh generados, t CO₂e evitadas.
- **Negocio:** generadores activos, MRR, ARPU, churn, LTV/CAC.
- **Producto/IA:** error del modelo vs. baseline, % residuos con predicción, uso del agente.

### 9. Ventaja especial (difícil de copiar)
- **Dataset local propietario** de rendimiento por sustrato que mejora con cada operación.
- **Efecto red:** más generadores y plantas → mejores rutas y matches.
- **Neutralidad de hardware:** integrable con cualquier planta/biodigestor.
- **Primer movimiento** + relaciones locales (cámaras, universidades, municipio).
