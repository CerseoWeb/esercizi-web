// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║           📚  LA BIBLIOTECA ONLINE — ESERCIZIO API (GUIDATO)              ║
// ║                                                                            ║
// ║  Questo esercizio ti insegna a comunicare con un SERVER usando fetch().    ║
// ║  Imparerai le operazioni CRUD:                                            ║
// ║                                                                            ║
// ║  📥 GET    — leggere dati dal server                                      ║
// ║  📤 POST   — inviare/creare nuovi dati                                   ║
// ║  ✏️  PATCH  — modificare dati esistenti                                    ║
// ║  🗑️  DELETE — eliminare dati                                               ║
// ║                                                                            ║
// ║  COME FUNZIONA QUESTO ESERCIZIO:                                          ║
// ║  Per ogni step trovi:                                                      ║
// ║  1. 💡 ESEMPIO — codice GIÀ FUNZIONANTE che gira davvero                 ║
// ║  2. ✏️  TODO — devi RIFARE la stessa cosa per un caso diverso              ║
// ║                                                                            ║
// ║  PRIMA DI INIZIARE:                                                       ║
// ║  1. Apri un terminale nella cartella "server-api"                         ║
// ║  2. Lancia: npm start                                                     ║
// ║  3. Il server sarà attivo su http://localhost:5000/api                     ║
// ║  4. I libri sono su http://localhost:5000/api/books                        ║
// ║                                                                            ║
// ║  STRUTTURA DI UN LIBRO NEL DATABASE:                                      ║
// ║  {                                                                         ║
// ║      "id": 1,                                                              ║
// ║      "titolo": "Il nome della rosa",                                      ║
// ║      "autore": "Umberto Eco",                                             ║
// ║      "genere": "Giallo",                                                  ║
// ║      "pagine": 512,                                                       ║
// ║      "letto": true                                                         ║
// ║  }                                                                         ║
// ╚══════════════════════════════════════════════════════════════════════════════╝


// ============================================================================
// SETUP — URL BASE E SELEZIONE ELEMENTI (già fatto, controlla URL)
// ============================================================================

const BASE_URL = "http://localhost:5000/api";

// Elementi della pagina
const btnCaricaTutti = document.querySelector("#btn-carica-tutti");
const btnDettaglio = document.querySelector("#btn-dettaglio");
const btnAggiungi = document.querySelector("#btn-aggiungi");
const btnModifica = document.querySelector("#btn-modifica");
const btnElimina = document.querySelector("#btn-elimina");

const listaLibri = document.querySelector("#lista-libri");
const dettaglioLibro = document.querySelector("#dettaglio-libro");
const loading = document.querySelector("#loading");
const messaggio = document.querySelector("#messaggio");

const statTotale = document.querySelector("#stat-totale");
const statLetti = document.querySelector("#stat-letti");
const statDaLeggere = document.querySelector("#stat-da-leggere");


// ============================================================================
// FUNZIONI HELPER (già fatte, NON modificare)
// ============================================================================

/**
 * Mostra lo spinner di caricamento
 */
function mostraLoading() {
    loading.classList.add("visibile");
}

/**
 * Nasconde lo spinner di caricamento
 */
function nascondiLoading() {
    loading.classList.remove("visibile");
}

/**
 * Mostra un messaggio di feedback (successo o errore)
 * @param {string} testo - Il testo del messaggio
 * @param {string} tipo - "successo" oppure "errore"
 */
function mostraMessaggio(testo, tipo) {
    messaggio.textContent = testo;
    messaggio.className = "";
    messaggio.classList.add("msg-" + tipo);
    messaggio.style.display = "block";
    setTimeout(() => {
        messaggio.style.display = "none";
    }, 3000);
}

/**
 * Aggiorna le statistiche nel DOM
 * @param {Array} libri - L'array di libri ricevuto dal server
 */
function aggiornaStatistiche(libri) {
    const totale = libri.length;
    const letti = libri.filter((libro) => libro.letto === true).length;
    const daLeggere = totale - letti;
    statTotale.textContent = totale;
    statLetti.textContent = letti;
    statDaLeggere.textContent = daLeggere;
}

/**
 * Crea l'HTML di un singolo libro nella lista
 * @param {Object} libro - L'oggetto libro dal server
 * @returns {string} - L'HTML della riga
 */
