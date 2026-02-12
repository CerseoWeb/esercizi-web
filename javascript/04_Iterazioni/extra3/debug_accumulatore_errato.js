/**
 * Esercizio Extra (DEBUG): Accumulatore Smemorato
 * 
 * Descrizione:
 * Vogliamo calcolare la somma dei numeri da 1 a 3 per 3 volte e stampare il totale complessivo.
 * Il calcolo dovrebbe essere: (1+2+3) + (1+2+3) + (1+2+3) = 6 + 6 + 6 = 18.
 */

for (let giro = 1; giro <= 3; giro++) {
    let sommaTotale = 0;

    console.log("Inizio giro " + giro);

    for (let numero = 1; numero <= 3; numero++) {
        sommaTotale = sommaTotale + numero;
    }
}

console.log("Totale finale: ", sommaTotale);
