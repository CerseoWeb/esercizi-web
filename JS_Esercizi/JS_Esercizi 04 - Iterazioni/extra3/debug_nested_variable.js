/**
 * Esercizio Extra (DEBUG): Conflitto di Variabili
 * 
 * Descrizione:
 * Vogliamo stampare una griglia 3x3 di asterischi.
 * Il programmatore ha fatto copia-incolla e ora il codice non funziona più come previsto.
 */

const DIMENSIONE = 3;

for (let i = 0; i < DIMENSIONE; i++) {
    let riga = "";

    for (i = 0; i < DIMENSIONE; i++) {
        riga += "*";
    }
    
    console.log(riga);
}
