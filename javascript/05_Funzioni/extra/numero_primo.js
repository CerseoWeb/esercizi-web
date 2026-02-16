/**
 * Esercizio Extra: Verifica Numero Primo
 * 
 * Descrizione:
 * Un numero primo è divisibile solo per 1 e per se stesso.
 * 
 * Obiettivo:
 * Scrivi una funzione `èPrimo(n)` che restituisce `true` se il numero è primo, e `false` se non lo è.
 * 
 * Istruzioni:
 * 1. La funzione accetta un numero `n`.
 * 2. Se `n` è minore di 2, restituisci `false`.
 * 3. Usa un ciclo `for` che parte da 2 e arriva fino a `n - 1`.
 * 4. Dentro il ciclo, controlla se `n` è divisibile per il contatore (n % i === 0).
 * 5. Se trovi un divisore, restituisci SUBITO `false` (il numero non è primo).
 * 6. Se il ciclo finisce senza trovare divisori, restituisci `true`.
 * 
 * Con 7 dovrebbe restituire `true`
 * Con 10 dovrebbe restituire `false`
 * Con 401 dovrebbe restituire `true`
 * Con 459 dovrebbe restituire `false` 
 */

// Scrivi qui il tuo codice
function èPrimo(n) {
}



// ZONA TEST - NON MODIFICARE
function assertEqual(actual, expected, test) {
    let result = (actual === expected);
    let emoji = result ? '✅' : '❌';
    let str = result ? 'superato!' : `fallito. Valore corretto: ${expected}; ottenuto: ${actual}`;
    console.log(`${emoji} ${test} Test ${str}`);
}

assertEqual(èPrimo(7), true, "1.");
assertEqual(èPrimo(10), false, "2.");
assertEqual(èPrimo(401), true, "3.");
assertEqual(èPrimo(459), false, "4.");