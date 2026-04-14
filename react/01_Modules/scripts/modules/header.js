// header.js - Modulo per l'header riutilizzabile

/**
 * Crea e ritorna l'elemento header
 * @param {string} title - Titolo da mostrare nell'header
 * @returns {HTMLElement} - Elemento header
 */
export function createHeader(title = "Libreria") {
    const header = document.createElement("header");
    header.className = "header";

    header.innerHTML = `
        <div class="header-content">
            <h1><a href="index.html" class="logo-link">📚 ${title}</a></h1>
            <nav class="header-nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                </ul>
            </nav>
        </div>
    `;

    return header;
}

/**
 * Monta l'header nel DOM
 * @param {string} title - Titolo da mostrare nell'header
 * @param {HTMLElement} container - Contenitore dove montare l'header (default: body)
 */
export function mountHeader(title = "Libreria", container = document.body) {
    const header = createHeader(title);
    container.insertBefore(header, container.firstChild);
}
