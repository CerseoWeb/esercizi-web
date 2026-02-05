/**
 * EXTRA 1: App Meteo con Open-Meteo
 * 
 * Open-Meteo è un'API PUBBLICA e GRATUITA che NON richiede autenticazione!
 * Puoi fare centinaia di richieste al giorno senza problemi.
 * 
 * API Base: https://api.open-meteo.com/v1/forecast
 */

/**
 * Ricerca il meteo per latitudine e longitudine
 * 
 * Parametri obbligatori:
 * - latitude: numero decimale
 * - longitude: numero decimale
 * - current: variabili da ottenere (separati da virgola)
 * - timezone: 'auto' oppure fuso orario specifico
 */
async function searchWeather() {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const loading = document.getElementById('loading');
    const container = document.getElementById('weatherContainer');

    // VALIDAZIONE
    if (!latitude || !longitude) {
        container.innerHTML = '<div class="error">❌ Inserisci latitudine e longitudine</div>';
        return;
    }

    loading.style.display = 'block';
    container.innerHTML = '';

    try {
        // 👇 SCRIVI QUI IL TUO CODICE 👇
        
        // Costruisci l'URL con i parametri corretti:
        // const url = 'https://api.open-meteo.com/v1/forecast?latitude=' + ...
        // const response = await fetch(url);
        // const data = await response.json();
        // displayWeather(data.current, latitude, longitude);

        throw new Error('Codice non implementato - Completa searchWeather()');

    } catch (error) {
        container.innerHTML = `<div class="error">❌ ${error.message}</div>`;
        console.error('Errore:', error);
    } finally {
        loading.style.display = 'none';
    }
}

/**
 * Visualizza i dati meteo
 * (Questa funzione è già fatta)
 */
function displayWeather(current, lat, lon) {
    const container = document.getElementById('weatherContainer');

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

    container.innerHTML = html;
}

// COLLEGA IL BOTTONE
document.getElementById('btnSearch').addEventListener('click', searchWeather);

// PERMETTI ENTER
document.getElementById('latitude').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchWeather();
});

document.getElementById('longitude').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchWeather();
});
