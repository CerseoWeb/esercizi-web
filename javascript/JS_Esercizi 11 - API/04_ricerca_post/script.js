// ⚠️ COMPILARE E CONTROLLARE PRIMA DI INIZIARE ⚠️
const BASE_URL = 'http://localhost:5000/api';
const keyword = document.querySelector('#keyword');
const loading = document.querySelector('#loading');
const results = document.querySelector('#results');
const btnSearch = document.querySelector('#btnSearch');


/**
 * FUNZIONE: Crea la card HTML per un singolo post con autore a fianco
 * 
 * Funzione già fatta - non modificare
 */
function creaElementoPost(post, autore) {
    results.innerHTML += `
        <div class="post-row">
            <div class="row-author">
                <img src="${autore.avatar}" alt="Avatar" class="row-avatar">
                <div class="row-author-info">
                    <strong>${autore.nome} ${autore.cognome}</strong>
                    <small>${autore.email}</small>
                </div>
            </div>
            <div class="row-post">
                <div class="post-title">${post.titolo}</div>
                <div class="post-preview">${post.contenuto}</div>
                <div class="post-meta">
                    <span>📅 ${post.data}</span>
                    <span>❤️ ${post.likes} likes</span>
                </div>
            </div>
        </div>
    `;
}


/**
 * FUNZIONE: Gestione errori
 * 
 * Mostra un messaggio di errore e logga in console
 * Funzione già fatta - non modificare
 */
function handleError(message) {
    results.innerHTML = `
        <div class="error">
            <strong>❌ ${message}</strong>
        </div>
    `;
    console.error('Errore:', message);
}


/**
 * ESERCIZIO 5: Ricerca Post con Autori
 * 
 * Devi completare questa funzione:
 *  1. Leggi la parola chiave dall'input
 *  2. Svuota il contenuto dei risultati (results.innerHTML = '')
 *  3. Valida che non sia vuota (usa trim)
 *  4. Mostra lo spinner di caricamento
 *  5. Apri un blocco try/catch
 *  6. Fai una GET a /posts
 *  7. Filtra i post dove titolo O contenuto contiene la keyword
 *     (ricorda minuscole per la ricerca)
 *  8. Se nessun post trovato, usa handleError() e return
 *  9. Per ogni post trovato:
 *     - Prendi l'id autore e fai una GET a /users?id=[id]
 *     - Crea un nuovo elemento della lista dei risultati con creaElementoPost(post, autore)
 * 10. Gestisci gli errori con handleError()
 * 11. Nascondi lo spinner di caricamento
 */
async function fetchPostsByKeyword() {
    //TODO
}


// COLLEGA IL BOTTONE
btnSearch.addEventListener('click', fetchPostsByKeyword);

// PERMETTI ENTER
keyword.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') fetchPostsByKeyword();
});
