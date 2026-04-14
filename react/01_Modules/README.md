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

Il progetto è gia strutturato con moduli e pagine, ma alcune parti sono incomplete o da modificare. L'obiettivo e completare le funzionalita mancanti seguendo i passi descritti nella sezione "Consegna studenti".

Lo stato attuale del progetto è il seguente (directory view)
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
- `read.html`: pagina scaffold per libri letti
- `favorites.html`: pagina scaffold per libri preferiti

Script principali:

- `scripts/index.js`
- `scripts/detail.js`
- `scripts/read.js` (TODO)

Moduli in `scripts/modules`:

- `api.js`: chiamate API (`getBooks`, `getBookById`) già implementate come funzioni.
- `book-ui.js`: rendering card libro e dettaglio.
- `errors.js`: loading, errori, empty state, sanitize.
- `header.js`: header riusabile.
- `footer.js`: footer riusabile.
- `local-favorite.js`: gestione preferiti in localStorage.

## Consegna studenti (step-by-step)

### Step 1 - Modificare prima `header.js`

Obiettivo: prendere confidenza con la repo e con la struttura dei moduli.

- Aprire `scripts/modules/header.js`
- Aggiungere manualmente i pulsanti del menu nell'header
- Inserire almeno questi link:
  - Home (`index.html`)
  - Letti (`read.html`)
  - Preferiti (`favorites.html`)
- Verificare che il menu sia visibile in tutte le pagine che montano l'header

### Step 2 - Aggiungere la stellina in `book-ui.js`

Obiettivo: capire come una modifica in un modulo UI impatta tutte le pagine.

- Aprire `scripts/modules/book-ui.js`
- Aggiungere/gestire l'icona stellina nella card libro
- Leggere lo stato preferito da localStorage (`isFavorite`)
- Applicare la classe CSS `favorite` quando il libro e nei preferiti
- Verificare che la modifica si veda ovunque venga usata la card

### Step 3 - Completare `read.js`

Obiettivo: lavorare sulla parte JavaScript di logica dati.

- Aprire `scripts/read.js`
- Importare `getBooks` da `api.js`
- Caricare i libri letti con filtro `letto=true`
- Renderizzare con `renderBookList` da `book-ui.js`
- Gestire loading, errore e lista vuota con `errors.js`

### Step 4 - Implementare la pagina preferiti (solo JS)

Obiettivo: esercitarsi con import/export tra moduli.

- Creare `scripts/favorites.js`
- Usare `getFavorites` da `local-favorite.js`
- Caricare libri da API e filtrare per gli id preferiti
- Renderizzare con `renderBookList`
- Gestire stati UI con `errors.js`

Nota: per l'HTML di `favorites`, e sufficiente copiare la struttura delle altre pagine.
