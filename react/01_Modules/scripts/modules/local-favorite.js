// local-favorite.js - Gestione preferiti in localStorage

const FAVORITES_KEY = "books:favorites";

/**
 * Recupera gli ID preferiti da localStorage
 *
 * Il risultato è sempre un array di numeri, anche se
 * localStorage non ha nulla o ci sono stati errori.
 *
 * @returns {number[]} - Array di ID preferiti
 */
export function getFavorites() {
    try {
        const raw = localStorage.getItem(FAVORITES_KEY);
        if (!raw) return [];

        return JSON.parse(raw);
    } catch {
        return [];
    }
}

/**
 * Salva la lista ID preferiti in localStorage.
 * La funzione si aspetta un array di numeri come input e lo converte in stringa JSON prima di salvarlo.
 * @param {number[]} ids - Array di ID preferiti
 */
export function saveFavorites(ids) {
    const stringa = JSON.stringify(ids);
    localStorage.setItem(FAVORITES_KEY, stringa);
}

/**
 * Verifica se un libro è preferito controllando se il suo ID è presente nella lista dei preferiti.
 *
 * La funzione accetta un ID numerico o stringa (che verrà convertita in numero)
 * e ritorna true se l'ID è presente nella lista dei preferiti, altrimenti false.
 *
 * @param {number|string} bookId - ID del libro da verificare
 * @returns {boolean} - true se il libro è preferito, false altrimenti
 */
export function isFavorite(bookId) {
    const id = Number(bookId);
    return getFavorites().includes(id);
}

/**
 * Toggle preferito per ID libro.
 *
 * Se l'ID è già presente nella lista dei preferiti, viene rimosso.
 * Se l'ID non è presente, viene aggiunto alla lista dei preferiti.
 *
 * Infine restituisce il nuovo stato del preferito (true se ora è preferito, false altrimenti).
 *
 * @param {number|string} bookId - ID del libro da togglare come preferito
 * @returns {boolean} - true se il libro è ora preferito, false altrimenti
 */
export function toggleFavorite(bookId) {
    const id = Number(bookId);
    const favorites = getFavorites();
    const exists = favorites.includes(id);

    const next = exists
        ? favorites.filter((item) => item !== id)
        : [...favorites, id];

    saveFavorites(next);

    return !exists;
}
