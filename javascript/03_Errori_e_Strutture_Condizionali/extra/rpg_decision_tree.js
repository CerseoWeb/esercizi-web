/**
 * Esercizio Extra: Gioco di Ruolo Testuale (Decision Tree)
 * 
 * Descrizione:
 * Simula un turno di combattimento basato su variabili di stato.
 * 
 * Variabili:
 * - `hpMostro` (punti vita mostro, es. 50)
 * - `tuoiHp` (tuoi punti vita, es. 20)
 * - `pozione` (booleano, hai una pozione? es. true)
 * 
 * Obiettivo:
 * Scrivi una logica annidata complessa:
 * 1. Se `tuoiHp` sono meno di 30:
 * - Se hai la `pozione` (true) -> Stampa "Usi la pozione e ti curi."
 * - Se NON hai la `pozione` -> Stampa "Sei nei guai! Attacchi disperatamente."
 * 2. Altrimenti (se hai abbastanza vita):
 * - Se `hpMostro` < 10 -> Stampa "Il mostro è debole, lo finisci!"
 * - Altrimenti -> Stampa "Attacchi il mostro con forza."
 */

// Scrivi qui il tuo codice



// Esempi di test:
// - tuoiHp = 20, hpMostro = 50, pozione = true  => "Usi la pozione e ti curi."
// - tuoiHp = 25, hpMostro = 50, pozione = false => "Sei nei guai! Attacchi disperatamente."
// - tuoiHp = 40, hpMostro = 5, pozione = false  => "Il mostro è debole, lo finisci!"
// - tuoiHp = 40, hpMostro = 30, pozione = true  => "Attacchi il mostro con forza."
