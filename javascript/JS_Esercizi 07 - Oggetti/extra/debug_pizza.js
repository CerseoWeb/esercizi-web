/**
 * Esercizio Extra: Debugging Accesso Proprietà Oggetti
 * 
 * Un cliente entra nella pizzeria e ordina alcune cose:
 * - Una margherita
 * - Un calzone ricotta e spinaci
 * - Una birra
 * 
 * Nel seguente codice sono presenti alcuni errori che impediscono
 * il corretto calcolo del totale dell'ordine.
 * 
 * 1. Analizza il codice e individua gli errori (dalla riga 73 in poi).
 * 2. Correggi il codice in modo che stampi correttamente il totale dell'ordine.
 * 3. Il totale corretto dell'ordine dovrebbe essere: 6 + 8 + 4 = 18
 * 
 * Nota: il menù è un pò lungo e può dar fastidio ma si può
 * minimizzare cliccando a sinistra del LET (appare una freccetta).
 * 
 * [4 righe di codice da correggere, 6 errori in totale]
 */

let menu = [
    {
        tipo: "pizza",
        nome: "margherita",
        prezzo: 6
    },
    {
        tipo: "pizza",
        nome: "diavola",
        prezzo: 8
    },
    {
        tipo: "pizza",
        nome: "quattro_stagioni",
        prezzo: 9
    },
    {
        tipo: "pizza",
        nome: "vegetariana",
        prezzo: 7
    },
    {
        tipo: "calzone",
        nome: "classico",
        prezzo: 7
    },
    {
        tipo: "calzone",
        nome: "ricotta_e_spinaci",
        prezzo: 8
    },
    {
        tipo: "bevanda",
        nome: "acqua",
        prezzo: 2
    },
    {
        tipo: "bevanda",
        nome: "cola",
        prezzo: 3
    },
    {
        tipo: "bevanda",
        nome: "birra",
        prezzo: 4
    }
];

let ordine = ["margherita", "ricotta_e_spinaci", "birra"];
let totaleOrdine = 0;

// CODICE BUGGATO
for (let i = 1; i < menu.length; i++) {
    let oggetto = menu[i];

    if (!ordine.includes(oggetto.tipo)) {
        console.log(oggetto.tipo + ": €" + oggetto.prezzo);
        totaleOrdine += oggetto.nome;
    }
}

console.log("Totale: €" + totaleOrdine);

