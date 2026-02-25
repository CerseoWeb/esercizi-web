// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║           📇  LA RUBRICA CONTATTI — ESERCIZIO SEMI-GUIDATO                ║
// ║                                                                            ║
// ║  In questo esercizio devi implementare tutto DA SOLO.                      ║
// ║  Per ogni capitolo trovi:                                                  ║
// ║                                                                            ║
// ║  📋 REQUISITO — cosa devi fare                                            ║
// ║  💡 HINT      — un piccolo aiuto se ti blocchi                            ║
// ║                                                                            ║
// ║  Se non riesci, torna all'Esercizio 1 e ripassa il capitolo corrispondente.║
// ╚══════════════════════════════════════════════════════════════════════════════╝


// ============================================================================
// CAPITOLO 1 — VARIABILI E TIPI
// ============================================================================

// 📋 REQUISITO: Crea le variabili fondamentali della rubrica:
// - nomeApp (const, string): "La Mia Rubrica"
// - versione (const, number): 1.0
// - maxContatti (const, number): 50
// - contattiRegistrati (let, number): 0
// - appAttiva (let, boolean): true
//
// Stampa tutte le variabili e i loro tipi con typeof.
//
// 💡 HINT: const per cose che non cambiano, let per cose che cambieranno.

// 👇 SCRIVI QUI IL TUO CODICE



// ============================================================================
// CAPITOLO 2 — OPERATORI
// ============================================================================

// 📋 REQUISITO:
// 1. Crea "postiLiberi" = maxContatti - contattiRegistrati
// 2. Crea "percentualeUso" = (contattiRegistrati / maxContatti) * 100
// 3. Crea "haPosti" = postiLiberi > 0
// 4. Crea "èNuova" = contattiRegistrati === 0
// 5. Crea "puòAccettare" = haPosti && appAttiva
// 6. Crea "èPiena" = !haPosti
//
// Stampa tutti i risultati.
//
// 💡 HINT: Usa ===, !==, &&, ||, ! come nell'esercizio 1 Capitolo 2.

// 👇 SCRIVI QUI IL TUO CODICE



// ============================================================================
// CAPITOLO 3 — STRUTTURE CONDIZIONALI
// ============================================================================

// 📋 REQUISITO:
// 1. Dato un numero di telefono (string, es. "+39 333 1234567"):
//    - Se inizia con "+39" → stampa "📱 Numero italiano"
//    - Se inizia con "+1"  → stampa "🇺🇸 Numero americano"
//    - Altrimenti          → stampa "🌍 Numero internazionale"
//    HINT: usa stringa.startsWith("+39")
//
// 2. Data una categoria (string, es. "Lavoro"):
//    Usa uno switch per stampare un'emoji:
//    - "Famiglia" → "👨‍👩‍👧"
//    - "Lavoro"   → "💼"
//    - "Amici"    → "🎉"
//    - "Altro"    → "📌"
//    - default    → "❓"

// 👇 SCRIVI QUI IL TUO CODICE



// ============================================================================
// CAPITOLO 4 — CICLI
// ============================================================================

// 📋 REQUISITO:
// 1. Dato questo array di numeri di telefono:
const telefoni = ["+39 333 111", "+1 555 222", "+39 06 333", "+44 20 444", "+39 02 555"];
//
//    Usa un ciclo FOR per contare quanti numeri italiani ci sono
//    (quelli che iniziano con "+39").
//    Stampa: "Numeri italiani: X su Y"
//
// 2. Usa un ciclo WHILE per stampare:
//    "Contatto 1 verificato" ... "Contatto 5 verificato"
//
// 💡 HINT: usa telefoni[i].startsWith("+39") dentro il ciclo.

// 👇 SCRIVI QUI IL TUO CODICE



// ============================================================================
// CAPITOLO 5 — FUNZIONI
// ============================================================================

