// DATI (Oggetto Singolo)
// Immagina che questi dati arrivino da un server o da un database.
const utente = {
    nome: "Giulia",
    cognome: "Verdi",
    eta: 30,
    email: "giulia.verdi@example.com",
    telefono: "+39 333 1234567",
    indirizzo: "Via Roma 10, Milano",
    professione: "Graphic Designer",
    fotoUrl: "https://randomuser.me/api/portraits/women/44.jpg", // Url di una foto vera
    verificato: true // Prova a mettere false per vedere cosa succede
};


// 1. SELEZIONE ELEMENTI DOM
// Esercizio: Completa i querySelector abbinando gli ID corretti presi dall'HTML
const elNomeCompleto = document.querySelector(''); // es. #nome-completo
const elRuolo = document.querySelector('');
const elEmail = document.querySelector('');
const elTelefono = document.querySelector('');
const elIndirizzo = document.querySelector('');
const elImmagine = document.querySelector(''); 
const boxVerifica = document.querySelector('');


/**
 * 2. RIEMPIMENTO DATI
 * Ora devi prendere i dati dall'oggetto 'utente' e metterli dentro gli elementi HTML.
 */

// A. Testo Semplice (textContent)
// elNomeCompleto.textContent = ...
// ...

// B. Attributi (src)
// elImmagine.src = ...
// ...


// C. Logica Condizionale
// Se l'utente è "verificato" (true), mostriamo il box verde.
// Altrimenti lo lasciamo nascosto (o lo nascondiamo esplicitamente).


/**
 * 3. EVENTI
 * Fai funzionare il bottone "Stampa Profilo"
 * Quando cliccato, deve lanciare un alert() con scritto: "Sto stampando il profilo di [NOME]"
 * Alert permette di mostrare un messaggio all'utente e bloccare l'esecuzione finché non preme "OK".
 * Il suo utilizzo è semplice: alert("Messaggio da mostrare");
 */
const btnStampa = document.querySelector('#btn-stampa');
