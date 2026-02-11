// ⚠️ COMPILARE E CONTROLLARE PRIMA DI INIZIARE ⚠️
const BASE_URL = 'http://localhost:3000/api';

const userId = document.querySelector('#userId');
const todoInput = document.querySelector('#todoInput');
const btnAddTodo = document.querySelector('#btnAddTodo');

const addTodoSection = document.querySelector('#addTodoSection');
const btnLoadTodos = document.querySelector('#btnLoadTodos');
const todosContainer = document.querySelector('#todosContainer');

const loading = document.querySelector('#loading');
const counter = document.querySelector('#counter');


// ===== VARIABILE DI STATO =====
// Tiene traccia dell'ID utente attualmente caricato
// Viene usata per sapere a quale utente associare i nuovi TODO
// DA COMPLETARE: Carica questa variabile dal localStorage (se presente)
let currentUserId = null;


/**
 * FUNZIONE: Crea la card HTML per tutti i TODO passati come parametro
 */
function creaCardTodos(todoList) {
    allTodos = todoList.map((todo) => `
      <div class="todo-item ${todo.completato ? 'completed' : ''}">
            <div class="todo-checkbox">
                <input type="checkbox" 
                       ${todo.completato ? 'checked' : ''} 
                       onchange="toggleTodo(${todo.id}, ${todo.completato})">
            </div>
            <div class="todo-content">
                <div class="todo-title">${todo.titolo}</div>
                <div class="todo-id">ID: ${todo.id}</div>
            </div>
            <button class="btn-delete" onclick="deleteTodo(${todo.id})">🗑️ Elimina</button>
        </div>
    `).join('');

    todosContainer.innerHTML = allTodos;
}



/**
 * FUNZIONE: Gestione errori
 * 
 * Mostra un messaggio di errore e logga in console
 */
function handleError(message) {
    todosContainer.innerHTML = `
        <div class="error">
            <strong>❌ ${message}</strong>
        </div>
    `;
    console.error('Errore:', message);
}


/**
 * ESERCIZIO 4: Todo App CRUD Completa
 * 
 * Devi implementare 4 funzioni:
 * 1. fetchTodosUtente()  - GET /todos?userId={id}
 * 2. addTodo()           - POST /todos
 * 3. toggleTodo()        - PUT /todos/{id}
 * 4. deleteTodo()        - DELETE /todos/{id}
 */

/**
 * FUNZIONE 1️⃣: Carica TODO (GET)
 * 
 * Passi:
 *  1. Leggi l'ID utente dall'input
 *  2. Valida che sia un numero tra 1 e 40
 *  3. Mostra lo spinner di caricamento
 *  4. Apri un blocco try/catch
 *  5. Fai una GET a /todos?userId={id}
 *  6. Se non OK, mostra errore e return
 *  7. Converti la risposta in JSON
 *  8. Chiama displayTodos() per visualizzare
 *  9. Nascondi lo spinner e mostra addTodoSection
 * 10. Salva l'ID utente in currentUserId (e localStorage)
 */
async function fetchTodosUtente() {
}


/**
 * FUNZIONE 2️⃣: Aggiungi TODO (POST)
 * 
 * Passi:
 * 1. Verifica che un utente sia stato caricato (currentUserId)
 * 2. Leggi il testo dal campo di input del nuovo TODO
 * 3. Valida con trim che non sia vuoto
 * 4. Mostra lo spinner di caricamento
 * 5. Apri un blocco try/catch
 * 6. Fai una POST a /todos con body: {userId, titolo, completato: false}
 * 7. Se non OK, mostra errore
 * 8. Se OK, svuota l'input
 * 9. Ricarica la lista chiamando fetchTodosUtente()
 */
async function addTodo() {
}


/**
 * FUNZIONE 3️⃣: Modifica TODO (PUT)
 * 
 * Passi:
 * 1. Ricevi id e currentCompleted come parametri
 * 2. Fai una PUT a /todos/{id} con body: {completato: !currentCompleted}
 * 3. Se non OK, mostra errore
 * 4. Se OK, ricarica la lista chiamando fetchTodosUtente()
 */
async function toggleTodo(id, currentCompleted) {
}


/**
 * FUNZIONE 4️⃣: Elimina TODO (DELETE)
 * 
 * Passi:
 * 1. Chiedi conferma con confirm("Sicuro?")
 * 2. Se l'utente cancella, return
 * 3. Fai una DELETE a /todos/{id}
 * 4. Se non OK, mostra errore
 * 5. Se OK, ricarica la lista chiamando fetchTodosUtente()
 */
async function deleteTodo(id) {
}


/**
 * FUNZIONE: Visualizza i TODO
 * Funzione già fatta - non modificare
 */
function displayTodos(todos) {

    if (!Array.isArray(todos) || todos.length === 0) {
        todosContainer.innerHTML = '<div class="empty">Nessun TODO. Creane uno!</div>';
        counter.classList.add('nascosto');
        return;
    }

    // CONTA COMPLETATI E NON
    const completed = todos.filter(t => t.completato).length;
    const pending = todos.length - completed;

    // MOSTRA COUNTER
    counter.innerHTML = `
        📊 Totale: <strong>${todos.length}</strong> |
        ✅ Completati: <strong>${completed}</strong> |
        ⏳ In Sospeso: <strong>${pending}</strong>
    `;
    counter.classList.remove('nascosto');

    // CREA CARD TODO
    const todosHTML = todos.map(todo => creaCardTodos(todo)).join('');
    todosContainer.innerHTML = todosHTML;
}

// ===== COLLEGA GLI EVENTI =====
btnLoadTodos.addEventListener('click', fetchTodosUtente);
btnAddTodo.addEventListener('click', addTodo);

// PERMETTI ENTER per aggiungere TODO
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});
