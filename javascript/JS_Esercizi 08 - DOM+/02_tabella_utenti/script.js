/**
 * ESERCIZIO 2: Tabella Utenti Interattiva
 * Selezionare gli elementi principali dal DOM
 */
const inputNome = document.querySelector('');
const inputEta = document.querySelector('');
const inputProfessione = document.querySelector('');
const btnCreaUtente = document.querySelector('');
const tbodyUtenti = document.querySelector('');

/**
 * EVENTO: Clic sul pulsante "Aggiungi Utente"
 * 
 * Completa la funzione: Manca qualcosa?
 * 
 * Passi:
 * 1. Prevenire il comportamento di default del form
 * 2. Leggere i valori dagli input
 * 3. Se i dati non sono vuoti:
 *    - Chiamare creaRigaUtente(nome, eta, professione), passando i dati letti dagli input
 *    - Chiamare cancellaDatiInput() per pulire i campi
 */

btnCreaUtente.addEventListener('click', (e) => {
    e.preventDefault();

    const nome = inputNome.value;
    const eta = inputEta.value;
    const professione = inputProfessione.value;

    creaRigaUtente(nome, eta, professione);
    cancellaDatiInput();
});

/**
 * FUNZIONE: Crea una riga della tabella con i dati dell'utente
 * 
 * Passi:
 * 1. Creare un elemento <tr> (classe "user-row")
 * 2. Creare tre elementi <td> per nome, età e professione
 * 3. Popolare i <td> con i dati passati dai parametri
 * 4. Aggiungere tutti i <td> al <tr>
 * 5. Aggiungere il <tr> nel <tbody> della tabella
 */
function creaRigaUtente(nome, eta, professione) {
}


/**
 * FUNZIONE: Cancella i dati dagli input e rimette il focus sul primo campo
 * 
 * Passi:
 * 1. Impostare il valore di inputNome a stringa vuota
 * 2. Impostare il valore di inputEta a stringa vuota
 * 3. Impostare il valore di inputProfessione a stringa vuota
 */
function cancellaDatiInput() {
}
