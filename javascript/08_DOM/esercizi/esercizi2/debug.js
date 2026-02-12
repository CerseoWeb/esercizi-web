/**
 * Esercizio Intermedio 3: Debugging (Trova l'errore)
 * 
 * DESCRIZIONE:
 * Il codice qui sotto dovrebbe colorare di blu TUTTI i paragrafi con classe 'testo-colorato' 
 * quando si preme il bottone. Ma non funziona o genera errore.
 * 
 * TASK:
 * 1. Apri il BROWSER esterno e leggi cosa mostra la console
 *    Se provi a cliccare il bottone dovrebbe apparire un messaggio di errore.
 * 2. Capisci perché questo codice non funziona.
 *    Potrebbe essere un errore di selezione, di metodo, o di logica.
 * 3. Correggi il codice.
 */

const bottone = document.getElementById('btn-colora-tutti');
const paragrafi = document.querySelectorAll('.testo-colorato');

bottone.addEventListener('click', () => {
    paragrafi.style.color = 'blue'; 
    console.log("Colorati!");
});
