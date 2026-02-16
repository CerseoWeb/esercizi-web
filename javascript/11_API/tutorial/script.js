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
    // Questa funzione simula un server che ci mette 1 secondo a rispondere
    // TODO: Aggiungi 'await' prima di wait(2000) per far funzionare l'attesa.
    wait(1000);

    mostraOutput(1, "Operazione completata!");

    /**
     * ===========================================
     * === 2. Async/Await ===
     * Per usare 'await', la funzione deve essere dichiarata come 'async'.
     * Questo è un modo elegante per scrivere codice asincrono.
     * Crea una funzione async chiamata 'aspetta2Secondi' che aspetta 2 secondi (usa la funzione wait).
     * Poi stampa "2 secondi sono passati!" e mostra il risultato usando mostraOutput(2, "2 secondi sono passati!").
     * Chiama la funzione subito dopo averla definita.
     */

    mostraOutput(2, "");

    
    /**
     * ===========================================
     * === 3. Fetch Base (GET) ===
     * Usiamo `fetch(url)` per chiamare un server vero.
     */
    // TODO: crea una costante 'urlBase' con l'indirizzo dettato a lezione
    // TODO: Esegui una fetch a quell'URL.
    // Ricorda di mettere 'await' davanti a fetch!
    const urlBase = "https://sito-finto.com";
    const rispostaGrezza = null;

    mostraOutput(3, rispostaGrezza ? "Risposta ricevuta (Response Object)" : "");


    /**
     * ===========================================
     * === 4. Estrarre il JSON ===
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

    mostraOutput(4, nomeUtente);


    /**
     * ===========================================
     * === 5. Gestione Errori (Try / Catch) ===
     * Se il server è giù o l'URL è sbagliato, fetch esplode.
     * Usiamo try/catch per gestire il problema.
     */
    try {
        // TODO: Prova a fare una fetch a un URL sbagliato (es. 'https://sito-finto.com')
        // Ricorda l'await!

        mostraOutput(5);
    } catch (errore) {
        mostraOutput(5, errore.message);
    }


    /**
     * ===========================================
     * === 6. Liste di Dati (Array) ===
     * Spesso riceviamo un array di oggetti. Dobbiamo ciclarlo.
     */
    // Scarichiamo 5 utenti
    try {
        const responseUtenti = await fetch(`${urlBase}/users?_limit=5`);
        const listaUtenti = await responseUtenti.json();

        // TODO: Usa .map() o un ciclo for per creare un array contenente SOLO i nomi degli utenti.
        // Esempio: const nomi = listaUtenti.map(u => u.name);
        const soloNomi = []; 

        mostraOutput(6, soloNomi);
    } catch (errore) {
        mostraOutput(6, "");
    }


    /**
     * ===========================================
     * === 7. Inviare Dati (POST) ===
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

    try {
        // TODO: Completa la fetch.
        // Aggiungi method: 'POST'
        // Aggiungi headers: { 'Content-Type': 'application/json' }
        // Aggiungi body: JSON.stringify(nuovoUtente)
        const rispInvio = await fetch(`${urlBase}/posts`, {
            
        });

        const risultatoInvio = await rispInvio.json();
        mostraOutput(7, risultatoInvio);
    } catch (errore) {
        mostraOutput(7, "");
    }
}