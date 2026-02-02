/**
 * Esercizio Intermedio 3: Debugging (Trova l'errore)
 * 
 * DESCRIZIONE:
 * Il codice qui sotto dovrebbe colorare di blu TUTTI i paragrafi con classe 'testo-colorato' 
 * quando si preme il bottone. Ma non funziona o genera errore.
 * 
 * TASK:
 * 1. Apri la console e leggi l'errore quando clicchi il bottone.
 * 2. Capisci perché `style` non funziona.
 * 3. Correggi il codice.
 */

const bottone = document.getElementById('btn-colora-tutti');
const paragrafi = document.querySelectorAll('.testo-colorato');

bottone.addEventListener('click', function() {
    paragrafi.style.color = 'blue'; 
    console.log("Colorati!");
});
