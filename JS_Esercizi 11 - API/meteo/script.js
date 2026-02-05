// TODO: Completa questa funzione
async function fetchWeatherData() {
    const loading = document.getElementById('loading');
    const result = document.getElementById('result');
    const weatherInfo = document.getElementById('weatherInfo');

    // 1. Mostra il loading spinner
    loading.style.display = 'block';
    result.classList.remove('show');

    try {
        // 2. Scrivi qui il fetch per ottenere i dati da:
        //    http://localhost:3000/api/weather
        // 3. Converti la risposta in JSON
        // 4. Mostra i dati nella pagina

        // SUGGERIMENTO: Usa la struttura vista nel tutorial
        // const response = await fetch('...');
        // const data = await response.json();

        console.log('Scrivi il codice qui!');
        throw new Error('Codice non implementato');

    } catch (error) {
        console.error('Errore:', error);
        result.classList.add('show');
        weatherInfo.innerHTML = `
            <div class="weather-detail error">
                <strong>❌ Errore:</strong> ${error.message}
            </div>
        `;
    } finally {
        loading.style.display = 'none';
    }
}

// Funzione helper per formattare la risposta
function displayWeatherData(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const result = document.getElementById('result');

    if (Array.isArray(data)) {
        // Se è un array
        weatherInfo.innerHTML = data.map(item => `
            <div class="weather-detail success">
                <h3>${item.city || item.name || 'Città sconosciuta'}</h3>
                <p>🌡️ Temperatura: ${item.temperature || item.temp || 'N/A'}°C</p>
                <p>💨 Umidità: ${item.humidity || 'N/A'}%</p>
                <p>☁️ Condizioni: ${item.condition || item.description || 'N/A'}</p>
            </div>
        `).join('');
    } else {
        // Se è un singolo oggetto
        weatherInfo.innerHTML = `
            <div class="weather-detail success">
                <h3>${data.city || data.name || 'Città sconosciuta'}</h3>
                <p>🌡️ Temperatura: ${data.temperature || data.temp || 'N/A'}°C</p>
                <p>💨 Umidità: ${data.humidity || 'N/A'}%</p>
                <p>☁️ Condizioni: ${data.condition || data.description || 'N/A'}</p>
            </div>
        `;
    }

    result.classList.add('show');
}
