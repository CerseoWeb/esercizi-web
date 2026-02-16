/**
 * Esercizio: Media dei Voti
 * 
 * Obiettivo: Calcolare la media aritmetica di un array di numeri.
 * 
 * La media è: somma di tutti i numeri / quantità di numeri
 * 
 * Istruzioni:
 * 1. Completa la funzione 'calcolaMedia' che prende un array.
 * 2. Calcola la somma di tutti gli elementi.
 * 3. Dividi la somma per la lunghezza dell'array.
 * 4. Restituisci il risultato.
 */

function calcolaMedia(arr) {
}



// Test
let voti = [6, 7, 8, 9];
let media = calcolaMedia(voti);

let altriVoti = [10, 10, 10];
let media2 = calcolaMedia(altriVoti);

let votiBassi = [4, 5, 6];
let media3 = calcolaMedia(votiBassi);



// ZONA TEST - NON MODIFICARE
function assertEqual(actual, expected, test) {
    if (actual === expected) {
        console.log('✅ ' + test + ' Test superato!');
    } else {
        console.log('❌ ' + test + ' Test fallito. Media: ' + actual);
    }
}

assertEqual(media, 7.5, "1.");
assertEqual(media2, 10, "2.");
assertEqual(media3, 5, "3.");