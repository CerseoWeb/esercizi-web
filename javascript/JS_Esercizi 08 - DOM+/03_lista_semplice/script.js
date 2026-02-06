/**
 * ESERCIZIO 1: Popola Lista di Frutti
 * Questa funzione si occupa di creare gli elementi della lista
 * seguendo questi passi:
 * 1. Cicla l'array 'frutti'
 * 2. Per ogni frutto, crea un elemento <li>
 * 3. Imposta il textContent dell'li al nome del frutto
 * 4. Aggiungi l'li alla lista nel DOM
*/
const frutti = ['🍎 Mela', '🍌 Banana', '🍊 Arancia', '🍐 Pera', '🍇 Uva', '🥝 Kiwi'];
function popolaFrutti() {
}



/**
 * ESERCIZIO 2: Popola Lista di Libri
 * Questa funzione si occupa di creare gli elementi della lista
 * seguendo questi passi:
 * 1. Cicla l'array 'libri'
 * 2. Per ogni libro, crea un elemento <li>
 * 3. Imposta il textContent dell'li a: "TITOLO - di AUTORE"
 * 4. Aggiungi l'li alla lista nel DOM
*/
const libri = [
    { titolo: 'Il Signore degli Anelli', autore: 'J.R.R. Tolkien' },
    { titolo: '1984', autore: 'George Orwell' },
    { titolo: 'Il Grande Gatsby', autore: 'F. Scott Fitzgerald' },
    { titolo: 'Harry Potter e la Pietra Filosofale', autore: 'J.K. Rowling' }
];
function popolaLibri() {
}


/**
 * ESERCIZIO 3: Lista di cose da fare (TODO)
 * Questa funzione si occupa di creare gli elementi della lista
 * seguendo questi passi:
 * 1. Cicla l'array 'todo'
 * 2. Per ogni attività, crea un elemento <li>
 * 3. Imposta il textContent dell'li al testo dell'attività
 * 4. Se l'attività è completata (completato: true), aggiungi la classe 'completato' all'li
 * 5. Aggiungi un evento click che:
 *    - Modifica la proprietà 'completato' dell'oggetto invertendo il suo valore (true/false)
 *    - Fai il toggle della classe 'completato' sull'elemento <li> per riflettere lo stato di completamento
 * 6. Aggiungi l'li alla lista nel DOM
 */
const todo = [
    { testo: 'Studiare JavaScript', completato: true },
    { testo: 'Fare esercizi sul DOM', completato: false },
    { testo: 'Creare un progetto', completato: false },
    { testo: 'Rivedere il codice', completato: false }
];
function popolaTodo() {
}



// NON MODIFICARE: Chiamate iniziali
popolaFrutti();
popolaLibri();
popolaTodo();
