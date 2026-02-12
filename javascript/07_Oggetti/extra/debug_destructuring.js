/**
 * Esercizio Extra: Debugging Destrutturazione
 * 
 * La "Destrutturazione" è un modo veloce per estrarre proprietà in variabili:
 * const { nome } = persona; (Crea una variabile 'nome' col valore di persona.nome).
 * 
 * Il codice sotto cerca di estrarre la città dell'utente, ma stampa 'undefined'.
 * 
 * 1. Analizza la struttura dell'oggetto 'user'.
 * 2. Correggi la riga della destrutturazione.
 */

const user = {
    id: 1,
    profilo: {
        username: "anna92",
        citta: "Roma"
    }
};

// CODICE BUGGATO
const { citta } = user;

console.log("L'utente vive a:", citta);
