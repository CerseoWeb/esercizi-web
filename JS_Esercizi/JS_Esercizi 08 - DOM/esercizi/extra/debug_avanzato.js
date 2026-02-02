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
const container = document.getElementById('container-extra-debug');
container.innerHTML = `
  <ul id="lista-a"><li>Item 1</li></ul>
  <ul id="lista-b"></ul>
`;

// CODICE BUGGATO:
const item = document.querySelector('li');
const listaB = document.getElementById('lista-b');

// Vogliamo che al click, l'item vada nella lista B
item.addEventListener('click', function () {
    // Codice attuale che non fa nulla o da errore se non completato:
    listaB.innerHTML = item;
});