// 📋 REQUISITO:
// 1. Crea una funzione "formattaTelefono" che:
//    - Riceve un numero grezzo (es. "3331234567")
//    - Restituisce "+39 " + numero
//
// 2. Crea una funzione "emojiCategoria" che:
//    - Riceve una categoria (string)
//    - Restituisce l'emoji corrispondente (come il switch del Cap 3)
//
// 3. Crea una funzione "creaRiepilogo" che:
//    - Riceve: nome, cognome, categoria
//    - Usa emojiCategoria() per ottenere l'emoji
//    - Restituisce: "EMOJI NOME COGNOME (CATEGORIA)"
//    - Esempio: "💼 Mario Rossi (Lavoro)"
//
// Testa tutte e 3 le funzioni con console.log.
//
// 💡 HINT: Una funzione può chiamarne un'altra (come nell'Esercizio 1, Cap 5).

// 👇 SCRIVI QUI IL TUO CODICE



// ============================================================================
// CAPITOLO 6 — ARRAY
// ============================================================================

// 📋 REQUISITO:
// 1. Crea un array "categorie" con: "Famiglia", "Lavoro", "Amici", "Altro"
// 2. Aggiungi "VIP" con .push()
// 3. Rimuovi l'ultimo elemento con .pop()
// 4. Stampa quanti elementi ci sono
// 5. Crea un array "nomiContatti" con almeno 4 nomi
// 6. Usa .map() per creare un nuovo array con i nomi in maiuscolo
// 7. Usa un for...of per stampare ogni nome con un prefisso "📇 "
//
// 💡 HINT: metodi array → .push(), .pop(), .map(), .length

// 👇 SCRIVI QUI IL TUO CODICE



// ============================================================================
// CAPITOLO 7 — OGGETTI
// ============================================================================

// 📋 REQUISITO:
// 1. Crea un oggetto "contatto" con:
//    nome, cognome, telefono, email, categoria, preferito (boolean)
//
// 2. Aggiungi una proprietà "dataCreazione" con la data di oggi:
//    contatto.dataCreazione = new Date().toLocaleDateString();
//
// 3. Usa la destrutturazione per estrarre nome e cognome:
//    const { nome, cognome } = contatto;
//
// 4. Crea un array "rubrica" con almeno 3 oggetti contatto
//    (ognuno con: nome, cognome, telefono, email, categoria, preferito)
//
// 5. Usa un for...of per stampare ogni contatto della rubrica:
//    "NOME COGNOME — TELEFONO (CATEGORIA)"
//
// 💡 HINT: L'array di oggetti è esattamente come "menu" nell'esercizio 1.

// 👇 SCRIVI QUI IL TUO CODICE



// ============================================================================
// CAPITOLO 8 — DOM: SELEZIONE E MODIFICA
// ============================================================================

// 📋 REQUISITO:
// 1. Seleziona la statistica "stat-totale" e metti rubrica.length
// 2. Conta i preferiti nell'array rubrica (quelli con preferito === true)
//    e metti il numero in "stat-preferiti"
// 3. Trova la categoria più frequente nell'array rubrica e mettila in "stat-categoria"
// 4. Seleziona "messaggio", scrivi "Rubrica caricata!", rendilo visibile,
//    e aggiungi la classe "msg-successo"
//
// 💡 HINT: Per trovare la categoria più frequente, puoi usare un oggetto
//    come contatore: const conteggio = {}; poi scorrere l'array e contare
//    (o fare la soluzione semplice se ti blocchi).

// 👇 SCRIVI QUI IL TUO CODICE



// ============================================================================
// CAPITOLO 9 — DOM: CREAZIONE ELEMENTI E EVENTI
// ============================================================================

// 📋 REQUISITO:
// 1. Crea una funzione "renderizzaTabella" che:
//    - Seleziona #corpo-tabella
//    - Lo svuota (innerHTML = "")
//    - Per ogni contatto nell'array "rubrica", crea una <tr> con <td> per:
//      Nome Completo, Telefono, Email, Categoria (con tag colorato), Azioni
//    - Nella colonna Azioni, metti un bottone "Rimuovi" che rimuove il contatto
//
//    STRUTTURA DI OGNI RIGA:
//    const tr = document.createElement("tr");
//    tr.innerHTML = '<td>' + contatto.nome + ' ' + contatto.cognome + '</td>' +
//                   '<td>' + contatto.telefono + '</td>' +
//                   '<td>' + contatto.email + '</td>' +
//                   '<td><span class="tag-CATEGORIA">' + contatto.categoria + '</span></td>' +
//                   '<td></td>';
//    (Sostituisci CATEGORIA con la categoria in minuscolo per il CSS)
//
// 2. Chiama renderizzaTabella() per mostrare i contatti iniziali.
//
// 3. Implementa il bottone "btn-aggiungi":
//    - Leggi i valori dal form
//    - Crea un nuovo oggetto contatto
//    - Aggiungilo all'array rubrica con .push()
//    - Richiama renderizzaTabella()
//    - Svuota il form
//
// 4. Implementa la ricerca su "input-cerca":
//    - Evento "input"
//    - Filtra l'array rubrica per nome O cognome che contiene il testo
//    - Mostra solo i risultati nella tabella
//
// 💡 HINT: Per la classe del tag: "tag-" + contatto.categoria.toLowerCase()

