/**
 * Esercizio Extra2: Gestione Semplice di un Conto Bancario
 * 
 * Descrizione:
 * Simula un conto bancario con operazioni di deposito, prelievo e calcolo di interesse.
 * Questo esercizio richiede di SPEZZARE il lavoro in PIÙ FUNZIONI.
 * 
 * Obiettivo:
 * Creare un'interfaccia di funzioni per gestire un conto bancario semplice.
 * 
 * Istruzioni:
 * 
 * 1. Crea una variabile globale `saldo` = 0 (rappresenta il saldo del conto)
 * 
 * 2. Crea una funzione `deposita(importo)` che:
 *    - Accetta un importo
 *    - Se importo è negativo o zero, restituisce null e stampa un messaggio di errore
 *    - Aggiunge l'importo al saldo globale
 *    - Restituisce il nuovo saldo
 * 
 * 3. Crea una funzione `preleva(importo)` che:
 *    - Accetta un importo
 *    - Se importo è negativo o zero, restituisce null e stampa un messaggio di errore
 *    - Se importo > saldo, restituisce null e stampa "Saldo insufficiente"
 *    - Sottrae l'importo dal saldo
 *    - Restituisce il nuovo saldo
 * 
 * 4. Crea una funzione `calcolaInteresse(tassoAnnuale)` che:
 *    - Accetta un tasso di interesse annuale (es: 2.5 per il 2.5%)
 *    - Calcola l'interesse: saldo × (tassoAnnuale / 100) / 12 (interesse mensile)
 *    - Restituisce l'interesse calcolato
 * 
 * 5. Crea una funzione `applicaInteresse(tassoAnnuale)` che:
 *    - Chiama calcolaInteresse() per ottenere l'importo dell'interesse
 *    - Aggiunge questo importo al saldo usando deposita()
 *    - Restituisce il nuovo saldo
 * 
 * 6. Crea una funzione `visualizzaSaldo()` che:
 *    - Restituisce il saldo formattato come stringa: "€ 1234,56"
 * 
 * Esempio di utilizzo:
 * deposita(1000)        // saldo = 1000
 * preleva(200)         // saldo = 800
 * applicaInteresse(2)  // aggiunge circa 1.33 euro (0.02 × 800 / 12)
 * visualizzaSaldo()    // "€ 801,33"
 */

// Scrivi qui il tuo codice



// ZONA TEST - NON MODIFICARE
// Testa le funzioni manualmente seguendo l'esempio sopra