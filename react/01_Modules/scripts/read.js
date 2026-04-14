// read.js - Pagina libri letti (esercizio)

import { mountHeader } from "./modules/header.js";
import { mountFooter } from "./modules/footer.js";
import { showEmpty } from "./modules/errors.js";

/**
 * In questa fase la pagina e solo scaffolding per gli studenti.
 * Step successivo: caricare i libri con flag letto=true usando api.js.
 */
function loadReadBooks() {
    const container = document.getElementById("read-books-container");
    showEmpty(
        container,
        "TODO esercizio: implementare il caricamento dei libri letti (letto=true).",
    );
}

mountHeader("Libreria");
mountFooter();
loadReadBooks();
