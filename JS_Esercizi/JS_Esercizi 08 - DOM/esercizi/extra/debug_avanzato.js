/**
 * Esercizio Extra: Debug Avanzato (Problemi di Logica DOM)
 * 
 * DESCRIZIONE:
 * Vogliamo spostare un elemento da una lista A a una lista B al click.
 * Il codice sotto crea le liste dinamicamente, ma c'è un problema logico o di selezione.
 * 
 * TASK:
 * 1. Analizza il codice, includilo nel file HTML, ed eseguilo.
 * 2. Il problema: Il codice tenta di aggiungere un event listener a un elemento che forse non esiste ancora o sbaglia il riferimento.
 * 3. Correggi il codice affinché cliccando su 'item-1', questo si sposti nella Lista B.
 */

// Setup del DOM per l'esercizio
// NON TOCCARE QUESTA PARTE, SERVE PER L'ESERCIZIO
const container = document.querySelector('#container-extra-debug');
container.innerHTML = `
    <p>Lista A:</p>
    <ul id="lista-a"><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li></ul>
    <p>Lista B:</p>
    <ul id="lista-b"><li>Item</li></ul>
`;

// CODICE BUGGATO:
// Vogliamo che cliccando su un item della Lista A, questo venga spostato nella Lista B.
// MA il codice attuale non funziona come previsto.
const tuttiItem = document.querySelectorAll('#lista-a > li');
const listaB = document.querySelector('#lista-b');

tuttiItem.forEach(item => {
    listaB.innerHTML = item;
});
