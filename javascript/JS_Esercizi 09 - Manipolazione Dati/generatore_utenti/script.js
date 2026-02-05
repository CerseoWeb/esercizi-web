// SELEZIONE ELEMENTI DOM
const inputNome = document.querySelector('#input-nome');
const inputCognome = document.querySelector('#input-cognome');
const btnGenera = document.querySelector('#btn-genera');
const boxRisultato = document.querySelector('#box-risultato');
const outputUsername = document.querySelector('#output-username');

/**
 * FUNZIONE: Genera Username
 * Obiettivo: Creare un username formato da:
 * [Prime 3 lettere Nome] + [Cognome Pulito] + [Numero Random]
 * Tutto in minuscolo.
 * * Passi da completare:
 * 1. Recupera i valori degli input (nome e cognome).
 * 2. Validazione: se uno dei due è vuoto, avvisa con alert() e fermati.
 * 3. Pulizia NOME:
 * - Rimuovi spazi vuoti ai lati (.trim())
 * - Prendi solo le prime 3 lettere (.slice(0, 3) oppure .substring(0, 3))
 * - Converti in minuscolo (.toLowerCase())
 * 4. Pulizia COGNOME:
 * - Rimuovi spazi vuoti ai lati (.trim())
 * - Sostituisci eventuali spazi interni (es. "De Luca") con un punto o niente (.replace(" ", "") oppure .replaceAll)
 * - Converti in minuscolo
 * 5. Genera un numero casuale tra 10 e 99 (Math.random, Math.floor).
 * 6. Unisci tutto (Nome + Cognome + Numero) e mostralo nell'output.
 */

btnGenera.addEventListener('click', function() {
    
    // --- SCRIVI QUI IL TUO CODICE ---

    // 1. Leggi
    // let nome = ...
    // let cognome = ...

    // 2. Valida

    // 3. Elabora Nome (trim, slice, toLowerCase)
    // let parteNome = ...
    
    // 4. Elabora Cognome (trim, replace, toLowerCase)
    // let parteCognome = ...

    // 5. Numero Random (tra 10 e 99)
    // Formula: Math.floor(Math.random() * (max - min + 1)) + min
    // let numero = ...

    // 6. Output
    // let risultato = ...
    // outputUsername.textContent = risultato;
    
    // --- FINE CODICE ---

    // Mostra il risultato
    boxRisultato.classList.remove('hidden');
});