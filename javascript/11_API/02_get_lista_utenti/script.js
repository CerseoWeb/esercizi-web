// ⚠️ COMPILARE E CONTROLLARE PRIMA DI INIZIARE ⚠️
const BASE_URL = 'http://localhost:5000/api';
const loading = document.querySelector('#loading');
const counter = document.querySelector('#counter');
const result = document.querySelector('#result');
const btnFetch = document.querySelector('#btnLoadUsers');

/**
 * Visualizza gli utenti in una griglia di card
 * Funzione già fatta - non modificare
 */
function creaListaUtenti(users) {
    if (!Array.isArray(users) || users.length === 0) {
        mostraErrore('Nessun utente trovato');
        return;
    }

    // CREA CARD PER OGNI UTENTE
    const cardsHTML = users.map(user => creaCardUtente(user)).join('');
    result.innerHTML = cardsHTML;

    // MOSTRA CONTATORE
    counter.innerHTML = `📊 Totale: <strong>${users.length} utenti</strong>`;
    counter.style.display = 'block';
}


/**
 * ESERCIZIO: creazione card utente
 * Questa funzione crea la stringa con la struttura HTML della card per un singolo utente
 * Questa viene restituita a creaListaUtenti() per ogni utente e poi inserita nel DOM
 * La struttura dell'oggetto user è visibile nella documentazione API.
 * 
 * Passi:
 * 1. Crea un template literal con la struttura HTML della card
 *    La struttura della card deve essere simile a questa:

    <div class="user-card">
        <img src="avatar_url" alt="Avatar" class="card-avatar">
        <div class="card-content">
            <h3>Nome Cognome</h3>
            <p class="email">📧 email</p>
            <p class="location">📍 comune</p>
            <div class="status attivo/inattivo"> Attivo/Inattivo </div>
       </div>
   </div>

 * 2. Sostituisci i valori con quelli dell'oggetto user passato come parametro:
 * 3. Restituisci la stringa creata
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
function mostraErrore(message) {
    console.error('Errore:', message);
    result.innerHTML = `
        <div class="error">
            <strong>❌ ${message}</strong>
        </div>
    `;
}


/**
 * ESERCIZIO: Fetch lista utenti
 * 
 * Passi:
 * 1. Mostra lo spinner di caricamento (rimuovi la classe nascosto)
 * 2. Apri un blocco try/catch
 * 3. Fai una fetch GET a /users
 * 4. Se la risposta non è OK lancia un errore con un messaggio che includa lo status code
 * 5. Converti la risposta da stringa JSON a oggetto JavaScript
 * 6. Mostra i dati degli utenti chiamando creaListaUtenti(users)
 * 7. Nel catch, mostra un messaggio di errore usando mostraErrore()
 * 8. Nascondi lo spinner di caricamento (aggiungi la classe nascosto)
 */
async function fetchAllUsers() {
    // TODO Rimuovi questa riga e completa la funzione
    mostraErrore('Codice non implementato - Completa la funzione fetchAllUsers()');
}


// COLLEGA IL BOTTONE
btnFetch.addEventListener('click', fetchAllUsers);
