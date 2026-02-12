// TUTORIAL INTERATTIVO: Array e Metodi Fondamentali
// Segui gli step, leggi i commenti e completa i TODO.
// Esegui questo file con Node.js per verificare i risultati.

/**
 * =============================================
 * === 1. Creazione e Accesso tramite Indici ===
 * 
 * Un array è una lista ordinata di elementi.
 * Gli elementi sono numerati (indicizzati) partendo da 0.
 * Esempio: let numeri = [10, 20, 30];
 * numeri[0] è 10.
 */

let frutti = ['Mela', 'Banana', 'Ciegia'];

// TODO: Stampa in console il primo elemento ('Mela') e il terzo elemento ('Ciegia') usando gli indici.


/**
 * ==================================
 * === 2. Modifica degli Elementi ===
 * 
 * Puoi cambiare il valore di un elemento esistente usando il suo indice.
 * Esempio: numeri[1] = 99; (ora l'array è [10, 99, 30])
 */

let colori = ['Rosso', 'Verde', 'Blu'];

// TODO: Cambia 'Verde' in 'Giallo' accedendo all'indice corretto, poi stampa l'intero array.


/**
 * ==============================
 * === 3. La Proprietà Length ===
 * 
 * La proprietà .length ti dice quanti elementi ci sono nell'array.
 * L'ultimo indice è sempre (length - 1).
 */

let animali = ['Gatto', 'Cane', 'Coniglio', 'Criceto'];

// TODO: Stampa la lunghezza dell'array 'animali'
// TODO: Stampa l'ultimo elemento usando la proprietà length.


/**
 * =====================================================
 * === 4. Aggiungere e Rimuovere in Coda (push, pop) ===
 * 
 * .push(elemento) aggiunge un elemento alla fine.
 * .pop() rimuove l'ultimo elemento e lo restituisce.
 */

let stack = [1, 2, 3];

// TODO: Aggiungi il numero 7 all'array usando push.
// TODO: Poi rimuovi l'ultimo elemento usando pop e stampalo.


/**
 * ========================================
 * === 5. Rimuovere dalla Testa (shift) ===
 * 
 * .shift() rimuove il PRIMO elemento dell'array.
 * Attenzione: Tutti gli indici degli altri elementi scaleranno di 1.
 */

let fila = ['Primo', 'Secondo', 'Terzo'];

// TODO: Rimuovi il primo elemento della fila usando shift. Stampa l'array rimasto.


/**
 * ===============================
 * === 6. Ciclare gli Elementi ===
 * 
 * Puoi usare un ciclo for per iterare su ogni elemento dell'array.
 * O puoi usare un for...of per un approccio più semplice.
 */

let giorni = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì'];

// TODO: Usa un ciclo for per stampare ogni elemento dell'array 'giorni'.
// TODO: Usa un ciclo for...of per fare lo stesso.


/**
 * ===============================
 * === 7. Trasformazione (map) ===
 * 
 * .map() crea un NUOVO array trasformando ogni elemento del vecchio array secondo una funzione.
 * Esempio: let doppi = numeri.map(n => n * 2);
 */

let prezzi = [10, 20, 30];

// TODO: Usa map per creare un nuovo array 'prezziScontati' dove ogni prezzo è diviso per 2.

