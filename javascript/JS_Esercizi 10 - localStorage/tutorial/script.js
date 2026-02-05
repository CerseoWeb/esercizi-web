// TUTORIAL INTERATTIVO: JSON e LocalStorage

// Funzione pricipale del tutorial
function eseguiTutorial() {

    /**
     * ===========================================
     * === 1. Convertire Oggetti in Stringhe (Serializzazione) ===
     * Il LocalStorage può salvare SOLO stringhe.
     * Per salvare un oggetto o un array, dobbiamo convertirlo usando JSON.stringify().
     */
    const studente = {
        nome: "Alessandro",
        corso: "JavaScript",
        voto: 8
    };

    // TODO: Converti l'oggetto 'studente' in una stringa JSON e salvala nella variabile 'studenteStringa'.
    let studenteStringa = ""; 

    // Visualizzazione Risultato
    mostraOutput(1, studenteStringa);


    /**
     * ===========================================
     * === 2. Convertire Stringhe in Oggetti (Deserializzazione) ===
     * Quando leggiamo dal LocalStorage, otteniamo una stringa.
     * Per riutilizzarla come codice JS, dobbiamo convertirla indietro usando JSON.parse().
     */
    const datiRicevuti = '{"id": 101, "utente": "Alessandro", "attivo": true}';

    // TODO: Converti la stringa 'datiRicevuti' in un vero oggetto JavaScript e salvalo in 'oggettoDati'.
    // Nota: Inizializziamo a {} vuoto per evitare errori se non completi il TODO
    let oggettoDati = {}; 

    // Visualizzazione Risultato (mostriamo solo la proprietà 'utente')
    mostraOutput(2, oggettoDati.utente);


    /**
     * ===========================================
     * === 3. Salvare nel LocalStorage ===
     * Usiamo localStorage.setItem('chiave', 'valore') per salvare i dati.
     * Ricorda: il valore deve essere una stringa!
     */
    const preferenze = {
        tema: "scuro",
        notifiche: true
    };

    // TODO: Salva l'oggetto 'preferenze' (convertito in stringa!) nel localStorage con la chiave "impostazioni_utente".
    // SUGGERIMENTO: Usa JSON.stringify(preferenze) dentro il setItem.
    

    // Visualizzazione Risultato (Leggiamo direttamente dallo storage per verificare)
    const verificaStorage = localStorage.getItem("impostazioni_utente");
    mostraOutput(3, verificaStorage ? "Salvato con successo: " + verificaStorage : "");


    /**
     * ===========================================
     * === 4. Leggere dal LocalStorage ===
     * Usiamo localStorage.getItem('chiave') per recuperare i dati.
     */

    // TODO: Recupera la stringa salvata alla chiave "impostazioni_utente", convertila in oggetto e assegna il tema a 'temaSalvato'.
    let temaSalvato = "";

    // Visualizzazione Risultato
    mostraOutput(4, temaSalvato);


    /**
     * ===========================================
     * === 5. Gestire gli Array (Liste) ===
     * Spesso salviamo liste di cose (es. dipendenti, libri).
     * Il processo è identico: Array -> JSON.stringify -> Storage.
     */
    const nuoviFilm = [
        { titolo: "Inception", anno: 2010 },
        { titolo: "Matrix", anno: 1999 }
    ];

    // TODO: 1. Aggiungi un nuovo film all'array 'nuoviFilm' usando .push() (es. { titolo: "Interstellar", anno: 2014 }).
    // TODO: 2. Salva l'intero array aggiornato nel localStorage con chiave "lista_film" (ricorda JSON.stringify).


    // Visualizzazione Risultato
    mostraOutput(5, localStorage.getItem("lista_film"));


    /**
     * ===========================================
     * === 6. Il Pattern "Carica o Inizializza" ===
     * Quando l'app parte, dobbiamo caricare i dati.
     * Ma se è la prima volta che l'utente entra, il localStorage sarà null.
     */

    // Immagina di provare a caricare una chiave che non esiste:
    const chiaveInesistente = localStorage.getItem("chiave_mai_usata");

    // TODO: Completa la riga sotto per assegnare a 'listaSicura' il valore parsato di 'chiaveInesistente', 
    // OPPURE un array vuoto [] se il dato è null.
    let listaSicura = null; 

    // Visualizzazione Risultato
    mostraOutput(6, listaSicura);
}