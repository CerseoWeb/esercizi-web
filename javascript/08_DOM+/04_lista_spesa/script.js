// DATI INIZIALI
// Questa lista funge da "Database" locale. Tutto ciò che vedi a schermo DEVE derivare da qui.
// Inizialmente contiene due prodotti di esempio (rimuovete se volete)
let lista = [
    { prodotto: 'Pane', prezzo: 1.50, sbarrato: false },
    { prodotto: 'Latte', prezzo: 1.20, sbarrato: false },
    { prodotto: 'Uova', prezzo: 2.30, sbarrato: false },
    { prodotto: 'Mele', prezzo: 0.80, sbarrato: true },
    { prodotto: 'Caffè', prezzo: 3.50, sbarrato: false }
];

// ESERCIZIO: Assicurati di avere questi elementi nel tuo HTML
// poi selezionali qui con querySelector.
// Gli ID potranno essere a tua scelta, ma devono essere univoci e chiari.
// Se l'elemento non esiste nell'HTML, aggiungilo tu. Es. <input id="prodotto" type="text">
const inputProdotto = document.querySelector(''); 
const inputPrezzo = document.querySelector('');
const btnAggiungi = document.querySelector('');
const ulSpesa = document.querySelector('');
const divTotale = document.querySelector('');


/**
 * FUNZIONE 1: Visualizza/Aggiorna Lista
 * Questa funzione è il "motore" grafico. Deve:
 * 1. Pulire la lista attuale nel DOM (per evitare duplicati)
 * 2. Ciclare l'array 'lista'
 * 3. Per ogni elemento, chiamare la funzione 'creaRigaElemento'
 * 4. Chiamare la funzione 'aggiornaTotale' alla fine per calcolare il conto
 */
function aggiornaLista() {
    ulSpesa.innerHTML = '';
    lista.forEach(elemento => {
        creaRigaElemento(elemento);
    });
    aggiornaTotale();
}


/**
 * FUNZIONE 2: Crea Elemento HTML (li)
 * Questa funzione si occupa di creare il singolo pezzetto di HTML.
 * Deve:
 * 1. Creare un tag <li>
 * 2. Impostare il testo (es. "Pane - 1.50 €")
 * 3. Se l'elemento ha la proprietà .sbarrato === true, aggiungere la classe CSS 'preso'
 * 4. Gestire il click se clicco sull'li:
 *   - Invertire la proprietà .sbarrato dell'oggetto (true/false)
 *   - Aggiornare la classe CSS 'preso' sull'li (toggle)
 *   - Aggiornare il totale chiamando aggiornaTotale()
 * 5. Aggiungere l'li al <ul> della lista
 */
function creaRigaElemento(elemento) {
}


/**
 * FUNZIONE 4: Calcola Totale
 * Deve:
 * 1. Creare una variabile somma = 0
 * 2. Ciclare l'array 'lista'
 * 3. Sommare i prezzi (Attenzione: farlo solo per quelli che NON sono sbarrati, cioè sbarrato: false)
 * 4. Scrivere il risultato nel divTotale
 */
function aggiornaTotale() {
}


/**
 * EVENTO PRINCIPALE: Click su Aggiungi
 * 1. Leggere i valori degli input (value)
 *    Nota che il prezzo deve essere convertito in numero.
 *    Per farlo usa parseFloat(valore) o Number(valore)
 * 2. Validazione: se i campi sono pieni e il prezzo > 0
 * 3. Creare un nuovo oggetto { prodotto: ..., prezzo: ..., sbarrato: false }
 * 4. Aggiungerlo all'array 'lista' (push)
 * 5. Richiamare aggiornaLista()
 * 6. Svuotare gli input
 */
btnAggiungi.addEventListener('click', function () {
});


// AVVIO
// Chiamata iniziale per mostrare i dati di esempio (Pane e Latte)
aggiornaLista();
