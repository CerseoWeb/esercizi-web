// ⚠️ COMPILARE E CONTROLLARE PRIMA DI INIZIARE ⚠️
const BASE_URL = 'http://localhost:5000/api';
const userId = document.querySelector('#userId');
const loading = document.querySelector('#loading');
const userProfile = document.querySelector('#userProfile');
const postsContainer = document.querySelector('#postsContainer');
const btnFetch = document.querySelector('#btnFetch');


/**
 * FUNZIONE: Crea un utente card
 * 
 * Crea la card completa dell'utente e la inserisce nell'elemento userProfile
 * La struttura dell'oggetto user è visibile nella documentazione API.
 * Funzione già fatta - non modificare
 */
function creaCardUtente(user) {
    userProfile.innerHTML = `
        <div class="user-card">
            <div class="card-header">
                <img src="${user.avatar}" alt="Avatar" class="avatar">
                <div class="user-info">
                    <h2>${user.nome} ${user.cognome}</h2>
                    <p class="email">📧 ${user.email}</p>
                    <p class="location">📍 ${user.comune}</p>
                </div>
            </div>
        </div>
    `;
}


/**
 * FUNZIONE: Crea le card dei post
 * 
 * Visualizza i post dell'utente nel contenitore postsContainer
 * Se non ci sono post, mostra un messaggio di vuoto
 * posts è un array di oggetti con questa struttura:
 * {
 *   id: number,
 *   userId: number,
 *   titolo: string,
 *   contenuto: string,
 *   data: string (formato YYYY-MM-DD),
 *   likes: number
 * }
 */
function creaCardPosts(postList) {

    let allPosts = postList.map((post) => `
    <div class="post-card">
        <div class="post-header">
            <h3>${post.titolo}</h3>
            <span class="post-date">📅 ${post.data}</span>
        </div>
        <p class="post-content">${post.contenuto}</p>
        <div class="post-footer">
            <span class="likes">❤️ ${post.likes} likes</span>
        </div>
    </div>
    `).join('')

    if (postList.length === 0) {
        allPosts = `
        <div class="empty">
            Questo utente non ha scritto nessun post
        </div>
        `;
    }

    postsContainer.innerHTML = `
        <div class="posts-section">
            <h2>📄 Post (${postList.length})</h2>
            ${allPosts}
        </div>
    `;
}

/**
 * FUNZIONE: Gestione errori
 * 
 * Mostra un messaggio di errore e logga in console
 */
function mostraErrore(message) {
    console.error('Errore:', message);
    userProfile.innerHTML = `
        <div class="error">
            <strong>❌ ${message}</strong>
        </div>
    `;
}


/**
 * ESERCIZIO: Recupera un utente E tutti i suoi post
 * 
 * Devi completare questa funzione:
 * 1. Leggi l'ID dell'utente
 * 2. Valida che sia un numero tra 1 e 40
 * 3. Mostra lo spinner di caricamento
 * 4. Apri un blocco try/catch
 * 5. Fai DUE fetch:
 *    - GET /users/{id}
 *    - GET /posts?userId={id}
 *      Nota che il secondo endpoint è un filtro: ti restituirà solo i post di quell'utente
 * 6. Se una delle due risposte non è OK, lancia un errore con un messaggio che includa lo status code
 * 7. Mostra i risultati chiamando prima creaCardUtente(user) e poi creaCardPosts(posts)
 * 8. Nel catch, mostra un messaggio di errore usando mostraErrore()
 * 9. Alla fine, nascondi lo spinner di caricamento
 */
async function fetchUserAndPosts() {
    // TODO Rimuovi questa riga e completa la funzione
    mostraErrore('Codice non implementato - Completa la funzione fetchUserAndPosts()');
}


// COLLEGA IL BOTTONE
btnFetch.addEventListener('click', fetchUserAndPosts);

// PERMETTI ENTER
userId.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') fetchUserAndPosts();
});
