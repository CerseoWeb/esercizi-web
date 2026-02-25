// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║              🍕  IL MENU DELLA PIZZERIA — ESERCIZIO GUIDATO               ║
// ║                                                                            ║
// ║  Questo esercizio ti guida passo passo attraverso TUTTO JavaScript.        ║
// ║  Ogni capitolo ha:                                                         ║
// ║                                                                            ║
// ║  📖 SPIEGAZIONE — leggi e capisci il concetto                             ║
// ║  💡 ESEMPIO     — codice funzionante da osservare                         ║
// ║  ✏️  TODO        — il codice che devi scrivere TU                          ║
// ║  ✅ VERIFICA    — come controllare che hai fatto giusto                    ║
// ║                                                                            ║
// ║  REGOLE:                                                                   ║
// ║  1. Lavora dall'alto verso il basso, NON saltare step                     ║
// ║  2. Apri la Console del browser (F12) per vedere i console.log            ║
// ║  3. Salva il file e ricarica la pagina dopo ogni modifica                 ║
// ║  4. Se ti blocchi, RILEGGI la spiegazione e l'esempio                     ║
// ╚══════════════════════════════════════════════════════════════════════════════╝


// ============================================================================
// CAPITOLO 1 — VARIABILI E TIPI
// ============================================================================

// ┌──────────────────────────────────────────────────────────────────────────┐
// │ 📖 SPIEGAZIONE                                                          │
// │                                                                          │
// │ In JavaScript, le VARIABILI sono come "scatole" dove metti dei valori.  │
// │                                                                          │
// │ - let   → crea una variabile che puoi CAMBIARE dopo                     │
// │ - const → crea una variabile che NON puoi cambiare (costante)           │
// │                                                                          │
// │ I TIPI principali sono:                                                  │
// │ - string  → testo tra virgolette: "ciao", 'mondo'                       │
// │ - number  → numeri: 42, 3.14                                            │
// │ - boolean → vero/falso: true, false                                     │
// │                                                                          │
// │ console.log() → stampa un valore nella console del browser              │
// │ typeof        → ti dice il tipo di una variabile                        │
// └──────────────────────────────────────────────────────────────────────────┘

// 💡 ESEMPIO (leggi e capisci, NON modificare):
const esempioNomePizza = "Margherita";
let esempioPrezzo = 7.50;
const esempioDisponibile = true;

console.log("--- CAPITOLO 1 - Esempio ---");
console.log("Pizza:", esempioNomePizza);           // → "Margherita"
console.log("Prezzo:", esempioPrezzo);             // → 7.5
console.log("Disponibile:", esempioDisponibile);   // → true
console.log("Tipo di esempioNomePizza:", typeof esempioNomePizza);   // → "string"
console.log("Tipo di esempioPrezzo:", typeof esempioPrezzo);         // → "number"

// ─────────────────────────────────────────────────────────
// ✏️ STEP 1.1 — Crea le variabili base della tua pizzeria
// ─────────────────────────────────────────────────────────
// Crea queste variabili e stampale in console:
//
// 1. Una COSTANTE chiamata "nomePizzeria" con il valore "La Pizza del Codice"
// 2. Una COSTANTE chiamata "maxPizze" con il valore 15
// 3. Una variabile (let) chiamata "pizzeInMenu" con il valore 0
// 4. Una variabile (let) chiamata "pizzeriaAperta" con il valore true
//
// Poi stampa tutte e 4 con console.log()

// 👇 SCRIVI QUI IL TUO CODICE (Step 1.1)



// ✅ VERIFICA: Apri la console (F12). Dovresti vedere:
// "La Pizza del Codice"
// 15
// 0
// true

// ─────────────────────────────────────────────────────────
// ✏️ STEP 1.2 — Usa typeof per controllare i tipi
// ─────────────────────────────────────────────────────────
// Stampa il typeof di ognuna delle 4 variabili che hai creato.
// Usa questo formato: console.log("Tipo di nomePizzeria:", typeof nomePizzeria);

// 👇 SCRIVI QUI IL TUO CODICE (Step 1.2)



// ✅ VERIFICA: Dovresti vedere in console:
// "Tipo di nomePizzeria: string"
// "Tipo di maxPizze: number"
// "Tipo di pizzeInMenu: number"
// "Tipo di pizzeriaAperta: boolean"


// ============================================================================
// CAPITOLO 2 — OPERATORI
// ============================================================================

// ┌──────────────────────────────────────────────────────────────────────────┐
// │ 📖 SPIEGAZIONE                                                          │
// │                                                                          │
// │ OPERATORI ARITMETICI — fanno calcoli con i numeri:                       │
// │   +  (somma)    -  (sottrazione)    *  (moltiplicazione)                │
// │   /  (divisione)    %  (resto/modulo)                                   │
// │                                                                          │
// │ OPERATORI DI CONFRONTO — confrontano due valori, restituiscono boolean: │
// │   === (uguale stretto)  !== (diverso stretto)                           │
// │   >  (maggiore)   <  (minore)   >=  <=                                  │
// │   ⚠️ NON usare == (uguale debole), usa SEMPRE ===                       │
// │                                                                          │
// │ OPERATORI LOGICI — combinano condizioni booleane:                       │
// │   && (AND: entrambe vere)   || (OR: almeno una vera)   ! (NOT: inverte)│
// └──────────────────────────────────────────────────────────────────────────┘

// 💡 ESEMPIO:
console.log("\n--- CAPITOLO 2 - Esempio ---");
const costoIngredienti = 3.20;
const costoManodopera = 1.80;
const costoTotale = costoIngredienti + costoManodopera;   // → 5.00
console.log("Costo totale:", costoTotale);

const pizzeOrdinate = 45;
const pizzeDisponibili = 60;
const percentualeVenduta = (pizzeOrdinate / pizzeDisponibili) * 100; // → 75
console.log("Vendute: " + percentualeVenduta + "%");

const èCostosa = costoTotale > 4;        // → true
const èEconomica = costoTotale < 3;      // → false
const haIngredienti = costoIngredienti > 0; // → true
const possoPreparare = haIngredienti && pizzeriaAperta; // → true (entrambe vere)
console.log("Posso preparare:", possoPreparare);

