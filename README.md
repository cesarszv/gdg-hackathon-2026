# GreenSpark ⚡🌱

**Plataforma de IA que convierte el residuo orgánico urbano de Santa Cruz en energía rentable y medible.**

- **Equipo:** HackHeroes
- **Hackathon:** Build With AI 2026 — Santa Cruz de la Sierra, Bolivia
- **Mención:** ENERGÍA

> *"Tu residuo orgánico, convertido en energía medible y en un reporte de sostenibilidad — en un clic."*

---

## 👥 Integrantes

- Cesar Sebastian Zambrana Ventura
- Emanuel Justiniano Peralta
- Fabian Serrano Catari
- Juan David Mercado Montenegro
- Raquel Sahonero Salas
- Thiago Andre Moreno Velasco

---

## 🧩 Explicación general

En Santa Cruz se entierran cientos de toneladas de residuo orgánico al día, emitiendo **metano (~28× más potente que el CO₂)** y desperdiciando su valor energético (~200 kWh por tonelada). Los generadores urbanos (restaurantes, supermercados, universidades, mercados) **pagan** por desechar ese residuo; las plantas de biogás/compost carecen de sustrato predecible; y **nadie conecta, predice ni cuantifica** la oportunidad.

**GreenSpark** es la **capa de inteligencia** que cierra esa brecha:
1. **Predice** con IA cuánta energía, compost y CO₂ evitado rinde cada residuo.
2. **Optimiza** la recolección entre generadores y plantas.
3. **Conecta** (matchmaking) generador ↔ planta.
4. **Redacta** un reporte de sostenibilidad (ESG) con un agente conversacional.

El MVP es **100% software, sin hardware**, demostrable y replicable.

---

## 🏗️ Arquitectura

```
┌──────────────────────────────────────────────┐
│   Frontend React (portal · dashboard · mapa · chat) │
└───────────────────────┬──────────────────────┘
                        │ REST
┌───────────────────────▼──────────────────────┐
│   Backend FastAPI (Python)                    │
│   ├─ Predicción de energía  → scikit-learn    │
│   ├─ Optimización de rutas  → Google OR-Tools │
│   ├─ Reporte ESG                              │
│   └─ Agente conversacional  → DeepSeek API    │
└───────────┬───────────────────────────────────┘
            │
      ┌─────▼─────┐   APIs: DeepSeek · Open-Meteo · OpenStreetMap
      │  SQLite   │
      └───────────┘
```

Detalle completo en [docs/entregables_obligatorios/arquitectura_tecnologica.md](docs/entregables_obligatorios/arquitectura_tecnologica.md).

---

## 🛠️ Tecnologías utilizadas

| Capa | Tecnología |
|---|---|
| Frontend | React, Leaflet (OpenStreetMap) |
| Backend | Python, FastAPI |
| Base de datos | SQLite |
| IA — predicción | scikit-learn |
| IA — optimización | Google OR-Tools |
| IA — agente | DeepSeek API |
| Datos externos | Open-Meteo (clima/estacionalidad) |

---

## 🖼️ Imágenes referenciales

> *(Agregar capturas del dashboard, el mapa con la ruta y el chat del agente antes de la entrega.)*

- `docs/assets/dashboard.png` — Dashboard de impacto
- `docs/assets/mapa-ruta.png` — Mapa con ruta de recolección
- `docs/assets/agente.png` — Agente "Asesor GreenSpark"

---

## ▶️ Instrucciones de ejecución

### Requisitos
- Python 3.10+
- Node.js 18+
- Variable de entorno `DEEPSEEK_API_KEY`

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload   # http://localhost:8000
```

### Frontend
```bash
cd frontend
npm install
npm run dev                  # http://localhost:5173
```

---

## 📚 Documentación (entregables)

| Documento | Enlace |
|---|---|
| Documento técnico con investigación | [ver](docs/entregables_obligatorios/documento_tecnico_con_investigacion.md) |
| Problema identificado | [ver](docs/entregables_obligatorios/problema_identificado.md) |
| Solución propuesta | [ver](docs/entregables_obligatorios/solucion_propuesto.md) |
| Aplicación de IA | [ver](docs/entregables_obligatorios/aplicacion_de_ia.md) |
| Arquitectura tecnológica | [ver](docs/entregables_obligatorios/arquitectura_tecnologica.md) |
| Manual de Identidad Visual y Sistema de Diseño | [ver](DESIGN.md) |
| Análisis FODA | [ver](docs/entregables_obligatorios/analisis_foda.md) |
| Análisis PESTEL | [ver](docs/entregables_obligatorios/analisis_pestel.md) |
| Lean Canvas | [ver](docs/entregables_obligatorios/lean_canvas.md) |
| Análisis financiero | [ver](docs/entregables_obligatorios/analisis_financiero.md) |
| Impacto esperado | [ver](docs/entregables_obligatorios/impacto_esperado.md) |
| Pitch | [ver](docs/PITCH.md) |

---

## 🌍 Impacto (escenario 10% de la ciudad)

- **~5,8 GWh/año** de electricidad equivalente.
- **~14.600 t CO₂e/año** evitadas.
- **~8.760 t/año** de compost al agro cruceño.
- Alineado a los **ODS 7, 11, 12 y 13**.

> Las cifras de energía, CO₂ e ingresos son **estimaciones referenciales** basadas en coeficientes de literatura, marcadas como tales en cada documento y a validar con datos primarios (EMACRUZ/GAMSC/INE).
