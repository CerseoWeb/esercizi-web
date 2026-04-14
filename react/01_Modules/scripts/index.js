// main.js - Logica per la pagina index (lista libri)

import { getBooks } from "./modules/api.js";
import { mountHeader } from "./modules/header.js";
import { mountFooter } from "./modules/footer.js";
import {
    sanitizeHTML,
    showLoading,
    showError,
    showEmpty,
    clearContainer,
} from "./modules/errors.js";

// Costanti
const BOOKS_LIMIT = 20;
const BOOKS_CONTAINER_ID = "books-container";

/**
 * Crea una card libro con link al dettaglio
 * @param {Object} book - Oggetto libro
 * @returns {HTMLElement} - Elemento card
 */
function createBookCard(book) {
    const card = document.createElement("article");
    card.className = "book-card";
    card.innerHTML = `
        <a href="detail.html?id=${book.id}" class="book-link">
            <div class="book-cover">
                ${book.cover ? `<img src="${book.cover}" alt="${book.titolo}">` : '<div class="book-placeholder">📖</div>'}
            </div>
            <div class="book-info">
                <h3 class="book-title">${sanitizeHTML(book.titolo)}</h3>
                <p class="book-author">${sanitizeHTML(book.autore || "Autore sconosciuto")}</p>
            </div>
        </a>
    `;
    return card;
}

/**
 * Carica e visualizza i libri
 */
async function loadBooks() {
    try {
        showLoading(BOOKS_CONTAINER_ID);

        const books = await getBooks(BOOKS_LIMIT);

        if (!books || books.length === 0) {
            showEmpty(BOOKS_CONTAINER_ID, "Nessun libro trovato.");
            return;
        }

        clearContainer(BOOKS_CONTAINER_ID);
        books.forEach((book) => {
            const card = createBookCard(book);
            document.getElementById(BOOKS_CONTAINER_ID).appendChild(card);
        });
    } catch (error) {
        showError(
            BOOKS_CONTAINER_ID,
            "Errore nel caricamento dei libri.",
            error.message,
            "Riprova",
            () => location.reload(),
        );
    }
}

/**
 * Inizializza la pagina
 */
function initPage() {
    // Monta header e footer
    mountHeader("Libreria");
    mountFooter();

    // Carica i libri
    loadBooks();
}

// Avvia quando il DOM è pronto
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPage);
} else {
    initPage();
}
