/**
 * Esercizio Intermedio (DEBUG): Calcolatrice di Media
 * 
 * Descrizione:
 * Vogliamo calcolare la somma dei voti per poi fare la media.
 * I voti sono simulati: vogliamo sommare i numeri 10, 20, 30.
 * Il risultato atteso è 60.
 * 
 * Il codice attuale restituisce "0102030". Perché?
 */

let somma = "0";

for (let i = 1; i <= 3; i++) {
    let voto = i * 10; // Genera 10, 20, 30
    somma = somma + voto;
}

console.log("Somma totale: " + somma);
