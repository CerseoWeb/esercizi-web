# Demo Server API

Questa repository contiene un server API pronto all'uso per le esercitazioni di Frontend.
Permette di leggere, creare, modificare e cancellare dati salvati nel file `database/db.json`.

## ▶️ Come avviare il Server

Usa questo comando se vuoi avviare il server. Sarà accessibile anche dal tuo indirizzo IP locale.

```bash
npm start
```

Il server sarà disponibile al tuo Indirizzo IP di rete (es: `http://192.168.1.XX:3000`).
O in alternativa, puoi usare `http://localhost:3000` se stai lavorando sulla stessa macchina.


## 📚 Documentazione Automatica
Una volta avviato il server, apri il browser all'indirizzo principale (es. `http://localhost:3000`).
Troverai una dashboard che elenca automaticamente tutte le risorse disponibili nel database.

## ⚡️ Endpoints Disponibili

Json Server supporta i seguenti metodi HTTP:

* `GET    /api/risorsa` (Ottieni lista)
* `GET    /api/risorsa/1` (Ottieni singolo elemento)
* `POST   /api/risorsa` (Crea nuovo elemento)
* `PUT    /api/risorsa/1` (Aggiorna tutto l'elemento)
* `PATCH  /api/risorsa/1` (Aggiorna parzialmente)
* `DELETE /api/risorsa/1` (Elimina elemento)

### Esempio pratico con Fetch

Se vuoi prendere i dipendenti:

```javascript
// GET
fetch('http://localhost:3000/api/users')
  .then(res => res.json())
  .then(data => console.log(data));
```

Se vuoi aggiungere un dipendente:

```javascript
// POST
fetch('http://localhost:3000/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nome: "Mario", ... })
});
```