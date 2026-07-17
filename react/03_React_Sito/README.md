# 🎬 Database Film

Progetto del corso JavaScript: una web app **React** per cercare film con l'**API OMDb** e salvarli nei preferiti con **localStorage**.

Lo scheletro (routing, componenti grafici, stile, configurazione dell'editor) è già pronto e funzionante: l'app parte, si vede, si può navigare tra le pagine. Quello che manca è **la logica** — le chiamate all'API e la gestione dei preferiti — ed è quello che dovrai scrivere tu.

## 📦 Cosa trovi già pronto

- **Routing**: "Cerca" (`/`) e "I Miei Preferiti" (`/preferiti`), già collegate in [app/App.jsx](app/App.jsx).
- **Componenti grafici pronti all'uso** in [app/components/](app/components/): `Header`, `Footer`, `SearchBar`, `MovieTable`, `EmptyState`, `Message`, `FilmDetail` (quest'ultimo serve solo per l'esercizio extra). Ogni file spiega nel commento in cima a cosa serve, quali props accetta e include un esempio d'uso — apriteli prima di scrivere codice nuovo, molto probabilmente il pezzo di interfaccia che vi serve esiste già.
- **Stile** già scritto in [app/App.css](app/App.css): non serve toccarlo, se non volete aggiungere animazioni o effetti extra.
- **Editor configurato**: autocompletamento, auto-import dei componenti, formattazione automatica al salvataggio e avvio automatico del progetto aprendo la cartella in VS Code (vedi [Come iniziare](#-come-iniziare)).

Il tuo compito **non è costruire l'interfaccia**, ma collegarci dietro la logica mancante.

## 🧩 Cosa devi fare

Sono 4 file, ognuno pieno di commenti `TODO` che spiegano passo passo cosa scrivere:

1. [scripts/omdbApi.js](scripts/omdbApi.js) — chiamare l'API OMDb e restituire i risultati
2. [scripts/preferiti.js](scripts/preferiti.js) — leggere/scrivere i preferiti in `localStorage`
3. [app/pages/Cerca.jsx](app/pages/Cerca.jsx) — collegare la ricerca, visualizzare i risultati e il pulsante "Aggiungi ai Preferiti"
4. [app/pages/Preferiti.jsx](app/pages/Preferiti.jsx) — mostrare e rimuovere i preferiti salvati

Più avanti trovi l'[ordine consigliato](#️-percorso-consigliato) per affrontarli. C'è anche un [esercizio extra](#-esercizio-extra-pagina-di-dettaglio) (pagina di dettaglio del singolo film) per chi finisce prima e vuole mettersi alla prova con qualcosa di più aperto.

## 🚀 Come iniziare

### 1. Ottieni il codice

Una volta scaricato lo zip dell'esercizio, estrai la cartella in una posizione comoda sul tuo computer ed infine apri la cartella con VS Code.\
È imperativo aprire _questa_ cartella, e non una cartella superiore o inferiore, dato che ci sono dei file di configurazione di VS Code che servono per installare automaticamente le dipendenze, nascondere dei file noiosi e abilitare alcune funzionalità comode.

### 2. Avvia il progetto

Aprendo la cartella con VS Code, la prima volta comparirà una notifica tipo _"Questa cartella contiene task automatici"_: premi **Consenti** (**Allow**). A quel punto VS Code farà da solo `npm install` e poi `npm run dev`, aprendo un terminale con l'indirizzo locale (`http://localhost:5173` circa) da aprire nel browser.

Se preferisci farlo a mano, o non stai usando VS Code, da terminale:

```bash
npm install
npm run dev
```

A questo punto l'app **parte già**, solo che cercando un film non succede ancora nulla: è normale, è il pezzo che manca e che scriverai tu.

### 3. Installa le Estenzioni consigliate

Dovrebbe apparire un messaggio che chiede di installare le estensioni consigliate: accetta, così avrai autocompletamento e formattazione automatica del codice.
Se per errore il messaggio viene chiuso, o non compare, apri la barra laterale di VS Code → Estensioni → cerca e installa `esbenp.prettier-vscode`.

### 4. Ottieni la chiave API di OMDb

Prima di iniziare a scrivere `scripts/omdbApi.js`, ti serve una **chiave API gratuita**.

1. **Vai sul sito OMDb**: http://www.omdbapi.com/apikey.aspx
2. **Scegli il piano FREE (Gratis)**: seleziona _"FREE! (1,000 daily limit)"_, permette 1000 richieste al giorno senza pagare e senza carta di credito.
3. **Compila il Form**:
   - **Email Address**: un indirizzo valido (riceverai un'email)
   - **First Name / Last Name**: anche fittizi va bene
   - **Use**: "Learning JavaScript" o simile
4. **Controlla la Email**: arriva un'email "OMDb API - Free API Key" (controlla anche lo spam) con un link di attivazione e la chiave. **Se non clicchi il link di attivazione, la chiave non funziona.**
5. **Incolla la chiave** in [scripts/omdbApi.js](scripts/omdbApi.js), alla riga:
   ```javascript
   const API_KEY = 'TUA_CHIAVE_API_QUI'; // <-- sostituisci con la tua chiave
   ```

## 🗺️ Percorso consigliato

L'ordine qui sotto è pensato per farti vedere qualcosa che funziona il prima possibile, invece di scrivere codice "alla cieca" senza controllare se è giusto.

### Fase 1 — la ricerca

1. **[scripts/omdbApi.js](scripts/omdbApi.js)** → implementa `searchMovies(termine)` (fetch all'API + `.json()` + restituire `data.Search`).
2. **[app/pages/Cerca.jsx](app/pages/Cerca.jsx)** → nel `TODO` di `handleCerca`, chiama `searchMovies(query)` e passa il risultato a `setRisultati`.

✅ **Dove lo vedi**: scrivi "matrix" nella barra di ricerca, premi Cerca, e la tabella si riempie con i film veri restituiti dall'API. Questo succede perché `MovieTable` è già pronto e riceve i film da props, quindi non devi scrivere codice per disegnare la tabella.

### Fase 2 — i preferiti

3. **[scripts/preferiti.js](scripts/preferiti.js)** → implementa tutte e cinque le funzioni (`getPreferiti`, `salvaPreferiti`, `aggiungiPreferito`, `rimuoviPreferito`, `isPreferito`).
4. **[app/pages/Cerca.jsx](app/pages/Cerca.jsx)** → nel `TODO` di `handleAggiungi`, chiama `aggiungiPreferito(film)`.
5. **[app/pages/Preferiti.jsx](app/pages/Preferiti.jsx)** → nel `TODO` dentro `useEffect`, chiama `getPreferiti()` e passa il risultato a `setPreferiti`; nel `TODO` di `handleRimuovi`, chiama `rimuoviPreferito(imdbID)` e aggiorna lo stato.

✅ **Dove lo vedi**: cerchi un film, premi "Aggiungi ai Preferiti" (il pulsante si disabilita da solo), vai su "I Miei Preferiti" e lo trovi lì; premi "Rimuovi" e sparisce.

### Bonus (facoltativi, quando hai finito il resto)

- Un pulsante "Rimuovi Tutti" nella pagina Preferiti
- Un contatore "Hai N film salvati" nella pagina Preferiti

## 🎁 Esercizio extra: pagina di dettaglio

Quando hai finito le due fasi sopra, il sito fa solo due cose: cerca film e li salva nei preferiti. Manca un pezzo classico di qualunque sito di questo tipo: cliccare su un film e vederne la scheda completa (trama, regista, cast...). A differenza degli esercizi precedenti, qui non ti do solo dei `TODO` dentro un file già collegato al resto: **tocca a te costruire il collegamento tra i pezzi**, oltre alla logica.

Il componente che disegna la scheda, [FilmDetail.jsx](app/components/FilmDetail.jsx), è già pronto (uguale agli altri componenti in `app/components/`). Quello che manca è tutto il resto:

1. **Una route** in [app/App.jsx](app/App.jsx) per la nuova pagina (c'è un commento che indica dove) — dovrà sapere QUALE film mostrare, quindi dovrà leggere quell'informazione dall'URL stesso (useParams)
2. **Un modo per raggiungerla (LINK)** cliccando da qualche parte dell'interfaccia — c'è un commento anche in [app/components/MovieTable.jsx](app/components/MovieTable.jsx). Fallo lì e non separatamente in `Cerca.jsx`/`Preferiti.jsx`: essendo `MovieTable` condivisa da entrambe le pagine, lo scrivi una volta sola e funziona ovunque.
3. **[app/pages/Dettaglio.jsx](app/pages/Dettaglio.jsx)** — la nuova pagina, con i suoi `TODO` (spiegati nel commento in cima al file): recuperare l'id del film dall'URL e usarlo per caricare i dettagli dall'API (`getMovieDetails` in [scripts/omdbApi.js](scripts/omdbApi.js) — se non l'hai già fatto come bonus della Fase 1, implementalo ora).

✅ **Dove lo vedi**: clicchi sul titolo di un film (dai risultati o dai preferiti) e si apre una pagina con tutti i suoi dettagli.

**Bonus nel bonus**: [FilmDetail.jsx](app/components/FilmDetail.jsx) per ora mostra solo i dettagli, non permette di aggiungere il film ai preferiti da lì. C'è un commento dentro al file che ti invita a provarci, riusando quello che hai già scritto per `Cerca.jsx`.


## 💡 Suggerimenti per l'implementazione

1. **`fetch()` verso OMDb**: costruisci l'URL con chiave API e termine di ricerca, poi `fetch()` + `.json()`. Attenzione ai nomi delle proprietà restituite dall'API, sono con la maiuscola (`Title`, `Year`, `imdbID`, `Type`, `Poster`).
2. **Niente `innerHTML`**: qui siamo in React, le righe della tabella le genera già `<MovieTable />` con `.map()` — a te serve solo passargli l'array di film giusto.
3. **`localStorage` salva solo stringhe**: usa `JSON.stringify()` per scrivere e `JSON.parse()` per leggere. Gestisci il caso in cui non c'è ancora nulla salvato (`localStorage.getItem` restituisce `null`).
4. **Niente duplicati nei preferiti**: prima di aggiungere un film, controlla che non ci sia già (confronta `imdbID`).

## 🐛 Debug

### La chiave API non funziona

- Hai attivato la chiave cliccando sul link nell'email?
- Hai copiato la chiave completa, senza spazi?
- Hai sostituito `'TUA_CHIAVE_API_QUI'` in `scripts/omdbApi.js`?

### I film non si vedono

- Apri la Console del browser (F12) e guarda se ci sono errori
- Guarda la tab Network: la richiesta a `omdbapi.com` parte? Che risposta torna?
- Prova l'URL della richiesta direttamente incollato nel browser

### `localStorage` non funziona

- DevTools → Application → Local Storage → controlla cosa c'è sotto la chiave `preferiti`
- Hai usato `JSON.stringify()` quando salvi e `JSON.parse()` quando leggi?

### La pagina Preferiti resta vuota

- `useEffect` in `Preferiti.jsx` ha l'array di dipendenze `[]`? Senza, o con dipendenze sbagliate, non parte al momento giusto.
- `getPreferiti()` restituisce davvero l'array salvato, o hai lasciato il `return []` originale?

## 📚 Risorse utili

- [OMDb API Documentation](http://www.omdbapi.com/)
- [MDN - localStorage](https://developer.mozilla.org/it/docs/Web/API/Window/localStorage)
- [MDN - Fetch API](https://developer.mozilla.org/it/docs/Web/API/Fetch_API)
- [MDN - Array Methods](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [React - useState](https://react.dev/reference/react/useState)
- [React - useEffect](https://react.dev/reference/react/useEffect)
- [React Router - useParams](https://reactrouter.com/api/hooks/useParams) (per l'esercizio extra)
- [React Router - Link](https://reactrouter.com/api/components/Link) (per l'esercizio extra)
