/**
 * Esercizio (DEBUG): Il Calcolatore di Media Rotto
 * 
 * DESCRIZIONE:
 * Uno studente sta cercando di calcolare la sua media scolastica.
 * Ha inserito i voti di Matematica, Storia e Fisica.
 * Ha anche 2 punti bonus che vuole aggiungere alla SOMMA dei voti prima di fare la media.
 * 
 * Risultato Atteso: (7 + 8 + 6 + 2) / 3 materie = 23 / 3 = 7.66...
 * Risultato Attuale della console: 7860.6666...
 * 
 * Ci sono DUE tipi di errori gravi qui:
 * 1. Errori di TIPO (Stringhe vs Numeri).
 * 2. Errori di PRECEDENZA (Ordine delle operazioni matematiche).
 * 
 * Istruzioni:
 * Correggi il codice affinché calcoli la media correttamente. 
 * NON cancellare le variabili, correggi il loro contenuto o come vengono usate.
 */

let votoMatematica = 7;
let votoStoria = "8";
let votoFisica = "6";

let puntiBonus = 2;
let numeroMaterie = 3;

let mediaFinale = votoMatematica + votoStoria + votoFisica + puntiBonus / numeroMaterie;

console.log("La media finale è:", mediaFinale);