// ─────────────────────────────────────────────────────────
// ✏️ STEP 2.1 — Calcoli sulla pizzeria
// ─────────────────────────────────────────────────────────
// 1. Crea una costante "prezzoBase" con valore 8.50
// 2. Crea una costante "ricarico" con valore 1.3 (ricarico del 30%)
// 3. Crea una costante "prezzoFinale" = prezzoBase * ricarico
// 4. Crea una costante "postiDisponibili" = maxPizze - pizzeInMenu
//    (usa le variabili create al Capitolo 1!)
// 5. Stampa prezzoFinale e postiDisponibili

// 👇 SCRIVI QUI IL TUO CODICE (Step 2.1)



// ✅ VERIFICA: In console dovresti vedere:
// prezzoFinale → 11.05
// postiDisponibili → 15 (perché pizzeInMenu era 0)

// ─────────────────────────────────────────────────────────
// ✏️ STEP 2.2 — Confronti e logica
// ─────────────────────────────────────────────────────────
// 1. Crea una costante "èConveniente" che vale true se prezzoFinale < 15
// 2. Crea una costante "haPostiMenu" che vale true se postiDisponibili > 0
// 3. Crea una costante "puòAggiungere" che è true se sia èConveniente che haPostiMenu sono true (usa &&)
// 4. Crea una costante "menuPieno" che è il CONTRARIO di haPostiMenu (usa !)
// 5. Stampa tutti e 4 i valori

// 👇 SCRIVI QUI IL TUO CODICE (Step 2.2)



// ✅ VERIFICA:
// èConveniente → true (11.05 < 15)
// haPostiMenu → true (15 > 0)
// puòAggiungere → true
// menuPieno → false


// ============================================================================
// CAPITOLO 3 — STRUTTURE CONDIZIONALI
// ============================================================================

// ┌──────────────────────────────────────────────────────────────────────────┐
// │ 📖 SPIEGAZIONE                                                          │
// │                                                                          │
// │ Le condizionali permettono al codice di "decidere" cosa fare.           │
// │                                                                          │
// │ if (condizione) {          │  if (condizione) {                          │
// │   // se vera               │    // se vera                               │
// │ }                          │  } else {                                   │
// │                            │    // se falsa                               │
// │                            │  }                                          │
// │                                                                          │
// │ if (cond1) {              Per più di 2 casi:                             │
// │   // ...                                                                 │
// │ } else if (cond2) {       switch (valore) {                             │
// │   // ...                    case "A": ... break;                         │
// │ } else {                    case "B": ... break;                         │
// │   // ...                    default: ...                                 │
// │ }                         }                                              │
// └──────────────────────────────────────────────────────────────────────────┘

// 💡 ESEMPIO:
console.log("\n--- CAPITOLO 3 - Esempio ---");
const prezzoPizzaEsempio = 12;

if (prezzoPizzaEsempio >= 18) {
    console.log("Fascia: PREMIUM");
} else if (prezzoPizzaEsempio >= 13) {
    console.log("Fascia: GOURMET");
} else if (prezzoPizzaEsempio >= 8) {
    console.log("Fascia: MEDIA");           // ← questo viene stampato (12 >= 8)
} else {
    console.log("Fascia: ECONOMICA");
}

// ─────────────────────────────────────────────────────────
// ✏️ STEP 3.1 — Controlla se una pizza può essere aggiunta al menu
// ─────────────────────────────────────────────────────────
// Crea una variabile "prezzoCandidata" con valore 9.50
// Crea una variabile "categoriaCandidata" con valore "Speciale"
//
// Scrivi un if/else che:
// - Se prezzoCandidata > 0 E (&&) categoriaCandidata NON è vuota (!== "")
//   → stampa "✅ Pizza accettata nel menu!"
// - Altrimenti
//   → stampa "❌ Pizza rifiutata: dati incompleti"

// 👇 SCRIVI QUI IL TUO CODICE (Step 3.1)



// ✅ VERIFICA: Dovresti vedere "✅ Pizza accettata nel menu!" (9.50 > 0 e "Speciale" !== "")

// ─────────────────────────────────────────────────────────
// ✏️ STEP 3.2 — Assegna una fascia di prezzo con else if
// ─────────────────────────────────────────────────────────
// Crea una variabile "prezzo" con valore 14
// Crea una variabile "fascia" (let, iniziala a "")
//
// Scrivi una catena if / else if / else:
// - prezzo >= 18 → fascia = "Premium"
// - prezzo >= 13 → fascia = "Gourmet"
// - prezzo >= 8  → fascia = "Media"
// - prezzo >= 5  → fascia = "Economica"
// - altrimenti   → fascia = "Budget"
//
// Dopo tutti gli if, stampa: console.log("Fascia di prezzo:", fascia)

// 👇 SCRIVI QUI IL TUO CODICE (Step 3.2)



// ✅ VERIFICA: Dovresti vedere "Fascia di prezzo: Gourmet" (14 >= 13)

// ─────────────────────────────────────────────────────────
// ✏️ STEP 3.3 — Usa switch per la categoria
// ─────────────────────────────────────────────────────────
// Crea una variabile "categoria" con valore "Gourmet"
//
// Scrivi uno switch(categoria) con questi case:
// - "Classica"   → stampa "🍕 Le pizze della tradizione"
// - "Speciale"   → stampa "⭐ Creazioni dello chef"
// - "Gourmet"    → stampa "🏆 Ingredienti ricercati e di alta qualità"
// - "Stagionale" → stampa "🌿 Ingredienti freschi di stagione"
// - default      → stampa "❓ Categoria sconosciuta"
//
// RICORDA: metti break; dopo ogni case!

// 👇 SCRIVI QUI IL TUO CODICE (Step 3.3)



// ✅ VERIFICA: Dovresti vedere "🏆 Ingredienti ricercati e di alta qualità"


// ============================================================================
// CAPITOLO 4 — CICLI (ITERAZIONI)
// ============================================================================

