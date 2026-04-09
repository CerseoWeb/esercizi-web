/**
 * Esercizio Extra2: Bonus Presenza con Booleani
 * 
 * DESCRIZIONE:
 * Un tutor vuole calcolare il punteggio finale di uno studente usando anche valori booleani.
 * Qui i booleani valgono 0 o 1 e cambiano direttamente il risultato dei calcoli.
 * 
 * Istruzioni:
 * 1. Usa le variabili gia dichiarate.
 * 2. Calcola `punteggioTotale` partendo da `punteggioBase`.
 * 3. Aggiungi i bonus solo se i booleani valgono true.
 * 4. Sottrai la penalita solo se il booleano `ritardoConsegna` vale true.
 * 5. Stampa il punteggio finale.
 * 
 * Suggerimento:
 * Moltiplicare un numero per un booleano ti permette di trasformare true in 1 e false in 0.
 * 
 * OUTPUT ATTESO: 78
 */

let punteggioBase = 60;
let bonusConsegna = 15;
let bonusDiscussione = 10;
let bonusPrecisione = 8;
let penalitaRitardo = 12;
let penalitaErrori = 5;
let consegnaCompletata = true;
let discussioneFatta = false;
let lavoroPreciso = true;
let ritardoConsegna = false;
let erroriPresenti = true;

// TODO: Calcola `punteggioTotale` usando i booleani come moltiplicatori e stampalo.
