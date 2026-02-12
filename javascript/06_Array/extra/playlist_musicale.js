/**
 * Esercizio Extra: Simulatore Playlist Musicale
 * 
 * Obiettivo: Combinare push, shift e la logica degli array per gestire una coda di riproduzione.
 * 
 * Immagina di gestire una playlist dinamica:
 * 1. Crea un array chiamato 'canzoni' con almeno 5 titoli di canzoni (stringhe).
 * 2. Crea un array vuoto chiamato 'inCoda' che rappresenta la coda di riproduzione.
 * 3. Aggiungi 3 canzoni casuali alla playlist 'inCoda':
 *   - Usa 'push' per aggiungere canzoni in coda.
 *   - Non rimuovere le canzoni dalla lista 'canzoni'.
 *   - Per selezionare l'indice casuale delle canzoni:
 *     1. Usa Math.random() per generare un numero casuale.
 *     2. Moltiplica per la lunghezza dell'array 'canzoni'.
 *     3. Usa Math.floor() per ottenere un indice valido.
 *   - Non importa se ci sono duplicati nella playlist.
 * 4. Simula la riproduzione della prima canzone in coda:
 *   - Stampa "In riproduzione: [Nome Canzone]"
 *   - Rimuovi quella canzone dalla lista 'inCoda'.
 * 5. Stampa le canzoni rimanenti in coda e il numero totale di canzoni rimaste.
 * 6. Esegui il codice e verifica che funzioni come previsto
 *    (ogni esecuzione dovrebbe dare risultati diversi a causa della casualità).
 */
