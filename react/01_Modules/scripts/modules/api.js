// api.js - Modulo per le chiamate API al server
const API_BASE_URL = "http://localhost:5000/api";

/**
 * Recupera la lista dei libri dal server.
 * 
 * I filtri possono essere passati come oggetto e saranno convertiti in query string.
 * Quindi se si vuole filtrare per libri letti, si può chiamare getBooks({ letto: true })
 * e questo farà una richiesta a /api/books?letto=true
 * 
 * Di default l'unico filtro è _limit=20, ma si pouò sovrascrivere.
 * 
 * @param {Object} filters - Filtri opzionali (es: { letto: true })
 * @returns {Promise<Array>} - Array di libri
 */
export async function getBooks(filters = {}) {
    if (!filters.hasOwnProperty("_limit")) {
        filters._limit = 20; // Limite di default
    }

    try {
        const params = new URLSearchParams();
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
 * Recupera i dettagli di un singolo libro per ID.
 * Qui si può passare un ID numerico o stringa che rappresenta l'ID del libro da recuperare.
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
        console.log("Libro recuperato:", data);
        return data;
    } catch (error) {
        console.error(`Errore nel recupero del libro con id ${id}:`, error);
        throw error;
    }
}
