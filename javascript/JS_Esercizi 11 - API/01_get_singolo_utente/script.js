// ⚠️ COMPILARE PRIMA DI INIZIARE
// Inserisci l'URL del server corretto
const BASE_URL = 'http://192.168.1.7:3000/api';

// ELEMENTI DEL DOM (controlla che siano corretti)
const userId = document.querySelector('#userId');
const loading = document.querySelector('#loading');
const result = document.querySelector('#result');


/**
 * FUNZIONE: Crea utente card
 * 
 * Crea la card completa dell'utente e la inserisce nell'elemento result
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
function createUserCard(user) {
    result.innerHTML = `
        <div class="user-card">
            <div class="card-header">
                <img src="${user.avatar}" alt="Avatar" class="avatar">
                <div class="user-info">
                    <h2>${user.nome} ${user.cognome}</h2>
                    <p class="email">${user.email}</p>
                    <p class="comune">${user.comune}</p>
                </div>
            </div>
            <div class="card-body">
                <div class="detail">
                    <strong>Data Nascita:</strong>
                    <span>${user.dataNascita}</span>
                </div>
                <div class="detail">
                    <strong class="status ${user.attivo ? 'attivo' : 'inattivo'}">
                        Status:
                    </strong>
                    <span>${user.attivo ? 'Attivo' : 'Inattivo'}</span>
                </div>
            </div>
        </div>
    `;
}


/**
 * FUNZIONE: Gestione errori
 * 
 * Mostra un messaggio di errore nell'elemento result
 * e logga l'errore in console (per debug)
 */
function handleError(message) {
    result.innerHTML = '';

    let div = document.createElement('div');
    div.className = 'error';

    let strong = document.createElement('strong');
    strong.textContent = `❌ ${message}`;

    div.appendChild(strong);
    result.appendChild(div);
    console.error('Errore:', message);
}



/**
 * FUNZIONE: Fetch singolo utente
 * 
 * Questa funzione deve recuperare l'ID utente dall'input,
 * fare una chiamata GET a BASE_URL + "/users/" + id e mostrare i dati
 * 
 * Passi:
 * 1. Leggi l'ID utente dall'input
 * 2. Controlla che l'ID sia valido, ovvero un numero tra 1 e 40
 *    In caso contrario, mostra un messaggio di errore (usa handleError()) e return
 * 3. Mostra lo spinner di caricamento (rimuovi la classe nascosto)
 * 4. Fai una fetch GET a /users/{id}
 * 5. Se la risposta non è OK, usa handleError() per mostrare un messaggio e return
 * 6. Converti la risposta in JSON
 * 7. Mostra i dati dell'utente chiamando createUserCard(user)
 * 8. Nascondi lo spinner di caricamento (aggiungi la classe nascosto)
 */
async function fetchUser() {
    // PLACEHOLDER - Rimuovi questa riga quando completi
    handleError('Codice non implementato - Completa la funzione fetchUser()');
}


// COLLEGA IL BOTTONE AL CLICK
document.getElementById('btnFetch').addEventListener('click', fetchUser);

