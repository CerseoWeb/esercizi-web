# Esercizio Ponte: JavaScript Moduli -> React

Questo progetto e un esercizio ponte tra JavaScript base e React.

## Obiettivo didattico

Capire bene i concetti che poi ritroverete in React:

- separazione delle responsabilita
- import/export tra file
- rendering UI riusabile
- stato locale lato client
- pagine diverse che condividono moduli

## Stato attuale del progetto

Pagine presenti:

- `index.html`: lista libri
- `detail.html`: dettaglio libro
- `read.html`: pagina scaffold per libri letti

Script principali:

- `scripts/index.js`
- `scripts/detail.js`
- `scripts/read.js` (scaffold TODO)

Moduli in `scripts/modules`:

- `api.js`: chiamate API (`getBooks`, `getBookById`)
- `book-ui.js`: rendering card libro e dettaglio
- `errors.js`: loading, errori, empty state, sanitize
- `header.js`: header riusabile con link configurabili
- `footer.js`: footer riusabile
- `local-favorite.js`: gestione preferiti in localStorage

## API usata

Base URL configurata in `scripts/modules/api.js`:

- `http://localhost:5000/api`

Endpoint usati:

- `GET /api/books?_limit=20`
- `GET /api/books/:id`

`getBooks(limit, filters)` supporta filtri opzionali, ad esempio:

```js
getBooks(20, { letto: true });
```

## Cosa e gia stato spezzato in moduli

- Il rendering dei libri non e piu in `index.js` e `detail.js`: e in `book-ui.js`.
- La gestione preferiti e gia isolata in `local-favorite.js`.
- Errori/loading/empty e sanitizzazione sono centralizzati in `errors.js`.
- Header e footer sono componenti riusabili.

## Consegna studenti (step-by-step)

### Step 1 - Completare `read.js`

Obiettivo: mostrare solo i libri letti.

- Importare `getBooks` da `api.js`
- Chiamare `getBooks(20, { letto: true })`
- Renderizzare con `renderBookList` da `book-ui.js`
- Usare `showLoading`, `showEmpty`, `showError` per gli stati UI

Checkpoint: `read.html` mostra solo elementi con `letto: true`.

### Step 2 - Aggiungere la stellina preferiti in `book-ui.js`

Obiettivo: aggiungere un bottone preferiti nelle card.

- Usare `isFavorite` e `toggleFavorite` da `local-favorite.js`
- Mostrare icona diversa se il libro e preferito
- Evitare che il click sulla stellina apra il dettaglio (`event.preventDefault()` e `event.stopPropagation()`)

Checkpoint: la stellina cambia stato e persiste dopo refresh.

### Step 3 - Creare pagina `favorites.html`

Obiettivo: mostrare solo i libri preferiti.

- Creare `favorites.html`
- Creare `scripts/favorites.js`
- Leggere id preferiti da localStorage (`getFavorites`)
- Caricare i libri da API e filtrare per id preferiti
- Renderizzare con `renderBookList`

Checkpoint: pagina preferiti funzionante con fallback se lista vuota.

### Step 4 - Aggiornare il menu header

Obiettivo: navigazione completa tra pagine.

- In ogni entrypoint (`index.js`, `detail.js`, `read.js`, `favorites.js`) passare i link a `mountHeader`
- Link richiesti:
  - Home (`index.html`)
  - Letti (`read.html`)
  - Preferiti (`favorites.html`)

Checkpoint: nav coerente su tutte le pagine.

## Criteri di valutazione

- Moduli separati correttamente (no duplicazioni evidenti)
- Import/export corretti
- Gestione errori/loading presente
- Codice leggibile e funzioni piccole
- Funzionalita richieste complete

## Avvio progetto

Aprire il sito tramite un server locale HTTP (non `file://`).

Esempio rapido:

```bash
cd react/01_Modules
python -m http.server 8000
```

Poi aprire:

- `http://localhost:8000/index.html`
