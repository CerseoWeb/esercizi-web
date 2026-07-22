# 🗂️ Anagrafica Utenti

Progetto del corso JavaScript: una web app **React** per gestire un'anagrafica utenti, salvata interamente in **localStorage**.

## 📦 Cosa fa l'app

Una singola pagina con:

- una **barra dei filtri**, sopra la tabella, per cercare gli utenti per nome+cognome, email o data di nascita;
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

Il modale si apre/chiude con uno stato in [app/pages/Utenti.jsx](app/pages/Utenti.jsx), `utenteInModifica`:

- `undefined` -> modale chiuso;
- `null` -> modale aperto in creazione (campi vuoti);
- un utente -> modale aperto in modifica, precompilato con i suoi dati.

Cliccare "+ Nuovo Utente" imposta `utenteInModifica` a `null`; cliccare ✏️ su una riga lo imposta a quell'utente; chiudere il modale lo riporta a `undefined`.

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
