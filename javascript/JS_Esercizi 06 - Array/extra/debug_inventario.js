/**
 * Esercizio Extra: Debugging Inventario Negozio (CORREGGI IL CODICE)
 * 
 * Obiettivo: Risolvere un bug logico dove l'array viene modificato in modo errato.
 * 
 * Il codice dovrebbe rimuovere l'ultimo oggetto e aggiornare l'inventario,
 * ma sembra che stia rimuovendo l'oggetto sbagliato o causando errori.
 * 
 * 1. Esegui il codice (mentalmente o con Node) per vedere cosa succede.
 * 2. Correggi la logica affinché 'Mouse' venga rimosso correttamente.
 * 3. Assicurati che anche i prezzi vengano aggiornati correttamente.
 */

let inventario = ['Tastiera', 'Monitor', 'Laptop', 'Mouse'];
let prezzi = [20, 150, 800, 15];

prezzi.pop();
inventario[inventario.length] = 'Tablet';
inventario.shift();
prezzi[0] = 15;

console.log("Inventario rimasto:", inventario);
console.log("Prezzi attuali:", prezzi);