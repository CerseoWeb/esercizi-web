// local-favorite.js - Gestione preferiti in localStorage

const FAVORITES_KEY = "books:favorites";

/**
 * Recupera gli ID preferiti da localStorage
 * @returns {number[]}
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
 * Salva la lista ID preferiti
 * @param {number[]} ids
 */
export function saveFavorites(ids) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
}

/**
 * Verifica se un libro e preferito
 * @param {number|string} bookId
 * @returns {boolean}
 */
export function isFavorite(bookId) {
    const id = Number(bookId);
    return getFavorites().includes(id);
}

/**
 * Toggle preferito per ID
 * @param {number|string} bookId
 * @returns {{ isFavorite: boolean, favorites: number[] }}
 */
export function toggleFavorite(bookId) {
    const id = Number(bookId);
    const favorites = getFavorites();
    const exists = favorites.includes(id);

    const next = exists
        ? favorites.filter((item) => item !== id)
        : [...favorites, id];

    saveFavorites(next);

    return {
        isFavorite: !exists,
        favorites: next,
    };
}
