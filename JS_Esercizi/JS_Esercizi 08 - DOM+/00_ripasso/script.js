/**
 * ============================================================
 * RIPASSO DOM - STEP BY STEP
 * ============================================================
 * Questo file contiene esercizi di base sul DOM.
 * Ogni esercizio ha una soluzione che modifica l'HTML
 * e mostra il risultato visibile immediatamente.
 */


// ============ STEP 1: SELETTORI ============

/**
 * ESERCIZIO 1.1: Selettori per ID
 * Passi:
 * 1. Seleziona l'elemento con id="messaggio-id" usando document.querySelector('#messaggio-id')
 * 2. Scrivi il risultato in console per verificare
 * 3. Aggiorna il paragrafo con id="risultato-1-1" scrivendo "✅ Elemento selezionato: " + il testo dell'elemento
 */
function esercizio_1_1() {
    const elemento = document.querySelector('');
    
    if (elemento) {
        const risultato = document.querySelector('#risultato-1-1');
        risultato.textContent = '✅ Elemento selezionato: ' + elemento.textContent;
    }
}


/**
 * ESERCIZIO 1.2: Selettori per Classe
 * Passi:
 * 1. Seleziona il PRIMO elemento con classe "testo-blu" usando document.querySelector
 * 2. Leggi il suo textContent
 * 3. Aggiorna il paragrafo con id="risultato-1-2" scrivendo "✅ Prima classe trovata: " + il testo
 * 
 * Nota: Se vuoi selezionare TUTTI gli elementi con classe, usa querySelectorAll
 */
function esercizio_1_2() {
    const elemento = document.querySelector('');
    
    if (elemento) {
        const risultato = document.querySelector('#risultato-1-2');
        risultato.textContent = '✅ Prima classe trovata: ' + elemento.textContent;
    }
}


/**
 * ESERCIZIO 1.3: Selettori per Tag
 * Passi:
 * 1. Seleziona il PRIMO elemento <span> usando document.querySelector
 * 2. Leggi il suo textContent
 * 3. Aggiorna il paragrafo con id="risultato-1-3" scrivendo "✅ Span trovato: " + il testo
 */
function esercizio_1_3() {
    const elemento = document.querySelector('');
    
    if (elemento) {
        const risultato = document.querySelector('#risultato-1-3');
        risultato.textContent = '✅ Span trovato: ' + elemento.textContent;
    }
}


// Eseguire gli esercizi 1.x
esercizio_1_1();
esercizio_1_2();
esercizio_1_3();


// ============ STEP 2: MANIPOLAZIONE TESTO ============

/**
 * ESERCIZIO 2.1: Cambia il testo in un paragrafo
 * Passi:
 * 1. Seleziona il bottone con id="btn-cambiaP"
 * 2. Seleziona il paragrafo con id="paragrafo-da-cambiare"
 * 3. Aggiungi un event listener al bottone che, al click:
 *   - Cambia il textContent del paragrafo a "Ho cambiato! ✨"
 *   - Aggiorna il risultato a "✅ Testo cambato"
 */
function esercizio_2_1() {
    const btn = document.querySelector('');
    const paragrafo = document.querySelector('');
    const risultato = document.querySelector('#risultato-2-1');
    
    if (btn && paragrafo) {
        btn.addEventListener('click', () => {
            paragrafo.textContent
            risultato.textContent
        });
    }
}


/**
 * ESERCIZIO 2.2: Scrivi nel DOM
 * Passi:
 * 1. Seleziona il bottone con id="btn-scrivi"
 * 2. Seleziona il div con id="area-scrittura"
 * 3. Aggiungi un event listener che, al click:
 *   - Aggiungi un nuovo <p> con il testo "Riga aggiunta al DOM!"
 *   - Usa append() per aggiungere il paragrafo al div
 *   - Aggiorna il risultato a "✅ Elemento aggiunto"
 */
function esercizio_2_2() {
    const btn = document.querySelector('');
    const area = document.querySelector('');
    const risultato = document.querySelector('#risultato-2-2');
    
    if (btn && area) {
        btn.addEventListener('click', () => {
            const nuovoParagrafo = document.createElement('');
            nuovoParagrafo.textContent
            risultato.textContent

        });
    }
}


/**
 * ESERCIZIO 2.3: Testo Dinamico da Input
 * Passi:
 * 1. Seleziona l'input con id="input-nome"
 * 2. Seleziona il bottone con id="btn-saluta"
 * 3. Seleziona il div con id="area-saluto"
 * 4. Aggiungi un event listener al bottone che:
 *   - Leggi il valore dell'input (input.value)
 *   - Scrivi nel area-saluto: "Ciao [NOME]! 👋"
 *   - Aggiorna il risultato a "✅ Saluto inviato"
 */
function esercizio_2_3() {
    const input = document.querySelector('');
    const btn = document.querySelector('');
    const area = document.querySelector('');
    const risultato = document.querySelector('#risultato-2-3');
    
    if (input && btn && area) {
        btn.addEventListener('click', () => {
            const nome = ''; // Leggi il valore dall'input
            area.textContent
            risultato.textContent
        });
    }
}