function creaRigaLibro(libro) {
    const badgeLetto = `
    <span class="letto-badge ${libro.letto ? "letto-si" : "letto-no"}">
        ${libro.letto ? "✅ Letto" : "📖 Da leggere"}
    </span>`;

    return `
    <li>
        <div class="info-libro">
            <div class="titolo-libro">${libro.titolo}</div>
            <div class="dettagli-libro">
                ✍️ ${libro.autore} | 📄 ${libro.pagine} pagine | ${badgeLetto}
            </div>
        </div>
        <div style="color:#94867a; font-size:0.82em;">ID: ${libro.id}</div>
    </li>`;
}




// ============================================================================
// STEP 1 — GET: LEGGERE DATI DAL SERVER
// ============================================================================

// ┌──────────────────────────────────────────────────────────────────────────┐
// │ 📖 CONCETTI CHIAVE                                                      │
// │                                                                          │
// │ • fetch(url) fa una richiesta al server (di default è GET)              │
// │ • fetch è ASINCRONO → usiamo async/await per aspettare la risposta      │
// │ • risposta.ok → true se il server ha risposto con successo              │
// │ • risposta.json() → converte la risposta in un oggetto/array JS         │
// │ • try/catch → gestisce gli errori (server spento, URL sbagliato, ecc.)  │
// └──────────────────────────────────────────────────────────────────────────┘

// ── 💡 ESEMPIO FUNZIONANTE ──────────────────────────────
// Questa funzione FUNZIONA GIÀ. Carica il libro con ID 1
// e stampa i suoi dati in console.
// Apri la Console (F12) per vedere il risultato.

async function esempioCaricaUnLibro() {
    try {
        const risposta = await fetch(BASE_URL + "/books/1");

        if (!risposta.ok) {
            throw new Error("Errore dal server: " + risposta.status);
        }

        const libro = await risposta.json();

        console.log("--- ESEMPIO GET singolo ---");
        console.log("Titolo:", libro.titolo);    // → "Il nome della rosa"
        console.log("Autore:", libro.autore);    // → "Umberto Eco"
        console.log("Oggetto completo:", libro);
    } catch (errore) {
        console.error("Errore nell'esempio:", errore.message);
    }
}

// Eseguiamo l'esempio automaticamente all'apertura della pagina:
esempioCaricaUnLibro();

// ── ✏️ ORA TOCCA A TE ──────────────────────────────────
// Hai visto come caricare UN libro.
// Adesso devi caricare TUTTI i libri e mostrarli nella lista.
//
// L'URL per tutti i libri è: BASE_URL + "/books"
// (senza /1 alla fine → restituisce un ARRAY invece di un oggetto)
//
// Devi:
// 1. Chiamare mostraLoading()
// 2. try/catch come nell'esempio sopra
// 3. Dentro il try:
//    a. fetch GET a BASE_URL + "/books"
//    b. Controllare risposta.ok
//    c. Convertire in JSON → sarà un ARRAY di libri
//    d. Svuotare la lista: listaLibri.innerHTML = ""
//    e. Per ogni libro, aggiungere una riga:
//       for (const libro of libri) {
//           listaLibri.innerHTML += creaRigaLibro(libro);
//       }
//    f. Aggiornare le statistiche: aggiornaStatistiche(libri)
//    g. mostraMessaggio("Libri caricati!", "successo")
// 4. Dentro il catch:
//    mostraMessaggio(errore.message, "errore")
// 5. Alla fine (dopo il catch): nascondiLoading()

async function caricaTuttiILibri() {
    // 👇 SCRIVI QUI IL TUO CODICE

}

// ✅ VERIFICA: Clicca "Carica Tutti i Libri" sulla pagina → appaiono 20 libri nella lista
//    Le statistiche mostrano: 20 totali, 10 letti, 10 da leggere




// ============================================================================
// STEP 2 — GET CON ID: LEGGERE UN SINGOLO ELEMENTO
// ============================================================================

// ── 💡 ESEMPIO FUNZIONANTE ──────────────────────────────
// Questa funzione FUNZIONA GIÀ. Carica il libro con ID 2
// e lo mostra nel div #dettaglio-libro.

