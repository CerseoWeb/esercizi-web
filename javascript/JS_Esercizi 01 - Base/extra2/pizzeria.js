// ESERCIZIO EXTRA: La Pizzeria Equa (Logica Pura)
// REGOLE:
// 1. Scrivi il codice SOLO negli spazi indicati.
// 2. Non toccare i console.log di verifica in fondo.
// 3. Controlla la console: se vedi la spunta verde ✅ hai fatto giusto!
// 4. Se mancano delle informazioni cerca online o chiedi a me.

/**
 * Hai ordinato delle pizze giganti tagliate in 14 fette totali.
 * Siete in 4 amici affamati.
 * Volete dividere le fette in modo che TUTTI ne abbiano lo stesso numero.
 * Quelle che avanzano (il resto), le date al cane.
 *
 * DOMANDA:
 * 1. Quante fette mangia il cane (il resto)?
 * 2. Quante fette mangia ogni amico?
 *
 * ISTRUZIONI:
 * 1. Crea `fetteTotali` (14) e `amici` (4).
 * 2. Calcola `fettePerCane` usando l'operatore Modulo `%`.
 * (Il modulo ti dice il resto della divisione: es. 10 % 3 fa 1).
 * 3. Calcola `fettePerAmico`.
 * 4. Stampa: "Ogni amico mangia ... fette e al cane ne vanno ..."
 */

let fetteTotali = 14;
let amici = 4;




/* ===========================================================
 * VERIFICA
 * =========================================================== */
console.log(
    "Distribuzione Pizza:",
    (typeof fettePerAmico !== 'undefined' && typeof fettePerCane !== 'undefined' && fettePerAmico === 3 && fettePerCane === 2) 
    ? "✅" 
    : "❌ Riprova. (Dati attesi: 3 fette a testa, 2 al cane)"
);