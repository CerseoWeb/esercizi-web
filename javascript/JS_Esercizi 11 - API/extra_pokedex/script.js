/**
 * EXTRA 2: Pokédex con PokéAPI
 * 
 * PokéAPI è un'API PUBBLICA e GRATUITA con migliaia di dati su Pokémon!
 * NON richiede autenticazione, puoi fare tante richieste quante vuoi.
 * 
 * API Base: https://pokeapi.co/api/v2/
 */

// ===== VARIABILI DEL DOM =====
const pokemonInput = document.getElementById('pokemonInput');
const btnSearch = document.getElementById('btnSearch');
const loading = document.getElementById('loading');
const pokemonContainer = document.getElementById('pokemonContainer');


/**
 * FUNZIONE: Gestione errori
 * 
 * Mostra un messaggio di errore e logga in console
 */
function handleError(message) {
    pokemonContainer.innerHTML = `
        <div class="error">
            <strong>❌ ${message}</strong>
        </div>
    `;
    console.error('Errore:', message);
}


/**
 * FUNZIONE: Ricerca un Pokémon per nome o numero
 * 
 * Parametri:
 * - Accetta nome (in minuscolo) o numero ID
 * - Ritorna oggetto con tutte le info del Pokémon
 * 
 * Passi:
 * 1. Leggi il valore dall'input
 * 2. Converti a minuscolo e trim()
 * 3. Valida che non sia vuoto
 * 4. Mostra lo spinner di caricamento
 * 5. Fai una GET a https://pokeapi.co/api/v2/pokemon/{input}
 * 6. Se la risposta non è OK (404), mostra "Pokémon non trovato" e return
 * 7. Converti in JSON
 * 8. Chiama displayPokemon() per visualizzare
 * 9. Nascondi lo spinner
 */
async function searchPokemon() {
    const input = pokemonInput.value.trim().toLowerCase();

    // VALIDAZIONE
    if (!input) {
        handleError('Inserisci il nome o numero di un Pokémon');
        return;
    }

    loading.classList.remove('nascosto');
    pokemonContainer.innerHTML = '';

    try {
        // 👇 SCRIVI QUI IL TUO CODICE 👇
        
        // 1. Fai una fetch GET a: https://pokeapi.co/api/v2/pokemon/ + input
        // const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + input);
        
        // 2. Controlla se la risposta è OK (non 404)
        // if (!response.ok) {
        //     throw new Error('Pokémon non trovato');
        // }
        
        // 3. Converti in JSON
        // const pokemon = await response.json();
        
        // 4. Visualizza
        // displayPokemon(pokemon);

        throw new Error('Codice non implementato - Completa searchPokemon()');

    } catch (error) {
        handleError(error.message);
    } finally {
        loading.classList.add('nascosto');
    }
}

/**
 * FUNZIONE: Visualizza le informazioni del Pokémon
 * (Questa funzione è già fatta - non modificare)
 */
function displayPokemon(pokemon) {

    // ESTRAI I DATI
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id;
    const image = pokemon.sprites.front_default || 'https://placehold.co/200';
    const height = (pokemon.height / 10).toFixed(1); // Converti da dm a metri
    const weight = (pokemon.weight / 10).toFixed(1); // Converti da hg a kg
    const types = pokemon.types.map(t => t.type.name).join(', ');

    const html = `
        <div class="pokemon-card">
            <div class="card-header">
                <h2>#${id} - ${name}</h2>
            </div>

            <div class="card-image">
                <img src="${image}" alt="${name}">
            </div>

            <div class="card-details">
                <div class="detail-row">
                    <strong>Tipo:</strong>
                    <span>${types}</span>
                </div>
                <div class="detail-row">
                    <strong>Altezza:</strong>
                    <span>${height} m</span>
                </div>
                <div class="detail-row">
                    <strong>Peso:</strong>
                    <span>${weight} kg</span>
                </div>
            </div>

            <div class="card-footer">
                <small>Dati da <a href="https://pokeapi.co/" target="_blank">PokéAPI</a></small>
            </div>
        </div>
    `;

    pokemonContainer.innerHTML = html;
}

// ===== COLLEGA GLI EVENTI =====
btnSearch.addEventListener('click', searchPokemon);

// PERMETTI ENTER
pokemonInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchPokemon();
    }
});
