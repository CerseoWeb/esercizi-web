/**
 * Esercizio (DEBUG): Il Risultato Scomparso
 * 
 * Descrizione:
 * Vogliamo calcolare il cubo di un numero (numero**3) oppure (numero * numero * numero).
 * Il codice esegue il calcolo, ma quando stampiamo il risultato otteniamo "undefined".
 * 
 * Obiettivo:
 * 1. Analizza la funzione `calcolaCubo`.
 * 2. Trova cosa manca per far "uscire" il valore dalla funzione.
 * 3. Correggi il codice.
 */

function calcolaCubo(n) {
    let cubo = n * n * n;
}

let risultato = calcolaCubo(3);
console.log("Il cubo di 3 è: " + risultato); 
// Attualmente stampa: "Il cubo di 3 è: undefined"
// Dovrebbe stampare: "Il cubo di 3 è: 27"
