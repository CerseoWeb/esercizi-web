# 🔌 Esercizi API REST - Guida Completa

## 📋 Struttura del Progetto

```
JS_Esercizi 11 - API/
├── index.html              # Hub principale - accesso agli esercizi
├── tutorial/
│   └── index.html          # Tutorial su API REST e Fetch
└── esercizi/
    ├── meteo/
    │   └── index.html      # Esercizio 1: GET Request base
    ├── lista_utenti/
    │   └── index.html      # Esercizio 2: GET con iterazione e DOM
    └── todo_app/
        └── index.html      # Esercizio 3: CRUD completo (POST, PUT, DELETE)
```

## 🚀 Come Iniziare

### 1. Avvia il Server API
Prima di iniziare qualsiasi esercizio, **devi avviare il server**:

```bash
cd server-api
npm start
```

Il server sarà disponibile a: `http://localhost:3000/api`

### ⚠️ Importante
Se non avvii il server, gli esercizi non funzioneranno perché non riusciranno a recuperare i dati!

## 📚 Contenuto del Corso

### 🎓 Tutorial
Leggi prima il tutorial per capire:
- Cos'è un'API REST
- Come funziona la Fetch API
- Metodi HTTP (GET, POST, PUT, DELETE)
- Promise e Async/Await

**Accedi da:** [index.html → Tutorial](tutorial/index.html)

### 🔧 Esercizio 1: App Meteo (GET Base)
**Difficoltà:** ⭐ Base

Impara i fondamenti delle GET request:
- Fetch API base
- Conversione JSON
- Visualizzazione dati
- Gestione errori

**Cosa fare:** Scrivi il codice per recuperare e visualizzare dati meteo

**Accedi da:** [index.html → App Meteo](esercizi/meteo/index.html)

### 👥 Esercizio 2: Lista Utenti (GET + DOM)
**Difficoltà:** ⭐⭐ Intermedio

Sviluppa skills di manipolazione del DOM:
- GET request avanzato
- Iterazione array con map()
- Creazione dinamica di elementi HTML
- Conteggio e statistiche

**Cosa fare:** Recupera una lista di utenti e crea card dinamiche

**Accedi da:** [index.html → Lista Utenti](esercizi/lista_utenti/index.html)

### ✓ Esercizio 3: Todo App (CRUD Completo)
**Difficoltà:** ⭐⭐⭐ Avanzato

Implementa tutte le operazioni CRUD:
- **CREATE:** POST request per aggiungere todo
- **READ:** GET request per recuperare todo
- **UPDATE:** PUT request per segnare come completato
- **DELETE:** DELETE request per eliminare

**Cosa fare:** Crea un'app TODO completa con tutte le operazioni

**Accedi da:** [index.html → Todo App](esercizi/todo_app/index.html)

## 🛠️ API Endpoints Disponibili

Il server fornisce questi endpoint:

```
GET    /api/weather      → Ottieni dati meteo
GET    /api/users        → Ottieni lista utenti
GET    /api/users/:id    → Ottieni un utente
POST   /api/users        → Crea nuovo utente
PUT    /api/users/:id    → Aggiorna utente
DELETE /api/users/:id    → Elimina utente

GET    /api/todos        → Ottieni lista todo
GET    /api/todos/:id    → Ottieni un todo
POST   /api/todos        → Crea nuovo todo
PUT    /api/todos/:id    → Aggiorna todo
DELETE /api/todos/:id    → Elimina todo
```

## 📖 Esempi di Codice

### GET Request Base
```javascript
const response = await fetch('http://localhost:3000/api/users');
const users = await response.json();
console.log(users);
```

### POST Request
```javascript
const response = await fetch('http://localhost:3000/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Nuovo todo', completed: false })
});
const newTodo = await response.json();
```

### DELETE Request
```javascript
const response = await fetch('http://localhost:3000/api/todos/1', {
    method: 'DELETE'
});
```

## ✅ Checklist Completamento

- [ ] Ho avviato il server `npm start` nella cartella server-api
- [ ] Ho letto il Tutorial
- [ ] Ho completato l'Esercizio 1 (App Meteo)
- [ ] Ho completato l'Esercizio 2 (Lista Utenti)
- [ ] Ho completato l'Esercizio 3 (Todo App)

## 💡 Suggerimenti

1. **Leggi sempre il tutorial prima** di iniziare gli esercizi
2. **Apri la console browser** (F12) per vedere i messaggi di errore
3. **Utilizza network tab** in DevTools per vedere le richieste HTTP
4. **Prova i comandi curl** nel terminale per testare gli endpoint
5. **Inizia semplice:** completa prima le funzioni di base

## 🐛 Troubleshooting

**Errore: "Fetch failed"**
- Controlla che il server sia avviato con `npm start`
- Verifica che il URL sia corretto

**Errore: "response.json() is not a function"**
- Controlla che la risposta sia valida JSON
- Vedi la console per il messaggio di errore esatto

**Dati non visualizzati**
- Controlla che il codice fetch sia implementato
- Verifica che il DOM sia aggiornato correttamente
- Usa `console.log()` per debuggare

## 📚 Risorse Utili

- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN - async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [JSON Server GitHub](https://github.com/typicode/json-server)

Buon lavoro! 🚀
