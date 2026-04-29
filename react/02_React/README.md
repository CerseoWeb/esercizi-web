# React

Esercitazione di React.

Qui ci saranno tutti i fondamenti di un progetto React: Componenti, Stati, Effetti e Routes.

### Setup

Per prima cosa bisogna installare il progetto usando il comando nella cartella del progetto:
```bash
npm install
```

Dopo aver fatto questo si può avviare il progetto con:
```bash
npx vite

# oppure (se definito in package.json)
npm run dev
```

Dopodiche si può accedere alla app all'indirizzo `http://localhost:5173` (o altra porta indicata nel terminale).\
NON chiudere il terminale o premere `Ctrl+C`, dato che è necessario per mantenere il server del frontend attivo.

### API

L'API è già definita e funzionante, non è necessario modificarla.\
Se però il forum non funziona, e non avete il backend attivo in locale, potete farlo partire o cambiare l'URL dell'API in `app/scripts/api/baseUrl.js` puntando al computer dove è attivo (es. `http://192.168.1.131:5000`).


# COMPONENTS — Props e Rendering

Compiti semplici: modifica di componenti per accettare nuove props e renderizzare contenuti diversi.

### HomePage
- [ ] Creare un componente `ConceptCard` che accetta props `title`, `description`.
- [ ] Sostituire i box concetti con `ConceptCard` per rendere il codice più modulare.

### ForumPostsTable
- [ ] Aggiungere prop `hideActions` per nascondere la colonna azioni dove non serve.
- [ ] Aggiungere prop `showIds` per mostrare/nascondere la colonna ID.

### UserProfileCard
- [ ] Aggiungere fallback avatar con `onError` quando l'immagine non carica.
- [ ] Rendere email cliccabile con `mailto:email`.
- [ ] Aggiungere etichetta "Membro dal" derivata da `dataNascita`.

### ForumPostDetail
- [ ] Aggiungere link al profilo autore nel box post (link a `/forum/user/:userId`).

### ForumCommentsList
- [ ] Aggiungere contatore commenti nel titolo della sezione.
- [ ] Migliorare lo stato "nessun commento" con CTA più esplicita ("Sii il primo a commentare").

### Ritorno dal dettaglio
- [ ] Aggiungere bottone "Torna al forum" in `ForumPostPage` e `ForumUserPage` (link di ritorno).


# STATE — useState e Interattività

Compiti intermedi: aggiungere stato locale per interazioni e filtraggio.

### ForumPostsTable (stato locale)
- [ ] Evidenziare la riga selezionata con stato `selectedPostId`.
- [ ] Rendere ordinabile per `data` (asc/desc) con `sortBy` e `sortOrder`.
- [ ] Rendere ordinabile per `likes` (asc/desc).

### ForumPage (stato locale)
- [ ] Aggiungere filtro testuale locale su titolo/contenuto (input search + stato `searchTerm`).

### ForumPostPage (stato locale)
- [ ] Aggiungere toggle "Mostra/Nascondi commenti" con stato `showComments`.
- [ ] Ordinare commenti dal più vecchio al più recente prima del render.

# EFFECTS — useEffect e Side Effects

Compiti: usare `useEffect` per aggiornare il documento o formattare dati dinamici.

### ForumPostPage
- [ ] Aggiungere titolo pagina dinamico usando `useEffect`: `Post #id - titolo` (in `document.title`).

### Utility Globale
- [ ] Creare utility `formatDate(dateString)` per mostrare date in formato locale (`toLocaleDateString('it-IT')`).
- [ ] Usare la utility nei componenti `ForumPostDetail`, `ForumPostsTable`, `ForumCommentsList`.

# ROUTES — Routing

Compiti: modifiche al routing della app.

- [ ] Aggiungere pagina 404 dedicata (`NotFoundPage.jsx`).
- [ ] Aggiungere route catch-all `*` che punta a NotFoundPage.
