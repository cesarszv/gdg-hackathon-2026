"""Optional LLM explanation gateway with a deterministic fallback.

The LLM (DeepSeek, OpenAI-compatible API) only rephrases results already computed
and labeled by the backend. It must never invent power, savings, emissions or
percentages (regla anti-alucinacion). If no API key is configured, or the call
fails or times out, a deterministic templated explanation is returned so the API
never breaks (RNF-06 resiliencia).
"""

from __future__ import annotations

from typing import Any

import httpx

_SYSTEM_PROMPT = (
    "Eres un asistente tecnico de GreenSpark. Explicas en espanol, de forma clara y "
    "breve, resultados YA calculados por el backend para escenarios de celdas de "
    "combustible microbianas (MFC) en Santa Cruz de la Sierra. Reglas estrictas: "
    "1) NO inventes cifras (potencia, ahorro, emisiones, porcentajes); usa solo los "
    "numeros provistos. 2) Si falta un dato, declaralo explicitamente. 3) Aclara que "
    "los valores marcados como SIMULADO son proyecciones, no mediciones."
)


def _fallback(context: dict[str, Any]) -> dict[str, Any]:
    """Deterministic explanation built only from provided structured fields."""
    code = context.get("scenario_code", "(escenario sin codigo)")
    power = context.get("projected_power_mw")
    stability = context.get("projected_stability", "no evaluada")
    priority = context.get("priority")
    evidence = context.get("evidence_state", "SIMULADO")

    parts = [f"Escenario {code}:"]
    if power is not None:
        parts.append(f"potencia proyectada de {power} mW")
    else:
        parts.append("sin potencia proyectada disponible (dato faltante)")
    parts.append(f"con estabilidad {stability}")
    if priority is not None:
        parts.append(f"y prioridad experimental {priority}")
    sentence = " ".join(parts) + "."

    note = (
        f" Estado del dato: {evidence}. Los resultados marcados como SIMULADO son "
        "proyecciones basadas en literatura y requieren validacion experimental; no "
        "deben interpretarse como mediciones."
    )
    assumptions = context.get("assumptions")
    if assumptions:
        note += f" Supuestos: {assumptions}"

    return {
        "explanation": sentence + note,
        "source": "fallback",
        "model": None,
        "warnings": list(context.get("warnings", [])),
    }


def _call_llm(context: dict[str, Any], api_key: str, model: str,
              base_url: str, timeout: float) -> dict[str, Any]:
    """Call the OpenAI-compatible chat endpoint and return a structured result."""
    payload = {
        "model": model,
        "messages": [
            {"role": "system", "content": _SYSTEM_PROMPT},
            {"role": "user", "content": (
                "Explica al usuario institucional el siguiente resultado estructurado, "
                "sin agregar cifras nuevas:\n" + str(context)
            )},
        ],
        "temperature": 0.2,
        "stream": False,
    }
    response = httpx.post(
        f"{base_url.rstrip('/')}/chat/completions",
        json=payload,
        headers={"Authorization": f"Bearer {api_key}"},
        timeout=timeout,
    )
    response.raise_for_status()
    content = response.json()["choices"][0]["message"]["content"].strip()
    return {
        "explanation": content,
        "source": "llm",
        "model": model,
        "warnings": list(context.get("warnings", [])),
    }


def explain(context: dict[str, Any], *, api_key: str | None = None,
            model: str = "deepseek-chat", base_url: str = "https://api.deepseek.com",
            timeout: float = 20.0) -> dict[str, Any]:
    """Return an explanation of ``context``, via LLM when configured else fallback.

    Always returns a dict and never raises: any LLM failure degrades to the
    deterministic fallback with an added warning.
    """
    if not api_key:
        return _fallback(context)
    try:
        return _call_llm(context, api_key, model, base_url, timeout)
    except Exception as exc:  # noqa: BLE001 - degrade on any LLM/transport failure
        result = _fallback(context)
        result["warnings"].append(
            f"LLM no disponible ({type(exc).__name__}); se uso explicacion determinista."
        )
        return result
