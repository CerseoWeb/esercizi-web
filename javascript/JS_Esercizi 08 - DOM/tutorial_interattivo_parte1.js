// TUTORIAL INTERATTIVO: DOM Parte 1 - Selezione e Manipolazione
// Apri il file 'tutorial_parte1.html' nel browser e guarda la CONSOLE (F12).

/**
 * ===========================================
 * === 1. Selezionare tramite ID ===
 * Il metodo `querySelector` seleziona un singolo elemento.
 * Possiamo usare un selettore CSS per identificare l'elemento.
 */
// TODO: Seleziona l'elemento h1 con id 'titolo-principale' e salvalo in una variabile.
// TODO: Stampa la variabile in console.
// TODO: Seleziona l'elemento p e salvalo in una variabile.
// TODO: Stampa la variabile in console e verifica q chi appartiene il paragrafo.


/**
 * ===========================================
 * === 2. QuerySelectorAll ===
 * `querySelector` trova il PRIMO elemento che corrisponde al selettore CSS.
 * `querySelectorAll` trova TUTTI gli elementi e restituisce una lista.
 */
// TODO: Usa `querySelectorAll` per selezionare tutti gli elementi con classe 'paragrafo-testo'.
// TODO: Usa `querySelectorAll` per selezionare tutti gli elementi p nella pagina.
// TODO: Stampa entrambi i risultati in console.


/**
 * ===========================================
 * === 3. Modificare Testo e HTML ===
 * `textContent` modifica solo il testo visibile.
 * `value` modifica il valore di input (es. campi di testo).
 * `innerHTML` può inserire tag HTML all'interno dell'elemento.
 */
// TODO: Cambia il testo dell'elemento 'titolo-principale' in "Workshop JavaScript".
// TODO: Cambia il valore dell'input con id 'input-nome' a "Mario Rossi".
// TODO: Cambia il testo del paragrafo con id 'paragrafo-unico' in "<b>Testo in grassetto</b>".
// TODO: Usa `innerHTML` al posto di `textContent` per inserire il testo in grassetto.


/**
 * ===========================================
 * === 4. Leggere e Modificare Attributi ===
 * `getAttribute` legge un valore (es. href, src, id).
 * `setAttribute` imposta un nuovo valore.
 * Un attributo si può anche accedere direttamente come proprietà dell'elemento.
 */
// TODO: Seleziona il link con id 'link-google'.
// TODO: Imposta il suo attributo 'href' a 'https://www.google.com'.
// TODO: Cambia il testo del link in "Vai a Google".


/**
 * ===========================================
 * === 5. Modificare lo Stile (CSS) ===
 * Puoi accedere alle proprietà CSS tramite l'oggetto `.style`.
 * Le proprietà usano il camelCase (es. background-color diventa backgroundColor).
 */
// TODO: Seleziona il div con id 'box-stile'.
// TODO: Cambia il suo `style.color` in 'red'.
// TODO: Cambia il suo `style.border` in '2px solid red'.


/**
 * ===========================================
 * === 6. Gestire le Classi CSS ===
 * `classList` permette di aggiungere, rimuovere o alternare classi CSS.
 * Metodi utili: .add(), .remove(), .toggle().
 */
// TODO: Seleziona nuovamente il div 'box-stile'.
// TODO: Aggiungi la classe 'evidenziato' (definita nel CSS) usando `classList.add`.
// TODO: Rimuovi la classe 'box' usando `classList.remove`.
// TODO: Alterna la classe 'box' o la classe 'evidenziato' usando `classList.toggle`.

