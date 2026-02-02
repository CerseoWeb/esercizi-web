/**
 * Esercizio (DEBUG): La Stringa Fantasma
 * 
 * Descrizione:
 * Il seguente codice dovrebbe stampare una linea composta da 10 trattini "-".
 * Dovrebbe dire "Sto aggiungendo un trattino..." dieci volte, una per ogni trattino aggiunto.
 * Invece stampa una sola volta il messaggio ed un solo trattino alla fine. Perché?
 * 
 * Obiettivo:
 * 1. Analizza l'uso delle parentesi graffe e lo scope delle variabili.
 * 2. Correggi il codice affinché stampi "----------".
 */

let linea = "";

for (let i = 0; i < 10; i++);
    console.log("Sto aggiungendo un trattino...");
    linea = linea + "-";

console.log("Risultato finale: " + linea);
