/**
 * ESERCIZIO 1: Recupera i valori dagli input
 * Selezioniamo i seguenti elementi dal DOM: `nome`, `eta`, `bio`, `cards-container` e `btn-crea-card`
 */
const inputNome = document.querySelector('');
const inputEta = document.querySelector('');
const inputBio = document.querySelector('');
const contenitoreCard = document.querySelector('');
const btnCreaCard = document.querySelector('');


/**
 * FUNZIONE: cancella dati input
 * Passi:
 * 1. Imposta il valore di ogni input a stringa vuota
 */
function cancellaDatiInput() {
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
 * 1. Previeni il comportamento di default dell'evento
 * 2. Chiama creaCardProfilo() con i dati
 * 3. Pulisci gli input con cancellaDatiInput()
 */
btnCreaCard.addEventListener('click', (e) => {
    e.preventDefault();

    creaCardProfilo();
    cancellaDatiInput();
});

