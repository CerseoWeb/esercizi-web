// ESERCIZI EXTRA: Logica e Matematica
// REGOLE:
// 1. Scrivi il codice SOLO negli spazi indicati.
// 2. Non toccare i console.log di verifica in fondo.
// 3. Controlla la console: se vedi la spunta verde ✅ hai fatto giusto!
// 4. Se mancano delle informazioni cerca online o chiedi a me.
// 5. Se fai delle formule, scrivi sempre e solo le parentesi tonde e non le graffe o quadre.

/** ----------------------------------------------------------
 * IL TERMOMETRO AMERICANO
 *
 * Converti i gradi Celsius in Fahrenheit.
 * Per la formula, cerca online.
 * ISTRUZIONI:
 * 1. Crea una variabile `gradiCelsius` con valore 25.
 * 2. Crea una variabile `gradiFahrenheit` che calcoli la conversione.
 * ----------------------------------------------------------- */




/** ----------------------------------------------------------
 * CALCOLATORE BMI (Indice Massa Corporea)
 *
 * Calcola l'indice basato su peso e altezza.
 * Anche in questo caso, la formula va cercata online.
 * ISTRUZIONI:
 * 1. Crea `peso` (kg) con valore 75.
 * 2. Crea `altezza` (metri) con valore 1.80.
 * 3. Crea `bmi` che contenga il risultato della formula.
 * ----------------------------------------------------------- */




/** ----------------------------------------------------------
 * INDOVINA L'OUTPUT (Coercizione)
 *
 * Senza eseguire il codice, prova a capire cosa succede quando
 * sommiamo numeri e stringhe.
 * Dati di partenza:
 * let a = 10;
 * let b = "5";
 * let c = 2;
 *
 * Operazione strana:
 * let risultato = a + b + c;
 *
 * ISTRUZIONI:
 * 1. Crea una variabile chiamata `laMiaPrevisione`.
 * 2. Assegnale come valore la STRINGA che secondo te uscirà (es. "1052" o "17" o "152").
 * ----------------------------------------------------------- */

let a = 10;
let b = "5";
let c = 2;
let risultatoReale = a + b + c;




/* ===========================================================
 * AREA DI VERIFICA AUTOMATICA
 * (Non modificare nulla qui sotto)
 * =========================================================== */

// Verifica Esercizio 1
console.log(
    "1. Temperatura (25°C -> 77°F)", 
    (typeof gradiFahrenheit !== 'undefined' && gradiFahrenheit === 77) ? "✅" : "❌ ERRORE (Controlla formula o nome variabile)"
);

// Verifica Esercizio 2
// Usiamo toFixed(2) per gestire arrotondamenti minori sui decimali
console.log(
    "2. BMI (75kg / 1.80m)", 
    (typeof bmi !== 'undefined' && bmi.toFixed(2) === "23.15") ? "✅" : "❌ ERRORE (Controlla formula o nome variabile)"
);

// Verifica Esercizio 3
console.log(
    "3. Previsione Coercizione", 
    (typeof laMiaPrevisione !== 'undefined' && laMiaPrevisione === risultatoReale) ? "✅" : "❌ ERRORE (Controlla previsione, tipo o nome variabile)"
);