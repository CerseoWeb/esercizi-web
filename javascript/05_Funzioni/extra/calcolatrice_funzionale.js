/**
 * Esercizio Extra: Calcolatrice Modulare
 * 
 * Descrizione:
 * Invece di fare tutto in una funzione, creeremo piccole funzioni specializzate.
 * 
 * Istruzioni:
 * 1. Crea almeno tre funzioni semplici che restituiscono un valore:
 * - `somma(a, b)`
 * - `sottrai(a, b)`
 * - `moltiplica(a, b)`
 * - (opzionale) `dividi(a, b)`
 * 
 * 2. Crea una funzione principale `eseguiOperazione` che accetta 3 parametri:
 * - `n1`
 * - `n2`
 * - `operazione` (una stringa "+", "-", "*" o "/")
 * 
 * 3. Dentro `eseguiOperazione`, usa un `if` o `switch` su `operazione`.
 * 4. In base al tipo, CHIAMA la funzione specifica (es. `somma(n1, n2)`) e restituisci il suo risultato.
 * 
 * Con 5, 3 e "+" come input, `eseguiOperazione` dovrebbe restituire 8.
 * Con 10, 4 e "-" dovrebbe restituire 6.
 * Con 6, 7 e "*" dovrebbe restituire 42.
 * Con 20, 5 e "ciao" dovrebbe restituire undefined, null o NaN.
 */

// Scrivi qui il tuo codice



function eseguiOperazione(n1, n2, operazione) {
}


// ZONA TEST - NON MODIFICARE
function assertEqual(actual, expected, test) {
    let result = (actual === expected);
    let emoji = result ? '✅' : '❌';
    let str = result ? 'superato!' : `fallito. Valore corretto: ${expected}; ottenuto: ${actual}`;
    console.log(`${emoji} ${test} Test ${str}`);
}

assertEqual(eseguiOperazione(5, 3, "+"), 8, "1.");
assertEqual(eseguiOperazione(10, 4, "-"), 6, "2.");
assertEqual(eseguiOperazione(6, 7, "*"), 42, "3.");
