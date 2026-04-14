// detail.js - Logica per la pagina dettaglio libro

import { getBookById } from "./modules/api.js";
import { mountHeader } from "./modules/header.js";
import { mountFooter } from "./modules/footer.js";
import { showLoading, showNotFound } from "./modules/errors.js";
import { createBookDetail } from "./modules/book-ui.js";

/**
 * Estrae l'ID del libro dai parametri URL
 * @returns {string|null} - ID del libro o null
 */
function getBookIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
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
        container.innerHTML = createBookDetail(book);
    } catch (error) {
        showNotFound(container, `Errore nel caricamento: ${error.message}`);
    }
}

// Monta header e footer
mountHeader();
mountFooter();

// Carica il dettaglio del libro
loadBookDetail();
