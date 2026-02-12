/**
 * Esercizio Extra: Dashboard Utente Complessa (Oggetti Annidati)
 * 
 * Obiettivo: Accedere e modificare dati dentro oggetti che sono dentro altri oggetti.
 * 
 * Struttura Dati:
 * Hai un oggetto 'dashboard' che contiene le impostazioni di un utente.
 * 
 * 1. Crea l'oggetto seguendo questa struttura:
 *   dashboard = {
 *     utente: "Admin",
 *     preferenze: {
 *       tema: "Scuro",
 *       notifiche: { email: true, sms: false }
 *     }
 *   }
 * 2. Senza toccare la dichiarazione iniziale, modifica il valore di 'sms' in true.
 *    (Suggerimento: usa più punti, es. oggetto.livello1.livello2...)
 * 3. Stampa in console solo il valore del 'tema'.
 * 4. Aggiungi una nuova proprietà 'push' dentro l'oggetto 'notifiche' e impostala a true.
 * 5. Stampa l'intero oggetto dashboard finale.
 */