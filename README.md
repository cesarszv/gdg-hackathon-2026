# GreenSpark

**Investigación y simulación de economía circular para convertir residuos bioorgánicos de Santa Cruz de la Sierra en decisiones energéticas medibles.**

- **Equipo:** HackHeroes
- **Hackathon:** Build With AI 2026, Santa Cruz de la Sierra, Bolivia
- **Mención:** Energía

> *"Investigamos con MFC, validamos con datos y escalamos cuando la evidencia lo justifica."*

## Integrantes

- Cesar Sebastian Zambrana Ventura
- Emanuel Justiniano Peralta
- Fabian Serrano Catari
- Juan David Mercado Montenegro
- Raquel Sahonero Salas
- Thiago Andre Moreno Velasco

## Problema

Santa Cruz de la Sierra produce **1.909,86 toneladas de residuos por día** y el **50,84%** corresponde a residuos orgánicos compostables: aproximadamente **971 t/día**. Aunque existen iniciativas locales de aprovechamiento, instituciones y empresas todavía necesitan datos para decidir qué sustratos valorizar, con qué tecnología y a qué escala.

## Propuesta

GreenSpark plantea una ruta gradual:

1. **Fase 1:** universidades privadas financian investigación y simulación de reactores de celdas de combustible microbianas (MFC).
2. **Fase 2:** colegios privados, restaurantes y agroindustrias participan en pilotos MFC instrumentados.
3. **Fase 3:** cuando existe suficiente residuo segregado, se evalúan biodigestores o soluciones híbridas para escalar capacidad.

El subproducto se considera un material con **potencial agronómico sujeto a caracterización y tratamiento**. No se presenta como fertilizante comercial listo para uso directo.

## Tres innovaciones

1. Investigación MFC aplicada a residuos bioorgánicos locales.
2. IA para comparar escenarios, priorizar experimentos y explicar métricas de sostenibilidad.
3. Escalamiento circular hacia biodigestores y generación distribuida cuando la evidencia y la regulación lo permitan.

## Alcance actual

Este repositorio contiene la investigación y el diseño conceptual de la propuesta. El MVP se presenta como **diseño respaldado por investigación y simulación**. En este checkout no existe una aplicación ejecutable ni un reactor físico construido por el equipo.

Las metas energéticas se comunican de forma explícita:

- **Fases 1 y 2:** explorar escenarios de aporte de hasta **10%** para cargas eléctricas seleccionadas.
- **Fase 3:** evaluar escenarios de aporte de hasta **20%** para cargas seleccionadas mediante tecnologías de mayor capacidad.

Estos porcentajes son **metas exploratorias sujetas a validación**, no ahorros garantizados.

## Arquitectura propuesta

```text
[ Interfaz institucional ]
          │
          ▼
[ API de simulación y reportes ]
          │
          ├──► [ baseline + modelo predictivo ]
          ├──► [ recomendador de experimentos ]
          └──► [ agente explicativo ]

Fase 2:
[ sensores del reactor MFC ] ──► [ telemetría ] ──► [ dataset local ]
```

## Tecnologías propuestas

| Capa | Tecnología |
| --- | --- |
| Interfaz | React |
| Backend | Python + FastAPI |
| Datos | SQLite en prototipo, PostgreSQL al escalar |
| IA | pandas, numpy y scikit-learn |
| Agente explicativo | LLM por API |
| Piloto futuro | Microcontrolador y sensores de voltaje, corriente, pH y temperatura |

## Documentación

| Documento | Enlace |
| --- | --- |
| Documento técnico con investigación | [ver](<docs/entregables_obligatorios/source/documento tecnico con investigacion.md>) |
| Problema identificado | [ver](<docs/entregables_obligatorios/source/01 problema identificado.md>) |
| Análisis PESTEL | [ver](<docs/entregables_obligatorios/source/02 analisis pestel.md>) |
| Análisis FODA | [ver](<docs/entregables_obligatorios/source/03 analisis foda.md>) |
| Solución propuesta | [ver](<docs/entregables_obligatorios/source/04 solucion propuesta.md>) |
| Aplicación de IA | [ver](<docs/entregables_obligatorios/source/aplicacion de ia.md>) |
| Arquitectura tecnológica | [ver](<docs/entregables_obligatorios/source/arquitectura tecnologica.md>) |
| Lean Canvas | [ver](<docs/entregables_obligatorios/source/lean canvas.md>) |
| Análisis financiero | [ver](<docs/entregables_obligatorios/source/analisis financiero.md>) |
| Impacto esperado | [ver](<docs/entregables_obligatorios/source/impacto esperado.md>) |
| Pitch | [ver](docs/pitch/PITCH.md) |

## Normativa relevante

La generación distribuida se estudia como una ruta futura. El marco boliviano parte del **Decreto Supremo N.º 4477**, modificado por los **Decretos Supremos N.º 5167 y N.º 5549**. La conexión, el autoconsumo y la retribución de excedentes deben evaluarse según la potencia alcanzada y los requisitos aplicables.

## Fuentes principales

- [GAMSC: campaña CompostArte y datos PMGIRS 2023](https://www.gmsantacruz.gob.bo/Noticias/Detalle/?id=517)
- [Swisscontact: planta municipal de compostaje, mayo de 2026](https://www.swisscontact.org/es/noticias/un-nuevo-rumbo-para-los-residuos-organicos-santa-cruz-inaugura-su-planta-de-compostaje)
- [Bioresources and Bioprocessing: revisión crítica de MFC, 2025](https://link.springer.com/article/10.1186/s13068-025-02649-y)
- [AETN: Decreto Supremo N.º 5549](https://www.aetn.gob.bo/docfly/app/webroot/uploads/26/8998-P5JK.pdf)
