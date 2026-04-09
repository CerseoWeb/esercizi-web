/**
 * Esercizio Extra2: Classifica di un Torneo Esport
 * 
 * DESCRIZIONE:
 * Una squadra entra ai playoff solo se supera piu controlli insieme.
 * Devi combinare confronti, logica e modulo per verificare la situazione finale.
 * 
 * Istruzioni:
 * 1. Usa le variabili gia dichiarate.
 * 2. Crea una variabile booleana `siQualifica`.
 * 3. `siQualifica` deve essere true solo se:
 *    - la squadra ha almeno 24 punti
 *    - ha almeno 8 vittorie
 *    - ha al massimo 3 sconfitte
 *    - la differenza reti e positiva oppure i pareggi sono almeno 4
 *    - non ha squalifiche
 *    - il numero di partite giocate e dispari
 * 4. Stampa il risultato.
 * 
 * Nota:
 * L'ultimo controllo usa l'operatore modulo (%).
 * 
 * OUTPUT ATTESO: true
 */

let puntiSquadra = 24;
let vittorie = 8;
let pareggi = 4;
let sconfitte = 3;
let differenzaReti = -2;
let squalifiche = false;
let partiteGiocate = 15;

// TODO: Crea `siQualifica` con una sola espressione logica e stampala.