// ┌──────────────────────────────────────────────────────────────────────────┐
// │ 📖 SPIEGAZIONE                                                          │
// │                                                                          │
// │ I CICLI ripetono un blocco di codice più volte.                         │
// │                                                                          │
// │ WHILE — ripete FINCHÉ la condizione è vera:                             │
// │   let i = 0;                                                             │
// │   while (i < 5) {                                                        │
// │       console.log(i);  // 0, 1, 2, 3, 4                                │
// │       i++;              // ⚠️ FONDAMENTALE! Senza, ciclo infinito!     │
// │   }                                                                      │
// │                                                                          │
// │ FOR — più compatto, ha tutto in una riga:                               │
// │   for (let i = 0; i < 5; i++) {                                         │
// │       console.log(i);  // 0, 1, 2, 3, 4                                │
// │   }                                                                      │
// │   // (inizio; condizione; incremento)                                   │
// │                                                                          │
// │ break    → esce dal ciclo immediatamente                                │
// │ continue → salta all'iterazione successiva                              │
// └──────────────────────────────────────────────────────────────────────────┘

// 💡 ESEMPIO:
console.log("\n--- CAPITOLO 4 - Esempio ---");
// Prepariamo 5 ordini con un ciclo
for (let i = 1; i <= 5; i++) {
    console.log("Ordine #" + i + " preparato");
}
// → Ordine #1 preparato, Ordine #2 preparato, ... Ordine #5 preparato

// Esempio con accumulatore:
let sommaPrezzi = 0;
const prezziEsempio = [7.50, 9.00, 12.00, 8.50, 10.00];
for (let i = 0; i < prezziEsempio.length; i++) {
    sommaPrezzi = sommaPrezzi + prezziEsempio[i];
}
console.log("Somma prezzi:", sommaPrezzi); // → 47

// ─────────────────────────────────────────────────────────
// ✏️ STEP 4.1 — Prepara i tavoli con while
// ─────────────────────────────────────────────────────────
// Usa un ciclo WHILE per stampare in console:
//   "Tavolo 1 pronto"
//   "Tavolo 2 pronto"
//   "Tavolo 3 pronto"
//   "Tavolo 4 pronto"
//
// Suggerimento:
// 1. Crea una variabile contatore: let tavolo = 1;
// 2. Scrivi while (tavolo <= 4) { ... }
// 3. Dentro il while, stampa "Tavolo " + tavolo + " pronto"
// 4. ⚠️ NON dimenticare di incrementare: tavolo++;

// 👇 SCRIVI QUI IL TUO CODICE (Step 4.1)



// ✅ VERIFICA: 4 righe in console "Tavolo 1 pronto" ... "Tavolo 4 pronto"

// ─────────────────────────────────────────────────────────
// ✏️ STEP 4.2 — Conta le pizze costose con for
// ─────────────────────────────────────────────────────────
// Dato l'array di prezzi qui sotto, usa un ciclo FOR per contare
// quante pizze costano >= 10 euro
//
// 1. Crea una variabile "pizzeCostose" iniziata a 0
// 2. Usa un ciclo for che scorre tutto l'array
// 3. Dentro il ciclo, usa un if: se prezziMenu[i] >= 10, incrementa pizzeCostose
// 4. DOPO il ciclo, stampa il risultato

const prezziMenu = [5, 12, 8, 18, 6, 15, 9, 22];

// 👇 SCRIVI QUI IL TUO CODICE (Step 4.2)



// ✅ VERIFICA: pizzeCostose → 4 (le pizze da 12, 18, 15, 22)


// ============================================================================
// CAPITOLO 5 — FUNZIONI
// ============================================================================

// ┌──────────────────────────────────────────────────────────────────────────┐
// │ 📖 SPIEGAZIONE                                                          │
// │                                                                          │
// │ Una FUNZIONE è un blocco di codice riutilizzabile con un nome.          │
// │                                                                          │
// │ DICHIARARE una funzione (crearla):                                      │
// │   function saluta(nome) {         ← "nome" è un PARAMETRO              │
// │       console.log("Ciao " + nome);                                      │
// │   }                                                                      │
// │                                                                          │
// │ CHIAMARE una funzione (usarla):                                         │
// │   saluta("Mario");  → stampa "Ciao Mario"                              │
// │   saluta("Luigi");  → stampa "Ciao Luigi"                              │
// │                                                                          │
// │ RETURN — fa "uscire" un valore dalla funzione:                          │
// │   function somma(a, b) {                                                │
// │       return a + b;    ← restituisce il risultato                       │
// │   }                                                                      │
// │   const risultato = somma(3, 4);  // risultato = 7                      │
// │                                                                          │
// │ ⚠️ Se una funzione non ha return, restituisce "undefined"              │
// └──────────────────────────────────────────────────────────────────────────┘

// 💡 ESEMPIO:
console.log("\n--- CAPITOLO 5 - Esempio ---");

function calcolaPrezzo(costoBase) {
    const prezzoConRicarico = costoBase * 1.3 + 2;  // ricarico 30% + 2€ fissi
    return prezzoConRicarico;
}

const prezzoDiavola = calcolaPrezzo(6);    // → 9.8
console.log("Prezzo Diavola:", prezzoDiavola);

function presentaPizza(nome, costoBase) {
    const prezzoVendita = calcolaPrezzo(costoBase);   // una funzione può chiamarne un'altra!
    console.log(nome + " — Costo: €" + costoBase + " → Vendita: €" + prezzoVendita);
}

presentaPizza("Capricciosa", 7);  // → "Capricciosa — Costo: €7 → Vendita: €11.1"

// ─────────────────────────────────────────────────────────
// ✏️ STEP 5.1 — Crea una funzione per la fascia di prezzo
// ─────────────────────────────────────────────────────────
// Crea una funzione chiamata "calcolaFascia" che:
// - Riceve UN parametro: "prezzo"
// - Usa if/else if (come al Capitolo 3, Step 3.2) per determinare la fascia:
//     prezzo >= 18 → return "Premium"
//     prezzo >= 13 → return "Gourmet"
//     prezzo >= 8  → return "Media"
//     prezzo >= 5  → return "Economica"
//     altrimenti   → return "Budget"
//
// Poi testa la funzione con questi 3 casi:
//   console.log(calcolaFascia(20));   // → "Premium"
//   console.log(calcolaFascia(10));   // → "Media"
//   console.log(calcolaFascia(4));    // → "Budget"

