// TUTORIAL INTERATTIVO: Manipolazione Dati

// Funzione pricipale del tutorial
function eseguiTutorial() {

    /**
     * ======================================================
     * LIVELLO 1: Normalizzazione (Stringhe Base)
     * Spesso i dati arrivano "sporchi" o scritti male.
     * Dobbiamo standardizzarli per poterli usare correttamente.
     * ======================================================
     */
    let nomeProdotto = "   MacBook Pro M3   ";

    // TODO 1: Rimuovi gli spazi iniziali e finali (trim)
    let nomePulito = ""; 

    // TODO 2: Converti tutto in MAIUSCOLO per il codice magazzino (toUpperCase)
    let perMagazzino = "";

    // TODO 3: Converti tutto in minuscolo per la ricerca (toLowerCase)
    let perRicerca = "";

    mostraOutput(1, {
        originale: nomeProdotto,
        trim: nomePulito,
        upper: perMagazzino,
        lower: perRicerca
    });


    /**
     * ======================================================
     * LIVELLO 2: Estrazione Dati (Stringhe Avanzate)
     * Analizziamo una stringa complessa che contiene più informazioni.
     * Stringa: "LAPTOP GAMING | 16GB RAM | SSD"
     * ======================================================
     */
    let descrizione = "LAPTOP GAMING | 16GB RAM | SSD";

    // TODO 1: Controlla se la descrizione contiene la parola "SSD" (includes)
    // Restituisce true o false
    let haSSD = false; 

    // TODO 2: Spezza la stringa in un array usando il separatore "|" (split)
    // Otterrai: ["LAPTOP GAMING ", " 16GB RAM ", " SSD"]
    let caratteristiche = []; 

    mostraOutput(2, {
        contiene_ssd: haSSD,
        lista_parti: caratteristiche
    });


    /**
     * ======================================================
     * LIVELLO 3: Pulizia Prezzi (Parsing Numeri)
     * Trasformiamo una stringa di valuta in un numero matematico.
     * ======================================================
     */
    let prezzoCartellino = "1499.95€";

    // TODO 1: Rimuovi il simbolo "€" sostituendolo con niente "" (replace)
    let prezzoSenzaSimbolo = prezzoCartellino;

    // TODO 2: Converti la stringa rimasta in un numero decimale (parseFloat)
    let prezzoNumero = 0; 

    // TODO 3: Formatta il numero come stringa con 1 solo decimale (toFixed)
    // Nota: toFixed restituisce una STRINGA, non un numero!
    let prezzoFormat = ""; // ... usa .toFixed(1)

    mostraOutput(3, {
        stringa_pulita: prezzoSenzaSimbolo,
        numero_vero: prezzoNumero,
        formattato: prezzoFormat
    });


    /**
     * ======================================================
     * LIVELLO 4: Arrotondamenti (Matematica)
     * Gestiamo un peso per la spedizione. Spesso i corrieri arrotondano.
     * Peso: 1.256 kg
     * ======================================================
     */
    let peso = 1.256;

    // TODO 1: Arrotondamento classico (Math.round)
    // 1.2 -> 1, 1.5 -> 2, 1.8 -> 2
    let arrotondato = 0; 

    // TODO 2: Arrotondamento per ECCESSO (Math.ceil - "Soffitto")
    // Utile per calcolare quanti pacchi servono (1.1 diventa 2)
    let perEccesso = 0;

    // TODO 3: Arrotondamento per DIFETTO (Math.floor - "Pavimento")
    // 1.9 diventa 1
    let perDifetto = 0;

    mostraOutput(4, {
        originale: peso,
        round: arrotondato,
        ceil: perEccesso,
        floor: perDifetto
    });


    /**
     * ======================================================
     * LIVELLO 5: Il dado della fortuna (Random)
     * Generiamo uno sconto casuale tra 0 e 100.
     * ======================================================
     */
    
    // TODO 1: Genera un numero casuale tra 0 e 1 (Math.random())
    let randomBase = 0;

    // TODO 2: Trasformalo in un numero tra 0 e 100
    // Moltiplica randomBase * 100
    let randomCento = 0;

    // TODO 3: Rimuovi i decimali per avere un intero (Math.floor)
    let scontoFinale = 0;

    mostraOutput(5, {
        random_puro: randomBase.toFixed(4), // Mostro solo 4 decimali per pulizia
        scala_100: randomCento.toFixed(2),
        sconto_intero: scontoFinale
    });
}