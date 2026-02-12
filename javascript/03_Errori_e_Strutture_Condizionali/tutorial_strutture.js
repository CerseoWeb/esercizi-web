/**
 * ===========================================
 * === 1. Il Blocco ===
 * Le parentesi graffe {} racchiudono un blocco di codice.
 * Tutto il codice racchiuso in queste parentesi è 'indentato' con un TAB in più.
 * Questo aiuta a leggere e capire la struttura del codice.
 * 
 * Le le variabili dichiarate all'interno con 'let' o 'const' sono locali a quel blocco.
 * Se le dichiari all'esterno, sono globali e accessibili ovunque.
 */

let globale = "Sono dichiarata fuori dal blocco";
{
    let locale = "Sono locale";
    var variabileVar = "Sono var"; // 'var' non è limitata dal blocco
    console.log(globale);
    console.log(locale);
}

console.log(globale);       // Accessibile
console.log(variabileVar);  // Accessibile
// console.log(locale);        // Non accessibile (decommenta per vedere l'errore)



/**
 * ===========================================
 * === 2. Il blocco IF (Se) ===
 * L'istruzione 'if' esegue il codice tra le parentesi graffe {} SOLO se
 * la condizione tra parentesi tonde () è vera (true).
 */

let temperatura = 25;

// TODO: Scrivi un if che controlli se 'temperatura' è maggiore di 20.
// Se è vero, stampa "Fa caldo".
// OUTPUT ATTESO (con temperatura = 25): Fa caldo


/**
 * ===========================================
 * === 3. IF...ELSE (Se... Altrimenti) ===
 * 'else' gestisce il caso in cui la condizione dell'if è falsa.
 */

let password = "segreta123";

// TODO: Scrivi un controllo: se la password è uguale a "segreta123", stampa "Accesso consentito".
// Altrimenti (else), stampa "Accesso negato".
// OUTPUT ATTESO: Accesso consentito


/**
 * ===========================================
 * === 4. ELSE IF (Altrimenti Se) ===
 * Serve per gestire più di due condizioni.
 * Il codice si ferma alla prima condizione vera trovata.
 */

let semaforo = "giallo";

// TODO: Scrivi una catena di controlli:
// 1. Se semaforo è "verde" -> stampa "Vai"
// 2. Altrimenti se semaforo è "giallo" -> stampa "Rallenta"
// 3. Altrimenti se semaforo è "rosso" -> stampa "Stop"
// 4. Altrimenti (else finale) -> stampa "Semaforo rotto"
// OUTPUT ATTESO: Rallenta


/**
 * ===========================================
 * === 5. Operatori Logici: AND (&&) ===
 * L'operatore && (AND) richiede che ENTRAMBE le condizioni siano vere.
 */

let età = 20;
let haBiglietto = true;

// TODO: Scrivi un if che controlli se 'età' è maggiore o uguale a 18 E (&&) 'haBiglietto' è true.
// Se entrambe sono vere, stampa "Puoi entrare".
// Altrimenti stampa "Non puoi entrare".
// OUTPUT ATTESO: Puoi entrare


/**
 * ===========================================
 * === 6. Operatori Logici: OR (||) ===
 * L'operatore || (OR) richiede che ALMENO UNA delle condizioni sia vera.
 */

let èWeekend = false;
let èFesta = true;

// TODO: Scrivi un if che controlli se 'èWeekend' è true O (||) 'èFesta' è true.
// Se almeno una è vera, stampa "Oggi non si lavora".
// OUTPUT ATTESO: Oggi non si lavora


/**
 * ===========================================
 * === 7. Lo SWITCH ===
 * Switch è un'alternativa a tanti 'else if' quando si confronta una singola variabile con valori specifici.
 * Ricorda il comando 'break' alla fine di ogni case!
 */

let numeroMese = 3;

// TODO: Scrivi uno switch sulla variabile 'numeroMese'.
// case 1: stampa "Gennaio"
// case 2: stampa "Febbraio"
// case 3: stampa "Marzo"
// default: stampa "Mese non valido"
// OUTPUT ATTESO: Marzo