// 👇 SCRIVI QUI IL TUO CODICE (Step 5.1)



// ✅ VERIFICA: console mostra "Premium", "Media", "Budget"

// ─────────────────────────────────────────────────────────
// ✏️ STEP 5.2 — Funzione con più parametri
// ─────────────────────────────────────────────────────────
// Crea una funzione "creaDescrizione" che:
// - Riceve 3 parametri: nome, ingredienti, prezzo
// - Calcola la fascia usando calcolaFascia(prezzo) (la funzione dello step prima!)
// - Restituisce (return) una STRINGA così:
//   "🍕 NOME — Ingredienti: INGREDIENTI | Prezzo: €PREZZO | Fascia: FASCIA"
//
// Poi testala:
//   console.log(creaDescrizione("Margherita", "Pomodoro, mozzarella", 8));

// 👇 SCRIVI QUI IL TUO CODICE (Step 5.2)



// ✅ VERIFICA: "🍕 Margherita — Ingredienti: Pomodoro, mozzarella | Prezzo: €8 | Fascia: Media"


// ============================================================================
// CAPITOLO 6 — ARRAY
// ============================================================================

// ┌──────────────────────────────────────────────────────────────────────────┐
// │ 📖 SPIEGAZIONE                                                          │
// │                                                                          │
// │ Un ARRAY è una lista ordinata di valori. Ogni valore ha un INDICE       │
// │ (posizione) che parte da 0.                                              │
// │                                                                          │
// │  const colori = ["rosso", "verde", "blu"];                              │
// │                    [0]      [1]      [2]     ← indici                   │
// │                                                                          │
// │ METODI PRINCIPALI:                                                       │
// │  .push(valore)   → aggiunge alla FINE                                   │
// │  .pop()          → rimuove dall'ULTIMO                                   │
// │  .shift()        → rimuove dal PRIMO                                    │
// │  .splice(i, 1)   → rimuove 1 elemento alla posizione i                 │
// │  .length         → quanti elementi ci sono                              │
// │                                                                          │
// │ ITERARE (scorrere) un array:                                            │
// │  for (let i = 0; i < arr.length; i++) { ... arr[i] ... }               │
// │  for (const elemento of arr) { ... elemento ... }                       │
// │                                                                          │
// │ TRASFORMARE con .map():                                                  │
// │  const doppi = [1, 2, 3].map(function(n) { return n * 2; });           │
// │  // → [2, 4, 6] — crea un NUOVO array trasformato                      │
// └──────────────────────────────────────────────────────────────────────────┘

// 💡 ESEMPIO:
console.log("\n--- CAPITOLO 6 - Esempio ---");
const pizzeEsempio = ["Margherita", "Diavola", "Capricciosa"];
pizzeEsempio.push("Quattro Formaggi");  // → ["Margherita", "Diavola", "Capricciosa", "Quattro Formaggi"]
console.log("Prima pizza:", pizzeEsempio[0]);     // → "Margherita"
console.log("Totale:", pizzeEsempio.length);      // → 4

for (const pizza of pizzeEsempio) {
    console.log("• " + pizza);
}

// ─────────────────────────────────────────────────────────
// ✏️ STEP 6.1 — Crea e gestisci l'array del menu
// ─────────────────────────────────────────────────────────
// 1. Crea un array "nomiPizze" con 3 nomi di pizze a scelta
// 2. Aggiungi una quarta pizza con .push()
// 3. Stampa quante pizze ci sono con .length
// 4. Stampa la SECONDA pizza (ricorda: indice 1!)
// 5. Rimuovi l'ultima pizza con .pop()
// 6. Stampa l'array completo

// 👇 SCRIVI QUI IL TUO CODICE (Step 6.1)



// ✅ VERIFICA: L'array finale ha 3 elementi (dopo il pop)

// ─────────────────────────────────────────────────────────
// ✏️ STEP 6.2 — Scorri e trasforma l'array
// ─────────────────────────────────────────────────────────
// 1. Usa un ciclo for...of per stampare ogni pizza di nomiPizze così:
//    "🍕 NomePizza è nel menu!"
//
// 2. Crea un nuovo array "nomiMaiuscoli" usando .map() che contiene tutti
//    i nomi in MAIUSCOLO. Suggerimento: "testo".toUpperCase()
//    const nomiMaiuscoli = nomiPizze.map(function(nome) {
//        return nome.toUpperCase();
//    });
//
// 3. Stampa nomiMaiuscoli

// 👇 SCRIVI QUI IL TUO CODICE (Step 6.2)



// ✅ VERIFICA: Vedi le 3 pizze con "🍕" e poi l'array in maiuscolo


// ============================================================================
// CAPITOLO 7 — OGGETTI
// ============================================================================

// ┌──────────────────────────────────────────────────────────────────────────┐
// │ 📖 SPIEGAZIONE                                                          │
// │                                                                          │
// │ Un OGGETTO raggruppa più informazioni correlate in un'unica variabile.  │
// │ È come una "scheda" con proprietà: chiave → valore.                     │
// │                                                                          │
// │  const persona = {                                                       │
// │      nome: "Mario",          // proprietà "nome" con valore "Mario"     │
// │      età: 25,                                                            │
// │      attivo: true                                                        │
// │  };                                                                      │
// │                                                                          │
// │ ACCESSO:                                                                 │
// │  persona.nome          → "Mario"    (dot notation)                      │
// │  persona["nome"]       → "Mario"    (bracket notation)                  │
// │                                                                          │
// │ MODIFICA:                                                                │
// │  persona.età = 26;     → cambia il valore                               │
// │  persona.email = "..."; → AGGIUNGE una nuova proprietà                  │
// │  delete persona.email;  → RIMUOVE una proprietà                         │
// │                                                                          │
// │ DESTRUTTURAZIONE — estrae proprietà in variabili:                       │
// │  const { nome, età } = persona;                                         │
// │  console.log(nome); // → "Mario"                                        │
// └──────────────────────────────────────────────────────────────────────────┘

