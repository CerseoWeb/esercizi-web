// ⚠️ COMPILARE E CONTROLLARE PRIMA DI INIZIARE ⚠️
const BASE_URL = 'http://localhost:5000/api';
const userId = document.querySelector('#userId');
const loading = document.querySelector('#loading');
const result = document.querySelector('#result');
const btnFetch = document.querySelector('#btnFetch');


/**
 * FUNZIONE: Crea utente card
 * 
 * Crea la card completa dell'utente e la inserisce nell'elemento result
 * La struttura dell'oggetto user è visibile nella documentazione API.
 * Funzione già fatta - non modificare
 */
function creaCardUtente(user) {
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
 * FUNZIONE: Fetch singolo utente
 * 
 * Questa funzione deve recuperare l'ID utente dall'input,
 * fare una chiamata GET a BASE_URL + "/users/" + id e mostrare i dati
 * 
 * Passi:
 *  1. Leggi l'ID utente dall'input
 *  2. Controlla che l'ID sia valido, ovvero un numero tra 1 e 40
 *     In caso contrario, mostra un messaggio di errore (usa handleError()) e return
 *  3. Mostra lo spinner di caricamento (rimuovi la classe nascosto)
 *  4. Apri un blocco try/catch
 *  5. Fai una fetch GET a /users/{id}
 *  6. Se la risposta non è OK, lancia un errore con un messaggio che includa lo status code
 *  7. Converti la risposta in JSON
 *  8. Mostra i dati dell'utente chiamando creaCardUtente(user)
 *  9. Nel catch, mostra un messaggio di errore usando handleError() e logga l'errore in console
 * 10. Nascondi lo spinner di caricamento (aggiungi la classe nascosto)
 */
async function fetchUser() {
    // TODO Rimuovi questa riga e completa la funzione
    mostraErrore('Codice non implementato - Completa la funzione fetchUser()');
}


// COLLEGA IL BOTTONE AL CLICK
btnFetch.addEventListener('click', fetchUser);

