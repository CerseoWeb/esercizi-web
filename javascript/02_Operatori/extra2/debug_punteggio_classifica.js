/**
 * Esercizio Extra2 (DEBUG): Punteggio Classifica Sballato
 * 
 * DESCRIZIONE:
 * Il punteggio finale di una classifica esport e sbagliato perche manca una parentesi.
 * Il codice attuale applica il moltiplicatore solo a una parte del punteggio.
 * 
 * Compito:
 * Correggi la formula senza cambiare i valori delle variabili.
 * 
 * Risultato atteso corretto:
 * (40 + 12) * 3 - 8 + 5 = 153
 * 
 * OUTPUT ATTESO: 153
 */

let puntiBase = 40;
let puntiLivello = 12;
let moltiplicatoreBonus = 3;
let penalita = 8;
let premioFinale = 5;

let punteggioTotale = puntiBase + puntiLivello * moltiplicatoreBonus - penalita + premioFinale;

console.log("Punteggio totale:", punteggioTotale);
// TODO: Correggi la formula aggiungendo le parentesi giuste.
