// TUTORIAL INTERATTIVO: Oggetti in JavaScript
// Segui gli step, leggi i commenti e completa i TODO.
// Esegui questo file con Node.js per verificare i risultati.

/**
 * ===========================================
 * === 1. Creazione di un Oggetto ===
 * 
 * Un oggetto è una collezione di coppie chiave-valore.
 * Si usano le parentesi graffe { }.
 * Esempio: let palla = { colore: "Rosso", dimensione: 10 };
 */

// TODO: Crea un oggetto chiamato 'persona' con le proprietà: 'nome' (stringa) e 'eta' (numero).
// TODO: Stampa l'intero oggetto in console.
// OUTPUT ATTESO: { nome: 'Mario', eta: 25 }


/**
 * ===========================================
 * === 2. Accesso con la "Dot Notation" (Punto) ===
 * 
 * Per leggere un valore, usiamo il punto seguito dal nome della proprietà.
 * Esempio: palla.colore
 */

let cane = {
    razza: "Labrador",
    colore: "Miele",
    haIlGuinzaglio: true
};

// TODO: Stampa solo la razza del cane usando il punto.
// OUTPUT ATTESO: Labrador


/**
 * ===========================================
 * === 3. Accesso con la "Bracket Notation" (Parentesi Quadre) ===
 * 
 * Possiamo anche usare le parentesi quadre e il nome della proprietà come stringa.
 * Questo è utile se il nome della proprietà contiene spazi o caratteri speciali.
 * Esempio: palla["colore"]
 */

let libro = {
    "titolo libro": "Il Signore degli Anelli",
    pagine: 500
};

// TODO: Stampa il titolo del libro usando le parentesi quadre e le virgolette.
// OUTPUT ATTESO: Il Signore degli Anelli


/**
 * ===========================================
 * === 4. Modifica di una Proprietà ===
 * 
 * Gli oggetti sono mutabili. Puoi cambiare il valore di una proprietà esistente.
 * Esempio: palla.colore = "Blu";
 */

let studente = {
    nome: "Luca",
    voto: 6
};

// TODO: Cambia il voto dello studente a 10. Poi stampa l'oggetto aggiornato.
// OUTPUT ATTESO: { nome: 'Luca', voto: 10 }


/**
 * ===========================================
 * === 5. Aggiungere/Rimuovere Proprietà ===
 * 
 * Se assegni un valore a una proprietà che non esiste, JavaScript la crea.
 * Esempio: palla.materiale = "Gomma";
 * 
 * Puoi rimuovere una proprietà usando la parola chiave 'delete'.
 * Esempio: delete palla.dimensione;
 */

let prodotto = {
    id: 123,
    nome: "Smartphone",
    prezzo: 800
};

// TODO: Aggiungi una proprietà 'marca' con valore 'Samsung'.
// TODO: Rimuovi la proprietà 'id' dall'oggetto. Stampa l'oggetto finale.
// OUTPUT ATTESO: { nome: 'Smartphone', prezzo: 800, marca: 'Samsung' }


/**
 * ===========================================
 * === 6. Oggetti Annidati ===
 * 
 * Le proprietà di un oggetto possono essere altri oggetti.
 * Esempio: let auto = { motore: { tipo: "V8", cavalli: 400 } };
 */

let computer = {
    marca: "Dell",
    specifiche: {
        ram: "16GB",
        cpu: "Intel i7"
    }
};

// TODO: Stampa la quantità di RAM del computer accedendo all'oggetto annidato.
// OUTPUT ATTESO: 16GB


/**
 * ===========================================
 * === 7. Destrutturazione di Oggetti ===
 * 
 * La destrutturazione permette di estrarre proprietà da un oggetto in variabili.
 * Esempio: let { colore, dimensione } = palla;
 */

// TODO: Destruttura l'oggetto 'computer' per ottenere 'marca' e 'specifiche' in variabili separate.
// TODO: Poi destruttura 'specifiche' per ottenere 'ram' e 'cpu' in variabili separate.
