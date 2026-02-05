// TODO: Completa questa funzione
async function fetchAndDisplayUsers() {
    const loading = document.getElementById('loading');
    const container = document.getElementById('usersContainer');

    // 1. Mostra il loading spinner
    loading.style.display = 'block';
    container.innerHTML = '';

    try {
        // 2. Scrivi qui il fetch per ottenere gli utenti da:
        //    http://localhost:3000/api/users
        // 3. Converti la risposta in JSON
        // 4. Passa i dati alla funzione displayUsers()

        // SUGGERIMENTO:
        // const response = await fetch('...');
        // const users = await response.json();
        // displayUsers(users);

        console.log('Scrivi il codice qui!');
        throw new Error('Codice non implementato');

    } catch (error) {
        console.error('Errore:', error);
        container.innerHTML = `
            <div class="error">
                <strong>❌ Errore:</strong> ${error.message}
            </div>
        `;
    } finally {
        loading.style.display = 'none';
    }
}

// Funzione helper per visualizzare gli utenti
function displayUsers(users) {
    const container = document.getElementById('usersContainer');

    if (!Array.isArray(users) || users.length === 0) {
        container.innerHTML = '<div class="empty">Nessun utente trovato</div>';
        return;
    }

    // Crea le card per ogni utente
    const cardsHTML = users.map(user => `
        <div class="user-card">
            <h3>${user.name || 'Nome sconosciuto'}</h3>
            <p>📧 <strong>Email:</strong> ${user.email || 'N/A'}</p>
            <p>📞 <strong>Telefono:</strong> ${user.phone || 'N/A'}</p>
            <p>🌐 <strong>Website:</strong> ${user.website || 'N/A'}</p>
        </div>
    `).join('');

    // Aggiungi il contatore di utenti
    const counterHTML = `<div class="counter">📊 Totale: ${users.length} utenti</div>`;

    container.innerHTML = cardsHTML + counterHTML;
}