// 💡 ESEMPIO:
console.log("\n--- CAPITOLO 7 - Esempio ---");
const pizzaSample = {
    nome: "Napoletana",
    ingredienti: "Pomodoro, mozzarella, acciughe, capperi",
    prezzo: 9.50,
    disponibile: true,
    dettagli: {            // oggetto ANNIDATO (dentro un altro oggetto)
        calorie: 850,
        tempoPreparazione: 12
    }
};

console.log(pizzaSample.nome);                     // → "Napoletana"
console.log(pizzaSample.dettagli.calorie);         // → 850

const { nome: nomeEstratto, prezzo: prezzoEstratto } = pizzaSample;
console.log(nomeEstratto, prezzoEstratto);         // → "Napoletana" 9.5

// ─────────────────────────────────────────────────────────
// ✏️ STEP 7.1 — Crea un oggetto pizza
// ─────────────────────────────────────────────────────────
// Crea un oggetto "miaPizza" con queste proprietà:
// - nome: un nome di pizza a scelta (string)
// - ingredienti: gli ingredienti (string)
// - prezzo: un numero (es. 10.50)
// - disponibile: true
//
// Poi:
// 1. Stampa il nome con dot notation
// 2. Cambia il prezzo a 12.00
// 3. Aggiungi una nuova proprietà "fascia" usando la funzione calcolaFascia(miaPizza.prezzo)
// 4. Stampa l'oggetto completo: console.log(miaPizza)

// 👇 SCRIVI QUI IL TUO CODICE (Step 7.1)



// ✅ VERIFICA: L'oggetto ha 5 proprietà (nome, ingredienti, prezzo, disponibile, fascia)

// ─────────────────────────────────────────────────────────
// ✏️ STEP 7.2 — Array di oggetti + destrutturazione
// ─────────────────────────────────────────────────────────
// 1. Crea un array "menu" con 3 oggetti pizza (ognuno ha: nome, ingredienti, prezzo)
//    Esempio:
//    const menu = [
//        { nome: "Margherita", ingredienti: "Pomodoro, mozzarella", prezzo: 7 },
//        { nome: "Diavola", ingredienti: "Pomodoro, mozzarella, salame piccante", prezzo: 9 },
//        { nome: "Tartufo", ingredienti: "Crema di tartufo, mozzarella, funghi", prezzo: 16 }
//    ];
//
// 2. Usa un ciclo for...of per stampare ogni pizza.
//    Dentro il ciclo, usa la DESTRUTTURAZIONE per estrarre nome e prezzo:
//
//    for (const pizza of menu) {
//        const { nome, prezzo } = pizza;
//        console.log(nome + " — €" + prezzo);
//    }

// 👇 SCRIVI QUI IL TUO CODICE (Step 7.2)



// ✅ VERIFICA: Vedi 3 righe tipo "Margherita — €7"


// ============================================================================
// CAPITOLO 8 — DOM: SELEZIONE E MODIFICA
// ============================================================================

// ┌──────────────────────────────────────────────────────────────────────────┐
// │ 📖 SPIEGAZIONE                                                          │
// │                                                                          │
// │ Il DOM (Document Object Model) è il modo in cui JavaScript "vede" la    │
// │ pagina HTML. Puoi selezionare elementi e modificarli.                    │
// │                                                                          │
// │ SELEZIONARE UN ELEMENTO:                                                 │
// │  document.querySelector("#id")     → seleziona per ID                   │
// │  document.querySelector(".classe") → seleziona per classe               │
// │  document.querySelector("tag")     → seleziona per tag                  │
// │                                                                          │
// │ MODIFICARE:                                                              │
// │  elemento.textContent = "testo";   → cambia il testo                    │
// │  elemento.innerHTML = "<b>bold</b>"; → cambia l'HTML interno           │
// │                                                                          │
// │ LEGGERE UN INPUT:                                                        │
// │  const valore = document.querySelector("#mio-input").value;             │
// │                                                                          │
// │ STILI:                                                                   │
// │  elemento.style.color = "red";                                          │
// │  elemento.style.backgroundColor = "#333";                               │
// │                                                                          │
// │ CLASSI CSS:                                                              │
// │  elemento.classList.add("classe")                                        │
// │  elemento.classList.remove("classe")                                     │
// │  elemento.classList.toggle("classe")  → aggiunge/rimuove                │
// └──────────────────────────────────────────────────────────────────────────┘

// 💡 ESEMPIO:
console.log("\n--- CAPITOLO 8 - Esempio ---");
// Seleziona il titolo del menu e stampa il testo
const titoloEl = document.querySelector("#titolo-menu");
console.log("Titolo attuale:", titoloEl.textContent); // → "Il Nostro Menu"

// ─────────────────────────────────────────────────────────
// ✏️ STEP 8.1 — Modifica il titolo e le statistiche
// ─────────────────────────────────────────────────────────
// 1. Seleziona l'elemento con id "titolo-menu" e cambia il suo textContent
//    in "🍕 " + nomePizzeria (la variabile del Capitolo 1!)
//
// 2. Seleziona l'elemento con id "stat-totale" e metti come textContent
//    il numero di pizze nel tuo "menu" (array del Capitolo 7, Step 7.2)
//    Suggerimento: menu.length
//
// 3. Seleziona l'elemento con id "stat-totale" e cambia il suo colore
//    in "#d35400" usando: elemento.style.color = "#d35400";

// 👇 SCRIVI QUI IL TUO CODICE (Step 8.1)



// ✅ VERIFICA: Il titolo nella pagina è cambiato e il numero di pizze è visibile

// ─────────────────────────────────────────────────────────
// ✏️ STEP 8.2 — Leggi i valori dagli input
// ─────────────────────────────────────────────────────────
// 1. Seleziona l'input con id "input-nome" e salva il suo .value in una variabile
//    (sarà vuoto, va bene così per ora)
//
// 2. Seleziona l'input con id "input-prezzo" e salva il suo .value
//    ⚠️ ATTENZIONE: .value restituisce SEMPRE una stringa!
//    Per convertirlo in numero usa: Number(elemento.value)  oppure  parseFloat(elemento.value)
//
// 3. Stampa in console i valori letti
//
// 4. Seleziona il div con id "messaggio", cambia il suo textContent in "Benvenuto nella Pizzeria!"
//    e rendilo visibile cambiando lo stile: elemento.style.display = "block"
//    Aggiungi anche la classe "msg-successo": elemento.classList.add("msg-successo")

