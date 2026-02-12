// ⚠️ COMPILARE E CONTROLLARE PRIMA DI INIZIARE ⚠️
const BASE_URL = 'http://localhost:5000/api';
const userId = document.getElementById('userId');
const loading = document.getElementById('loading');
const userProfile = document.getElementById('userProfile');
const postsContainer = document.getElementById('postsContainer');
const btnFetch = document.getElementById('btnFetch');


/**
 * FUNZIONE: Crea un utente card
 * 
 * Crea la card completa dell'utente e la inserisce nell'elemento userProfile
 * L'oggetto user ha questa struttura:
 * {
 *   id: number,
 *   nome: string,
 *   cognome: string,
 *   email: string,
 *   avatar: string (url),
 *   dataNascita: string (formato YYYY-MM-DD),
 *   comune: string,
 *   attivo: boolean
 * }
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
function handleError(message) {
    userProfile.innerHTML = `
        <div class="error">
            <strong>❌ ${message}</strong>
        </div>
    `;
    console.error('Errore:', message);
}


/**
 * ESERCIZIO 3: Recupera un utente E tutti i suoi post
 * 
 * Devi completare questa funzione:
 * 1. Leggi l'ID dell'utente
 * 2. Valida che sia un numero tra 1 e 40
 * 3. Mostra lo spinner di caricamento
 * 4. Apri un blocco try/catch
 * 5. Fai DUE fetch:
 *    - GET /users/{id}
 *    - GET /posts
 * 6. Filtra i post per trovare solo quelli di questo utente (usando userId)
 *    - Il filtro va fatto in JS, ma puoi anche usare un endpoint come /posts?userId={id}
 * 7. Mostra i risultati chiamando prima creaCardUtente(user) e poi creaCardPosts(posts)
 * 8. Gestisci gli errori con handleError()
 */
async function fetchUserAndPosts() {
    // TODO Rimuovi questa riga e completa la funzione
    handleError('Codice non implementato - Completa la funzione fetchUserAndPosts()');
}


// COLLEGA IL BOTTONE
btnFetch.addEventListener('click', fetchUserAndPosts);

// PERMETTI ENTER
userId.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') fetchUserAndPosts();
});
