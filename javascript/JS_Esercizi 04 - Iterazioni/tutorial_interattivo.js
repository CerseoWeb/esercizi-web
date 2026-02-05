/**
 * ===========================================
 * === 1. Il Ciclo While: Ripetizione Condizionale ===
 * Il 'while' (finché) è il ciclo più "puro". Funziona esattamente come un 'if',
 * ma continua a ripetere il blocco di codice finché la condizione rimane VERA (true).
 * È perfetto quando non sappiamo a priori quanti giri dovremo fare.
 */

let carburante = 10;

// TODO: Scrivi un ciclo while che continua finché 'carburante' è maggiore di 0.
// Dentro il ciclo:
// 1. Stampa "Viaggio... Carburante rimasto: " + carburante
// 2. Diminuisci 'carburante' di 2 (carburante = carburante - 2)
// NOTA: Se dimentichi di diminuire il carburante, crei un ciclo infinito!

// OUTPUT ATTESO:
// Viaggio... Carburante rimasto: 10
// Viaggio... Carburante rimasto: 8
// ...
// Viaggio... Carburante rimasto: 2



/**
 * ===========================================
 * === 2.A Il Ciclo For: Ripetizione Controllata ===
 * Il ciclo 'for' è una scorciatoia del while usata quando sappiamo ESATTAMENTE
 * quante volte ripetere un'azione (es. "conta da 1 a 5").
 *
 * Sintassi: for (inizializzazione; condizione; incremento) { ... }
 * Esempio:  for (let i = 1; i <= 5; i++)       { ... }
 */

// TODO: Scrivi un ciclo for che stampi la frase "Giro numero X" per 5 volte (da 1 a 5).
// Usa la variabile 'i' come contatore.

// OUTPUT ATTESO:
// Giro numero 1
// Giro numero 2
// Giro numero 3
// Giro numero 4
// Giro numero 5



/**
 * ===========================================
 * === 2.B Il Ciclo For: Il Conto alla Rovescia ===
 * I cicli for non devono per forza contare in avanti (1, 2, 3...).
 * Possono contare all'indietro usando il decremento (i--).
 */

// TODO: Scrivi un ciclo for che parte da 5 e arriva a 1 (compreso).
// La condizione deve essere 'maggiore o uguale a 1'.
// Ad ogni giro, DECREMENTA la variabile (i--).
// Stampa il valore di i.

// OUTPUT ATTESO:
// 5
// 4
// 3
// 2
// 1



/**
 * ===========================================
 * === 3. Costruire una Stringa (Accumulatore di Testo) ===
 * I cicli sono utilissimi per costruire risultati complessi un pezzo alla volta.
 * Qui usiamo una stringa vuota e aggiungiamo pezzi ad ogni giro.
 */

let scia = "";

// TODO: Scrivi un ciclo for che gira 10 volte.
// Ad ogni giro, aggiungi un asterisco "*" alla variabile 'scia'.
// Alla fine del ciclo, stampa 'scia' (una volta sola).

// OUTPUT ATTESO:
// **********



/**
 * ===========================================
 * === 4. Somma Numerica (Accumulatore Numerico) ===
 * Come per le stringhe, possiamo accumulare numeri.
 * Questo è il concetto base per calcolare somme, medie, bilanci, ecc.
 */

let sommaTotale = 0;

// TODO: Scrivi un ciclo for che va da 1 a 10.
// Aggiungi il valore del contatore (i) alla variabile 'sommaTotale'.
// Stampa il risultato SOLO alla fine del ciclo.

// OUTPUT ATTESO:
// 55  (perché 1+2+3+4+5+6+7+8+9+10 fa 55)



/**
 * ===========================================
 * === 5. Cicli Annidati (Loop dentro Loop) ===
 * Possiamo mettere un ciclo dentro un altro.
 * Per ogni SINGOLO giro del ciclo esterno, quello interno viene eseguito TUTTO.
 * È come l'orologio: per ogni ora (ciclo esterno), i minuti (ciclo interno) fanno un giro completo.
 */

// TODO: Completa il codice per stampare le coordinate.
// Usa due cicli for annidati.
// Il ciclo esterno usa 'x' (da 1 a 2).
// Il ciclo interno usa 'y' (da 1 a 3).
// Stampa: "x: " + x + " - y: " + y

// OUTPUT ATTESO:
// x: 1 - y: 1
// x: 1 - y: 2
// x: 1 - y: 3
// x: 2 - y: 1
// x: 2 - y: 2
// x: 2 - y: 3


/**
 * ===========================================
 * === 6. Break e Continue (Controllo del Flusso) ===
 * A volte vogliamo alterare il comportamento normale del ciclo:
 * - 'break': Interrompe il ciclo immediatamente (esce dalle graffe).
 * - 'continue': Salta SOLO il giro corrente e passa subito al successivo.
 */

// TODO: Scrivi un ciclo for da 1 a 10.
// Se il numero è 5, usa 'continue' (saltalo, non stamparlo).
// Se il numero è 8, usa 'break' (ferma tutto il ciclo).
// In tutti gli altri casi: Stampa il numero.

// OUTPUT ATTESO:
// 1
// 2
// 3
// 4
// 6  <-- nota che manca il 5
// 7
// (l'8 e i successivi non ci sono perché abbiamo rotto il ciclo)

