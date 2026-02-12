console.log("--- Inizio del Tutorial Errori Base ---");

/**
 * ===========================================
 * === 1. SyntaxError: Manca qualcosa ===
 * Le stringhe di testo devono sempre avere le virgolette aperte e chiuse.
 * Se ne dimentichi una, JavaScript si confonde.
 *
 * PAROLA CHIAVE: "Invalid or unexpected token" --> token non valido o inaspettato
 * Decommenta il codice sottostante per vedere l'errore.
 * Per rimuovere il commento usa [Ctrl + /] oppure [Ctrl + ù] (VsCode).
 */

// let messaggio = "Benvenuti al corso;
// console.log(messaggio);


/**
 * ===========================================
 * === 2. ReferenceError: Il nome sbagliato ===
 * Questo errore accade quando chiami una variabile con il nome sbagliato o non definita.
 * Ricorda che JavaScript distingue maiuscole e minuscole.
 *
 * PAROLA CHIAVE: "is not defined" --> non definita
 */

// let mioNome = "Luca";
// console.log(MioNome); 


/**
 * ===========================================
 * === 3. TypeError: Scrittura errata dei comandi ===
 * A volte sbagliamo a scrivere i comandi di JavaScript.
 *
 * PAROLA CHIAVE: "is not a function" --> non è una funzione
 */

// console.logg("Tutto bene?");


/**
 * ===========================================
 * === 4. TypeError: Le Costanti ===
 * Hai imparato che 'const' definisce una scatola che non può cambiare contenuto.
 * Cosa succede se proviamo a forzarla?
 *
 * PAROLA CHIAVE: "Assignment to constant variable"
 */

// const PIGRECO = 3.14;
// PIGRECO = 3.50;


/**
 * ===========================================
 * === 5. Errore di Logica (Tipi di dati) ===
 * Qui NON vedrai errori rossi nel terminale. Il programma funziona,
 * ma il risultato matematico è sbagliato.
 *
 * PROBLEMA: Sommare numeri e stringhe.
 */

// let prezzo = 10;
// let spedizione = "5";
// let totale = prezzo + spedizione;
// console.log("Il totale è: " + totale);


console.log("--- Fine del Tutorial ---");
