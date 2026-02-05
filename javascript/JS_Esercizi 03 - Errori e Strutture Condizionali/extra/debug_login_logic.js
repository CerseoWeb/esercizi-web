/**
 * Esercizio Extra (DEBUG): Il Login Confuso
 * 
 * DESCRIZIONE:
 * Un sistema di sicurezza deve verificare se un numero è "sicuro".
 * Un numero è sicuro se:
 * - È pari.
 * - È compreso tra 10 e 50 (inclusi).
 * 
 * Il codice attuale dice che 150 è sicuro (sbagliato) e 5 è sicuro (sbagliato).
 * 
 * OBIETTIVO:
 * 1. Analizza l'uso delle parentesi e degli operatori OR (||) vs AND (&&).
 * 2. Correggi la condizione dentro l'if.
 * 
 * Suggerimento:
 * L'operatore modulo `% 2 === 0` verifica se è pari.
 */

let numeroCodice = 150;

// CODICE BUGGATO:
// L'intento era: (Pari) E (MaggioreUguale 10) E (MinoreUguale 50)
if (numeroCodice % 2 === 0 || numeroCodice >= 10 && numeroCodice <= 50) {
    console.log(numeroCodice + " è un codice sicuro.");
} else {
    console.log(numeroCodice + " NON è sicuro.");
}
