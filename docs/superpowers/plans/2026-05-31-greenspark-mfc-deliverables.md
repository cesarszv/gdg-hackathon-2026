# GreenSpark MFC Deliverables Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the incorrect biogas-platform narrative with the approved phased MFC research, pilot and biodigester-scaling proposal.

**Architecture:** The documentation will use one consistent three-phase model. Every quantitative claim will distinguish published data, simulation, exploratory goals and future validation.

**Tech Stack:** Markdown, `rg`, Git diff checks.

---

### Task 1: Correct the numbered mandatory deliverables

**Files:**
- Modify: `docs/entregables_obligatorios/source/01 problema identificado.md`
- Modify: `docs/entregables_obligatorios/source/02 analisis pestel.md`
- Modify: `docs/entregables_obligatorios/source/03 analisis foda.md`
- Modify: `docs/entregables_obligatorios/source/04 solucion propuesta.md`

- [x] Replace the SaaS-first narrative with the approved three-phase MFC model.
- [x] Keep the Santa Cruz evidence and clearly label validation gaps.
- [x] Verify that universities are the initial paying client and that schools, restaurants and agroindustry appear as later segments.

### Task 2: Correct the technical and AI documents

**Files:**
- Modify: `docs/entregables_obligatorios/source/documento tecnico con investigacion.md`
- Modify: `docs/entregables_obligatorios/source/aplicacion de ia.md`
- Modify: `docs/entregables_obligatorios/source/arquitectura tecnologica.md`

- [x] Describe the MVP as researched MFC design plus simulation.
- [x] Make AI predict MFC scenarios and recommendations instead of claiming measured biogas output.
- [x] Label sensors, physical reactors and live anomaly detection as pilot-stage capabilities.

### Task 3: Correct the strategic and financial documents

**Files:**
- Modify: `docs/entregables_obligatorios/source/lean canvas.md`
- Modify: `docs/entregables_obligatorios/source/analisis financiero.md`
- Modify: `docs/entregables_obligatorios/source/impacto esperado.md`

- [x] Replace unsupported SaaS unit economics with phase-based revenue hypotheses.
- [x] Present 10% and 20% as exploratory goals for selected loads subject to measurement.
- [x] Present agronomic use as a validation path, not as certified fertilizer sales.

### Task 4: Verify consistency

**Files:**
- Review: `docs/entregables_obligatorios/source/*.md`

- [x] Run `rg -n "MFC|biodigest|4477|5167|5549|10%|20%|fertiliz|agron[oó]mic|universidad" docs/entregables_obligatorios/source`.
- [x] Run `rg -n "plataforma de IA que convierte|GreenSpark no vende una máquina|m3_biogas|m³ de biogás|capa de inteligencia y coordinación" docs/entregables_obligatorios/source`.
- [x] Run `git diff --check`.
- [x] Review the final diff without reverting pre-existing user changes.
