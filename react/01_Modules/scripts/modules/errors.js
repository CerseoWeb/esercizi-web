// errorHandler.js - Modulo per la gestione di errori e stati UI

/**
 * Sanitizza l'HTML per evitare XSS (un tipo di attacco informatico)
 *
 * Questo non è un sistema di sicurezza completo, ma aiuta a prevenire
 * l'inserimento di codice dannoso nei messaggi di errore o nei dati visualizzati.
 *
 * @param {string} text - Testo da sanitizzare
 * @returns {string} - Testo sanitizzato
 */
export function sanitizeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Visualizza uno stato di caricamento nel container specificato.
 *
 * Questo è utile per indicare all'utente che i dati sono in fase di recupero o elaborazione.
 *
 * @param {HTMLElement} container - Contenitore dove mostrare il caricamento
 * @param {string} message - Messaggio da mostrare (default: "Caricamento in corso...")
 */
export function showLoading(container, message = "Caricamento in corso...") {
    if (container) {
        container.innerHTML = `
            <div class="loading">
                <p>${sanitizeHTML(message)}</p>
            </div>
        `;
    }
}

/**
 * Visualizza un messaggio di errore
 * Il messaggio principale è obbligatorio, mentre i dettagli e l'azione sono opzionali.
 *
 * @param {HTMLElement} container - Contenitore dove mostrare l'errore
 * @param {string} message - Messaggio di errore principale
 * @param {string} detail - Dettagli aggiuntivi (opzionale)
 * @param {string} actionText - Testo del pulsante azione (opzionale)
 * @param {Function} actionCallback - Callback del pulsante (funzione opzionale)
 */
export function showError(
    container,
    message = "Si è verificato un errore.",
    detail = null,
    actionText = null,
    actionCallback = null,
) {
    if (!container) return;

    const actionToInclude = actionText && actionCallback;
    const onlyButton = actionText && !actionCallback;

    container.innerHTML = `
        <div class="error-message">
            <p>${sanitizeHTML(message)}</p>
            ${detail ? `<p class="error-detail">${sanitizeHTML(detail)}</p>` : ""}
            ${onlyButton ? `<a href="index.html" class="error-button">${sanitizeHTML(actionText)}</a>` : ""}
            ${actionToInclude ? `<button class="error-button" onclick="window.errorAction();">${sanitizeHTML(actionText)}</button>` : ""}
        </div>
    `;

    if (actionToInclude) {
        window.errorAction = actionCallback;
    }
}

/**
 * Visualizza messaggio di risorsa non trovata con link di ritorno.
 *
 * Questo è utile per la pagina di dettaglio quando un libro non esiste o è stato rimosso.
 *
 * @param {HTMLElement} container - Contenitore dove mostrare il messaggio
 * @param {string} message - Messaggio da mostrare
 * @param {string} linkText - Testo del link di ritorno
 * @param {string} linkHref - URL del link (default: "index.html")
 */
export function showNotFound(
    container,
    message = "Risorsa non trovata.",
    linkText = "Torna alla lista",
    linkHref = "index.html",
) {
    if (!container) return;

    container.innerHTML = `
        <div class="error-message">
            <p>${sanitizeHTML(message)}</p>
            <a href="${sanitizeHTML(linkHref)}" class="error-button">${sanitizeHTML(linkText)}</a>
        </div>
    `;
}

/**
 * Visualizza uno stato di "vuoto" quando non ci sono dati da mostrare.
 *
 * Questo è utile per indicare all'utente che non ci sono libri da visualizzare,
 * ad esempio quando si applicano filtri troppo restrittivi.
 *
 * @param {HTMLElement} container - Contenitore dove mostrare il messaggio
 * @param {string} message - Messaggio da mostrare
 */
export function showEmpty(container, message = "Nessun elemento trovato.") {
    if (container) {
        container.innerHTML = `<p class="no-books">${sanitizeHTML(message)}</p>`;
    }
}

/**
 * Svuota il container specificato.
 * Non fa altro che pulire il contenuto HTML del container, lasciandolo vuoto.
 *
 * @param {HTMLElement} container - Contenitore da svuotare
 */
export function clearContainer(container) {
    if (container) {
        container.innerHTML = "";
    }
}
