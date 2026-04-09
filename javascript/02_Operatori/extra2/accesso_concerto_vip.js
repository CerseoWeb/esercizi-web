/**
 * Esercizio Extra2: Accesso a un Concerto VIP
 * 
 * DESCRIZIONE:
 * Un locale apre l'ingresso solo a chi supera un controllo con piu regole.
 * Qui devi usare operatori logici e confronti senza ricorrere a if.
 * 
 * Istruzioni:
 * 1. Usa le variabili gia dichiarate.
 * 2. Crea una variabile booleana `accessoConsentito`.
 * 3. `accessoConsentito` deve essere true solo se:
 *    - il biglietto e valido
 *    - la persona non e nella lista nera
 *    - ha almeno 18 anni oppure e accompagnata da un adulto
 *    - possiede il braccialetto oppure e nel settore VIP
 * 4. Stampa il valore finale.
 * 
 * Suggerimento:
 * L'esercizio e piu difficile se raggruppi male le parentesi.
 * 
 * OUTPUT ATTESO: true
 */

let etaPartecipante = 17;
let bigliettoValido = true;
let listaNera = false;
let accompagnatoDaAdulto = true;
let braccialetto = false;
let settoreVIP = false;

// TODO: Crea `accessoConsentito` con una sola espressione logica e stampala.
