// index.js - Logica per la pagina index (lista libri)

import { getBooks } from "./modules/api.js";
import { mountHeader } from "./modules/header.js";
import { mountFooter } from "./modules/footer.js";
import { showLoading, showError, showEmpty } from "./modules/errors.js";
import { renderBookList } from "./modules/book-ui.js";

/**
 * Carica e visualizza i libri
 */
async function loadBooks() {
    const container = document.getElementById("books-container");

    try {
        showLoading(container);

        const books = await getBooks();

        if (!books || books.length === 0) {
            showEmpty(container, "Nessun libro trovato.");
            return;
        }

        renderBookList(container, books);
    } catch (error) {
        showError(
            container,
            "Errore nel caricamento dei libri.",
            error.message,
            "Riprova",
            () => location.reload(),
        );
    }
}

// Monta header e footer
mountHeader();
mountFooter();

// Carica i libri
loadBooks();
