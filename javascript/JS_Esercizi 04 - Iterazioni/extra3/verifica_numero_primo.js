/**
 * Esercizio Extra: Verifica Numero Primo
 * 
 * Descrizione:
 * Un numero primo è un numero divisibile SOLO per 1 e per se stesso (es. 7, 11, 13).
 * Vogliamo scoprire se un numero dato è primo o no usando un ciclo.
 * 
 * Istruzioni:
 * 1. Definisci una variabile `numeroDaControllare` (es. 17).
 * 2. Crea una variabile booleana `ePrimo` impostata su `true` all'inizio.
 * 3. Scrivi un ciclo for che parte da 2 e arriva fino a `numeroDaControllare - 1`.
 * 4. Se `numeroDaControllare` è divisibile per il contatore `i` (ovvero il resto è 0):
 * - Imposta `ePrimo` su `false`.
 * - Usa `break` per uscire subito dal ciclo (abbiamo trovato un divisore, quindi non è primo).
 * 5. Alla fine, stampa "È primo? " + ePrimo.
 */
