/**
 * Esercizio Extra2: Convertitore di Temperature
 * 
 * Descrizione:
 * Crea un sistema di conversione tra Celsius e Fahrenheit.
 * Questo esercizio richiede di SPEZZARE il lavoro in PIÙ FUNZIONI.
 * 
 * Obiettivo:
 * Implementare tre funzioni:
 * 1. Una che converte Celsius → Fahrenheit
 * 2. Una che converte Fahrenheit → Celsius
 * 3. Una funzione principale che usa le prime due
 * 
 * Istruzioni:
 * 1. Crea una funzione `celsiusToFahrenheit(celsius)` che:
 *    - Accetta un numero di gradi Celsius
 *    - Calcola la conversione usando la formula: (C × 9/5) + 32
 *    - Restituisce il risultato
 * 
 * 2. Crea una funzione `fahrenheitToCelsius(fahrenheit)` che:
 *    - Accetta un numero di gradi Fahrenheit
 *    - Calcola la conversione usando la formula: (F - 32) × 5/9
 *    - Restituisce il risultato
 * 
 * 3. Crea una funzione `converti(valore, da, a)` che:
 *    - Accetta il valore, il tipo di partenza (es: "C" o "F") e il tipo di arrivo
 *    - Se da="C" e a="F", chiama celsiusToFahrenheit()
 *    - Se da="F" e a="C", chiama fahrenheitToCelsius()
 *    - Se da === a, restituisce il valore invariato
 *    - Altrimenti restituisce null e stampa un messaggio di errore
 * 
 * Esempio di utilizzo:
 * converti(0, "C", "F") dovrebbe restituire 32
 * converti(100, "C", "F") dovrebbe restituire 212
 * converti(32, "F", "C") dovrebbe restituire 0
 * converti(98.6, "F", "C") dovrebbe restituire circa 37
 * converti(25, "C", "C") dovrebbe restituire 25
 * converti(25, "C", "X") dovrebbe restituire null e stampare un messaggio di errore
 */

// Scrivi qui il tuo codice



function converti(valore, da, a) {
}


// ZONA TEST - NON MODIFICARE
function assertEqual(actual, expected, test) {
    let result = (actual === expected);
    let emoji = result ? '✅' : '❌';
    let str = result ? 'superato!' : `fallito. Valore corretto: ${expected}; ottenuto: ${actual}`;
    console.log(`${emoji} ${test} Test ${str}`);
}

assertEqual(converti(0, "C", "F"), 32, "1.");
assertEqual(converti(100, "C", "F"), 212, "2.");
assertEqual(converti(32, "F", "C"), 0, "3.");
assertEqual(converti(98.6, "F", "C"), 37, "4.");