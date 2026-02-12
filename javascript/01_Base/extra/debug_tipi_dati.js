/**
 * Esercizio Extra: Debugging Coercizione Tipi (FIX ME)
 * 
 * DESCRIZIONE:
 * Un programmatore ha scritto un codice per sommare due prezzi,
 * ma il risultato è bizzarro. Invece di fare la somma matematica, i numeri si "incollano".
 * 
 * OBIETTIVO:
 * 1. Esegui il codice e osserva l'errore logico (non di sintassi).
 * 2. Correggi il tipo di dato delle variabili in modo che la somma sia matematica (45.50).
 * 3. Nota anche che c'è un errore nel calcolo della media finale.
 * 
 * OUTPUT ATTESO:
 * Totale: 45.5
 * Media: 22.75
 */

let prezzoOggetto1 = "20.50";
let prezzoOggetto2 = "25.00";

let sommaTotale = prezzoOggetto1 + prezzoOggetto2;

console.log("Totale: " + sommaTotale); // Ora stampa 20.5025.00 (Sbagliato!)

let media = sommaTotale / 4;

console.log("Media: " + media);