async function esempioMostraDettaglio() {
    try {
        const risposta = await fetch(BASE_URL + "/books/2");

        if (!risposta.ok) {
            throw new Error("Libro non trovato (errore " + risposta.status + ")");
        }

        const libro = await risposta.json();

        // Mostriamo il dettaglio nella pagina
        dettaglioLibro.innerHTML = `
            <h3>${libro.titolo}</h3>
            <p class="info">✍️ Autore: ${libro.autore}</p>
            <p class="info">📂 Genere: ${libro.genere}</p>
            <p class="info">📄 Pagine: ${libro.pagine}</p>
            <p class="info">Stato: ${libro.letto ? "Letto ✅" : "Da leggere 📖"}</p>
        `;

        dettaglioLibro.classList.add("visibile");

        console.log("--- ESEMPIO GET per ID ---");
        console.log("Caricato:", libro.titolo);
    } catch (errore) {
        console.error("Errore nell'esempio:", errore.message);
    }
}

// Eseguiamo l'esempio (mostra il libro 2 nel dettaglio):
esempioMostraDettaglio();

// ── ✏️ ORA TOCCA A TE ──────────────────────────────────
// Hai visto come caricare un libro con un ID fisso (2).
// Adesso devi fare la stessa cosa, ma leggendo l'ID dall'input.
//
// Per leggere l'input:
//   const id = document.querySelector("#input-id").value;
//
// ⚠️ .value restituisce una STRINGA. Per validare:
//   if (!id || isNaN(id)) { mostraMessaggio("Inserisci un ID valido!", "errore"); return; }
//
// Devi:
// 1. Leggere l'ID dall'input
// 2. Validare che sia un numero
// 3. mostraLoading()
// 4. try/catch come nell'esempio sopra, ma con l'ID dinamico:
//    fetch(BASE_URL + "/books/" + id)
// 5. Nel catch: mostraMessaggio(errore.message, "errore")
// 6. Alla fine: nascondiLoading()

async function cercaLibroPerId() {
    // 👇 SCRIVI QUI IL TUO CODICE

}

// ✅ VERIFICA: Inserisci "3" nella pagina HTML → vedi "Il piccolo principe"
//    Inserisci "99" → vedi un messaggio di errore




// ============================================================================
// STEP 3 — POST: CREARE UN NUOVO ELEMENTO
// ============================================================================

// ── 💡 ESEMPIO FUNZIONANTE ──────────────────────────────
// Questa funzione FUNZIONA GIÀ. Aggiunge un libro fisso
// ("Moby Dick") al server e lo stampa in console.
// Il server gli assegna un ID automaticamente.

async function esempioAggiungiLibro() {
    try {
        const risposta = await fetch(BASE_URL + "/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                titolo: "Moby Dick",
                autore: "Herman Melville",
                genere: "Narrativa",
                pagine: 635,
                letto: false
            })
        });

        if (!risposta.ok) {
            throw new Error("Errore nella creazione: " + risposta.status);
        }

        const libroCreato = await risposta.json();

        console.log("--- ESEMPIO POST ---");
        console.log("Libro creato:", libroCreato);
        console.log("ID assegnato dal server:", libroCreato.id);
    } catch (errore) {
        console.error("Errore nell'esempio POST:", errore.message);
    }
}

// Lo eseguiamo per vedere il risultato in console:
esempioAggiungiLibro();

// ── ✏️ ORA TOCCA A TE ──────────────────────────────────
// Hai visto come fare una POST con dati fissi.
// Adesso devi fare la stessa cosa, ma leggendo i dati dal FORM.
//
// Per leggere i campi:
//   const titolo = document.querySelector("#input-titolo").value;
//   const autore = document.querySelector("#input-autore").value;
//   const genere = document.querySelector("#select-genere").value;
//   const pagine = parseInt(document.querySelector("#input-pagine").value);
//
// Devi:
// 1. Leggere i valori dal form
// 2. Validare che titolo e autore non siano vuoti:
//    if (!titolo || !autore) { mostraMessaggio("Compila titolo e autore!", "errore"); return; }
// 3. mostraLoading()
// 4. try/catch:
//    a. Creare l'oggetto: { titolo, autore, genere: genere || "Narrativa", pagine: pagine || 0, letto: false }
//    b. Fare la fetch POST (come nell'esempio sopra, ma con i dati del form)
//    c. Controllare risposta.ok
//    d. mostraMessaggio("Libro aggiunto!", "successo")
//    e. Svuotare gli input (metti .value = "")
//    f. Ricaricare la lista: caricaTuttiILibri()
// 5. Nel catch: mostraMessaggio(errore.message, "errore")
// 6. Alla fine: nascondiLoading()

