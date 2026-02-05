// ⚠️ COMPILARE PRIMA DI INIZIARE
const BASE_URL = 'http://localhost:3000/api';

/**
 * ESERCIZIO 2: Recupera TUTTI gli utenti
 * 
 * Devi completare questa funzione:
 * 1. Fai una fetch GET a: BASE_URL + '/users'
 * 2. Converti in JSON
 * 3. Chiama displayUsers() passando l'array
 * 4. Gestisci gli errori
 */
async function fetchAllUsers() {
    const loading = document.getElementById('loading');
    const container = document.getElementById('usersContainer');
    const counter = document.getElementById('counter');

    loading.style.display = 'block';
    container.innerHTML = '';
    counter.style.display = 'none';

    try {
        // 👇 SCRIVI QUI IL TUO CODICE 👇
        // const response = await fetch(...);
        // const users = await response.json();
        // displayUsers(users);

        // PLACEHOLDER - Rimuovi questa riga quando completi
        throw new Error('Codice non implementato - Completa la funzione fetchAllUsers()');

    } catch (error) {
        container.innerHTML = `
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
 * Visualizza gli utenti in una griglia di card
 * (Questa funzione è già fatta - non modificare)
 */
function displayUsers(users) {
    const container = document.getElementById('usersContainer');
    const counter = document.getElementById('counter');

    if (!Array.isArray(users) || users.length === 0) {
        container.innerHTML = '<div class="error">❌ Nessun utente trovato</div>';
        return;
    }

    // CREA CARD PER OGNI UTENTE
    const cardsHTML = users.map(user => `
        <div class="user-card">
            <img src="${user.avatar || 'https://placehold.co/100'}" alt="Avatar" class="card-avatar">
            <div class="card-content">
                <h3>${user.nome} ${user.cognome}</h3>
                <p class="email">📧 ${user.email}</p>
                <p class="location">📍 ${user.comune}</p>
                <div class="status ${user.attivo ? 'attivo' : 'inattivo'}">
                    ${user.attivo ? '🟢 Attivo' : '🔴 Inattivo'}
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = cardsHTML;

    // MOSTRA CONTATORE
    counter.innerHTML = `📊 Totale: <strong>${users.length} utenti</strong>`;
    counter.style.display = 'block';
}

// COLLEGA IL BOTTONE
document.getElementById('btnLoadUsers').addEventListener('click', fetchAllUsers);
