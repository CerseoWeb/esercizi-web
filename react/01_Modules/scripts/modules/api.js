// api.js - Modulo per le chiamate API al server
const API_BASE_URL = "http://localhost:5000/api";

/**
 * Recupera la lista dei libri dal server
 * @param {number} limit - Numero massimo di libri da recuperare (default: 20)
 * @param {Object} filters - Filtri opzionali (es: { letto: true })
 * @returns {Promise<Array>} - Array di libri
 */
export async function getBooks(limit = 20, filters = {}) {
    try {
        const params = new URLSearchParams({ _limit: String(limit) });

        Object.entries(filters).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== "") {
                params.set(key, String(value));
            }
        });

        const response = await fetch(`${API_BASE_URL}/books?${params.toString()}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Errore nel recupero dei libri:", error);
        throw error;
    }
}

/**
 * Recupera i dettagli di un singolo libro per ID
 * @param {string|number} id - ID del libro
 * @returns {Promise<Object>} - Oggetto libro con tutti i dettagli
*/
export async function getBookById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/books/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Libri recuperati:", data);
        return data;
    } catch (error) {
        console.error(`Errore nel recupero del libro con id ${id}:`, error);
        throw error;
    }
}
