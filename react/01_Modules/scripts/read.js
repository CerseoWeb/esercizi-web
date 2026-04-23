// read.js - Pagina libri letti (esercizio)

import { mountHeader } from "./modules/header.js";
import { mountFooter } from "./modules/footer.js";
import { showEmpty } from "./modules/errors.js";

async function loadReadBooks() {
    const container = document.getElementById("read-books-container");

    // Rimuovere il commento e implementare la logica per caricare i libri letti dal server
    showEmpty(container, "TODO: Implementare il caricamento dei libri letti");
}

mountHeader();
mountFooter();
loadReadBooks();
