# 🗂️ Anagrafica Utenti

Progetto del corso JavaScript: una web app **React** per gestire un'anagrafica utenti, salvata interamente in **localStorage**.

## 📦 Cosa fa l'app

Ecco il comportamento completo dell'app, quando tutti gli esercizi della sezione **📝 Esercizi** più sotto sono completati. Una singola pagina con:

- una **barra dei filtri**, sopra la tabella: un campo di testo cerca in nome, cognome ed email; due campi "Anno di nascita da / a" filtrano per intervallo di anni;
- un pulsante **"+ Nuovo Utente"**, che apre un modale per creare un nuovo utente (**Create**);
- una **tabella** con l'elenco degli utenti (**Read**), che si aggiorna in automatico quando filtri, aggiungi, modifichi o elimini qualcuno;
- per ogni riga, un'icona ✏️ a sinistra per aprire il modale precompilato con i dati di quell'utente e modificarli (**Update**), e un'icona 🗑️ a destra per eliminarlo, dopo conferma (**Delete**).

Tutti i dati vivono solo nel browser: non c'è un server, tutto passa da `localStorage`. Al primo avvio, se non c'è ancora nulla salvato, l'anagrafica viene popolata con alcuni utenti di esempio.

## 🗺️ Struttura del progetto

```
app/
  components/
    Header.jsx       - intestazione della pagina
    Footer.jsx        - piè di pagina
    FilterBar.jsx      - filtri + pulsante "Nuovo Utente"
    UserTable.jsx      - tabella utenti (con icone modifica/elimina)
    UserModal.jsx      - modale di creazione/modifica (Create + Update)
  pages/
    Utenti.jsx          - pagina principale: tiene lo stato e collega i componenti allo storage
  scripts/
    storage.js           - lettura/scrittura utenti in localStorage (getUtenti, addUtente, updateUtente, removeUtente)
  App.jsx / App.css / main.jsx
```

I componenti in `app/components/` sono componenti "controllati": ricevono dati tramite props e segnalano le azioni dell'utente (submit del form, click su un'icona) tramite funzioni di callback, senza leggere o scrivere direttamente in `localStorage`. Tutta la logica di stato e di salvataggio vive in [app/pages/Utenti.jsx](app/pages/Utenti.jsx), che è il punto da cui partire per capire come i pezzi si incastrano.

Il modale ([UserModal.jsx](app/components/UserModal.jsx)) è un unico componente sia per la creazione che per la modifica: se riceve un utente tramite la prop `utente`, precompila i campi con i suoi dati (modifica); se riceve `null`, parte vuoto (creazione). In entrambi i casi, al submit restituisce i dati del form con `onSave`, lasciando alla pagina la scelta se creare un nuovo utente o aggiornare quello esistente.

Il modale si apre e si chiude con due stati distinti, entrambi in [app/pages/Utenti.jsx](app/pages/Utenti.jsx):

