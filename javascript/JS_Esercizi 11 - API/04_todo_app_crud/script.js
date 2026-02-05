// ⚠️ COMPILARE PRIMA DI INIZIARE
const BASE_URL = 'http://localhost:3000/api';

let currentUserId = null;

/**
 * ESERCIZIO 4: Todo App CRUD Completa
 * 
 * Devi implementare 4 funzioni:
 * 1. loadUserTodos()  - GET /todos?userId={id}
 * 2. addTodo()        - POST /todos
 * 3. toggleTodo()     - PUT /todos/{id}
 * 4. deleteTodo()     - DELETE /todos/{id}
 */

// ======== 1️⃣ CARICA TODO (GET) ========
/**
 * Leggi l'ID utente, fai GET a /todos?userId={id}
 * Mostra la lista con displayTodos()
 */
async function loadUserTodos() {
    const userId = document.getElementById('userId').value;
    
    if (!userId || userId < 1 || userId > 40) {
        alert('Inserisci un ID valido tra 1 e 40');
        return;
    }

    currentUserId = userId;
    const loading = document.getElementById('loading');
    const container = document.getElementById('todosContainer');
    const addSection = document.getElementById('addTodoSection');
    const counter = document.getElementById('counter');

    loading.style.display = 'block';
    container.innerHTML = '';
    counter.style.display = 'none';

    try {
        // 👇 SCRIVI QUI - Fai fetch GET a /todos con query parameter userId
        // const response = await fetch(BASE_URL + '/todos?userId=' + userId);
        // const todos = await response.json();
        // displayTodos(todos);

        throw new Error('Codice non implementato - Completa loadUserTodos()');

    } catch (error) {
        container.innerHTML = `<div class="error">❌ ${error.message}</div>`;
        console.error('Errore:', error);
    } finally {
        loading.style.display = 'none';
        addSection.style.display = 'block';
    }
}

// ======== 2️⃣ AGGIUNGI TODO (POST) ========
/**
 * Leggi il testo dall'input
 * Fai POST a /todos con {userId, titolo, completato: false}
 * Ricarica la lista
 */
async function addTodo() {
    if (!currentUserId) {
        alert('Carica prima una lista di TODO!');
        return;
    }

    const input = document.getElementById('todoInput');
    const titolo = input.value.trim();

    if (!titolo) {
        alert('Scrivi un TODO!');
        return;
    }

    try {
        // 👇 SCRIVI QUI - Fai fetch POST
        // const response = await fetch(BASE_URL + '/todos', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ userId: currentUserId, titolo, completato: false })
        // });
        // input.value = '';
        // loadUserTodos();

        throw new Error('Codice non implementato - Completa addTodo()');

    } catch (error) {
        alert('Errore: ' + error.message);
        console.error('Errore:', error);
    }
}

// ======== 3️⃣ MODIFICA TODO (PUT) ========
/**
 * Fai PUT a /todos/{id} con {completato: !currentValue}
 * Ricarica la lista
 */
async function toggleTodo(id, currentCompleted) {
    try {
        // 👇 SCRIVI QUI - Fai fetch PUT
        // const response = await fetch(BASE_URL + '/todos/' + id, {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ completato: !currentCompleted })
        // });
        // loadUserTodos();

        throw new Error('Codice non implementato - Completa toggleTodo()');

    } catch (error) {
        alert('Errore: ' + error.message);
        console.error('Errore:', error);
    }
}

// ======== 4️⃣ ELIMINA TODO (DELETE) ========
/**
 * Chiedi conferma con confirm()
 * Fai DELETE a /todos/{id}
 * Ricarica la lista
 */
async function deleteTodo(id) {
    if (!confirm('Sei sicuro di voler eliminare questo TODO?')) {
        return;
    }

    try {
        // 👇 SCRIVI QUI - Fai fetch DELETE
        // const response = await fetch(BASE_URL + '/todos/' + id, {
        //     method: 'DELETE'
        // });
        // loadUserTodos();

        throw new Error('Codice non implementato - Completa deleteTodo()');

    } catch (error) {
        alert('Errore: ' + error.message);
        console.error('Errore:', error);
    }
}

/**
 * Visualizza i TODO
 * (Questa funzione è già fatta - non modificare)
 */
function displayTodos(todos) {
    const container = document.getElementById('todosContainer');
    const counter = document.getElementById('counter');

    if (!Array.isArray(todos) || todos.length === 0) {
        container.innerHTML = '<div class="empty">Nessun TODO. Creane uno!</div>';
        counter.style.display = 'none';
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
    counter.style.display = 'block';

    // CREA CARD TODO
    const todosHTML = todos.map(todo => `
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

    container.innerHTML = todosHTML;
}

// ======== COLLEGA GLI EVENTI ========
document.getElementById('btnLoadTodos').addEventListener('click', loadUserTodos);
document.getElementById('btnAddTodo').addEventListener('click', addTodo);

// PERMETTI ENTER per aggiungere TODO
document.getElementById('todoInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});
