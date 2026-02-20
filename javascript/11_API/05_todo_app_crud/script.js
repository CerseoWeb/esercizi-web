// ⚠️ COMPILARE E CONTROLLARE PRIMA DI INIZIARE ⚠️
const BASE_URL = 'http://localhost:5000/api';

const userId = document.querySelector('#userId');
const todoInput = document.querySelector('#todoInput');
const btnAddTodo = document.querySelector('#btnAddTodo');

const addTodoSection = document.querySelector('#addTodoSection');
const btnLoadTodos = document.querySelector('#btnLoadTodos');
const todosContainer = document.querySelector('#todosContainer');

const loading = document.querySelector('#loading');
const counter = document.querySelector('#counter');


/**
 * FUNZIONE: Visualizza i TODO nella pagina
 * 
 * Prende in input un array di oggetti TODO (con struttura visibile nella documentazione API)
 * e crea la lista dei TODO all'interno dell'elemento todosContainer.
 * Ogni TODO mostra titolo, ID, e uno checkbox per completarlo.
 * Se l'array è vuoto, mostra un messaggio "Nessun TODO. Creane uno!".
 * Funzione già fatta - non modificare
 */
function creaListaTodos(todos) {

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

    todosContainer.innerHTML = todos.map((todo) => `
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
}


/**
 * FUNZIONE: Gestione errori
 * 
 * Mostra un messaggio di errore e logga in console
 */
function mostraErrore(message) {
    console.error('Errore:', message);
    todosContainer.innerHTML = `
        <div class="error">
            <strong>❌ ${message}</strong>
        </div>
    `;
}


/**
 * ESERCIZIO 4: Todo App CRUD Completa
 * 
 * Devi implementare 4 funzioni:
 * 1. fetchTodosUtente()  - GET    /todos?userId={id}  (READ)
 * 2. addTodo()           - POST   /todos              (CREATE)
 * 3. toggleTodo()        - PUT    /todos/{id}         (UPDATE)
 * 4. deleteTodo()        - DELETE /todos/{id}         (DELETE)
 * 
 * BONUS (OPZIONALE): Persistenza con localStorage
 * Se hai completato tutte le funzioni, puoi aggiungere la persistenza dell'utente:
 * - Quando carichi i TODO, salva l'ID utente nel localStorage
 * - Al caricamento della pagina, recupera l'ID dal localStorage
 * - Pre-compila l'input e carica automaticamente i TODO se presente
 */

// ===== VARIABILE DI STATO =====
let currentUserId = null; // Variabile globale per tenere traccia dell'ID utente corrente


/**
 * FUNZIONE 1️⃣: Carica TODO (GET)
 * 
 * Passi:
 *  1. Leggi l'ID utente dall'input
 *  2. Valida che sia un numero tra 1 e 40
 *  3. Mostra lo spinner di caricamento
 *  4. Apri un blocco try/catch
 *  5. Fai una GET a /todos?userId={id}
 *  6. Se non OK, lancia un errore con messaggio che include lo status code
 *  7. Converti la risposta in JSON
 *  8. Chiama displayTodos() per visualizzare
 *  9. Nel catch, mostra un messaggio di errore
 * 10. Nascondi lo spinner e mostra addTodoSection
 * 11. Salva l'ID utente nella variabile globale currentUserId
 */
async function fetchTodosUtente() {
    // TODO Rimuovi questa riga e completa la funzione
    mostraErrore('Codice non implementato - Completa la funzione fetchTodosUtente()');
}


/**
 * FUNZIONE 2️⃣: Aggiungi TODO (POST)
 * 
 * Passi:
 *  1. Verifica che un utente sia stato caricato (currentUserId !== null)
 *     Altrimenti, mostra errore "Carica prima un utente!" e return
 *  2. Leggi il testo dal campo di input del nuovo TODO
 *  3. Valida con trim che non sia vuoto
 *  4. Mostra lo spinner di caricamento
 *  5. Apri un blocco try/catch
 *  6. Fai una POST a /todos con body: {userId, titolo, completato: false}
 *  7. Se non OK, lancia un errore con messaggio che include lo status code
 *  8. Se OK, svuota l'input e ricarica la lista chiamando fetchTodosUtente()
 * 10. Nel catch, mostra un messaggio di errore
 * 11. Nascondi lo spinner di caricamento
 */
async function addTodo() {
}


/**
 * FUNZIONE 3️⃣: Modifica TODO (PUT)
 * 
 * Passi:
 * 1. Ricevi id e currentCompleted come parametri
 * 2. Fai una PUT a /todos/{id} con body: {completato: !currentCompleted}
 * 3. Se non OK, lancia un errore con messaggio che include lo status code
 * 4. Se OK, ricarica la lista chiamando fetchTodosUtente()
 * 5. Nel catch, mostra un messaggio di errore
 */
async function toggleTodo(id, currentCompleted) {
}


/**
 * FUNZIONE 4️⃣: Elimina TODO (DELETE)
 * 
 * Passi:
 * 1. Fai una DELETE a /todos/{id}
 * 2. Se non OK, lancia un errore con messaggio che include lo status code
 * 3. Se OK, ricarica la lista chiamando fetchTodosUtente()
 * 4. Nel catch, mostra un messaggio di errore
 */
async function deleteTodo(id) {
}


/**
 * ==========================================
 * BONUS: PERSISTENZA CON LOCALSTORAGE
 * ==========================================
 * 
 * Il localStorage permette di salvare dati nel browser che persistono
 * anche dopo il refresh della pagina.
 * 
 * OBIETTIVO: Ricordare quale utente era stato caricato l'ultima volta
 * 
 * PASSI DA IMPLEMENTARE:
 * 
 * 1️⃣ SALVATAGGIO (in fetchTodosUtente, al passo 10): Salva l'ID come stringa
 * 2️⃣ CARICAMENTO ALL'AVVIO (aggiungi DOPO gli event listener):
 *   - Recupera l'ID dal localStorage
 *   - Se esiste, pre-compila l'input e chiama fetchTodosUtente() automaticamente
 * 
 * NOTA: localStorage salva solo stringhe, quindi:
 * - Salvare: localStorage.setItem('key', valore)
 * - Recuperare: localStorage.getItem('key')
 * - Se serve un numero intero: parseInt(localStorage.getItem('key'))
 */


// ===== COLLEGA GLI EVENTI =====
btnLoadTodos.addEventListener('click', fetchTodosUtente);
btnAddTodo.addEventListener('click', addTodo);

// PERMETTI ENTER per aggiungere TODO
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});