- `modaleAperto` (booleano) dice se il modale è visibile o no;
- `utenteInModifica` dice, quando il modale è aperto, se si sta creando un nuovo utente (`null`) o modificandone uno esistente (l'oggetto utente).

Cliccare "+ Nuovo Utente" imposta `utenteInModifica` a `null` e apre il modale; chiudere il modale riporta `modaleAperto` a `false`, senza toccare `utenteInModifica`.

## 🚀 Come iniziare

### 1. Ottieni il codice

Una volta scaricato lo zip del progetto, estrai la cartella in una posizione comoda sul tuo computer ed infine apri la cartella con VS Code.\
È imperativo aprire _questa_ cartella, e non una cartella superiore o inferiore, dato che ci sono dei file di configurazione di VS Code che servono per installare automaticamente le dipendenze, nascondere dei file noiosi e abilitare alcune funzionalità comode.

### 2. Avvia il progetto

Aprendo la cartella con VS Code, la prima volta comparirà una notifica tipo _"Questa cartella contiene task automatici"_: premi **Consenti** (**Allow**). A quel punto VS Code farà da solo `npm install` e poi `npm run dev`, aprendo un terminale con l'indirizzo locale (`http://localhost:5173` circa) da aprire nel browser.

Se preferisci farlo a mano, o non stai usando VS Code, da terminale:

```bash
npm install
npm run dev
```

### 3. Installa le estensioni consigliate

Dovrebbe apparire un messaggio che chiede di installare le estensioni consigliate: accetta, così avrai autocompletamento e formattazione automatica del codice.
Se per errore il messaggio viene chiuso, o non compare, apri la barra laterale di VS Code → Estensioni → cerca e installa `esbenp.prettier-vscode`.

## 📝 Esercizi

Il progetto, così com'è, parte con alcuni pezzi non ancora completati. Gli esercizi sono in ordine di difficoltà crescente; alcuni sono in coppia perché l'app contiene già un pezzo equivalente e funzionante da usare come esempio.

### 1. Stato vuoto della tabella (facile)

**File:** [app/components/UserTable.jsx](app/components/UserTable.jsx)

Se `utenti` è un array vuoto (perché non ci sono ancora utenti, oppure perché i filtri non trovano risultati), la tabella si vede comunque, ma senza nessuna riga: solo le intestazioni delle colonne. Aggiungi un rendering condizionale che, in quel caso, mostri un messaggio al posto della tabella (es. "Nessun utente trovato", con un suggerimento a modificare i filtri o ad aggiungerne uno nuovo).

### 2. Titolo e testo del bottone nel modale (facile)

**File:** [app/components/UserModal.jsx](app/components/UserModal.jsx)

Il modale mostra sempre "Nuovo utente" come titolo e "Crea utente" sul bottone, anche quando viene aperto per modificare un utente esistente. Il componente ha già una variabile `inModifica` che distingue i due casi: usala per mostrare un titolo e un testo del bottone diversi quando si sta modificando (es. "Modifica utente" / "Salva modifiche").

### 3. Filtro per anno di nascita (medio)

**File:** [app/components/FilterBar.jsx](app/components/FilterBar.jsx)

Il campo di ricerca testuale funziona già: il suo valore viene da `filtri.testo` e ogni modifica chiama `onFiltriChange('testo', valore)`. I due campi numerici "Anno di nascita da / a", invece, non sono ancora collegati a nulla: scriverci dentro non ha alcun effetto sui filtri. Guarda come è fatto il campo di testo e collega allo stesso modo anche i due campi numerici, cambiando solo il nome del campo passato a `onFiltriChange` (`'annoDa'` e `'annoA'`).

### 4. Apertura del modale in modifica (medio)

**File:** [app/components/UserTable.jsx](app/components/UserTable.jsx), [app/pages/Utenti.jsx](app/pages/Utenti.jsx)

Il pulsante 🗑️ di eliminazione funziona già: chiama `onDelete(utente)`, una prop passata da `Utenti.jsx` che chiede conferma e poi elimina l'utente. Il pulsante ✏️ di modifica, invece, non fa ancora nulla. Guarda come è collegato `onDelete` e ricrea lo stesso meccanismo per la modifica: aggiungi a `UserTable` una prop `onEdit`, chiamala al click sull'icona ✏️ passandole l'utente della riga, e in `Utenti.jsx` scrivi la funzione che, quando viene chiamata, imposta `utenteInModifica` su quell'utente e apre il modale.

Checklist:

- aggiungi la prop `onEdit` a `UserTable`
- collegala al click sull'icona ✏️
- scrivi la funzione corrispondente in `Utenti.jsx`
- passala a `UserTable`

### 5. Modale di conferma per l'eliminazione (medio/difficile)

**File:** un nuovo componente in `app/components/`, più modifiche a [app/pages/Utenti.jsx](app/pages/Utenti.jsx)

Oggi, cliccare 🗑️ chiede conferma con `window.confirm(...)`, dentro `handleElimina`: funziona, ma è la finestrella grigia del browser, in stile stonato rispetto al resto dell'app. L'obiettivo è sostituirla con un modale di conferma con lo stesso stile di quello di creazione/modifica. `window.confirm` blocca l'esecuzione del codice finché l'utente non risponde, e restituisce direttamente `true`/`false`; un componente React non può funzionare così, perché il modale è solo un pezzo di interfaccia che appare e scompare. L'equivalente è il pattern già visto in `UserModal`, con `onSave`/`onClose`: due funzioni passate come prop, una per ciascuna risposta possibile.

Checklist:

- crea un nuovo componente (es. `ConfirmDialog.jsx`) con la stessa struttura di `UserModal.jsx`
- dagli due props per le due risposte possibili, più una prop col messaggio da mostrare
- per i bottoni riusa le classi `btn btn-cancel` e `btn btn-delete`
- in `Utenti.jsx`, sostituisci `window.confirm` con un nuovo stato che tiene l'utente da eliminare, e mostra il tuo modale quando non è `null`

### 6. Validazione del form (medio/difficile)

**File:** [app/components/UserModal.jsx](app/components/UserModal.jsx)

Al momento il form si affida solo alla validazione nativa del browser (`required`, `type="email"`). Aggiungi una validazione esplicita dentro `handleSubmit` che blocchi il submit e mostri un messaggio d'errore sotto al campo non valido quando: l'email non ha un formato plausibile; la data di nascita è nel futuro; nome o cognome sono vuoti o contengono solo spazi. Uno stato dedicato agli errori (es. un oggetto con un messaggio per ciascun campo non valido) è un buon punto di partenza.

### 7. Ordinamento della tabella (difficile)

**File:** [app/components/UserTable.jsx](app/components/UserTable.jsx), [app/pages/Utenti.jsx](app/pages/Utenti.jsx)

Rendi cliccabili le intestazioni delle colonne (Nome, Cognome, Email, Data di nascita): al click, la tabella si ordina secondo quella colonna; ricliccandola, l'ordine si inverte (crescente/decrescente). Serve un nuovo stato che tenga traccia di quale colonna e quale direzione sono attive, e una funzione che ordini l'array degli utenti prima di passarlo a `UserTable`.

Checklist:

- aggiungi in `Utenti.jsx` uno stato per colonna e direzione di ordinamento attive
- rendi cliccabili le intestazioni in `UserTable` e collegale a quello stato
- scrivi la funzione che ordina l'array in base allo stato, prima di passarlo a `UserTable`
- gestisci il click sulla colonna già attiva per invertire la direzione

## 🐛 Debug

### La tabella resta vuota

- Apri la Console del browser (F12) e guarda se ci sono errori.
- DevTools → Application → Local Storage → controlla cosa c'è sotto la chiave `utenti`.

### Le modifiche non vengono salvate

- Controlla in `app/pages/Utenti.jsx` che il modale chiami `handleAggiorna` quando `utenteInModifica` è un utente, e `handleCrea` quando è `null` (vedi la prop `onSave` passata a `<UserModal />`).
- Ricorda che `localStorage` salva solo stringhe: `storage.js` usa già `JSON.stringify`/`JSON.parse`, ma se aggiungi nuove funzioni tienine conto.

## 📚 Risorse utili

- [MDN - localStorage](https://developer.mozilla.org/it/docs/Web/API/Window/localStorage)
- [React - useState](https://react.dev/reference/react/useState)
- [React - useEffect](https://react.dev/reference/react/useEffect)
