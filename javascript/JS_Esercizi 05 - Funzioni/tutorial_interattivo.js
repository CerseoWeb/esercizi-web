/**
 * ===========================================
 * === 1. Dichiarazione e Chiamata ===
 * Una funzione è un blocco di codice riutilizzabile.
 * Si dichiara con la parola chiave 'function'.
 * Il codice dentro la funzione non viene eseguito finché non la "chiami".
 */

// Esempio:
function saluta() {
    console.log("Ciao mondo!");
}
// Per eseguirla:
saluta();

// TODO: Dichiara una funzione chiamata 'stampaBenvenuto' che stampi "Benvenuto al corso!".
// Poi chiama la funzione.

// OUTPUT ATTESO:
// Benvenuto al corso!


/**
 * ===========================================
 * === 2. I Parametri ===
 * Le funzioni possono ricevere dati in ingresso chiamati "parametri".
 * I parametri agiscono come variabili locali dentro la funzione.
 */

function salutaPersona(nome) {
    console.log("Ciao " + nome);
}

// TODO: Chiama la funzione 'salutaPersona' due volte:
// 1. Passando il nome "Mario".
// 2. Passando il nome "Luigi".

// OUTPUT ATTESO:
// Ciao Mario
// Ciao Luigi


/**
 * ===========================================
 * === 3. Parametri Multipli ===
 * Puoi passare più parametri separandoli da virgola.
 * L'ordine è importante!
 */

// TODO: Scrivi una funzione 'descriviPersona' che accetta due parametri: 'nome' e 'età'.
// La funzione deve stampare: nome + " ha " + età + " anni."
// Poi chiamala con "Anna" e 25.

// OUTPUT ATTESO:
// Anna ha 25 anni.


/**
 * ===========================================
 * === 4. Il Valore di Ritorno (Return) ===
 * Una funzione può "restituire" un risultato al codice che l'ha chiamata.
 * Si usa la parola chiave 'return'.
 */

function somma(a, b) {
    let risultato = a + b;
    return risultato;
}

let x = somma(5, 3); // x ora vale 8. Nulla viene stampato qui.
console.log("Il risultato è: " + x);

// TODO: Scrivi una funzione 'moltiplica' che accetta due numeri e RESTITUISCE (return) il loro prodotto.
// Poi salva il risultato di moltiplica(4, 5) in una variabile e stampalo.

// OUTPUT ATTESO:
// 20


/**
 * ===========================================
 * === 5. Usare le Funzioni nella Logica ===
 * Possiamo usare il valore restituito da una funzione direttamente dentro un 'if'.
 */

// TODO: Scrivi una funzione 'èMaggiorenne' che accetta un numero (età).
// Se età >= 18 restituisce true, altrimenti false.
// Poi scrivi un if che usa questa funzione per stampare "Sei maggiorenne" o "Sei minorenne".

// OUTPUT ATTESO (provando con 20):
// Sei maggiorenne


/**
 * ===========================================
 * === 6. Scope (Visibilità) ===
 * Le variabili definite dentro una funzione (con let) NON esistono fuori di essa.
 * Stessa cosa vale per i parametri, che sono visibili SOLO dentro la funzione.
 * È chiamato "scope" (ambito) della variabile.
 */

function testScope(variabileLocale) {
    let segreto = "Codice123" + variabileLocale;
    return segreto;
}

// TODO: Prova a decommentare la riga sotto e osserva l'errore.
// console.log(segreto);
// console.log(variabileLocale);

// TODO: Correggi l'errore: crea una variabile 'codiceEsterno' e assegnale il risultato della chiamata a 'testScope("456")'.
// Poi stampa 'codiceEsterno'.

// OUTPUT ATTESO:
// Codice123456
