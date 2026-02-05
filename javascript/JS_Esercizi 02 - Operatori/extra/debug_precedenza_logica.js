/**
 * Esercizio Extra (DEBUG): L'ordine conta
 * 
 * Descrizione:
 * Vogliamo dare un bonus a un dipendente se:
 * - Ha fatto vendite alte (> 1000) OPPURE ha ottime recensioni (> 4.5)
 * - E INOLTRE (condizione obbligatoria) non deve aver ricevuto reclami.
 * 
 * Il codice attuale dà il bonus anche a chi ha reclami, se ha vendite alte. Questo è SBAGLIATO.
 * 
 * Correggi l'espressione aggiungendo le parentesi necessarie per forzare la logica corretta.
 */

let vendite = 2000;
let recensioni = 3.0;
let haReclami = true;

let dirittoBonus = vendite > 1000 || recensioni > 4.5 && !haReclami;

console.log("Diritto al bonus:", dirittoBonus);
// OUTPUT ATTUALE (Errato): true
// OUTPUT ATTESO (Corretto): false
