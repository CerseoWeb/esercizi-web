// ⚠️ COMPILARE E CONTROLLARE PRIMA DI INIZIARE ⚠️
const BASE_URL = 'http://localhost:3000/api';
const keyword = document.querySelector('#keyword');
const loading = document.querySelector('#loading');
const resultsContainer = document.querySelector('#resultsContainer');
const btnSearch = document.querySelector('#btnSearch');


/**
 * FUNZIONE: Crea la card HTML per un autore e i suoi post trovati
 * 
 * Funzione già fatta - non modificare
 */
function createAuthorCard(author, posts) {
    const postsHTML = posts.map(post => `
        <div class="post-item">
            <div class="post-title">${post.titolo}</div>
            <div class="post-preview">${post.contenuto}</div>
            <div class="post-meta">
                <span>📅 ${post.data}</span>
                <span>❤️ ${post.likes} likes</span>
            </div>
        </div>
    `).join('');

    return `
        <div class="author-section">
            <div class="author-header">
                <img src="${author.avatar}" alt="Avatar" class="author-avatar">
                <div class="author-info">
                    <h3>${author.nome} ${author.cognome}</h3>
                    <p>📧 ${author.email}</p>
                </div>
            </div>
            <div class="posts-list">
                <div style="font-weight: 600; margin-bottom: 10px; color: #333;">
                    Post trovati (${posts.length})
                </div>
                ${postsHTML}
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
    resultsContainer.innerHTML = `
        <div class="error">
            <strong>❌ ${message}</strong>
        </div>
    `;
    console.error('Errore:', message);
}


/**
 * FUNZIONE: Visualizza i risultati della ricerca
 * 
 * Raggruppa i post per autore e mostra le card
 * Funzione già fatta - non modificare
 */
function displayResults(results) {
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="empty">
                Nessun post trovato con la parola chiave
            </div>
        `;
        return;
    }

    const cardsHTML = results.map(item => 
        createAuthorCard(item.author, item.posts)
    ).join('');

    resultsContainer.innerHTML = cardsHTML;
}


/**
 * ESERCIZIO 5: Ricerca Post con Autori
 * 
 * Devi completare questa funzione:
 * 1. Leggi la parola chiave dall'input
 * 2. Valida che non sia vuota (usa trim)
 * 3. Mostra lo spinner di caricamento
 * 4. Apri un blocco try/catch
 * 5. Fai una GET a /posts
 * 6. Filtra i post dove titolo O contenuto contiene la keyword (case-insensitive)
 * 7. Se nessun post trovato, usa handleError() e return
 * 8. Estrai gli ID univoci degli utenti che hanno scritto questi post
 * 9. Fai una GET a /users
 * 10. Crea un array di risultati: [{author: userObj, posts: [...]}, ...]
 *    dove posts sono solo quelli trovati per quell'autore
 * 11. Chiama displayResults(results)
 * 12. Gestisci gli errori con handleError()
 * 13. Nascondi lo spinner di caricamento
 */
async function fetchPostsByKeyword() {
}


// COLLEGA IL BOTTONE
btnSearch.addEventListener('click', fetchPostsByKeyword);

// PERMETTI ENTER
keyword.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') fetchPostsByKeyword();
});
