// book-ui.js - Renderer UI per lista e dettaglio libri

import { clearContainer, sanitizeHTML } from "./errors.js";
import { isFavorite } from "./local-favorite.js";

/**
 * Crea una card libro con link al dettaglio
 * @param {Object} book - Oggetto libro
 * @returns {HTMLElement}
 */
export function createBookCard(book) {
    const card = document.createElement("article");
    card.className = "book-card";
    const favoriteClass = isFavorite(book.id) ? "favorite" : "";

    card.innerHTML = `
        <a href="detail.html?id=${book.id}" class="book-link">
            <div class="book-cover">
                ${book.cover ? `<img src="${book.cover}" alt="${sanitizeHTML(book.titolo || "Libro")}">` : '<div class="book-placeholder">📖</div>'}
            </div>
            <div class="book-info">
                <h3 class="book-title">${sanitizeHTML(book.titolo || "Titolo non disponibile")}</h3>
                <p class="book-author">${sanitizeHTML(book.autore || "Autore sconosciuto")}</p>
            </div>
        </a>
    `;

    return card;
}

/**
 * Renderizza una lista di libri in un contenitore
 * @param {string|HTMLElement} containerSelector - Id o elemento container
 * @param {Array<Object>} books - Lista libri
 */
export function renderBookList(containerSelector, books) {
    const container =
        typeof containerSelector === "string"
            ? document.getElementById(containerSelector)
            : containerSelector;

    if (!container) return;

    clearContainer(container);

    books.forEach((book) => {
        container.appendChild(createBookCard(book));
    });
}

/**
 * Crea l'HTML del dettaglio libro
 * @param {Object} book - Oggetto libro
 * @returns {string}
 */
export function createBookDetail(book) {
    return `
        <button class="back-button" onclick="history.back()">← Torna alla lista</button>
        <article class="book-detail-content">
            <div class="book-detail-cover">
                ${book.cover ? `<img src="${book.cover}" alt="${sanitizeHTML(book.titolo || "Libro")}">` : '<div class="book-placeholder-large">📖</div>'}
            </div>
            <div class="book-detail-info">
                <h1>${sanitizeHTML(book.titolo || "Titolo non disponibile")}</h1>
                <p class="detail-author"><strong>Autore:</strong> ${sanitizeHTML(book.autore || "Sconosciuto")}</p>
                ${book.pagine ? `<p class="detail-pagine"><strong>Pagine:</strong> ${book.pagine}</p>` : ""}
                ${book.genere ? `<p class="detail-genere"><strong>Genere:</strong> ${sanitizeHTML(book.genere)}</p>` : ""}
                ${book.descrizione ? `<p class="detail-descrizione"><strong>Descrizione:</strong><br>${sanitizeHTML(book.descrizione)}</p>` : ""}
            </div>
        </article>
    `;
}
