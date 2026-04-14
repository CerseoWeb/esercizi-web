// errorHandler.js - Modulo per la gestione di errori e stati UI

/**
 * Sanitizza l'HTML per evitare XSS
 * @param {string} text - Testo da sanitizzare
 * @returns {string} - Testo sanitizzato
 */
export function sanitizeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Visualizza uno stato di caricamento
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
 * @param {HTMLElement} container - Contenitore dove mostrare l'errore
 * @param {string} message - Messaggio di errore principale
 * @param {string} detail - Dettagli aggiuntivi (opzionale)
 * @param {string} actionText - Testo del pulsante azione (opzionale)
 * @param {Function} actionCallback - Callback del pulsante (opzionale)
 */
export function showError(
    container,
    message = "Si è verificato un errore.",
    detail = null,
    actionText = null,
    actionCallback = null,
) {
    if (!container) return;

    let html = `
        <div class="error-message">
            <p>${sanitizeHTML(message)}</p>
    `;

    if (detail) {
        html += `<p class="error-detail">${sanitizeHTML(detail)}</p>`;
    }

    if (actionText) {
        if (actionCallback) {
            html += `<button class="error-button" onclick="window.errorAction();">${sanitizeHTML(actionText)}</button>`;
            window.errorAction = actionCallback;
        } else {
            html += `<a href="index.html" class="error-button">${sanitizeHTML(actionText)}</a>`;
        }
    }

    html += `</div>`;
    container.innerHTML = html;
}

/**
 * Visualizza messaggio di risorsa non trovata
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
 * Visualizza uno stato vuoto
 * @param {HTMLElement} container - Contenitore dove mostrare il messaggio
 * @param {string} message - Messaggio da mostrare
 */
export function showEmpty(container, message = "Nessun elemento trovato.") {
    if (container) {
        container.innerHTML = `<p class="no-books">${sanitizeHTML(message)}</p>`;
    }
}

/**
 * Svuota il container
 * @param {HTMLElement} container - Contenitore da svuotare
 */
export function clearContainer(container) {
    if (container) {
        container.innerHTML = "";
    }
}
