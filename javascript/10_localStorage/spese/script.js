/**
 * ESERCIZIO: Gestore Spese con localStorage
 * 
 * OBIETTIVO:
 * Creare un'app che permette all'utente di aggiungere spese, salvarle in localStorage,
 * visualizzarle per categoria e calcolare statistiche.
 * 
 * STRUTTURA DATI:
 * Array di oggetti spese:
 * [
 *   { id: 1, categoria: "Cibo", importo: 25.50, descrizione: "Cena", data: "2026-02-06" },
 *   { id: 2, categoria: "Trasporti", importo: 5.00, descrizione: "Benzina", data: "2026-02-06" }
 * ]
 */

// SELEZIONE ELEMENTI DOM
const selectCategoria = document.querySelector('#categoria');
const inputImporto = document.querySelector('#importo');
const inputDescrizione = document.querySelector('#descrizione');
const btnAggiungi = document.querySelector('#btnAggiungi');
const btnRipristina = document.querySelector('#btnRipristina');
const btnEsporta = document.querySelector('#btnEsporta');

// STATO DELL'APP con alcuni esempi iniziali (per testare, da rimuovere o modificare in seguito)
let spese = [
    { id: 1, categoria: "Cibo", importo: 25.50, descrizione: "Cena", data: "2026-02-06" },
    { id: 2, categoria: "Trasporti", importo: 5.00, descrizione: "Benzina", data: "2026-02-06" },
    { id: 3, categoria: "Cibo", importo: 15.00, descrizione: "Pranzo", data: "2026-02-05" }
];
let ultimoId = 0;


/**
 * FUNZIONE 1: Carica le spese dal localStorage
 * 
 * Passi:
 * 1. Controlla se esiste la chiave "spese" in localStorage
 * 2. Se esiste, parsa il JSON e assegna a 'spese'
 * 3. Se esiste, trova il massimo ID per continuare da lì con ultimoId
 * 4. Se non esiste, lascia spese come array vuoto
 * 5. Chiama visualizzaLista() per mostrare i dati
 */
function caricaSpeseStorage() {
}


/**
 * FUNZIONE 2: Salva tutte le spese nel localStorage
 * 
 * Passi:
 * 1. Converti l'array 'spese' in JSON con JSON.stringify()
 * 2. Salva la stringa JSON in localStorage con chiave "spese"
 */
function salvaSpeseStorage() {
}


/**
 * FUNZIONE 3: Aggiungi una nuova spesa
 * 
 * Passi:
 * 1. Leggi i valori dagli input (categoria, importo, descrizione)
 * 2. Valida che categoria sia selezionata e importo > 0
 * 3. Se non valido, mostra un alert e fermati
 * 4. Crea un oggetto spesa con:
 *    - id: incrementa ultimoId e usa il nuovo valore
 *    - categoria: il valore selezionato
 *    - importo: converti a numero float
 *    - descrizione: il valore dell'input
 *    - data: la data odierna in formato "YYYY-MM-DD" (usa new Date())
 * 5. Aggiungi l'oggetto all'array 'spese'
 * 6. Salva con salvaSpeseStorage()
 * 7. Svuota gli input
 * 8. Chiama visualizzaLista() per aggiornare l'UI
 */
function aggiungiSpesa() {
}


/**
 * FUNZIONE 4: Elimina una spesa per indice
 * 
 * Passi:
 * 1. Rimuovi l'elemento dall'array 'spese' usando splice(indice, 1)
 * 2. Salva con salvaSpeseStorage()
 * 3. Chiama visualizzaLista() per aggiornare l'UI
 */
function eliminaSpesa(indice) {
}


/**
 * FUNZIONE 5: Calcola le statistiche
 * 
 * Passi:
 * 1. Calcola il totale sommando tutti gli importi
 * 2. Conta il numero di spese
 * 3. Calcola la media: totale / numerospese (se numero > 0, altrimenti 0)
 * 4. Ritorna un oggetto con { totale, numero, media }
 */
function calcolaStatistiche() {
    let totale = 0;
    let numero = 0;
    let media = 0;

    // TODO: Calcoli qui

    return {
        totale: totale,
        numero: numero,
        media: media
    };
}


