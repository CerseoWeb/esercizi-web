/**
 * ISTRUZIONI:
 * 1. Leggi attentamente i commenti numerati (Step).
 * 2. Scrivi il codice richiesto sotto il commento `// TODO:`.
 * 3. Esegui il file (es. con Node.js o nel browser) e controlla se l'output coincide.
 */

/**
 * ===========================================
 * --- STEP 1: Il tuo primo comando ---
 * 
 * In JavaScript, usiamo `console.log()` per stampare messaggi sullo schermo.
 * Le frasi di testo (Stringhe) devono essere racchiuse tra virgolette ("...") o apici ('...').
 */

// TODO: Scrivi un comando per stampare la frase "Benvenuto nel corso JavaScript!"
// OUTPUT ATTESO: Benvenuto nel corso JavaScript!


/**
 * ===========================================
 * --- STEP 2: Le Variabili (let) ---
 * 
 * Una variabile è come una scatola dove possiamo salvare un'informazione.
 * Usiamo la parola chiave `let` per creare una variabile che può cambiare valore nel tempo.
 * Esempio: let nome = 'Mario';
 */

// TODO: 1. Crea una variabile chiamata `corsista` e assegnale il tuo nome.
// TODO: 2. Stampa la variabile `corsista` usando console.log.
// OUTPUT ATTESO: (Il tuo nome)


/**
 * ===========================================
 * --- STEP 3: Le Costanti (const) ---
 * 
 * Se sai che un valore non cambierà MAI, usa `const` invece di `let`.
 * È una buona abitudine usare `const` per valori fissi.
 */

// TODO: 1. Crea una costante chiamata `ANNO_CORRENTE` e assegnale il valore 2026 (o l'anno attuale).
// TODO: 2. Stampa la costante.
// OUTPUT ATTESO: 2026


/**
 * ===========================================
 * --- STEP 4: I Numeri (Numbers) ---
 * 
 * JavaScript gestisce i numeri (interi o con la virgola) senza bisogno di virgolette.
 * Possiamo fare operazioni matematiche: + (somma), - (sottrazione), * (moltiplicazione), / (divisione).
 */

// TODO: 1. Crea una variabile `eta` con la tua età.
// TODO: 2. Crea una variabile `etaProssimoAnno` che sia uguale a `eta + 1`.
// TODO: 3. Stampa `etaProssimoAnno`.
// OUTPUT ATTESO: (La tua età + 1)


/**
 * ===========================================
 * --- STEP 5: Unire le Stringhe (Concatenazione) ---
 * 
 * Possiamo unire testo e variabili usando il simbolo `+`.
 * Esempio: console.log("Ciao " + nome);
 */

let linguaggio = "JavaScript";

// TODO: Usa console.log per stampare la frase: "Sto imparando JavaScript"
// Devi costruire la frase unendo la stringa "Sto imparando " e la variabile `linguaggio`.
// OUTPUT ATTESO: Sto imparando JavaScript


/**
 * ===========================================
 * --- STEP 6: I Booleani (Boolean) ---
 * 
 * Un booleano può avere solo due valori: `true` (vero) o `false` (falso).
 * Servono per la logica del programma (es. utente è loggato? è maggiorenne?).
 */

// TODO: 1. Crea una variabile `stoImparando` e impostala su `true`.
// TODO: 2. Stampa la variabile.
// OUTPUT ATTESO: true


/**
 * ===========================================
 * --- STEP 7: Controllare il Tipo (typeof) ---
 * 
 * A volte non sappiamo che tipo di dato contiene una variabile.
 * L'operatore `typeof` ci dice se è una stringa, un numero, ecc.
 */

let numeroMisterioso = 42;
let testoMisterioso = "42";
let veroOFalso = false;
let variabileVuota = null;
let variabileSconosciuta;

// TODO: Stampa il TIPO di ogni variabile usando `typeof`.
// Esempio: console.log(typeof numeroMisterioso);
// OUTPUT ATTESO:
// number
// string
// boolean
// object
// undefined


