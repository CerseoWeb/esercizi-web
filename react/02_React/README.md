# TODO - 02_React

Piccole attività incrementali per migliorare il progetto senza fare refactor enormi.

# COMPONENTS — Props e Rendering

Compiti semplici: modifica di componenti per accettare nuove props e renderizzare contenuti diversi.

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