// 👇 SCRIVI QUI IL TUO CODICE (Step 8.2)



// ✅ VERIFICA: Un messaggio verde "Benvenuto nella Pizzeria!" appare nella pagina


// ============================================================================
// CAPITOLO 9 — DOM: CREAZIONE ELEMENTI E EVENTI
// ============================================================================

// ┌──────────────────────────────────────────────────────────────────────────┐
// │ 📖 SPIEGAZIONE                                                          │
// │                                                                          │
// │ CREARE ELEMENTI dal nulla:                                               │
// │   const li = document.createElement("li");  → crea un <li>             │
// │   li.textContent = "Testo";                  → metti il testo           │
// │   lista.appendChild(li);                     → inseriscilo nella pagina │
// │                                                                          │
// │ EVENTI — far succedere cose quando l'utente interagisce:                │
// │                                                                          │
// │   bottone.addEventListener("click", function() {                        │
// │       // codice eseguito quando si clicca il bottone                    │
// │   });                                                                    │
// │                                                                          │
// │   input.addEventListener("input", function(e) {                         │
// │       // e.target.value → il testo che l'utente sta scrivendo           │
// │       console.log(e.target.value);                                      │
// │   });                                                                    │
// │                                                                          │
// │ Il PATTERN fondamentale per le app web è:                               │
// │   1. L'utente fa qualcosa (click, scrive, ecc.)                         │
// │   2. Il JS legge i dati                                                  │
// │   3. Il JS aggiorna l'array/variabile (i DATI)                          │
// │   4. Il JS aggiorna la pagina (il DOM) per riflettere i nuovi dati     │
// └──────────────────────────────────────────────────────────────────────────┘

// 💡 ESEMPIO:
console.log("\n--- CAPITOLO 9 - Esempio ---");

// Creiamo un elemento e lo mettiamo nella pagina
function creaElementoPizza(testo) {
    const li = document.createElement("li");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info-pizza");

    const nomeSpan = document.createElement("span");
    nomeSpan.classList.add("nome-pizza");
    nomeSpan.textContent = testo;

    infoDiv.appendChild(nomeSpan);
    li.appendChild(infoDiv);

    return li;
}

// Mettiamolo nella lista
const listaPizze = document.querySelector("#lista-pizze");
// (Non aggiungiamo l'esempio per non sporcare la lista)

// ─────────────────────────────────────────────────────────
// ✏️ STEP 9.1 — Renderizza il menu nella pagina
// ─────────────────────────────────────────────────────────
// Prendi l'array "menu" (Capitolo 7) e mostra ogni pizza nella lista.
//
// 1. Seleziona l'elemento con id "lista-pizze" (la <ul>)
// 2. Per ogni pizza dell'array "menu", usa un ciclo for...of:
//    a. Crea un <li> con document.createElement("li")
//    b. Metti come innerHTML dell'<li>:
//       '<div class="info-pizza">' +
//       '  <span class="nome-pizza">' + pizza.nome + '</span>' +
//       '  <span class="dettagli-pizza"> | ' + pizza.ingredienti + ' | €' + pizza.prezzo + '</span>' +
//       '</div>'
//    c. Aggiungi il <li> alla lista con: lista.appendChild(li)

// 👇 SCRIVI QUI IL TUO CODICE (Step 9.1)



// ✅ VERIFICA: Le 3 pizze del menu appaiono nella pagina!

// ─────────────────────────────────────────────────────────
// ✏️ STEP 9.2 — Aggiungi una pizza con il bottone
// ─────────────────────────────────────────────────────────
// Ora rendiamo il bottone "Aggiungi Pizza" funzionante!
//
// 1. Seleziona il bottone con id "btn-aggiungi"
// 2. Aggiungi un addEventListener per l'evento "click"
// 3. Dentro la funzione del click:
//    a. Leggi il valore dall'input "input-nome"            (.value)
//    b. Leggi il valore dall'input "input-ingredienti"     (.value)
//    c. Leggi il valore dall'input "input-prezzo"          (Number(.value))
//    d. Leggi il valore dal select "select-categoria"      (.value)
//
//    e. Controlla che il nome NON sia vuoto:
//       if (nome === "") {
//           alert("Inserisci un nome!");
//           return;   ← esce dalla funzione
//       }
//
//    f. Crea un nuovo oggetto pizza: { nome: ..., ingredienti: ..., prezzo: ..., categoria: ... }
//    g. Aggiungilo all'array "menu" con .push()
//
//    h. Crea un <li> come nello Step 9.1 e aggiungilo alla lista
//
//    i. Svuota gli input dopo l'aggiunta:
//       document.querySelector("#input-nome").value = "";
//       document.querySelector("#input-ingredienti").value = "";
//       document.querySelector("#input-prezzo").value = "";
//
//    j. Aggiorna la statistica: seleziona "#stat-totale" e metti menu.length
//
// Suggerimento: tutto il codice dei punti a-j va DENTRO la function() del click

// 👇 SCRIVI QUI IL TUO CODICE (Step 9.2)



// ✅ VERIFICA: Compila il form, clicca "Aggiungi Pizza" → la pizza appare nella lista!

// ─────────────────────────────────────────────────────────
// ✏️ STEP 9.3 — Implementa la ricerca in tempo reale
// ─────────────────────────────────────────────────────────
// Quando l'utente SCRIVE nel campo di ricerca, filtra la lista.
//
// 1. Seleziona l'input con id "input-ricerca"
// 2. Aggiungi un addEventListener per l'evento "input" (NON "click"!)
//    L'evento "input" si attiva ad ogni lettera digitata.
//
// 3. Dentro la funzione, ricevi il parametro "e" (l'evento):
//    function(e) {
//        const testo = e.target.value.toLowerCase();  // testo digitato, in minuscolo
//
//        // Filtra l'array menu: tieni solo quelli il cui nome contiene "testo"
//        const risultati = menu.filter(function(pizza) {
//            return pizza.nome.toLowerCase().includes(testo);
//        });
//
//        // Svuota la lista e ri-renderizza solo i risultati
//        // (vedi appunti sotto)
//    }
//
// Per SVUOTARE la lista: lista.innerHTML = "";
// Poi usa un for...of su "risultati" per ricreare gli <li> (come Step 9.1)

