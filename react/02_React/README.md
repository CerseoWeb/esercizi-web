# TODO - 02_React

Piccole attività incrementali per migliorare il progetto senza fare refactor enormi.

## Forum - Lista Post (tabella)

- [ ] Aggiungere `hideActions` nella tabella post per nascondere la colonna azioni dove non serve.
- [ ] Aggiungere `showIds` nella tabella post per poter nascondere la colonna ID.
- [ ] Troncare il contenuto post in tabella a 120 caratteri con `...`.
- [ ] Aggiungere tooltip con testo completo del contenuto troncato.
- [ ] Rendere ordinabile la tabella per `data` (asc/desc).
- [ ] Rendere ordinabile la tabella per `likes` (asc/desc).
- [ ] Evidenziare la riga selezionata con stato locale (`selectedPostId`).
- [ ] Aggiungere paginazione client-side nella vista forum (`prev/next`).
- [ ] Mostrare numero totale post caricati sopra la tabella.
- [ ] Aggiungere un filtro testuale locale su titolo/contenuto.

## Forum - Profilo Utente

- [ ] Mostrare fallback avatar quando l'immagine non carica (`onError`).
- [ ] Rendere cliccabile email con `mailto:`.
- [ ] Aggiungere etichetta "Membro dal" derivata da `dataNascita` (placeholder logico).
- [ ] Mostrare badge stato (`Attivo`/`Non attivo`) con colori dedicati in CSS.
- [ ] Inserire mini-statistiche: numero post caricati, data ultimo post.
- [ ] Aggiungere skeleton durante caricamento profilo.
- [ ] Aggiungere bottone "Torna al forum" sticky su mobile.
- [ ] Mostrare i post utente senza colonna azioni (quando `hideActions=true`).

## Forum - Dettaglio Post + Commenti

- [ ] Mostrare titolo pagina dinamico: `Post #id - titolo`.
- [ ] Aggiungere link al profilo autore nel box post.
- [ ] Mostrare data in formato locale (`toLocaleDateString('it-IT')`).
- [ ] Ordinare commenti dal più vecchio al più recente.
- [ ] Aggiungere link al profilo utente per ogni commento.
- [ ] Mostrare avatar anche nei commenti (lookup utente).
- [ ] Aggiungere campo "Rispondi" (solo UI, senza submit reale).
- [ ] Aggiungere toggle "Mostra/Nascondi commenti".
- [ ] Aggiungere contatore commenti vicino al titolo sezione.
- [ ] Gestire stato "nessun commento" con CTA (scrivi il primo commento).

## API Layer

- [ ] Centralizzare i messaggi errore in una utility (`apiErrors.js`).
- [ ] Aggiungere timeout alle richieste `fetch` con `AbortController`.
- [ ] Normalizzare i payload (fallback `title/titolo`, `content/contenuto`).
- [ ] Estrarre query builder in helper condiviso.
- [ ] Aggiungere funzione `getUserMapByIds(ids)` per evitare N chiamate duplicate.
- [ ] Inserire funzione `formatApiDate(value)` condivisa.

## Routing

- [ ] Aggiungere pagina 404 dedicata al posto del redirect su Home.
- [ ] Aggiungere breadcrumb semplice nelle pagine forum (`Forum / User / Post`).
- [ ] Salvare ultimo path visitato nel forum (sessionStorage).
- [ ] Evidenziare link attivo anche sulle route figlie (`/forum/user/:id`, `/forum/post/:id`).
