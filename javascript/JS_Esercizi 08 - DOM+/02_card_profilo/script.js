/**
 * ESERCIZIO 1: Recupera i valori dagli input
 * Selezioniamo i seguenti elementi dal DOM: `nome`, `eta`, `bio`, `cards-container` e `btn-crea-card`
 * Sostituisci il contenuto delle virgolette con il metodo per selezionare gli elementi
 * (document.querySelector) usando gli id corretti.
 */
const inputNome = "";
const inputEta = "";
const inputBio = "";
const contenitoreCard = "";
const btnCreaCard = "";


/**
 * FUNZIONE: cancella dati input
 * Passi:
 * 1. Imposta il valore di ogni input a stringa vuota
 */
function cancellaDatiInput() {
}



/**
 * FUNZIONE: valida dati input
 * Passi:
 * 1. Controlla che il valore di ogni input non sia vuoto
 * 2. Se uno è vuoto ritorna false
 * 3. Se tutti sono validi, ritorna true
 */
function validaDatiInput() {
    return true;
}



/**
 * FUNZIONE: crea la card profilo
 * Passi:
 * 1. In input prendi i valori nome, età, bio
 * 2. Crea un nuovo elemento <li> con document.createElement('li')
 * 3. Impostane la classe CSS a 'card'
 * 4. Crea un H3 con il nome
 * 5. Crea un paragrafo con l'età
 * 6. Crea un paragrafo con la biografia
 * 7. Aggiungi tutti gli elementi alla card nell'ordine indicato
 * 8. Aggiungi la card al cardsContainer
 */
function creaCardProfilo(nome, eta, bio) {
}



/**
 * FUNZIONE: Event Listener sul bottone
 * Mettiamo tutto quello che abbiamo fatto insieme in un event listener
 * Passi:
 * 1. Al click del bottone, leggi i valori dagli input
 * 2. Valida i dati con validaDatiInput()
 * 3. Se validi:
 *   - Chiama creaCardProfilo() con i dati
 *   - Pulisci gli input con cancellaDatiInput()
 * 4. Se non validi, mostra un alert("Per favore, compila tutti i campi!")
 */
btnCreaCard.addEventListener('click', function () {
});

