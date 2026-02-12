/**
 * Esercizio Extra (DEBUG): Variabili Fantasma (Shadowing)
 * 
 * Descrizione:
 * Il programmatore voleva aggiornare una variabile globale `punteggio` dentro una funzione.
 * Tuttavia, ha commesso un errore nella dichiarazione dei parametri o delle variabili interne,
 * creando una nuova variabile locale che "nasconde" quella globale.
 * 
 * Il punteggio finale rimane 0 invece di 10.
 * 
 * Obiettivo:
 * Correggi la funzione affinché modifichi la variabile esterna `punteggioTotale`.
 */

let punteggioTotale = 0;

function aggiungiPunti(punti) {
    let punteggioTotale = punti;

    console.log("Punteggio dentro la funzione: " + punteggioTotale);
}

aggiungiPunti(10);
console.log("Punteggio finale globale: " + punteggioTotale); // Stampa 0, dovrebbe essere 10.