// 👇 SCRIVI QUI IL TUO CODICE (Step 9.3)



// ✅ VERIFICA: Scrivi nel campo ricerca → la lista si filtra in tempo reale!


// ============================================================================
// CAPITOLO 10 — MANIPOLAZIONE DATI
// ============================================================================

// ┌──────────────────────────────────────────────────────────────────────────┐
// │ 📖 SPIEGAZIONE                                                          │
// │                                                                          │
// │ METODI STRINGA — manipolano testo:                                      │
// │  "  Ciao  ".trim()       → "Ciao"           (rimuove spazi)            │
// │  "ciao".toUpperCase()    → "CIAO"                                       │
// │  "CIAO".toLowerCase()    → "ciao"                                       │
// │  "a-b-c".split("-")      → ["a", "b", "c"]  (divide in array)          │
// │  "ciao mondo".includes("mondo") → true                                  │
// │  "ciao".replace("c", "C") → "Ciao"                                     │
// │                                                                          │
// │ NUMERI E MATH:                                                           │
// │  parseFloat("3.14")      → 3.14  (stringa → numero decimale)           │
// │  parseInt("42")          → 42    (stringa → numero intero)              │
// │  (3.14159).toFixed(2)    → "3.14" (arrotonda a 2 decimali, → stringa!) │
// │  Math.round(3.7)         → 4     (arrotonda)                            │
// │  Math.floor(3.7)         → 3     (arrotonda per difetto)                │
// │  Math.ceil(3.2)          → 4     (arrotonda per eccesso)                │
// │  Math.random()           → 0.xxxx (numero casuale 0-1)                  │
// │  Math.floor(Math.random() * 10) → 0-9 (intero casuale 0-9)            │
// │                                                                          │
// │ TEMPLATE LITERALS (backtick) — modo moderno di creare stringhe:         │
// │  const msg = `Ciao ${nome}, hai ${età} anni`;                           │
// │  // Usi i backtick ` ` invece delle virgolette                          │
// │  // Dentro ${...} metti variabili o espressioni                         │
// └──────────────────────────────────────────────────────────────────────────┘

// 💡 ESEMPIO:
console.log("\n--- CAPITOLO 10 - Esempio ---");

const nomeGrezzo = "  margherita  ";
const nomePulito = nomeGrezzo.trim();     // → "margherita"
const nomeFormattato = nomePulito.charAt(0).toUpperCase() + nomePulito.slice(1);
console.log("Nome formattato:", nomeFormattato); // → "Margherita"

const prezzoRandom = (Math.random() * 15 + 5).toFixed(2); // prezzo casuale tra 5 e 20
console.log("Prezzo casuale: €" + prezzoRandom);

const descrizionePizza = `La pizza ${nomeFormattato} costa €${prezzoRandom}`;
console.log(descrizionePizza);

// ─────────────────────────────────────────────────────────
// ✏️ STEP 10.1 — Pulisci e formatta i nomi delle pizze
// ─────────────────────────────────────────────────────────
// 1. Crea una funzione "pulisciNome" che:
//    - Riceve un parametro "nome"
//    - Rimuove gli spazi (trim)
//    - Mette la prima lettera in maiuscolo e il resto in minuscolo
//      Suggerimento: nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()
//    - Restituisce il risultato
//
// 2. Testa con:
//    console.log(pulisciNome("  mARGHERITA  "));   // → "Margherita"
//    console.log(pulisciNome("diavola"));           // → "Diavola"

// 👇 SCRIVI QUI IL TUO CODICE (Step 10.1)



// ✅ VERIFICA: "Margherita" e "Diavola"

// ─────────────────────────────────────────────────────────
// ✏️ STEP 10.2 — Statistiche con Math e template literals
// ─────────────────────────────────────────────────────────
// 1. Crea una funzione "calcolaStatistiche" che riceve l'array "menu"
//    e restituisce un OGGETTO con:
//    - totale: menu.length
//    - sommaPrezzi: la somma di tutti i prezzi (usa un ciclo for)
//    - media: sommaPrezzi / totale, arrotondata a 2 decimali con toFixed(2)
//    - piuCara: il nome della pizza con il prezzo più alto
//
//    Suggerimento per trovare la più cara:
//    let maxPrezzo = 0;
//    let nomePiuCara = "";
//    for (const pizza of menu) {
//        if (pizza.prezzo > maxPrezzo) {
//            maxPrezzo = pizza.prezzo;
//            nomePiuCara = pizza.nome;
//        }
//    }
//
// 2. Chiama la funzione e salva il risultato:
//    const stats = calcolaStatistiche(menu);
//
// 3. Usa template literals per stampare:
//    console.log(`📊 Menu: ${stats.totale} pizze | Media: €${stats.media} | Più cara: ${stats.piuCara}`);
//
// 4. Aggiorna il DOM:
//    Seleziona "#stat-media" e metti "€" + stats.media come textContent
//    Seleziona "#stat-piu-cara" e metti stats.piuCara come textContent

// 👇 SCRIVI QUI IL TUO CODICE (Step 10.2)



// ✅ VERIFICA: Le statistiche nella pagina si aggiornano!


// ============================================================================
// CAPITOLO 11 — LOCALSTORAGE
// ============================================================================

// ┌──────────────────────────────────────────────────────────────────────────┐
// │ 📖 SPIEGAZIONE                                                          │
// │                                                                          │
// │ localStorage permette di SALVARE dati nel browser. I dati restano       │
// │ anche se chiudi e riapri la pagina!                                      │
// │                                                                          │
// │ ⚠️ PROBLEMA: localStorage salva SOLO stringhe.                          │
// │ Per salvare oggetti/array, devi convertirli:                             │
// │                                                                          │
// │ SALVARE:                                                                 │
// │   const dati = [{ nome: "Margherita", prezzo: 7 }];                     │
// │   const stringa = JSON.stringify(dati);       // oggetto → stringa JSON│
// │   localStorage.setItem("chiave", stringa);    // salva nel browser     │
// │                                                                          │
// │ CARICARE:                                                                │
// │   const stringa = localStorage.getItem("chiave");  // leggi la stringa │
// │   const dati = JSON.parse(stringa);                 // stringa → oggetto│
// │                                                                          │
// │ PATTERN "CARICA O INIZIALIZZA":                                         │
// │   const salvati = localStorage.getItem("chiave");                       │
// │   if (salvati !== null) {                                                │
// │       menu = JSON.parse(salvati);  // carica i dati salvati             │
// │   }                                                                      │
// │   // se salvati è null, "menu" resta con il valore iniziale             │
// └──────────────────────────────────────────────────────────────────────────┘

