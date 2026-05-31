# GreenSpark SQLite OpenAI Agent Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a read-only GreenSpark advisor that answers free-form questions using structured SQLite prototype data and OpenAI `gpt-5.4-mini`, with a deterministic fallback and a polished `/app` chat.

**Architecture:** FastAPI remains the only layer with SQLite and OpenAI access. A focused context builder summarizes seeded scenarios, predictions, recommendations, reports, and simulated telemetry before passing compact JSON to the LLM gateway. The frontend sends a question and optional scenario filter, shows suggested questions, and keeps the simulation warning visible.

**Tech Stack:** Python 3.14, FastAPI, SQLAlchemy, SQLite, httpx, pytest, React 18, TypeScript, Vite.

---

### Task 1: Build the read-only SQLite context

**Files:**
- Create: `apps/api/agent_context.py`
- Create: `tests/test_agent_context.py`

- [ ] **Step 1: Write failing context tests**

Add tests that request global and scenario-focused context from the seeded
database and assert: `192` simulated readings, `8` scenarios, ranking priority
`1`, and `24` readings for scenario `3`.

- [ ] **Step 2: Run tests to verify RED**

Run: `.\.venv\Scripts\python.exe -m pytest tests/test_agent_context.py -q`

Expected: FAIL because `apps.api.agent_context` does not exist.

- [ ] **Step 3: Implement context builder**

Create `build_agent_context(db, scenario_id=None)` with compact summaries,
telemetry aggregates, an optional focused scenario, and no write operations.

- [ ] **Step 4: Run tests to verify GREEN**

Run: `.\.venv\Scripts\python.exe -m pytest tests/test_agent_context.py -q`

Expected: PASS.

### Task 2: Switch the gateway to OpenAI

**Files:**
- Modify: `apps/api/ai_gateway.py`
- Modify: `apps/api/config.py`
- Modify: `.env.example`
- Create: `.env` (ignored local configuration)
- Modify: `tests/test_ai_gateway.py`

- [ ] **Step 1: Write failing gateway tests**

Add a monkeypatched `httpx.post` test asserting URL
`https://api.openai.com/v1/chat/completions`, model `gpt-5.4-mini`, Bearer auth,
the free-form question, and structured JSON context. Add a fallback test that
asserts database counts and simulated telemetry appear in the deterministic
answer.

- [ ] **Step 2: Run tests to verify RED**

Run: `.\.venv\Scripts\python.exe -m pytest tests/test_ai_gateway.py -q`

Expected: FAIL because the current defaults still target DeepSeek and the
gateway does not accept a question.

- [ ] **Step 3: Implement OpenAI-only gateway**

Change defaults to OpenAI, serialize context as JSON, pass the question into the
prompt, strengthen the anti-hallucination system prompt, and keep a
data-grounded deterministic fallback.

- [ ] **Step 4: Run tests to verify GREEN**

Run: `.\.venv\Scripts\python.exe -m pytest tests/test_ai_gateway.py -q`

Expected: PASS.

### Task 3: Expose conversational agent API

**Files:**
- Modify: `apps/api/schemas/__init__.py`
- Modify: `apps/api/routers/agent.py`
- Modify: `tests/test_api.py`

- [ ] **Step 1: Write failing API tests**

Add a test posting `{"question": "...", "scenario_id": 3}` and assert the
fallback answer references `MFC-SCZ-003`, simulated telemetry, and the warning.

- [ ] **Step 2: Run test to verify RED**

Run: `.\.venv\Scripts\python.exe -m pytest tests/test_api.py::test_agent_answers_free_form_question_from_sqlite -q`

Expected: FAIL because `/agente` does not build SQLite context.

- [ ] **Step 3: Implement endpoint**

Make `question` required, keep `scenario_id` optional, call
`build_agent_context`, and pass the result plus question to `explain`.

- [ ] **Step 4: Run test to verify GREEN**

Run: `.\.venv\Scripts\python.exe -m pytest tests/test_api.py -q`

Expected: PASS.

### Task 4: Seed simulated telemetry

**Files:**
- Modify: `database/seed.sql`
- Modify: `tests/test_api.py`

- [ ] **Step 1: Write failing seed assertions**

Assert `/health` reports `192` sensor readings and `/telemetria/3` returns `24`
rows whose evidence state is `SIMULADO`.

- [ ] **Step 2: Run tests to verify RED**

Run: `.\.venv\Scripts\python.exe -m pytest tests/test_api.py -q`

Expected: FAIL because the seed currently has no telemetry.

- [ ] **Step 3: Add reproducible seed rows**

Use a SQLite recursive CTE to generate `24` hourly readings for every seeded
scenario with deterministic variations and `device_id` prefixed
`simulator-mfc-scz-`.

- [ ] **Step 4: Backfill local demo database**

Run the same insert guarded by `WHERE NOT EXISTS` against
`database/greenspark.db`.

- [ ] **Step 5: Run tests to verify GREEN**

Run: `.\.venv\Scripts\python.exe -m pytest tests/test_api.py -q`

Expected: PASS.

### Task 5: Polish `/app` advisor experience

**Files:**
- Modify: `apps/web/src/dashboard/panels/AgentChatPanel.tsx`
- Modify: `apps/web/src/dashboard/dashboard.css`
- Modify: `apps/web/src/lib/api.ts`
- Modify: `apps/api/README.md`
- Modify: `apps/web/README.md`
- Modify: `docs/utilities/emanuel localhost.md`

- [ ] **Step 1: Update typed request**

Change `api.explainScenario` into `api.askAgent(question, scenarioId?)`.

- [ ] **Step 2: Build the conversational panel**

Add a question textarea, optional scenario selector, suggested-question buttons,
submit handling, visible source/model metadata, and a persistent simulated-data
notice. Preserve the existing visual language and keyboard accessibility.

- [ ] **Step 3: Refine chat styles**

Style the prompt composer and suggestion chips within the current organic,
research-console aesthetic. Add responsive layout rules without touching the
landing page.

- [ ] **Step 4: Update run documentation**

Document OpenAI-only `.env`, `OPENAI_API_KEY`, `gpt-5.4-mini`, fallback behavior,
and the simulated telemetry dataset.

- [ ] **Step 5: Build frontend**

Run: `npm run build` from `apps/web`.

Expected: PASS.

### Task 6: Full verification

**Files:**
- Verify only.

- [ ] **Step 1: Run backend suite**

Run: `.\.venv\Scripts\python.exe -m pytest -q`

Expected: PASS.

- [ ] **Step 2: Start local services**

Start FastAPI on `127.0.0.1:8000` and Vite on `127.0.0.1:5173`.

- [ ] **Step 3: Exercise local API**

Check `/health`, `/app?tab=agente`, and `POST /agente` in fallback mode. Confirm
the response references SQLite data and labels telemetry as simulated.

- [ ] **Step 4: Verify UI in browser**

Open `/app?tab=agente`, ask a suggested question, and confirm the chat thread,
source label, scenario selector, and simulation warning render correctly.

- [ ] **Step 5: Review diff**

Confirm no changes were made to `docs/entregables_obligatorios/markdown` or the
user-edited landing files.