// Eseguire gli esercizi 2.x
esercizio_2_1();
esercizio_2_2();
esercizio_2_3();


// ============ STEP 3: EVENTI ============

/**
 * ESERCIZIO 3.1: Click Semplice - Contatore
 * Passi:
 * 1. Seleziona il bottone con id="btn-click"
 * 2. Seleziona l'elemento con id="contatore-click"
 * 3. Crea una variabile 'count' = 0 fuori dalla funzione
 * 4. Aggiungi un event listener che, al click:
 *   - Incrementa count (count++)
 *   - Aggiorna il testo mostrando "Click: " + count
 *   - Aggiorna il risultato a "✅ Contatore attivo"
 */
let count = 0; // Variabile globale

function esercizio_3_1() {
    const btn = document.querySelector('');
    const contatore = document.querySelector('');
    const risultato = document.querySelector('#risultato-3-1');
    
    if (btn && contatore) {
        btn.addEventListener('click', () => {
            
        });
    }
}


/**
 * ESERCIZIO 3.2: Input Event - Echo Tempo Reale
 * Passi:
 * 1. Seleziona l'input con id="input-tempo-reale"
 * 2. Seleziona il paragrafo con id="echo"
 * 3. Aggiungi un event listener su 'input' (NON click!) che:
 *   - Leggi il valore dell'input (event.target.value o input.value)
 *   - Scrivi nel echo lo stesso testo in tempo reale
 *   - Se input vuoto, mostra "Scrivi qualcosa..."
 *   - Aggiorna il risultato a "✅ Echo attivo"
 * 
 * Nota: 'input' è l'evento che si scatta mentre l'utente digita
 *       'click' è l'evento che si scatta quando l'utente clicca
 *       'change' è l'evento che si scatta quando l'utente finisce di modificare
 */
function esercizio_3_2() {
    const input = document.querySelector('');
    const echo = document.querySelector('');
    const risultato = document.querySelector('#risultato-3-2');
    
    if (input && echo) {
        input.addEventListener('input', (event) => {

        });
    }
}


/**
 * ESERCIZIO 3.3: Click su Elementi Specifici
 * Passi:
 * 1. Seleziona tutti gli elementi con classe "box-click" usando querySelectorAll
 * 2. Seleziona il paragrafo con id="log-click"
 * 3. Per ogni box, aggiungi un event listener al click che:
 *   - Leggi l'id del box (event.target.id)
 *   - Aggiungi al log-click: "[id del box] cliccato\n"
 *   - Aggiorna il risultato a "✅ Log attivo"
 * 
 * Nota: Devi usare un loop (for o forEach) per aggiungere il listener a tutti i box
 */
function esercizio_3_3() {
    const boxes = document.querySelectorAll('');
    const log = document.querySelector('');
    const risultato = document.querySelector('#risultato-3-3');
    
    if (boxes.length > 0) {
        boxes.forEach((box) => {
            box.addEventListener('click', (event) => {
                
            });
        });
    }
}


/**
 * ESERCIZIO 3.4 (BONUS): Toggle Classe CSS
 * Passi:
 * 1. Seleziona l'elemento con id="elemento-toggle"
 * 2. Aggiungi un event listener al click che:
 *   - Usa classList.toggle('elemento-attivo') per aggiungere/rimuovere la classe
 *   - Aggiorna il risultato a "✅ Toggle attivo"
 * 
 * Nota: Assicurati che in style.css esista una classe .elemento-attivo
 */
function esercizio_3_4() {
    const elemento = document.querySelector(''); // Selector per l'elemento
    const risultato = document.querySelector('#risultato-3-4');
    
    if (elemento) {
        elemento.addEventListener('click', () => {
            
        });
    }
}


// Eseguire gli esercizi 3.x
esercizio_3_1();
esercizio_3_2();
esercizio_3_3();
esercizio_3_4();


// ============ RIEPILOGO ============

/**
 * Controlla quanti esercizi sono stati completati
 * Aggiorna il messaggio di riepilogo
 */
function aggiornaRiepilogo() {
    const risultati = document.querySelectorAll('.risultato');
    const completati = Array.from(risultati).filter(r => r.textContent.includes('✅')).length;
    const totale = risultati.length;
    
    const status = document.querySelector('#status-completamento');
    if (completati === totale) {
        status.textContent = `✨ Fantastico! Hai completato tutti gli ${totale} esercizi! ✨`;
        status.style.color = '#27ae60';
        status.style.fontSize = '1.2rem';
        status.style.fontWeight = 'bold';
    } else {
        status.textContent = `Completati ${completati}/${totale} esercizi. Continua!`;
    }
}

// Aggiorna il riepilogo ogni 500ms per vedere i progressi in tempo reale
setInterval(aggiornaRiepilogo, 500);
aggiornaRiepilogo();
