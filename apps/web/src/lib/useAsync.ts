import { useCallback, useEffect, useRef, useState } from "react";

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/** Thin data-fetching hook: { data, loading, error, run }.
 *  Pass `immediate` to run on mount. `run` returns the result so callers can
 *  chain (e.g. after a form submit). Stale results are ignored on unmount. */
export function useAsync<T>(fn: () => Promise<T>, immediate = false) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: immediate,
    error: null,
  });
  const mounted = useRef(true);
  const fnRef = useRef(fn);
  fnRef.current = fn;

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const run = useCallback(async (): Promise<T | null> => {
    setState((s) => ({ ...s, loading: true, error: null }));
    try {
      const data = await fnRef.current();
      if (mounted.current) setState({ data, loading: false, error: null });
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error inesperado.";
      if (mounted.current) setState((s) => ({ ...s, loading: false, error: message }));
      return null;
    }
  }, []);

  useEffect(() => {
    if (immediate) void run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [immediate]);

  return { ...state, run, setData: (data: T) => setState((s) => ({ ...s, data })) };
}
