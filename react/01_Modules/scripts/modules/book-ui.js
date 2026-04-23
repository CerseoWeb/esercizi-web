// book-ui.js - Renderer UI per lista e dettaglio libri

import { clearContainer, sanitizeHTML } from "./errors.js";

/**
 * Crea una card libro.
 * 
 * La card sarà composta da un'immagine di copertina (se disponibile), titolo e autore.
 * Cliccando sulla card si viene portati alla pagina di dettaglio del libro.
 * 
 * Inoltre possiede un'icona stella per indicare se il libro è preferito o meno.
 * 
 * @param {Object} book - Oggetto libro { id, titolo, autore, cover, ... }
 * @returns {HTMLElement} - Elemento card libro
 */
export function createBookCard(book) {
    const card = document.createElement("article");
    card.className = "book-card";

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

    const star = card.querySelector(".icon-star");
    if (star) {
        star.addEventListener("click", (event) => {
            event.preventDefault();
        });
    }

    return card;
}

/**
 * Renderizza una lista di libri in un contenitore.
 * Se il contenitore non esiste, la funzione lancia un errore.
 * La funzione si occupa anche di svuotare il contenitore prima di renderizzare i nuovi libri.
 * 
 * @param {HTMLElement} container - Elemento del DOM
 * @param {Array<Object>} books - Lista libri
 */
export function renderBookList(container, books) {
    if (!container) {
        throw new Error("Container non trovato: ", container);
    }

    clearContainer(container);

    books.forEach((book) => {
        container.appendChild(createBookCard(book));
    });
}

/**
 * Crea l'HTML del dettaglio libro.
 * 
 * Questo è diverso da createBookCard perché mostra più informazioni e non è un link, ma una pagina a sé stante.
 * Il dettaglio include titolo, autore, numero di pagine, genere e descrizione (se disponibili).
 * 
 * @param {Object} book - Oggetto libro { id, titolo, autore, cover, pagine, genere, descrizione, ... }
 * @returns {string} - HTML del dettaglio libro
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
