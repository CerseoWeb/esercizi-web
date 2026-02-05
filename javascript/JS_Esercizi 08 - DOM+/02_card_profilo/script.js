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
 * 1. Crea un nuovo elemento <li> con document.createElement('li')
 * 2. Impostane la classe CSS a 'card'
 * 3. Crea un H3 con il valore nome
 * 4. Crea un paragrafo con il valore dell'età
 * 5. Crea un paragrafo con il valore della biografia
 * 6. Aggiungi tutti gli elementi alla card nell'ordine indicato
 * 7. Aggiungi la card al cardsContainer
 */
function creaCardProfilo() {
}



/**
 * FUNZIONE: Event Listener sul bottone
 * Mettiamo tutto quello che abbiamo fatto insieme in un event listener
 * Passi:
 * 1. Valida i dati con validaDatiInput()
 * 2. Se validi:
 *   - Chiama creaCardProfilo() con i dati
 *   - Pulisci gli input con cancellaDatiInput()
 * 3. Se non validi, mostra un alert("Per favore, compila tutti i campi!")
 */
btnCreaCard.addEventListener('click', function () {
});

