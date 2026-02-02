/**
 * ===========================================
 * === 1. Operatori Aritmetici di Base ===
 * JavaScript può essere usato come una calcolatrice.
 * Abbiamo +, -, * (moltiplicazione) e / (divisione).
 * Possiamo stampare i risultati con console.log().
 */
let numeroA = 10;
let numeroB = 5;

// TODO: Crea una variabile 'somma' che contenga numeroA più numeroB e stampala.
// OUTPUT ATTESO: 15


/**
 * ===========================================
 * === 2. L'operatore Modulo (Resto) ===
 * L'operatore % restituisce il resto di una divisione.
 * Esempio: 10 % 3 fa 1 (perché il 3 sta nel 10 tre volte con resto 1).
 */
let mele = 14;
let persone = 3;

// TODO: Calcola quante mele rimangono non distribuite usando l'operatore % e stampa il risultato.
// OUTPUT ATTESO: 2


/**
 * ===========================================
 * === 3. Ordine delle Operazioni (Precedenza) ===
 * La moltiplicazione e la divisione avvengono prima di somma e sottrazione.
 * Usa le parentesi tonde () per cambiare l'ordine.
 */
let costoBiglietto = 10;
let costoPrevendita = 2;
let numeroBiglietti = 3;

// TODO: Calcola il totale corretto: (costoBiglietto + costoPrevendita) moltiplicato per numeroBiglietti.
// OUTPUT ATTESO: 36


/**
 * ===========================================
 * === 4. Operatori di Confronto (Debole vs Stretto) ===
 * L'operatore == confronta il valore (convertendo il tipo se necessario).
 * L'operatore === confronta valore E tipo (MOLTO PIÙ SICURO).
 */
let numeroStringa = "5";
let numeroReale = 5;

// TODO: Stampa il risultato di numeroStringa === numeroReale.
// OUTPUT ATTESO: false


/**
 * ===========================================
 * === 5. Operatori di Disuguaglianza ===
 * Possiamo verificare se un numero è maggiore (>), minore (<),
 * maggiore o uguale (>=) o minore o uguale (<=).
 * Il risultato è sempre un booleano (true o false).
 */
let età = 17;
let etàMinima = 18;

// TODO: Stampa true se 'età' è maggiore o uguale a 'etàMinima', altrimenti stampa false.
// OUTPUT ATTESO: false


/**
 * ===========================================
 * === 6. Operatori Logici: AND (&&) ===
 * L'operatore && restituisce true SOLO se entrambe le condizioni sono vere.
 * true && true -> true
 * true && false -> false
 */
let haBiglietto = true;
let haDocumento = true;

// TODO: Crea una variabile 'puòEntrare' che sia vera solo se haBiglietto E haDocumento sono entrambi veri. Stampala.
// OUTPUT ATTESO: true


/**
 * ===========================================
 * === 7. Operatori Logici: OR (||) e NOT (!) ===
 * L'operatore || restituisce true se ALMENO UNA condizione è vera.
 * L'operatore ! inverte il risultato (true diventa false e viceversa).
 */
let èSocio = false;
let haInvito = true;
let èBannato = false;

// TODO: Stampa true se (èSocio OPPURE haInvito) E NON è bannato.
// OUTPUT ATTESO: true


/**
 * ===========================================
 * === 8. Mix Finale ===
 * Combiniamo aritmetica e logica.
 */
let puntiGiocatore = 150;
let viteRimaste = 0;
let livelloCompletato = true;

// TODO: Il gioco è "vinto" se (puntiGiocatore > 100 OPPURE livelloCompletato) E (viteRimaste > 0). Stampa il risultato.
// OUTPUT ATTESO: false