// 💡 ESEMPIO:
console.log("\n--- CAPITOLO 11 - Esempio ---");

// Salvare un singolo valore
localStorage.setItem("ultimoAccesso", "25/02/2026");
const ultimoAccesso = localStorage.getItem("ultimoAccesso");
console.log("Ultimo accesso:", ultimoAccesso); // → "25/02/2026"

// ─────────────────────────────────────────────────────────
// ✏️ STEP 11.1 — Salva il menu nel browser
// ─────────────────────────────────────────────────────────
// Aggiungiamo la funzionalità al bottone "💾 Salva"
//
// 1. Seleziona il bottone con id "btn-salva"
// 2. Aggiungi un addEventListener "click"
// 3. Dentro la funzione:
//    a. Converti l'array "menu" in stringa: JSON.stringify(menu)
//    b. Salva con: localStorage.setItem("menu-pizzeria", stringa)
//    c. Mostra un messaggio: seleziona "#messaggio",
//       cambia textContent in "💾 Menu salvato!",
//       rimuovi la classe "msg-errore" e aggiungi "msg-successo",
//       rendi visibile con style.display = "block"
//    d. Stampa in console: "Salvate " + menu.length + " pizze"

// 👇 SCRIVI QUI IL TUO CODICE (Step 11.1)



// ✅ VERIFICA: Clicca "Salva" → appare il messaggio verde + log in console

// ─────────────────────────────────────────────────────────
// ✏️ STEP 11.2 — Carica il menu dal browser
// ─────────────────────────────────────────────────────────
// Aggiungiamo la funzionalità al bottone "📂 Carica"
//
// 1. Seleziona il bottone con id "btn-carica"
// 2. Aggiungi un addEventListener "click"
// 3. Dentro la funzione:
//    a. Leggi i dati: const salvati = localStorage.getItem("menu-pizzeria")
//    b. Controlla se esistono:
//       if (salvati !== null) {
//           // Sovrascrivi l'array menu con i dati salvati
//           // ⚠️ Non puoi usare "menu = ..." se è const!
//           // Soluzione: svuota l'array e aggiungi i nuovi elementi:
//           menu.length = 0;  // svuota l'array
//           const datiCaricati = JSON.parse(salvati);
//           for (const pizza of datiCaricati) {
//               menu.push(pizza);
//           }
//
//           // Ri-renderizza la lista (svuota la <ul> e ricrea gli <li>)
//           const lista = document.querySelector("#lista-pizze");
//           lista.innerHTML = "";
//           for (const pizza of menu) {
//               const li = document.createElement("li");
//               li.innerHTML = '<div class="info-pizza">' +
//                   '<span class="nome-pizza">' + pizza.nome + '</span>' +
//                   '<span class="dettagli-pizza"> | ' + pizza.ingredienti + ' | €' + pizza.prezzo + '</span>' +
//                   '</div>';
//               lista.appendChild(li);
//           }
//
//           // Aggiorna le statistiche
//           document.querySelector("#stat-totale").textContent = menu.length;
//
//           // Messaggio di successo
//           // ... (come prima)
//       } else {
//           // Nessun dato trovato
//           alert("Nessun salvataggio trovato!");
//       }

// 👇 SCRIVI QUI IL TUO CODICE (Step 11.2)



// ✅ VERIFICA: Clicca "Salva", ricarica la pagina, clicca "Carica" → le pizze riappaiono!


// ============================================================================
// CAPITOLO 12 — BONUS: BOTTONE RESET E RIMOZIONE PIZZE
// ============================================================================

// ┌──────────────────────────────────────────────────────────────────────────┐
// │ 📖 Ora hai TUTTI gli strumenti. Questi ultimi step sono meno guidati   │
// │    per verificare che riesci a fare le cose da solo!                     │
// └──────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────
// ✏️ STEP 12.1 — Bottone Reset
// ─────────────────────────────────────────────────────────
// Fai funzionare il bottone "Reset Menu" (#btn-reset):
// - Svuota l'array menu (menu.length = 0)
// - Svuota la lista nel DOM (innerHTML = "")
// - Azzera tutte le statistiche
// - Rimuovi i dati da localStorage: localStorage.removeItem("menu-pizzeria")
// - Mostra un messaggio di conferma

// 👇 SCRIVI QUI IL TUO CODICE (Step 12.1)



// ─────────────────────────────────────────────────────────
// ✏️ STEP 12.2 — Bottone rimuovi su ogni pizza
// ─────────────────────────────────────────────────────────
// Quando crei un <li> per una pizza (Step 9.1 e 9.2), aggiungi anche un
// bottone "Rimuovi" con classe "btn-danger".
//
// Suggerimento: modifica il codice dove crei gli <li> e aggiungi:
//   const btnRimuovi = document.createElement("button");
//   btnRimuovi.textContent = "❌";
//   btnRimuovi.classList.add("btn-danger");
//   btnRimuovi.addEventListener("click", function() {
//       // 1. Trova l'indice della pizza nell'array
//       const indice = menu.indexOf(pizza);
//       // 2. Rimuovila con splice
//       menu.splice(indice, 1);
//       // 3. Rimuovi l'<li> dal DOM
//       li.remove();
//       // 4. Aggiorna le statistiche
//       document.querySelector("#stat-totale").textContent = menu.length;
//   });
//   li.appendChild(btnRimuovi);

// 👇 SCRIVI QUI IL TUO CODICE (Step 12.2)



// ✅ VERIFICA: Se sei arrivato qui e tutto funziona, hai completato l'esercizio guidato!
// 🎯 Ora passa all'Esercizio 2 per verificare di saper fare tutto SENZA guida!
