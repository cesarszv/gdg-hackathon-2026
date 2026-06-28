export const languages = {
  es: 'Español',
  en: 'English (US)',
} as const;

export type SupportedLanguage = keyof typeof languages;
export const defaultLang: SupportedLanguage = 'es';

export const ui = {
  es: {
    // Layout & Header
    'meta.title': 'GreenSpark — Dossier técnico · MFC + IA',
    'meta.description': 'GreenSpark: simulador asistido por IA de celdas de combustible microbianas (MFC) para convertir residuos bioorgánicos de Santa Cruz de la Sierra en decisiones energéticas medibles. Segundo lugar, Build With AI 2026 (GDG).',
    'header.kicker': 'HackHeroes · Santa Cruz de la Sierra, Bolivia',
    'header.award': '2.º lugar · Build With AI 2026 · Google Developer Group · 59 grupos / 270 participantes',
    'header.github': 'Ver repositorio en GitHub',
    'skip.link': 'Saltar al contenido',
    'footer.text': 'GreenSpark · HackHeroes · Santa Cruz de la Sierra, Bolivia · 2026.',

    // Hero
    'hero.tagline': 'Dossier técnico — laboratorio bioeléctrico asistido por IA.',

    // Team
    'team.title': 'Equipo',
    'team.member_link_aria': 'Perfil de {name}',
    'team.member_img_alt': 'Retrato de {name}',

    // Datec Highlight
    'datec.title_prefix': 'Gracias ',
    'datec.title_suffix': ' por la invitación a conocer sus oficinas',
    'datec.video_aria': 'Video de la visita a las oficinas de Datec',
    'datec.video_fallback': 'Tu navegador no soporta el reproductor de video.',

    // Winners Highlight
    'winners.alt': 'Fotografía del equipo HackHeroes en la premiación del Hackathon Build With AI 2026 de GDG',
    'winners.caption': 'Equipo HackHeroes — 2.º lugar en Build With AI 2026 (Google Developer Group Santa Cruz).',

    // Pitch Docs
    'pitch.title': 'Pitch y documentos',
    'pitch.desc': 'El repositorio incluye el documento unificado y el video del pitch.',
    'pitch.doc_link': 'Documento unificado (PDF)',
    'pitch.video_fallback': 'Tu navegador no puede reproducir el video. Puedes ver el pitch en MP4.',
    'pitch.video_cap': 'Pitch del equipo HackHeroes — GreenSpark.',

    // Section: Qué es
    'que_es.title': '¿Qué es GreenSpark?',
    'que_es.lede_prefix': 'Plataforma de simulación asistida por IA que ayuda a universidades, colegios y empresas a investigar cómo convertir residuos bioorgánicos en electricidad mediante celdas de combustible microbianas (MFC) ',
    'que_es.lede_em': 'antes de invertir en infraestructura física',
    'que_es.lede_suffix': '.',

    // Section: El problema
    'problema.title': 'El problema',
    'problema.p1': 'El obstáculo no es solo la tecnología: es la falta de datos locales. Las instituciones que quieren ser sostenibles no saben qué residuos funcionan mejor, cuánta energía podrían generar ni cuándo tiene sentido escalar. Sin esa información, cualquier inversión es un salto al vacío.',
    'metric.1.k': 'Contexto municipal',
    'metric.1.val': '971',
    'metric.1.unit': 't/día',
    'metric.1.label': 'Residuos orgánicos compostables en Santa Cruz',
    'metric.1.ctx': 'Cálculo: 1.909,86 t/día × 50,84% = 970,97 (PMGIRS 2023, GAMSC). Es contexto municipal, no residuo capturable automáticamente.',

    'metric.2.k': 'Composición',
    'metric.2.val': '50,84',
    'metric.2.unit': '%',
    'metric.2.label': 'Fracción orgánica compostable del flujo total',
    'metric.2.ctx': 'Dato publicado por el GAMSC. Justifica investigar valorización, no atribuir automáticamente un rendimiento.',

    'metric.3.k': 'Infraestructura actual',
    'metric.3.val': '7',
    'metric.3.unit': 't/día',
    'metric.3.label': 'Capacidad de la planta municipal de compostaje',
    'metric.3.ctx': 'Inaugurada mayo 2026 (Swisscontact). Demuestra avance, pero deja rutas complementarias por explorar.',

    'metric.4.k': 'Piloto concentrado',
    'metric.4.val': '20',
    'metric.4.unit': 't/día',
    'metric.4.label': 'Residuos bioorgánicos en el Mercado Nuevo Abasto',
    'metric.4.ctx': 'Swisscontact. Existencia de generadores concentrados facilita pilotos; cada piloto debe pesar su propio sustrato.',

    // Section: La solución
    'solucion.title': 'La solución',
    'solucion.intro': 'Simulador inteligente que sigue este flujo:',
    'solucion.step1.h': 'La institución registra un escenario',
    'solucion.step1.d': 'tipo de residuo · humedad · pH · temperatura · configuración del reactor',
    'solucion.step2.h': 'La IA compara configuraciones',
    'solucion.step2.d': 'potencia proyectada · estabilidad esperada · nivel de confianza',
    'solucion.step3.h': 'El sistema recomienda el siguiente experimento',
    'solucion.step3.d': 'qué mezcla probar primero · variables críticas · qué medir',
    'solucion.step4.h': 'El panel traduce los resultados',
    'solucion.step4.d': 'residuo aprovechado · energía proyectada · avance de sostenibilidad',
    'solucion.step5.h': 'El agente explicativo redacta el reporte',
    'solucion.step5.d': 'lenguaje comprensible · sin inventar cifras · trazable',

    // Section: Honestidad técnica
    'honestidad.title': 'Honestidad técnica',
    'honestidad.p1': 'Cada resultado se etiqueta. La IA no reemplaza mediciones físicas: ayuda a decidir cuál hacer primero.',
    'badge.sim.tag': 'SIMULADO',
    'badge.sim.strong': 'Proyección:',
    'badge.sim.desc': 'modelo sobre escenarios de literatura. No es evidencia física.',
    'badge.med.tag': 'MEDIDO',
    'badge.med.strong': 'Evidencia:',
    'badge.med.desc': 'telemetría del reactor físico (fase piloto). Reemplaza supuestos gradualmente.',
    'badge.meta.tag': 'META EXPLORATORIA',
    'badge.meta.strong': 'Hipótesis:',
    'badge.meta.desc': 'objetivo a validar. No es ahorro garantizado ni resultado observado.',

    // Section: IA aplicada
    'ia.title': 'IA aplicada',
    'ia.p1_prefix': 'Estrategia: ',
    'ia.p1_strong': 'baseline primero, complejidad después',
    'ia.p1_suffix': '. La IA se justifica solo si mejora la priorización frente a una regla simple.',
    'ia.card1.h': 'Baseline',
    'ia.card1.d': 'Regresión lineal interpretable. Referencia para comparar candidatos.',
    'ia.card2.h': 'Modelos candidatos',
    'ia.card2.d': 'Random Forest y Gradient Boosting (scikit-learn). Selección solo si reducen el error de forma consistente (MAE, RMSE, R² con validación cruzada).',
    'ia.card3.h': 'Recomendador',
    'ia.card3.d': 'Ordena experimentos con criterios explícitos y audibles: potencia, estabilidad, disponibilidad local, costo, incertidumbre y calidad del dato. La institución decide.',
    'ia.card4.h': 'LLM opcional (API)',
    'ia.card4.d': 'Traduce resultados estructurados a lenguaje institucional. No calcula impacto crítico: recibe cifras ya procesadas por el backend. Si falta un dato, lo declara. Fallback determinístico si falla.',

    // Section: Arquitectura
    'arquitectura.title': 'Arquitectura',
    'arquitectura.p1': 'Los cálculos críticos viven en el backend. El LLM recibe resultados ya procesados y los traduce. Si falla, el sistema responde igual con datos determinísticos.',
    'arquitectura.aria_label': 'Diagrama de arquitectura: navegador, frontend React, API FastAPI con validación, baseline y ML, recomendador, SQLite y LLM opcional.',
    'diagram.browser': 'Navegador',
    'diagram.frontend': 'Frontend React',
    'diagram.frontend_sub': 'landing + consola de simulación',
    'diagram.api': 'API FastAPI',
    'diagram.api_sub': 'validación · orquestación · endpoints',
    'diagram.b1': 'Validación física',
    'diagram.b1_sub': 'rechaza datos fuera de rango',
    'diagram.b2': 'Baseline + ML',
    'diagram.b2_sub': 'regresión lineal · Random Forest · Gradient Boosting',
    'diagram.b3': 'Recomendador',
    'diagram.b3_sub': 'ordena experimentos con criterios visibles',
    'diagram.b4': 'SQLite',
    'diagram.b4_sub': 'escenarios · predicciones · trazabilidad',
    'diagram.b5': 'LLM opcional (API)',
    'diagram.b5_sub': 'solo explica, nunca calcula',
    'arquitectura.note': 'En una fase posterior, sensores físicos en el reactor alimentarán datos reales al mismo pipeline, reemplazando gradualmente los escenarios simulados.',

    // Section: Stack propuesto
    'stack.title': 'Stack propuesto',
    'stack.note_prefix': 'Stack del ',
    'stack.note_strong': 'producto',
    'stack.note_suffix': ' (simulador), no de este sitio estático. Versión a fijar al implementar.',
    'stack.caption': 'Stack tecnológico propuesto para el simulador GreenSpark',
    'stack.th_layer': 'Capa',
    'stack.th_tech': 'Tecnología',
    'stack.th_purpose': 'Para qué',
    'stack.r1_purpose': 'Interfaz de simulación y landing',
    'stack.r2_purpose': 'Navegación entre vistas',
    'stack.r3_purpose': 'API REST, validación y orquestación',
    'stack.r4_purpose': 'Escenarios, predicciones y trazabilidad',
    'stack.r5_purpose': 'Preparación de datos y modelos predictivos',
    'stack.r6_purpose': 'Reportes institucionales en lenguaje natural',
  },
  en: {
    // Layout & Header
    'meta.title': 'GreenSpark — Technical Dossier · MFC + AI',
    'meta.description': 'GreenSpark: AI-assisted microbial fuel cell (MFC) simulator to convert bio-organic waste from Santa Cruz de la Sierra into measurable energy decisions. Second place, Build With AI 2026 (GDG).',
    'header.kicker': 'HackHeroes · Santa Cruz de la Sierra, Bolivia',
    'header.award': '2nd place · Build With AI 2026 · Google Developer Group · 59 teams / 270 participants',
    'header.github': 'View repository on GitHub',
    'skip.link': 'Skip to content',
    'footer.text': 'GreenSpark · HackHeroes · Santa Cruz de la Sierra, Bolivia · 2026.',

    // Hero
    'hero.tagline': 'Technical dossier — AI-assisted bioelectric laboratory.',

    // Team
    'team.title': 'Team',
    'team.member_link_aria': 'Profile of {name}',
    'team.member_img_alt': 'Portrait of {name}',

    // Datec Highlight
    'datec.title_prefix': 'Thank you ',
    'datec.title_suffix': ' for inviting us to visit your offices',
    'datec.video_aria': 'Video of the visit to Datec offices',
    'datec.video_fallback': 'Your browser does not support the video player.',

    // Winners Highlight
    'winners.alt': 'Photograph of the HackHeroes team at the GDG Build With AI 2026 Hackathon awards ceremony',
    'winners.caption': 'HackHeroes Team — 2nd Place at Build With AI 2026 (Google Developer Group Santa Cruz).',

    // Pitch Docs
    'pitch.title': 'Pitch & Documents',
    'pitch.desc': 'The repository includes the unified document and the pitch video.',
    'pitch.doc_link': 'Unified Document (PDF)',
    'pitch.video_fallback': 'Your browser cannot play the video. You can view the pitch in MP4.',
    'pitch.video_cap': 'HackHeroes Team Pitch — GreenSpark.',

    // Section: Qué es
    'que_es.title': 'What is GreenSpark?',
    'que_es.lede_prefix': 'AI-assisted simulation platform that helps universities, schools, and enterprises explore converting bio-organic waste into electricity using microbial fuel cells (MFCs) ',
    'que_es.lede_em': 'before investing in physical infrastructure',
    'que_es.lede_suffix': '.',

    // Section: El problema
    'problema.title': 'The Problem',
    'problema.p1': 'The obstacle is not just the technology: it is the lack of localized data. Institutions striving for sustainability lack insights on which organic wastes perform best, how much energy they could generate, and when scaling makes sense. Without this data, any investment is a shot in the dark.',
    'metric.1.k': 'Municipal Context',
    'metric.1.val': '971',
    'metric.1.unit': 't/day',
    'metric.1.label': 'Compostable organic waste in Santa Cruz',
    'metric.1.ctx': 'Calculation: 1,909.86 t/day × 50.84% = 970.97 (PMGIRS 2023, GAMSC). Represents municipal context, not automatically capturable waste.',

    'metric.2.k': 'Composition',
    'metric.2.val': '50.84',
    'metric.2.unit': '%',
    'metric.2.label': 'Compostable organic fraction of total waste flow',
    'metric.2.ctx': 'Official data published by GAMSC. Justifies researching recovery potential without assuming automated yields.',

    'metric.3.k': 'Current Infrastructure',
    'metric.3.val': '7',
    'metric.3.unit': 't/day',
    'metric.3.label': 'Municipal composting plant capacity',
    'metric.3.ctx': 'Inaugurated May 2026 (Swisscontact). Demonstrates progress while highlighting complementary pathways to explore.',

    'metric.4.k': 'Concentrated Pilot',
    'metric.4.val': '20',
    'metric.4.unit': 't/day',
    'metric.4.label': 'Bio-organic waste generated at Mercado Nuevo Abasto',
    'metric.4.ctx': 'Swisscontact. High-density organic generators facilitate targeted pilots; each pilot must measure its specific substrate.',

    // Section: La solución
    'solucion.title': 'The Solution',
    'solucion.intro': 'Intelligent simulator following this workflow:',
    'solucion.step1.h': 'The institution registers a scenario',
    'solucion.step1.d': 'waste type · moisture · pH · temperature · reactor configuration',
    'solucion.step2.h': 'AI compares configurations',
    'solucion.step2.d': 'projected power · expected stability · confidence level',
    'solucion.step3.h': 'The system recommends the next experiment',
    'solucion.step3.d': 'which mixture to test first · critical variables · what to measure',
    'solucion.step4.h': 'The dashboard translates the results',
    'solucion.step4.d': 'utilized waste · projected energy · sustainability progress',
    'solucion.step5.h': 'The explanatory agent drafts the report',
    'solucion.step5.d': 'accessible language · no fabricated figures · fully traceable',

    // Section: Honestidad técnica
    'honestidad.title': 'Technical Honesty',
    'honestidad.p1': 'Every output is explicitly labeled. AI does not replace physical measurements: it helps determine which experiment to perform first.',
    'badge.sim.tag': 'SIMULATED',
    'badge.sim.strong': 'Projection:',
    'badge.sim.desc': 'model based on literature scenarios. Not physical evidence.',
    'badge.med.tag': 'MEASURED',
    'badge.med.strong': 'Evidence:',
    'badge.med.desc': 'physical reactor telemetry (pilot phase). Gradually replaces assumptions.',
    'badge.meta.tag': 'EXPLORATORY GOAL',
    'badge.meta.strong': 'Hypothesis:',
    'badge.meta.desc': 'objective to validate. Not guaranteed savings or observed results.',

    // Section: IA aplicada
    'ia.title': 'Applied AI',
    'ia.p1_prefix': 'Strategy: ',
    'ia.p1_strong': 'baseline first, complexity second',
    'ia.p1_suffix': '. AI is justified only if it proves superior prioritization over a simple baseline rule.',
    'ia.card1.h': 'Baseline',
    'ia.card1.d': 'Interpretable linear regression. Reference benchmark to compare candidates.',
    'ia.card2.h': 'Candidate Models',
    'ia.card2.d': 'Random Forest and Gradient Boosting (scikit-learn). Selected only if they consistently reduce error metrics (MAE, RMSE, R² via cross-validation).',
    'ia.card3.h': 'Recommender System',
    'ia.card3.d': 'Ranks experiments using explicit, auditable criteria: power, stability, local availability, cost, uncertainty, and data quality. The institution decides.',
    'ia.card4.h': 'Optional LLM (API)',
    'ia.card4.d': 'Translates structured results into institutional language. Does not calculate critical metrics: receives figures already processed by the backend. Declares missing data. Deterministic fallback if unavailable.',

    // Section: Arquitectura
    'arquitectura.title': 'Architecture',
    'arquitectura.p1': 'Critical calculations reside in the backend. The LLM receives pre-processed results and translates them. If it fails, the system responds deterministically with processed data.',
    'arquitectura.aria_label': 'Architecture diagram: browser, React frontend, FastAPI API with validation, baseline and ML, recommender, SQLite, and optional LLM.',
    'diagram.browser': 'Browser',
    'diagram.frontend': 'React Frontend',
    'diagram.frontend_sub': 'landing + simulation console',
    'diagram.api': 'FastAPI API',
    'diagram.api_sub': 'validation · orchestration · endpoints',
    'diagram.b1': 'Physical Validation',
    'diagram.b1_sub': 'rejects out-of-bounds inputs',
    'diagram.b2': 'Baseline + ML',
    'diagram.b2_sub': 'linear regression · Random Forest · Gradient Boosting',
    'diagram.b3': 'Recommender System',
    'diagram.b3_sub': 'ranks experiments with visible criteria',
    'diagram.b4': 'SQLite',
    'diagram.b4_sub': 'scenarios · predictions · traceability',
    'diagram.b5': 'Optional LLM (API)',
    'diagram.b5_sub': 'explains only, never calculates',
    'arquitectura.note': 'In a later phase, physical sensors in the reactor will feed real-time telemetry into this pipeline, gradually replacing simulated scenarios.',

    // Section: Stack propuesto
    'stack.title': 'Proposed Stack',
    'stack.note_prefix': 'Stack of the ',
    'stack.note_strong': 'product',
    'stack.note_suffix': ' (simulator), not this static landing page. Version to be pinned upon implementation.',
    'stack.caption': 'Proposed technology stack for the GreenSpark simulator',
    'stack.th_layer': 'Layer',
    'stack.th_tech': 'Technology',
    'stack.th_purpose': 'Purpose',
    'stack.r1_purpose': 'Simulation interface and landing page',
    'stack.r2_purpose': 'View navigation',
    'stack.r3_purpose': 'REST API, validation, and orchestration',
    'stack.r4_purpose': 'Scenarios, predictions, and traceability',
    'stack.r5_purpose': 'Data preparation and predictive models',
    'stack.r6_purpose': 'Natural language institutional reporting',
  }
} as const;
