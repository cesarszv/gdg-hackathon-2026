# GreenSpark AI and Architecture Deliverables Design

## Objective

Strengthen the mandatory AI application and technological architecture deliverables so they are technically defensible, concise and consistent with the current GreenSpark scope.

## Scope

- Modify only `docs/entregables_obligatorios/markdown/aplicacion de ia.md`.
- Modify only `docs/entregables_obligatorios/markdown/arquitectura tecnologica.md`.
- Preserve the approved three-phase MFC narrative and the focus on Santa Cruz de la Sierra.

## Technical Honesty Rules

- The current checkout is documentation and conceptual design. It does not contain an executable application, a trained model or a physical MFC reactor.
- Predictions, interfaces, endpoints and deployments must be presented as proposed architecture until implemented.
- LLM use is optional and proposed. The document must not name a selected provider without evidence.
- Measured latency, model quality and output-validity percentages must remain validation targets until tests exist.
- The deterministic layer validates physical ranges and calculates critical values. AI supports prediction, prioritization and explanation.

## Editorial Design

### AI Application

Explain the local decision problem, why fixed rules are insufficient, what remains deterministic, which predictive alternatives will be compared, what data enters and leaves the pipeline, how outputs are validated, where an optional LLM fits, and which metrics must be collected before making performance claims.

### Technological Architecture

Explain the proposed functional and non-functional requirements, component boundaries, Mermaid component and sequence diagrams, stack rationale, data model, endpoint contract, security, risks, deployment path and phased scalability.

## Verification

- Confirm both documents distinguish current scope, proposed MVP and phase 2.
- Confirm no claim presents simulation as measurement.
- Confirm the AI document includes alternatives, inputs, outputs, guardrails and validation metrics.
- Confirm the architecture document includes Mermaid diagrams, stack justification, security, risks and deployment.
- Run `git diff --check`.
