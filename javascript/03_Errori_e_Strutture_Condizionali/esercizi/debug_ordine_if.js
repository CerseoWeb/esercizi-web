/**
 * Esercizio (DEBUG): L'ordine conta
 * 
 * DESCRIZIONE:
 * Questo codice dovrebbe assegnare un giudizio in base al punteggio.
 * - Punteggio > 90: "Eccellente"
 * - Punteggio > 70: "Buono"
 * - Punteggio > 50: "Sufficiente"
 * 
 * Problema:
 * Se metto 95, mi stampa "Sufficiente" invece di "Eccellente". Perché?
 * 
 * OBIETTIVO:
 * Correggi l'ordine delle condizioni if/else if per far funzionare la logica.
 */

let punteggio = 95;

// CODICE BUGGATO:
if (punteggio > 50) {
    console.log("Sufficiente");
} else if (punteggio > 70) {
    console.log("Buono");
} else if (punteggio > 90) {
    console.log("Eccellente");
} else {
    console.log("Insufficiente");
}
