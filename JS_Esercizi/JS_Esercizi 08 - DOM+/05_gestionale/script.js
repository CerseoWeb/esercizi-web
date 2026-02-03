// DATI INIZIALI
const dipendenti = [
    { nome: "Mario Rossi", ruolo: "Sviluppatore" },
    { nome: "Luigi Bianchi", ruolo: "Sviluppatore" },
    { nome: "Paolo Gialli", ruolo: "Sviluppatore" },
    { nome: "Anna Neri", ruolo: "Sviluppatore" },
    { nome: "Carlo Verdi", ruolo: "Project Manager" },
    { nome: "Luca Bianchi", ruolo: "Designer" },
];

// RIFERIMENTI DOM
const tbody = document.querySelector('#tabella-corpo');
const btnAggiungi = document.querySelector('#btn-aggiungi');
const inputNome = document.querySelector('#input-nome');
const inputRuolo = document.querySelector('#input-ruolo');
const inputRicerca = document.querySelector('#input-ricerca');


/**
 * FUNZIONE PRINCIPALE: Visualizza Tabella
 * Questa funzione deve:
 * - Pulire il contenuto del tbody
 * - Per ogni dipendente nell'array passato come argomento:
 *   - Creare una riga (usando la funzione creaRiga)
 *   - Aggiungere la riga al tbody
 */
function visualizzaTabella(lista) {

}


/**
 * FUNZIONE 1: Crea Riga
 * Questa funzione deve:
 * - Creare una riga (tr)
 * - Creare 3 celle (td): Nome, Ruolo, Azioni
 * - Popolare le celle Nome e Ruolo con i dati corretti
 * - Nella cella Azioni, aggiungere un bottone "Elimina"
 * - Aggiungere un event listener al bottone "Elimina" per rimuovere il dipendente dall'array e visualizzare la tabella
 * - Aggiungere le tre celle alla riga
 * - Aggiungere la riga al tbody
 * 
 * Nota: Usare il metodo dipendenti.splice(i, 1) per rimuovere l'elemento dall'array
 *       e poi richiamare visualizzaTabella(dipendenti) per mostrare la tabella aggiornata.
 */
function creaRiga(dipendente, indice) {

}


/**
 * FUNZIONE 2: Aggiungi Dipendente
 * 1. Leggere i valori degli input
 * 2. SE non sono vuoti:
 *   - Creare un oggetto { nome: ..., ruolo: ... }
 *   - Aggiungerlo all'array 'dipendenti'
 *   - Richiamare visualizzaTabella() per aggiornare la vista
 *   - Pulire gli input (settarli a stringa vuota)
 */
btnAggiungi.addEventListener('click', () => {
    
});


/**
 * FUNZIONE 3: Ricerca
 * 1. Leggere il testo nel campo ricerca
 * 2. Filtrare l'array 'dipendenti' usando:
 *   - array.filter()
 *   - dipendente.nome.includes(testoRicerca)
 * 3. Passare l'array filtrato a visualizzaTabella()
 */
inputRicerca.addEventListener('input', () => {
    
});


/**
 * FUNZIONE 4: Emoji per Ruolo
 * Aggiungere automaticamente un'emoji accanto al nome in base al ruolo.
 * 
 * Passi:
 * 1. Sviluppa la funzione getEmojiPerRuolo(ruolo) che ritorna:
 *   - "💻" per "Sviluppatore"
 *   - "🎨" per "Designer"
 *   - "👤" per altri ruoli
 * 2. Modifica la funzione creaRiga per usare getEmojiPerRuolo
 * 3. Usare la concatenazione stringhe per la cellaNome.textContent = emoji + " " + dipendente.nome;
 */
function getEmojiPerRuolo(ruolo) {
    // Implementa la logica qui
}


// AVVIO
// Chiamare visualizzaTabella(dipendenti) all'inizio per mostrare i dati iniziali
visualizzaTabella(dipendenti);



/************************************************************************/
/************************* ESERCIZI EXTRA *******************************/
/************************************************************************/

/** ESERCIZIO EXTRA:
 * Migliorare la funzione creaRiga per aggiungere una classe CSS speciale
 * alle righe dei dipendenti che sono "Project Manager".
 * 
 * Passi:
 * 1. Aggiungi una classe .manager (o .evidenziato) che evidenzi la riga (es. background-color: #feffae;)
 * 2. Modificare la funzione creaRiga:
 *   - Controllare se dipendente.ruolo === "Project Manager"
 *   - Se vero, aggiungere una classe CSS speciale alla riga (es. riga.classList.add('manager'))
 */

/** ESERCIZIO EXTRA 2:
 * Aggiungere nel file index.html un bottone "Elimina Tutti" sopra la tabella.
 * 
 * Passi:
 * 1. Aggiungere il bottone con un id specifico (es. id="btn-elimina-tutti")
 * 2. Stilizzare il bottone con CSS se necessario (colore rosso per esempio)
 * 3. Aggiungere un event listener al bottone nel file script.js
 * 4. Nell'event listener, svuotare l'array dipendenti (es. dipendenti.length = 0)
 * 5. Richiamare visualizzaTabella(dipendenti) per aggiornare la vista
 */

/**
 * ESERCIZIO EXTRA 3:
 * Aggiungere un contatore sopra la tabella che mostra il numero totale di dipendenti.
 * 
 * Passi:
 * 1. Aggiungere un elemento HTML (es. un div o span) con un id specifico (es. id="contatore-dipendenti")
 * 2. Mettere questo elemento sopra la tabella e stilizzarlo con CSS (metterlo almeno a destra)
 * 3. Creare una funzione aggiornaContatore()
 *  - Questa funzione deve aggiornare il contenuto dell'elemento contatore con il numero di dipendenti (es. dipendenti.length)
 * 4. Chiamare aggiornaContatore() ogni volta che la tabella viene aggiornata (dopo aggiungere, eliminare, o filtrare dipendenti)
 */
