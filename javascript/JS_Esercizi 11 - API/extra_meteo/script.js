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
 * FUNZIONE: Gestione errori
 * 
 * Mostra un messaggio di errore e logga in console
 */
function handleError(message) {
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
 * 
 * Passi:
 * 1. Leggi latitudine e longitudine dagli input
 * 2. Valida che siano compilati
 * 3. Mostra lo spinner di caricamento
 * 4. Costruisci l'URL con i parametri corretti
 * 5. Fai una GET a https://api.open-meteo.com/v1/forecast
 * 6. Se non OK, mostra errore e return
 * 7. Converti in JSON
 * 8. Estrai data.current
 * 9. Chiama displayWeather() per visualizzare
 * 10. Nascondi lo spinner
 */
async function searchWeather() {
    const lat = latitude.value;
    const lon = longitude.value;

    // VALIDAZIONE
    if (!lat || !lon) {
        handleError('Inserisci latitudine e longitudine');
        return;
    }

    loading.classList.remove('nascosto');
    weatherContainer.innerHTML = '';

    try {
        // 👇 SCRIVI QUI IL TUO CODICE 👇
        
        // 1. Costruisci l'URL con i parametri corretti:
        // const url = 'https://api.open-meteo.com/v1/forecast' +
        //     '?latitude=' + lat +
        //     '&longitude=' + lon +
        //     '&current=temperature_2m,relative_humidity_2m,weather_code' +
        //     '&timezone=auto';
        
        // 2. Fai la fetch
        // const response = await fetch(url);
        
        // 3. Se non OK, mostra errore e return
        // if (!response.ok) {
        //     throw new Error('Errore nel caricamento dei dati meteo');
        // }
        
        // 4. Converti in JSON
        // const data = await response.json();
        
        // 5. Estrai i dati meteo e visualizza
        // displayWeather(data.current, lat, lon);

        throw new Error('Codice non implementato - Completa searchWeather()');

    } catch (error) {
        handleError(error.message);
    } finally {
        loading.classList.add('nascosto');
    }
}

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

    const html = `
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

    weatherContainer.innerHTML = html;
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
