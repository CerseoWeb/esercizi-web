/**
 * Esercizio: Array di Oggetti - Lista Studenti
 * 
 * Obiettivo: Lavorare con un array di oggetti.
 * 
 * Istruzioni:
 * 1. Hai un array di oggetti 'studenti', dove ogni studente ha: nome, voto, presente.
 * 2. Completa la funzione 'mediaVotiPresenti' per calcolare la media dei voti
 *    SOLO degli studenti presenti.
 * 3. Passi:
 *    - Scorri l'array con un for
 *    - Controlla se lo studente è presente: `studenti[i].presente === true`
 *    - Se sì, aggiungi il suo voto a un accumulatore
 *    - Conta quanti studenti presenti ci sono
 *    - Restituisci la media: somma / conteggio
 */

function mediaVotiPresenti(studenti) {
}



// Test
let classe = [
    { nome: "Mario", voto: 8, presente: true },
    { nome: "Giulia", voto: 9, presente: true },
    { nome: "Luca", voto: 4, presente: false },
    { nome: "Sara", voto: 7, presente: true }
];

let media = mediaVotiPresenti(classe);

if (media === 8) {
    console.log("✅ Test superato! (8+9+7)/3 = 8");
} else {
    console.log("❌ Test fallito. Media:", media);
}
