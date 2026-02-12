// TUTORIAL INTERATTIVO: API, Fetch e Async/Await

// NON TOCCARE
// Funzioni di supporto per il tutorial
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms)); // Simula server lento

// Funzione pricipale del tutorial
async function eseguiTutorial() {

    /**
     * ===========================================
     * === 1. Il Concetto di Attesa ===
     * JavaScript di solito corre veloce. Con i server, deve aspettare.
     * La keyword 'await' serve a dire "Fermati qui finché l'operazione non finisce".
     */
    // Questa funzione simula un server che ci mette 2 secondi a rispondere
    // TODO: Aggiungi 'await' prima di wait(2000) per far funzionare l'attesa.
    wait(2000);

    mostraOutput(1, "Operazione completata!");


    /**
     * ===========================================
     * === 2. Fetch Base (GET) ===
     * Usiamo `fetch(url)` per chiamare un server vero.
     */
    // TODO: crea una costante 'urlBase' con l'indirizzo dettato a lezione
    // TODO: Esegui una fetch a quell'URL.
    // Ricorda di mettere 'await' davanti a fetch!
    const urlBase = "https://sito-finto.com";
    const rispostaGrezza = null;

    mostraOutput(2, rispostaGrezza ? "Risposta ricevuta (Response Object)" : "");


    /**
     * ===========================================
     * === 3. Estrarre il JSON ===
     * La risposta grezza contiene status code, headers, ecc.
     * A noi servono i dati. Dobbiamo usare il metodo .json().
     * ANCHE .json() è asincrono e vuole 'await'.
     */
    let nomeUtente = "";

    if (rispostaGrezza) {
        // TODO: Estrai i dati usando: await rispostaGrezza.json()
        const dati = {}; 

        // TODO: Assegna a nomeUtente il valore di dati.nome
        nomeUtente = "NOME MANCANTE"; 
    }

    mostraOutput(3, nomeUtente);


    /**
     * ===========================================
     * === 4. Gestione Errori (Try / Catch) ===
     * Se il server è giù o l'URL è sbagliato, fetch esplode.
     * Usiamo try/catch per gestire il problema.
     */
    try {
        // TODO: Prova a fare una fetch a un URL sbagliato (es. 'https://sito-finto.com')
        // Ricorda l'await!

        mostraOutput(4);
    } catch (errore) {
        mostraOutput(4, errore.message);
    }


    /**
     * ===========================================
     * === 5. Liste di Dati (Array) ===
     * Spesso riceviamo un array di oggetti. Dobbiamo ciclarlo.
     */
    // Scarichiamo 5 utenti
    const responseUtenti = await fetch(`${urlBase}/users?_limit=5`);
    const listaUtenti = await responseUtenti.json();

    // TODO: Usa .map() o un ciclo for per creare un array contenente SOLO i nomi degli utenti.
    // Esempio: const nomi = listaUtenti.map(u => u.name);
    const soloNomi = []; 

    mostraOutput(5, soloNomi);


    /**
     * ===========================================
     * === 6. Inviare Dati (POST) ===
     * Per inviare dati, fetch accetta un secondo parametro di opzioni.
     */
    // TODO: Completa l'oggetto con i dati mancanti
    const nuovoUtente = {
        nome: "",
        cognome: "",
        dataNascita: "", // Formato: 'YYYY-MM-DD'
        comune: "",
        email: "",
        attivo: true,
        avatar: "https://ui-avatars.com/api/?name=Nome+Cognome"
    };

    // TODO: Completa la fetch.
    // Aggiungi method: 'POST'
    // Aggiungi headers: { 'Content-Type': 'application/json' }
    // Aggiungi body: JSON.stringify(nuovoUtente)
    const rispInvio = await fetch(`${urlBase}/posts`, {
        
    });

    const risultatoInvio = await rispInvio.json();
    mostraOutput(6, risultatoInvio);
}