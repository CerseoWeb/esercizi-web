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
 * FUNZIONE: Visualizza le informazioni del Pokémon
 * Crea una card con nome, immagine, tipi, altezza e peso.
 * Funzione già fatta - non modificare
 */
function displayPokemon(pokemon) {

    // ESTRAI I DATI
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id;
    const image = pokemon.sprites.front_default || 'https://placehold.co/200';
    const height = (pokemon.height / 10).toFixed(1); // Converti da dm a metri
    const weight = (pokemon.weight / 10).toFixed(1); // Converti da hg a kg
    const types = pokemon.types.map(t => t.type.name).join(', ');

    pokemonContainer.innerHTML = `
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
}

/**
 * FUNZIONE: Gestione errori
 * Mostra un messaggio di errore e logga in console
 * Funzione già fatta - non modificare
 */
function mostraErrore(message) {
    console.error('Errore:', message);
    pokemonContainer.innerHTML = `
        <div class="error">
            <strong>❌ ${message}</strong>
        </div>
    `;
}


/**
 * FUNZIONE: Ricerca un Pokémon per nome o numero
 * La funzione cerca un Pokémon e lo visualizza. Se non trovato, mostra un errore.
 * 
 * Parametri dell'API:
 * - Accetta nome (in minuscolo) o numero ID
 * - Ritorna oggetto con tutte le info del Pokémon
 */
async function searchPokemon() {
    const input = pokemonInput.value.trim().toLowerCase();

    // VALIDAZIONE
    if (!input) {
        mostraErrore('Inserisci il nome o numero di un Pokémon');
        return;
    }

    loading.classList.remove('nascosto');
    pokemonContainer.innerHTML = '';

    try {
        // 1. Fai una fetch GET a: `https://pokeapi.co/api/v2/pokemon/${input}`
        
        // 2. Controlla se la risposta è OK, altrimenti lancia un errore con "Pokémon non trovato"
        
        // 3. Converti in JSON
        
        // 4. Visualizza con displayPokemon()

        throw new Error('Codice non implementato - Completa searchPokemon()'); // Da rimuovere

    } catch (error) {
        mostraErrore(error.message);
    }

    loading.classList.add('nascosto');
}


// ===== COLLEGA GLI EVENTI =====
btnSearch.addEventListener('click', searchPokemon);

// PERMETTI ENTER
pokemonInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchPokemon();
    }
});