async function aggiungiLibro() {
    // 👇 SCRIVI QUI IL TUO CODICE

}

// ✅ VERIFICA: Compila il form, clicca "Aggiungi Libro"
//    → Il nuovo libro appare nella lista, gli input si svuotano




// ============================================================================
// STEP 4 — PATCH: MODIFICARE UN ELEMENTO ESISTENTE (UPDATE PARZIALE)
// ============================================================================

// ┌──────────────────────────────────────────────────────────────────────────┐
// │ 📖 CONCETTI CHIAVE                                                      │
// │                                                                          │
// │ Per MODIFICARE un dato esistente, usiamo PATCH (o PUT).                 │
// │                                                                          │
// │ DIFFERENZA:                                                              │
// │ • PUT   → sostituisce TUTTO l'oggetto (devi mandare tutti i campi)     │
// │ • PATCH → modifica SOLO i campi che vuoi (più comodo!)                 │
// │                                                                          │
// │ Esempio: voglio cambiare solo "letto" da false a true.                  │
// │ Con PATCH: mando solo { letto: true }                                   │
// │ Con PUT: dovrei mandare { id, titolo, autore, genere, pagine, letto }  │
// │                                                                          │
// │ Per specificare QUALE elemento modificare → l'ID va nell'URL.           │
// └──────────────────────────────────────────────────────────────────────────┘

// ── 💡 ESEMPIO FUNZIONANTE ──────────────────────────────
// Questa funzione FUNZIONA GIÀ. Segna il libro con ID 4 ("1984")
// come "letto" e stampa il risultato in console.
//
// PATCH modifica SOLO i campi che mandi nel body.
// Non serve mandare tutto l'oggetto, solo ciò che cambia.

async function esempioModificaLibro() {
    try {
        const risposta = await fetch(BASE_URL + "/books/4", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                letto: true        // modifica SOLO il campo "letto"
            })
        });

        if (!risposta.ok) {
            throw new Error("Errore nella modifica: " + risposta.status);
        }

        const libroModificato = await risposta.json();

        console.log("--- ESEMPIO PATCH ---");
        console.log("Libro modificato:", libroModificato.titolo);
        console.log("Ora letto:", libroModificato.letto);  // → true
    } catch (errore) {
        console.error("Errore nell'esempio PATCH:", errore.message);
    }
}

// Lo eseguiamo:
esempioModificaLibro();

// ── ✏️ ORA TOCCA A TE ──────────────────────────────────
// Hai visto come fare una PATCH con ID e valore fissi.
// Adesso devi fare la stessa cosa, ma leggendo ID e stato dal form.
//
// Per leggere i campi:
//   const id = document.querySelector("#input-modifica-id").value;
//   const selectLetto = document.querySelector("#select-letto").value;
//
// ⚠️ ATTENZIONE: selectLetto sarà la STRINGA "true" o "false"
// Per convertirla in booleano:
//   const letto = selectLetto === "true";
//
// Devi:
// 1. Leggere ID e stato dal form
// 2. Validare che l'ID sia un numero
// 3. mostraLoading()
// 4. try/catch:
//    a. Fare la fetch PATCH a BASE_URL + "/books/" + id
//       con body: { letto: letto }
//    b. Controllare risposta.ok
//    c. mostraMessaggio("Libro aggiornato!", "successo")
//    d. Ricaricare la lista: caricaTuttiILibri()
// 5. Nel catch: mostraMessaggio(errore.message, "errore")
// 6. Alla fine: nascondiLoading()

async function modificaLibro() {
    // 👇 SCRIVI QUI IL TUO CODICE

}

// ✅ VERIFICA: Inserisci ID 5, seleziona "Letto", clicca "Aggiorna"
//    → "Il Signore degli Anelli" passa a "Letto ✅"




// ============================================================================
// STEP 5 — DELETE: ELIMINARE UN ELEMENTO
// ============================================================================

