/**
 * EXTRA 1: App Meteo con Open-Meteo
 * 
 * Open-Meteo è un'API PUBBLICA e GRATUITA che NON richiede autenticazione!
 * Puoi fare centinaia di richieste al giorno senza problemi.
 * 
 * API Base: https://api.open-meteo.com/v1/forecast
 */

// ===== VARIABILI DEL DOM =====
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const btnSearch = document.getElementById('btnSearch');
const loading = document.getElementById('loading');
const weatherContainer = document.getElementById('weatherContainer');


/**
 * FUNZIONE: Visualizza i dati meteo
 * (Questa funzione è già fatta - non modificare)
 */
function displayWeather(current, lat, lon) {

    // Converti codice meteo in descrizione
    const weatherDescriptions = {
        0: { emoji: '☀️', descrizione: 'Sereno' },
        1: { emoji: '🌤️', descrizione: 'Poco nuvoloso' },
        2: { emoji: '⛅', descrizione: 'Nuvoloso' },
        3: { emoji: '☁️', descrizione: 'Molto nuvoloso' },
        45: { emoji: '🌫️', descrizione: 'Nebbia' },
        48: { emoji: '🌫️', descrizione: 'Nebbia con brina' },
        51: { emoji: '🌧️', descrizione: 'Pioggia leggera' },
        53: { emoji: '🌧️', descrizione: 'Pioggia' },
        55: { emoji: '⛈️', descrizione: 'Pioggia forte' },
        80: { emoji: '🌧️', descrizione: 'Pioggia leggera' },
        81: { emoji: '🌧️', descrizione: 'Pioggia' },
        82: { emoji: '⛈️', descrizione: 'Pioggia forte' },
        95: { emoji: '⛈️', descrizione: 'Temporale' },
    };

    const weather = weatherDescriptions[current.weather_code] || { emoji: '❓', descrizione: 'Sconosciuto' };

    weatherContainer.innerHTML = `
        <div class="weather-card">
            <div class="location">
                📍 ${lat.toFixed(2)}°N, ${lon.toFixed(2)}°E
            </div>
            
            <div class="weather-main">
                <div class="emoji">${weather.emoji}</div>
                <div class="temp">${current.temperature_2m}°C</div>
            </div>

            <div class="weather-details">
                <p><strong>Condizione:</strong> ${weather.descrizione}</p>
                <p><strong>Umidità:</strong> ${current.relative_humidity_2m}%</p>
                <p><strong>Codice Meteo:</strong> ${current.weather_code}</p>
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
    weatherContainer.innerHTML = `
        <div class="error">
            <strong>❌ ${message}</strong>
        </div>
    `;
    console.error('Errore:', message);
}


/**
 * FUNZIONE: Ricerca il meteo per latitudine e longitudine
 * 
 * Parametri obbligatori dell'API:
 * - latitude: numero decimale
 * - longitude: numero decimale
 * - current: variabili da ottenere (separati da virgola)
 * - timezone: 'auto' oppure fuso orario specifico
 */
async function searchWeather() {
    const lat = latitude.value;
    const lon = longitude.value;

    // VALIDAZIONE
    if (!lat || !lon) {
        mostraErrore('Inserisci latitudine e longitudine');
        return;
    }

    loading.classList.remove('nascosto');
    weatherContainer.innerHTML = '';

    try {
        // 1. Costruisci l'URL `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code&timezone=auto`
        
        // 2. Fai la fetch
        
        // 3. Se non OK, lancia un errore con lo status code
        
        // 4. Converti in JSON
        
        // 5. Estrai i dati meteo e visualizza con displayWeather()

        throw new Error('Codice non implementato - Completa searchWeather()'); // Da Rimuovere

    } catch (error) {
        mostraErrore(error.message);
    }

    loading.classList.add('nascosto');
}


// ===== COLLEGA GLI EVENTI =====
btnSearch.addEventListener('click', searchWeather);

// PERMETTI ENTER
latitude.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchWeather();
});

longitude.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchWeather();
});
