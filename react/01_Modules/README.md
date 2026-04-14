# Esercizio Ponte: JavaScript Moduli -> React

Questo progetto e un esercizio ponte tra JavaScript base e React.

## Obiettivo didattico

Consolidare i concetti che poi ritroverete in React:

- separazione delle responsabilita
- import/export tra file
- rendering UI riusabile
- stato locale lato client
- pagine diverse che condividono moduli

## Struttura del progetto

```
01_Modules/
├── assets/icons/
├── scripts/
│   ├── modules/
│   ├── detail.js
│   ├── index.js
│   └── read.js
├── detail.html
├── favorites.html
├── index.html
├── read.html
└── style.css
```

Pagine HTML:

- `index.html`: lista libri
- `detail.html`: dettaglio libro
- `read.html`: libri letti (TODO)
- `favorites.html`: libri preferiti (TODO)

Script principali:

- `scripts/index.js`
- `scripts/detail.js`
- `scripts/read.js` (TODO)
- `scripts/favorites.js` (TODO)

Moduli in `scripts/modules`:

- `api.js`: chiamate API (`getBooks`, `getBookById`).
- `book-ui.js`: rendering card libro e dettaglio.
- `errors.js`: loading, errori, empty state, sanitize.
- `header.js`: header riusabile.
- `footer.js`: footer riusabile.
- `local-favorite.js`: gestione preferiti in localStorage.

## Consegna studenti (step-by-step)

### Step 1 - Header condiviso

Obiettivo: prendere confidenza con la repo e con la struttura a moduli.

- Aprire `scripts/modules/header.js`
- Inserire i pulsanti del menu nell'header
- Includere almeno questi link:
  - Home (`index.html`)
  - Letti (`read.html`)
  - Preferiti (`favorites.html`)
- Verificare che il menu sia visibile in tutte le pagine che montano l'header

### Step 2 - Stellina preferiti nelle card

Obiettivo: capire come una modifica in un modulo UI impatta tutte le pagine.

- Aprire `scripts/modules/book-ui.js`
- Aggiungere la stellina nella card libro (usa il un tag `span` con classe `icon-star`)
- Leggere lo stato preferito da localStorage (`isFavorite`)
- Applicare la classe CSS `favorite` quando il libro e nei preferiti
- Gestire il click sulla stellina con toggle dei preferiti (`toggleFavorite`)
- Evitare che il click sulla stellina apra il dettaglio libro

### Step 3 - Pagina libri letti

Obiettivo: lavorare sulla logica dati asincrona.

- Aprire `scripts/read.js`
- Importare `getBooks` da `api.js`
- Caricare i libri letti con filtro `letto=true`
- Renderizzare con `renderBookList` da `book-ui.js`
- Gestire loading, errore e lista vuota con `errors.js`

### Step 4 - Pagina preferiti (solo JS)

Obiettivo: esercitarsi con import/export tra moduli.

- Creare `scripts/favorites.js`
- Usare `getFavorites` da `local-favorite.js`
- Caricare libri da API e filtrare per ID preferiti
- Renderizzare con `renderBookList`
- Gestire loading, errore e lista vuota con `errors.js`

## Nota didattica

L'esercizio è pensato in questo modo: i passi 1-2 sono base, i passi 3-4 sono il ponte verso la logica che poi verra gestita in React con componenti e stato.
