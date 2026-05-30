import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * Generic data fetcher for JSON files in /public/data/.
 * Caches results in memory so re-renders don't re-fetch.
 */
const cache: Record<string, unknown> = {};

export function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: cache[url] ? (cache[url] as T) : null,
    loading: !cache[url],
    error: null,
  });

  useEffect(() => {
    if (cache[url]) {
      setState({ data: cache[url] as T, loading: false, error: null });
      return;
    }

    let cancelled = false;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
        return res.json() as Promise<T>;
      })
      .then((data) => {
        cache[url] = data;
        if (!cancelled) setState({ data, loading: false, error: null });
      })
      .catch((err: Error) => {
        if (!cancelled) setState({ data: null, loading: false, error: err.message });
      });

    return () => { cancelled = true; };
  }, [url]);

  return state;
}
