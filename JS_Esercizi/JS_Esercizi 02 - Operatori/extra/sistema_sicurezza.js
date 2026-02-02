/**
 * Esercizio Extra: Sistema di Sicurezza Complesso
 * 
 * DESCRIZIONE:
 * L'allarme deve suonare (stampare true) se si verifica una situazione di pericolo.
 * 
 * Variabili da dichiarare:
 * - movimentoRilevato (bool)
 * - orarioNotturno (bool)
 * - finestreAperte (bool)
 * - codiceInserito (bool)
 * - blackout (bool)
 * 
 * Regole dell'allarme:
 * L'allarme suona SE:
 * 1. (C'è movimento rilevato E è orario notturno)
 * OPPURE
 * 2. (Le finestre sono aperte E il codice di sicurezza NON è stato inserito)
 * OPPURE
 * 3. (C'è un blackout)
 * 
 * Stampa il risultato della variabile 'allarmeAttivo'.
 * Fai diverse prove cambiando i valori delle variabili per verificare che la logica regga.
 * 
 * Prova a creare casi di test come:
 * - movimentoRilevato = true, orarioNotturno = true, finestreAperte = false, codiceInserito = true, blackout = false  => allarmeAttivo = true
 * - movimentoRilevato = false, orarioNotturno = false, finestreAperte = true, codiceInserito = false, blackout = false => allarmeAttivo = true
 * - movimentoRilevato = false, orarioNotturno = false, finestreAperte = false, codiceInserito = true, blackout = true  => allarmeAttivo = true
 * - movimentoRilevato = false, orarioNotturno = false, finestreAperte = false, codiceInserito = true, blackout = false => allarmeAttivo = false
 */
