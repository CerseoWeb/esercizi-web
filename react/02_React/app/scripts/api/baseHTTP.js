import { API_BASE_URL } from "./baseUrl";

/**
 * Converte un oggetto di parametri in query string.
 * I valori `undefined`, `null` e stringa vuota vengono ignorati.
 *
 * @param {Record<string, unknown>} [params={}]
 * @returns {string}
 */
function toQueryString(params = {}) {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
            searchParams.set(key, String(value));
        }
    });

    const query = searchParams.toString();
    return query ? `?${query}` : "";
}

/**
 * Esegue una chiamata HTTP verso il server API e restituisce il JSON parsato.
 *
 * @param {string} path - Path relativo all'API base, ad esempio `/posts`.
 * @param {object} [options]
 * @param {"GET"|"POST"|"PUT"|"PATCH"|"DELETE"} [options.method="GET"] - Metodo HTTP.
 * @param {Record<string, unknown>} [options.query] - Query params da serializzare.
 * @param {unknown} [options.body] - Payload da inviare in JSON.
 * @returns {Promise<unknown|null>} JSON della risposta, oppure `null` se lo status e' 204.
 * @throws {Error} Lancia errore se la risposta non e' `ok` (status non 2xx).
 * @example
 * const posts = await request("/posts", {
 *   query: { _limit: 5, _page: 1 }
 * });
 */
export async function request(path, { method = "GET", query, body } = {}) {
    const url = `${API_BASE_URL}${path}${toQueryString(query)}`;

    const response = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        body: body ? JSON.stringify(body) : undefined
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`API error ${response.status}: ${text || response.statusText}`);
    }

    if (response.status === 204) {
        return null;
    }

    return response.json();
}
