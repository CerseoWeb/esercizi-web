// SELEZIONE ELEMENTI
const display = document.querySelector('#display');
const btnUguale = document.querySelector('#btn-uguale');
const btnCancella = document.querySelector('#btn-cancella');
const msgErrore = document.querySelector('#messaggio-errore');
// Selezioniamo tutti i tasti "normali" (numeri e operazioni) per farli scrivere nel display
const tasti = document.querySelectorAll('.tasto:not(#btn-uguale):not(#btn-cancella)');

// Array di operatori validi (utile per la validazione)
const operatoriValidi = ['+', '-', '*', '/'];


/**
 * 1. EVENTI: Aggiungi caratteri al display
 * Per ogni tasto, aggiungiamo un event listener che, quando cliccato,
 * prende il testo del tasto e lo aggiunge al display.
 * Bisono fare attenzione agli spazi per gli operatori.
 * 
 * Passi:
 * - Per ogni tasto, aggiungiamo un event listener
 * - Quando clicchiamo, prendiamo il testo del tasto e lo aggiungiamo al display
 * - Se è un operatore, aggiungiamo spazi prima e dopo per facilitare il calcolo
 * - Altrimenti aggiungiamo solo il numero
 */


/**
 * 2. EVENTO: Cancella display
 * Quando clicchiamo il tasto "C", il display deve essere svuotato.
 * 
 * Passi:
 * - Aggiungiamo un event listener al tasto "C"
 * - Quando clicchiamo, svuotiamo il valore del display
 */


/**
 * 4. FUNZIONE: Calcola risultato
 * Quando clicchiamo il tasto "=", dobbiamo prendere il testo del display,
 * analizzarlo, eseguire il calcolo e mostrare il risultato.
 * 
 * Passi:
 * A. Prendi il testo del display e puliscilo (rimuovi spazi inutili all'inizio e alla fine)
 * B. Spezza la stringa in parti (numero, operatore, numero) in base agli spazi
 * C. Controlla che:
 *   - Ci siano esattamente 3 pezzi (altrimenti mostra errore e return)
 *   - Destruttura in num1, operatore, num2
 *   - Trasforma num1 e num2 in numeri (parseFloat)
 * D. Esegui il calcolo chiamando la funzione calcola(num1, operatore, num2)
 * E. Mostra il risultato nel display
*/
function calcolaRisultato() {

}


/**
 * 3. FUNZIONE: Calcola
 * Prendiamo in input un numero, un operatore e un altro numero,
 * e restituiamo il risultato del calcolo in base all'operatore.
 * Se l'operatore non è valido, mostriamo un messaggio di errore.
 * 
 * Passi:
 * - In base all'operatore, eseguiamo il calcolo
 * - Restituiamo il risultato
 * - Se l'operatore non è valido, mostriamo un messaggio di errore con mostraErrore() e restituiamo null
 * Nota: Si può usare uno switch per semplicità senza break (dato che restituiamo subito il risultato)
 */
function calcola(num1, operatore, num2) {

}



/****************************************************/
/********* FUNZIONI HELPER E EVENT LISTENER *********/
/****************************************************/

function mostraErrore() {
    msgErrore.classList.remove('nascosto');
    display.style.borderColor = "red";
    setTimeout(() => {
        display.style.borderColor = "#bdc3c7";
        msgErrore.classList.add('nascosto');
    }, 2000);
}

// Aggiungiamo gli event listener per il calcolo del risultato
btnUguale.addEventListener('click', calcolaRisultato);
// Permettiamo anche di premere "Enter" per calcolare
display.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calcolaRisultato();
});