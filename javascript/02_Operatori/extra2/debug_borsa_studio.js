/**
 * Esercizio Extra2 (DEBUG): Borsa di Studio Sballata
 * 
 * DESCRIZIONE:
 * La commissione sta approvando borse di studio anche quando uno dei criteri principali manca.
 * Il problema non e nei valori, ma nella logica: manca una parentesi che dovrebbe raggruppare due condizioni.
 * 
 * Compito:
 * Correggi l'espressione senza cambiare i valori delle variabili.
 * 
 * OUTPUT ATTUALE (Errato): true
 * OUTPUT ATTESO (Corretto): false
 */

let mediaVoti = 28;
let esamiMancanti = 1;
let isee = 22000;
let haSanzioni = false;
let haPartecipatoProgetti = false;
let iscrizioneCompleta = true;
let eta = 21;

let borsaApprova = iscrizioneCompleta && mediaVoti >= 27 && isee <= 23000 && esamiMancanti <= 1 && !haSanzioni && haPartecipatoProgetti || eta <= 22;

console.log("Borsa di studio approvata:", borsaApprova);

// TODO: Correggi la logica aggiungendo le parentesi giuste.
