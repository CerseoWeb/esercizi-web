/**
 * Esercizio: Trova l'Indice del Minimo
 * 
 * Obiettivo: Completa la funzione `trovaIndiceMinimo` per restituire
 * l'indice del numero piu` piccolo nell'array.
 * 
 * Passi:
 * 1. La funzione `trovaIndiceMinimo` prende un array di numeri come input.
 * 2. Inizializza un indice di riferimento (es. `indiceMin = 0`).
 * 3. Scorri l'array a partire dall'indice 1.
 * 4. Se trovi un numero piu` piccolo, aggiorna `indiceMin`.
 * 5. Ritorna `indiceMin`.
 */

function trovaIndiceMinimo(arr) {
}



// Esempio di utilizzo:
let numeri = [5, 2, 9, 1, 5, 6];
let indice1 = trovaIndiceMinimo(numeri);

let altriNumeri = [3, 4, 0, -1, 8];
let indice2 = trovaIndiceMinimo(altriNumeri);

let ancoraNumeri = [10, 20, 30];
let indice3 = trovaIndiceMinimo(ancoraNumeri);



// ZONA TEST - NON MODIFICARE
function assertEqual(actual, expected, test) {
    if (actual === expected) {
        console.log('✅ ' + test + ' Test superato!');
    } else {
        console.log('❌ ' + test + ' Test fallito. Indice: ' + actual);
    }
}

assertEqual(indice1, 3, "1.");
assertEqual(indice2, 3, "2.");
assertEqual(indice3, 0, "3.");