/**
 * FUNZIONE 6: Raggruppa spese per categoria
 * 
 * Passi:
 * 1. Crea un oggetto vuoto: { }
 * 2. Per ogni spesa nell'array, aggiungi la categoria come chiave
 * 3. Se la categoria non esiste ancora, crea un array vuoto
 * 4. Aggiungi la spesa all'array della categoria
 * 5. Ritorna l'oggetto raggruppato
 * 
 * Risultato atteso:
 * {
 *   "Cibo": [spesa1, spesa2],
 *   "Trasporti": [spesa3],
 *   ...
 * }
 */
function raggruppaSpesePerCategoria() {
    let categorie = {};
    spese.forEach(spesa => {
        if (!categorie[spesa.categoria]) {
            categorie[spesa.categoria] = [];
        }
        categorie[spesa.categoria].push(spesa);
    });

    return categorie;
}


/**
 * FUNZIONE 7: Visualizza e aggiorna tutta l'interfaccia
 * 
 * Passi:
 * 1. Chiama calcolaStatistiche() e salva il risultato
 * 2. Aggiorna i valori HTML:
 *    - '#totaleSpese' con il totale formattato (2 decimali)
 *    - '#numeroSpese' con il numero di spese
 *    - '#mediaSpesa' con la media formattata (2 decimali)
 * 3. Chiama raggruppaSpesePerCategoria() per ottenere le categorie
 * 4. Pulisci il contenuto di '#categorieStime'
 * 5. Per ogni categoria raggruppata:
 *    - Crea un div con classe 'categoria-card'
 *    - Aggiungi un header con il nome categoria e totale
 *    - Aggiungi una lista (<ul>) con classe 'spese-list'
 *    - Per ogni spesa della categoria, crea un <li> con classe 'spesa-item'
 *      con: descrizione, importo, data e pulsante elimina
 *    - Il pulsante elimina deve chiamare eliminaSpesa(indice) al click
 * 6. Se non ci sono spese, mostra un messaggio "Nessuna spesa"
 * 
 * NOTA: Usa toFixed(2) per formattare i numeri a 2 decimali
 */
function visualizzaLista() {
    let stats = calcolaStatistiche();
    document.querySelector('#totaleSpese').textContent = stats.totale.toFixed(2) + " €";
    document.querySelector('#numeroSpese').textContent = stats.numero;
    document.querySelector('#mediaSpesa').textContent = stats.media.toFixed(2) + " €";

    let categorie = raggruppaSpesePerCategoria();
    let containerCategorie = document.querySelector('#categorieStime');
    containerCategorie.innerHTML = '';

    if (spese.length === 0) {
        containerCategorie.innerHTML = '<p>Nessuna spesa aggiunta.</p>';
        return;
    }

    for (let categoria in categorie) {
        let divCategoria = document.createElement('div');
        divCategoria.classList.add('categoria-card');

        let header = document.createElement('h3');
        let totaleCategoria = categorie[categoria].reduce((sum, spesa) => sum + spesa.importo, 0);
        header.textContent = `${categoria} - Totale: ${totaleCategoria.toFixed(2)} €`;
        divCategoria.appendChild(header);

        let ulSpese = document.createElement('ul');
        ulSpese.classList.add('spese-list');

        categorie[categoria].forEach(spesa => {
            let liSpesa = document.createElement('li');
            liSpesa.classList.add('spesa-item');
            liSpesa.innerHTML = `
                <span>${spesa.descrizione} - ${spesa.importo.toFixed(2)} € - ${spesa.data}</span>
                <button class="btn-elimina" onclick="eliminaSpesa(${spese.indexOf(spesa)})">Elimina</button>
            `;
            ulSpese.appendChild(liSpesa);
        });

        divCategoria.appendChild(ulSpese);
        containerCategorie.appendChild(divCategoria);
    }
}


/**
 * FUNZIONE 8: Ripristina tutto
 * 
 * Passi:
 * 1. Chiedi conferma con confirm()
 * 2. Se confermato:
 *    - Svuota l'array spese: spese = []
 *    - Resetta ultimoId = 0
 *    - Elimina la chiave "spese" da localStorage
 *    - Chiama visualizzaLista()
 */
function ripristinaTutto() {
    // Si vede solo nel browser e non nel plugin di vscode
    if (confirm("Sei sicuro di voler eliminare tutte le spese?")) {
        spese = [];
        ultimoId = 0;
        localStorage.removeItem("spese");
        visualizzaLista();
    }
}

// ===== EVENT LISTENER =====
document.addEventListener('DOMContentLoaded', () => {
    caricaSpeseStorage();
    visualizzaLista();
});

btnAggiungi.addEventListener('click', aggiungiSpesa);
btnRipristina.addEventListener('click', ripristinaTutto);
