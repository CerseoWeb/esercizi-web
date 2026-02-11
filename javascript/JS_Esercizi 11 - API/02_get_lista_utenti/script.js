// ⚠️ COMPILARE E CONTROLLARE PRIMA DI INIZIARE ⚠️
const BASE_URL = 'http://localhost:3000/api';
const loading = document.querySelector('#loading');
const counter = document.querySelector('#counter');
const result = document.querySelector('#result');
const btnFetch = document.querySelector('#btnLoadUsers');


/**
 * FUNZIONE che crea la card HTML per un singolo utente
 * 
 * Passi:
 * 1. Crea un template literal con la struttura HTML della card
 * 2. Usa i dati dell'oggetto user per popolare i campi
 * 3. La struttura della card deve essere simile a questa:
 *    <div class="user-card">
 *        <img src="avatar_url" alt="Avatar" class="card-avatar">
 *        <div class="card-content">
 *            <h3>Nome Cognome</h3>
 *            <p class="email">📧 email</p>
 *            <p class="location">📍 comune</p>
 *            <div class="status attivo/inattivo"> Attivo/Inattivo </div>
 *       </div>
 *   </div>
 */
function creaCardUtente(user) {
    return ``;
}


/**
 * FUNZIONE: Gestione errori
 * 
 * Mostra un messaggio di errore nell'elemento result
 * e logga l'errore in console (per debug)
 * Funzione già fatta - non modificare
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
 * FUNZIONE: Fetch lista utenti
 * 
 * Passi:
 * 1. Mostra lo spinner di caricamento (rimuovi la classe nascosto)
 * 2. Fai una fetch GET a /users
 * 3. Se la risposta non è OK, usa handleError() per mostrare un messaggio e return
 * 4. Converti la risposta da stringa JSON a oggetto JavaScript
 * 5. Mostra i dati degli utenti chiamando mostraUtenti(users)
 * 6. Nascondi lo spinner di caricamento (aggiungi la classe nascosto)
 */
async function fetchAllUsers() {
    // TODO Rimuovi questa riga e completa la funzione
    handleError('Codice non implementato - Completa la funzione fetchAllUsers()');
}


/**
 * Visualizza gli utenti in una griglia di card
 * Funzione già fatta - non modificare
 */
function mostraUtenti(users) {
    if (!Array.isArray(users) || users.length === 0) {
        handleError('Nessun utente trovato');
        return;
    }

    // CREA CARD PER OGNI UTENTE
    const cardsHTML = users.map(user => creaCardUtente(user)).join('');
    result.innerHTML = cardsHTML;

    // MOSTRA CONTATORE
    counter.innerHTML = `📊 Totale: <strong>${users.length} utenti</strong>`;
    counter.style.display = 'block';
}

// COLLEGA IL BOTTONE
btnFetch.addEventListener('click', fetchAllUsers);
