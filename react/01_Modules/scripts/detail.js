// detail.js - Logica per la pagina dettaglio libro

import { getBookById } from "./modules/api.js";
import { mountHeader } from "./modules/header.js";
import { mountFooter } from "./modules/footer.js";
import { sanitizeHTML, showLoading, showNotFound } from "./modules/errors.js";

/**
 * Estrae l'ID del libro dai parametri URL
 * @returns {string|null} - ID del libro o null
 */
function getBookIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

/**
 * Crea l'HTML per il dettaglio libro
 * @param {Object} book - Oggetto libro
 * @returns {string} - HTML del dettaglio
 */
function createDetailHTML(book) {
    return `
        <button class="back-button" onclick="history.back()">← Torna alla lista</button>
        <article class="book-detail-content">
        <div class="book-detail-cover">
            ${book.cover ? `<img src="${book.cover}" alt="${book.titolo}">` : '<div class="book-placeholder-large">📖</div>'}
        </div>
        <div class="book-detail-info">
            <h1>${sanitizeHTML(book.titolo)}</h1>
            <p class="detail-author"><strong>Autore:</strong> ${sanitizeHTML(book.autore || "Sconosciuto")}</p>
            ${book.pagine ? `<p class="detail-pagine"><strong>Pagine:</strong> ${book.pagine}</p>` : ""}
            ${book.genere ? `<p class="detail-genere"><strong>Genere:</strong> ${sanitizeHTML(book.genere)}</p>` : ""}
            ${book.descrizione ? `<p class="detail-descrizione"><strong>Descrizione:</strong><br>${sanitizeHTML(book.descrizione)}</p>` : ""}
        </div>
        </article>
    `;
}

/**
 * Carica e visualizza il dettaglio del libro
 */
async function loadBookDetail() {
    const container = document.getElementById("detail-container");
    const bookId = getBookIdFromURL();

    if (!bookId) {
        showNotFound(container, "ID libro non fornito.");
        return;
    }

    try {
        showLoading(container);

        const book = await getBookById(bookId);

        if (!book) {
            showNotFound(container, "Libro non trovato.");
            return;
        }

        // Aggiorna il titolo della pagina
        document.title = `${book.titolo} - Libreria`;

        // Popola il container
        container.innerHTML = createDetailHTML(book);
    } catch (error) {
        showNotFound(container, `Errore nel caricamento: ${error.message}`);
    }
}

/**
 * Inizializza la pagina
 */
function initPage() {
    // Monta header e footer
    mountHeader("Libreria");
    mountFooter();

    // Carica il dettaglio del libro
    loadBookDetail();
}

// Avvia quando il DOM è pronto
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPage);
} else {
    initPage();
}