// ── 💡 ESEMPIO FUNZIONANTE ──────────────────────────────
// Questa funzione FUNZIONA GIÀ. Elimina il libro con ID 20
// ("Il diario di Anna Frank") e stampa il risultato.
//
// DELETE è il metodo più semplice: solo method e URL, niente body.

async function esempioEliminaLibro() {
    try {
        const risposta = await fetch(BASE_URL + "/books/20", {
            method: "DELETE"
        });

        if (!risposta.ok) {
            throw new Error("Errore nell'eliminazione: " + risposta.status);
        }

        console.log("--- ESEMPIO DELETE ---");
        console.log("Libro con ID 20 eliminato con successo!");
    } catch (errore) {
        console.error("Errore nell'esempio DELETE:", errore.message);
    }
}

// Lo eseguiamo:
esempioEliminaLibro();

// ── ✏️ ORA TOCCA A TE ──────────────────────────────────
// Hai visto come fare una DELETE con un ID fisso.
// Adesso devi fare la stessa cosa, ma leggendo l'ID dall'input
// e chiedendo conferma all'utente.
//
// Per chiedere conferma:
//   if (!confirm("Sei sicuro di voler eliminare il libro " + id + "?")) {
//       return;    // l'utente ha cliccato "Annulla"
//   }
//
// Devi:
// 1. Leggere l'ID da #input-elimina-id
// 2. Validare che sia un numero
// 3. Chiedere conferma con confirm()
// 4. mostraLoading()
// 5. try/catch:
//    a. Fare la fetch DELETE a BASE_URL + "/books/" + id
//    b. Controllare risposta.ok
//    c. mostraMessaggio("Libro eliminato!", "successo")
//    d. Svuotare l'input
//    e. Ricaricare la lista: caricaTuttiILibri()
// 6. Nel catch: mostraMessaggio(errore.message, "errore")
// 7. Alla fine: nascondiLoading()

async function eliminaLibro() {
    // 👇 SCRIVI QUI IL TUO CODICE

}

// ✅ VERIFICA: Inserisci un ID, clicca "Elimina"
//    → Compare un confirm, se confermi il libro sparisce




// ============================================================================
// COLLEGAMENTO EVENTI (già fatto, NON modificare)
// ============================================================================

btnCaricaTutti.addEventListener("click", caricaTuttiILibri);
btnDettaglio.addEventListener("click", cercaLibroPerId);
btnAggiungi.addEventListener("click", aggiungiLibro);
btnModifica.addEventListener("click", modificaLibro);
btnElimina.addEventListener("click", eliminaLibro);




// ============================================================================
// STEP 6 — BONUS (facoltativo)
// ============================================================================

// ┌──────────────────────────────────────────────────────────────────────────┐
// │ Se hai completato tutti gli step, prova queste sfide extra!             │
// └──────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────
// ✏️ BONUS 1 — Carica i libri automaticamente all'apertura
// ─────────────────────────────────────────────────────────
// Chiama caricaTuttiILibri() quando la pagina si carica.
// Suggerimento: basta una riga di codice qui sotto!

// 👇 SCRIVI QUI IL TUO CODICE (Bonus 1)





// ─────────────────────────────────────────────────────────
// ✏️ BONUS 2 — Filtra i libri per stato (letti / da leggere)
// ─────────────────────────────────────────────────────────
// Il server supporta i filtri via query string:
//   /api/books?letto=true   → solo i libri letti
//   /api/books?letto=false  → solo quelli da leggere
//
// Crea una funzione "caricaPerStato" che riceve un parametro booleano
// e fa una fetch con il filtro. Poi collegala a due nuovi bottoni
// (puoi aggiungerli nell'HTML o crearli via JS).

// 👇 SCRIVI QUI IL TUO CODICE (Bonus 2)





// ─────────────────────────────────────────────────────────
// ✏️ BONUS 3 — Ricerca libri per titolo
// ─────────────────────────────────────────────────────────
// Il server supporta la ricerca:
//   /api/books?q=harry   → cerca "harry" in tutti i campi
//
// Aggiungi un evento "input" sull'input di ricerca che filtra
// i libri in tempo reale dal server.

// 👇 SCRIVI QUI IL TUO CODICE (Bonus 3)





// ✅ Se hai completato tutto, complimenti!
// Hai imparato a fare GET, POST, PATCH e DELETE con fetch + async/await! 🎉