// 👇 SCRIVI QUI IL TUO CODICE



// ============================================================================
// CAPITOLO 10 — MANIPOLAZIONE DATI
// ============================================================================

// 📋 REQUISITO:
// 1. Crea una funzione "formattaNome" che:
//    - Riceve un nome grezzo (es. "  mario  ")
//    - Fa trim + prima lettera maiuscola + resto minuscolo
//    - Restituisce il risultato
//    (Applicala ai nomi quando aggiungi un contatto)
//
// 2. Crea una funzione "calcolaStatistiche" che:
//    - Conta i contatti totali
//    - Conta i preferiti
//    - Trova la categoria più frequente
//    - Restituisce un oggetto: { totale, preferiti, categoriaTop }
//
// 3. Usa template literals per stampare un riepilogo:
//    `📊 Rubrica: ${stats.totale} contatti | ${stats.preferiti} preferiti | Top: ${stats.categoriaTop}`
//
// 4. Aggiorna le tre stat-box nel DOM con i dati calcolati.
//
// 💡 HINT: Per la categoria più frequente, crea un oggetto di conteggio:
//    const conteggio = {};
//    for (const c of rubrica) {
//        if (conteggio[c.categoria]) conteggio[c.categoria]++;
//        else conteggio[c.categoria] = 1;
//    }
//    Poi scorrilo per trovare la chiave con il valore più alto.

// 👇 SCRIVI QUI IL TUO CODICE



// ============================================================================
// CAPITOLO 11 — LOCALSTORAGE
// ============================================================================

// 📋 REQUISITO:
// 1. Bottone "btn-salva" → salva l'array rubrica in localStorage
//    Chiave: "rubrica-contatti"
//    Mostra messaggio di successo.
//
// 2. Bottone "btn-carica" → carica da localStorage
//    Se trovato: sovrascrivi rubrica, ri-renderizza tabella, aggiorna stats
//    Se non trovato: mostra alert o messaggio errore.
//
// 3. Bottone "btn-reset" → svuota rubrica, tabella, statistiche, localStorage
//
// 💡 HINT: JSON.stringify() per salvare, JSON.parse() per caricare.
//    Svuotare un array: rubrica.length = 0 poi .push() dei nuovi dati.

// 👇 SCRIVI QUI IL TUO CODICE



// ============================================================================
// CAPITOLO 12 — BONUS
// ============================================================================

// 📋 SFIDE EXTRA (facoltative):
//
// 1. TOGGLE PREFERITO: Aggiungi un bottone ⭐ a ogni riga della tabella.
//    Cliccandolo, cambia la proprietà "preferito" del contatto (true/false)
//    e aggiorna il conteggio dei preferiti.
//
// 2. ORDINAMENTO: Aggiungi un bottone per ordinare la rubrica per cognome.
//    HINT: rubrica.sort(function(a, b) { return a.cognome.localeCompare(b.cognome); });
//
// 3. ESPORTAZIONE: Crea un bottone che genera un riepilogo testuale di tutti
//    i contatti e lo mostra in un alert() o in un elemento <pre>.
//
// 4. VALIDAZIONE EMAIL: Prima di aggiungere un contatto, verifica che l'email
//    contenga "@" e "." — altrimenti mostra un errore.

// 👇 SCRIVI QUI IL TUO CODICE (Bonus)



// ✅ Se hai completato tutto, ben fatto! Hai ripassato TUTTO JavaScript!
// Hai dimostrato di saper usare JavaScript in autonomia!
