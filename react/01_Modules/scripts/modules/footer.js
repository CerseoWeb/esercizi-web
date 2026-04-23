// footer.js - Modulo per il footer riutilizzabile

/**
 * Crea e ritorna l'elemento footer.
 * @returns {HTMLElement} - Elemento footer
 */
export function createFooter() {
    const footer = document.createElement("footer");
    footer.className = "footer";

    const currentYear = new Date().getFullYear();
    footer.innerHTML = `
        <div class="footer-content">
            <p>&copy; ${currentYear} Libreria Online. Tutti i diritti riservati.</p>
            <p>Progetto di esercitazione JavaScript con Moduli ES6</p>
        </div>
    `;

    return footer;
}

/**
 * Monta il footer nel DOM al termine del body.
 * 
 * Il footer verrà sempre posizionato alla FINE dell'elemento passato.
 * Se non viene passato alcun container, il footer verrà montato alla fine del body.
 * 
 * @param {HTMLElement} container - Contenitore dove montare il footer (default: body)
 */
export function mountFooter(container = document.body) {
    const footer = createFooter();
    container.append(footer);
}
