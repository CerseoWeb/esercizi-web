// ⚠️ COMPILARE PRIMA DI INIZIARE
const BASE_URL = 'http://localhost:3000/api';

/**
 * ESERCIZIO 3: Recupera un utente E tutti i suoi post
 * 
 * Devi completare questa funzione:
 * 1. Leggi l'ID dell'utente
 * 2. Fai DUE fetch:
 *    - GET /users/{id}
 *    - GET /posts
 * 3. Filtra i post per trovare solo quelli di questo utente (usando userId)
 * 4. Mostra i risultati
 * 5. Gestisci gli errori
 */
async function fetchUserAndPosts() {
    const userId = document.getElementById('userId').value;
    const loading = document.getElementById('loading');
    const userProfile = document.getElementById('userProfile');
    const postsContainer = document.getElementById('postsContainer');

    if (!userId || userId < 1 || userId > 40) {
        userProfile.innerHTML = '<div class="error">❌ Inserisci un ID valido tra 1 e 40</div>';
        return;
    }

    loading.style.display = 'block';
    userProfile.innerHTML = '';
    postsContainer.innerHTML = '';

    try {
        // 👇 SCRIVI QUI IL TUO CODICE 👇
        // 1. Fetch utente
        // const userResponse = await fetch(...);
        // const user = await userResponse.json();

        // 2. Fetch tutti i post
        // const postsResponse = await fetch(...);
        // const allPosts = await postsResponse.json();

        // 3. Filtra i post di questo utente
        // const userPosts = allPosts.filter(post => post.userId === user.id);

        // 4. Visualizza
        // displayUserWithPosts(user, userPosts);

        // PLACEHOLDER - Rimuovi questa riga quando completi
        throw new Error('Codice non implementato - Completa la funzione fetchUserAndPosts()');

    } catch (error) {
        userProfile.innerHTML = `
            <div class="error">
                <strong>❌ Errore:</strong> ${error.message}
            </div>
        `;
        console.error('Errore:', error);
    } finally {
        loading.style.display = 'none';
    }
}

/**
 * Visualizza utente e post
 * (Questa funzione è già fatta - non modificare)
 */
function displayUserWithPosts(user, posts) {
    const userProfile = document.getElementById('userProfile');
    const postsContainer = document.getElementById('postsContainer');

    // CARD UTENTE
    const userHTML = `
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

    userProfile.innerHTML = userHTML;

    // POST DELL'UTENTE
    if (!posts || posts.length === 0) {
        postsContainer.innerHTML = `
            <div class="posts-section">
                <h2>📄 Post (0)</h2>
                <div class="empty">Questo utente non ha scritto nessun post</div>
            </div>
        `;
        return;
    }

    const postsHTML = `
        <div class="posts-section">
            <h2>📄 Post (${posts.length})</h2>
            ${posts.map(post => `
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
            `).join('')}
        </div>
    `;

    postsContainer.innerHTML = postsHTML;
}

// COLLEGA IL BOTTONE
document.getElementById('btnFetch').addEventListener('click', fetchUserAndPosts);

// PERMETTI ENTER
document.getElementById('userId').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') fetchUserAndPosts();
});
