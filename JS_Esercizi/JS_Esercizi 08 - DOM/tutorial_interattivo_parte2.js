// TUTORIAL INTERATTIVO: DOM Parte 2 - Creazione, Rimozione ed Eventi
// Apri il file 'tutorial_parte2.html'.

/**
 * ===========================================
 * === 1. Creazione di Elementi ===
 * `document.createElement(tagName)` crea un nuovo elemento in memoria (non ancora visibile).
 */
// TODO: Crea un nuovo elemento 'li' e salvalo in una variabile chiamata `nuovoElemento`.
// TODO: Imposta il suo `textContent` a "Sono un nuovo elemento creato via JS".


/**
 * ===========================================
 * === 2. Aggiunta di Elementi al DOM ===
 * `genitore.appendChild(figlio)` o `genitore.append(figlio)` aggiunge l'elemento alla pagina.
 */
// TODO: Seleziona la lista `ul` con id 'lista-dinamica'.
// TODO: Aggiungi `nuovoElemento` alla lista usando `appendChild`.


/**
 * ===========================================
 * === 3. Rimozione di Elementi ===
 * `elemento.remove()` elimina l'elemento dal DOM.
 */
// TODO: Seleziona il PRIMO elemento `li` della lista (puoi usare querySelector che prende il primo).
// TODO: Rimuovilo usando il metodo `.remove()`.


/**
 * ===========================================
 * === 4. AddEventListener (Click) ===
 * Permette di eseguire una funzione quando avviene un evento.
 */
// TODO: Seleziona il bottone con id 'btn-aggiungi'.
// TODO: Aggiungi un ascoltatore per l'evento 'click'.
// TODO: Nella funzione, mostra un `alert("Hai cliccato il bottone!")`.


/**
 * ===========================================
 * === 5. Eventi Comuni (Input) ===
 * L'evento 'input' scatta ogni volta che si digita in un campo di testo.
 */
// TODO: Seleziona l'input con id 'input-utente' e lo span con id 'output-testo'.
// TODO: Aggiungi un listener 'input' al campo di testo.
// TODO: Nella funzione, copia il valore dell'input (`input.value`) dentro il `textContent` dello span.


/**
 * ===========================================
 * === 6. Event Object (e.target) ===
 * La funzione dell'evento riceve un argomento (spesso chiamato `e` o `event`) che contiene dettagli.
 * `e.target` è l'elemento specifico che ha scatenato l'evento.
 */
// TODO: Seleziona l'intera lista `ul` ('lista-dinamica').
// TODO: Aggiungi un listener 'click' alla LISTA INTERA (non ai singoli li).
// TODO: Nella funzione, usa `e.target.style.color = 'red'`.

