/**
 * Esercizio Extra (DEBUG): Il Triangolo Fallito
 * 
 * Descrizione:
 * Vogliamo disegnare un triangolo rettangolo di numeri:
 * 1
 * 12
 * 123
 * 1234
 * 12345
 * 
 * Il codice attuale stampa qualcosa di molto diverso e confuso. Sembra che i numeri continuino a crescere senza ripartire correttamente.
 * 
 * Obiettivo:
 * Trova l'errore logico nella gestione della variabile stringa. 
 */

let riga = "";

for (let i = 1; i <= 5; i++) {
    riga += i;
    for (let j = 1; j <= i; j++) {
        riga += j;
    }
    console.log(riga);
}
