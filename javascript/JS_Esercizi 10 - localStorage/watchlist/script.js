/**
 * Esercizio: Watchlist Film
 * 
 * CONTESTO:
 * Abbiamo un HTML con due input (titolo, anno) e una lista vuota.
 * Vogliamo salvare la lista dei film da vedere nel browser.
 * 
 * STRUTTURA DATI:
 * Array di oggetti: [{ titolo: "Dune", anno: "2021" }, ...]
 * 
 * ISTRUZIONI:
 * 1. Completa 'caricaFilm' per leggere dal localStorage (o inizializzare array vuoto).
 * 2. Completa 'aggiungiFilm' per aggiornare l'array, salvarlo e aggiornare la UI.
 * 3. Usa JSON.parse e JSON.stringify.
 */

// RIFERIMENTI DOM
const inputTitolo = document.querySelector('#titolo');
const inputAnno = document.querySelector('#anno');
const listaFilm = document.querySelector('#lista-film');
const btnAdd = document.querySelector('#btn-add');

// STATO DELL'APP con alcuni esempi iniziali (per testare, da rimuovere o modificare in seguito)
let filmWatchlist = [
    { titolo: "Dune", anno: "2021" },
    { titolo: "Inception", anno: "2010" },
    { titolo: "Matrix", anno: "1999" },
    { titolo: "Interstellar", anno: "2014" },
    { titolo: "Il Signore degli Anelli: La Compagnia dell'Anello", anno: "2001" },
    { titolo: "Harry Potter e la Pietra Filosofale", anno: "2001" }
];


/**
 * STEP 1: Caricamento Iniziale
 * Leggi la chiave "my_watchlist" dal localStorage.
 * Se esiste, parsa la stringa e riempi l'array 'filmWatchlist'.
 * Se non esiste, lascia l'array vuoto.
 * Infine chiama visualizzaLista().
 */
function caricaLista() {
}


/**
 * STEP 2: Funzione Renderizza (visualizza) la lista
 * Pulisce l'HTML e ricrea gli elementi basandosi sull'array filmWatchlist
 * 1. Pulisci il contenuto di 'listaFilm'.
 * 2. Per ogni film in 'filmWatchlist', crea un <li> con dentro --> <p>titolo (anno)</p>
 * 3. Aggiungi l'<li> a 'listaFilm'.
 */
function visualizzaLista() {
}


/**
 * STEP 3: Aggiunta e Salvataggio
 * Quando l'utente clicca "Aggiungi Film":
 * 1. Cattura i valori dagli input.
 * 2. Crea un oggetto film solo se entrambi i campi hanno un valore.
 * 3. Crea un oggetto con i dati degli input.
 * 4. Pushalo nell'array filmWatchlist.
 * 5. Salva l'intero array aggiornato nel localStorage (JSON.stringify!).
 * 6. Chiama visualizzaLista().
 */




// AVVIO
caricaLista();




/************************************************************************/
/************************* ESERCIZI EXTRA *******************************/
/************************************************************************/

/**
 * Esercizio Extra 1: Rimuovere Elementi
 * 
 * OBIETTIVO:
 * Aggiungere un bottone "Elimina" accanto a ogni film che rimuova il film
 * dall'array E aggiorni il localStorage.
 * 
 * Questo esercizio RICHIEDE di modificare la funzione 'visualizzaLista'.
 * 
 * Possibile Implementazione:
 * 1. Usare un ciclo for con la variabile indice (let i = 0; i < ...; i++).
 * 2. Dentro il ciclo crea un bottone con testo "Elimina" o "X" (mettere anche la classe corretta già presente in CSS).
 * 3. Aggiungi un eventListener al bottone che:
 *    - Usa l'indice 'i' per fare filmWatchlist.splice(i, 1) e rimuovere l'elemento.
 *    - Salva l'array aggiornato nel localStorage.
 * 4. Richiamare visualizzaLista().
 * Nota: Ricorda che ogni volta che visualizzi la lista, stai ricreando TUTTI gli elementi HTML,
 * quindi i vecchi listener vengono persi. Devi rimetterli ogni volta.
 */


/**
 * Esercizio Extra 2: Stato "Visto/Non Visto"
 * 
 * OBIETTIVO:
 * Aggiungi una checkbox accanto a ogni film. 
 * Se l'utente la spunta, lo stato "visto" del film (true/false) deve essere salvato.
 * 
 * LOGICA:
 * 1. Modifica l'oggetto iniziale del film aggiungendo la proprietà --> visto: false.
 * 2. Nella render, per ogni elemento <li>, crea un <input type="checkbox">.
 * 3. Imposta checkbox.checked = film.visto.
 * 4. All'evento 'change' della checkbox:
 *    - Aggiorna filmWatchlist[index].visto = checkbox.checked
 *    - Salva tutto nel localStorage.
 *    - (Opzionale) Aggiungi una classe CSS per barrare il testo se visto --> text-decoration: line-through.
 *      Nota: devi aggiornare la classe del <p> dentro l'li in base a film.visto.
 */
