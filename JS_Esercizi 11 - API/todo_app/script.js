let currentUserId = null;

// 1. Funzione che crea un todo (oggetto)
function createTodo(id, title, completato) {
    return { id, title, completato };
}

// 2. Carica tutti i todos di un particolare utente
async function loadUserTodos(userId) {
    const loading = document.getElementById('loading');
    const container = document.getElementById('todosContainer');

    loading.style.display = 'block';
    container.innerHTML = '';

    try {
        const response = await fetch(`http://localhost:3000/api/todos?userId=${userId}`);
        const todos = await response.json();
        displayTodos(todos);
    } catch (error) {
        container.innerHTML = `<div class="error">❌ ${error.message}</div>`;
    } finally {
        loading.style.display = 'none';
    }
}

// 3. Aggiungi un todo
async function addTodo() {
    if (!currentUserId) {
        alert('Seleziona un utente prima!');
        return;
    }

    const input = document.getElementById('todoInput');
    const title = input.value.trim();

    if (!title) {
        alert('Inserisci un todo!');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: currentUserId, title, completato: false })
        });
        input.value = '';
        loadUserTodos(currentUserId);
    } catch (error) {
        alert('Errore: ' + error.message);
    }
}

// 4. Toggle completato
async function toggleTodo(id, currentCompleted) {
    try {
        const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completato: !currentCompleted })
        });
        loadUserTodos(currentUserId);
    } catch (error) {
        alert('Errore: ' + error.message);
    }
}

// 5. Rimuovi un todo
async function deleteTodo(id) {
    if (!confirm('Sei sicuro di voler eliminare?')) {
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
            method: 'DELETE'
        });
        loadUserTodos(currentUserId);
    } catch (error) {
        alert('Errore: ' + error.message);
    }
}

// Visualizza i todos
function displayTodos(todos) {
    const container = document.getElementById('todosContainer');

    if (!Array.isArray(todos) || todos.length === 0) {
        container.innerHTML = '<div class="empty">Nessun todo</div>';
        return;
    }

    const todosHTML = todos.map(todo => `
        <div class="todo-item ${todo.completato ? 'completed' : ''}">
            <div class="todo-content">
                <div class="todo-text">${todo.title}</div>
                <div class="todo-id">ID: ${todo.id}</div>
            </div>
            <div class="todo-actions">
                <button class="btn btn-small btn-complete" onclick="toggleTodo(${todo.id}, ${todo.completato})">
                    ${todo.completato ? '↩️' : '✓'}
                </button>
                <button class="btn btn-small btn-delete" onclick="deleteTodo(${todo.id})">
                    🗑️
                </button>
            </div>
        </div>
    `).join('');

    container.innerHTML = todosHTML;
}

// Carica gli utenti nella ricerca
async function loadUsers() {
    try {
        const response = await fetch('http://localhost:3000/api/users');
        const users = await response.json();
        
        const searchInput = document.getElementById('userSearch');
        const suggestionsContainer = document.getElementById('suggestions');

        // Filtra gli utenti mentre digiti
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            if (searchTerm.length === 0) {
                suggestionsContainer.innerHTML = '';
                return;
            }

            const filtered = users.filter(user => 
                user.nome.toLowerCase().includes(searchTerm) ||
                user.cognome.toLowerCase().includes(searchTerm)
            );

            suggestionsContainer.innerHTML = filtered.map(user => `
                <div class="suggestion-item" onclick="selectUser(${user.id}, '${user.nome} ${user.cognome}')">
                    ${user.nome} ${user.cognome} (${user.email})
                </div>
            `).join('');
        });
    } catch (error) {
        console.error('Errore nel caricamento utenti:', error);
    }
}

// Seleziona un utente
function selectUser(userId, userName) {
    currentUserId = userId;
    document.getElementById('userSearch').value = userName;
    document.getElementById('suggestions').innerHTML = '';
    document.getElementById('selectedUser').textContent = `Utente: ${userName}`;
    loadUserTodos(userId);
}

// Carica gli utenti all'avvio
loadUsers();