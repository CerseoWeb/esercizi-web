/**
 * EXTRA 2: Pokédex con PokéAPI
 * 
 * PokéAPI è un'API PUBBLICA e GRATUITA con migliaia di dati su Pokémon!
 * NON richiede autenticazione, puoi fare tante richieste quante vuoi.
 * 
 * API Base: https://pokeapi.co/api/v2/
 */

/**
 * Ricerca un Pokémon per nome o numero
 * 
 * Parametri:
 * - Accetta nome (in minuscolo) o numero ID
 * - Ritorna oggetto con tutte le info del Pokémon
 */
async function searchPokemon() {
    const input = document.getElementById('pokemonInput').value.trim().toLowerCase();
    const loading = document.getElementById('loading');
    const container = document.getElementById('pokemonContainer');

    // VALIDAZIONE
    if (!input) {
        container.innerHTML = '<div class="error">❌ Inserisci il nome o numero di un Pokémon</div>';
        return;
    }

    loading.style.display = 'block';
    container.innerHTML = '';

    try {
        // 👇 SCRIVI QUI IL TUO CODICE 👇
        
        // Fai una fetch GET a: https://pokeapi.co/api/v2/pokemon/ + input
        // const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + input);
        
        // Controlla se la risposta è OK (non 404)
        // if (!response.ok) {
        //     throw new Error('Pokémon non trovato');
        // }
        
        // Converti in JSON
        // const pokemon = await response.json();
        
        // Visualizza
        // displayPokemon(pokemon);

        throw new Error('Codice non implementato - Completa searchPokemon()');

    } catch (error) {
        container.innerHTML = `<div class="error">❌ ${error.message}</div>`;
        console.error('Errore:', error);
    } finally {
        loading.style.display = 'none';
    }
}

/**
 * Visualizza le informazioni del Pokémon
 * (Questa funzione è già fatta)
 */
function displayPokemon(pokemon) {
    const container = document.getElementById('pokemonContainer');

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

    container.innerHTML = html;
}

// COLLEGA IL BOTTONE
document.getElementById('btnSearch').addEventListener('click', searchPokemon);

// PERMETTI ENTER
document.getElementById('pokemonInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchPokemon();
    }
});
