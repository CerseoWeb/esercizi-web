/**
 * Esercizio: Trova il Minimo in un Array
 * 
 * Obiettivo: Completa le funzioni 'trovaMinimo' per restituire il numero più piccolo
 * 
 * Passi:
 * 1. La funzione 'trovaMinimo' prende un array di numeri come input.
 * 2. Scorri l'array e confronta ogni numero per trovare il minimo.
 * 3. Ritorna il numero più piccolo trovato.
 */

function trovaMinimo(arr) {
}



// Esempio di utilizzo:
let numeri = [5, 2, 9, 1, 5, 6];
let minimo = trovaMinimo(numeri);

let altriNumeri = [3, 4, 0, -1, 8];
let minimo2 = trovaMinimo(altriNumeri);

let ancoraNumeri = [10, 20, 30];
let minimo3 = trovaMinimo(ancoraNumeri);




// ZONA TEST - NON MODIFICARE
function assertEqual(actual, expected, test) {
    let result = (actual === expected)
    let emoji = (result) ? '✅' : '❌';
    let str = (result) ? 'superato!' : `fallito. Valore corretto: ${expected}; ottenuto: ${actual}`;
    console.log(`${emoji} ${test} Test ${str}`);
}

assertEqual(minimo, 1, "1.");
assertEqual(minimo2, -1, "2.");
assertEqual(minimo3, 10, "3.");

