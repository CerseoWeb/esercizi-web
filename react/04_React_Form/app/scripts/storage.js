const STORAGE_KEY = 'utenti';

// Dati di esempio: usati solo la prima volta, se il localStorage è vuoto,
// così l'anagrafica si vede subito popolata invece di partire vuota.
const UTENTI_DEMO = [
  { id: 1, nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@email.com', dataNascita: '1990-04-12' },
  { id: 2, nome: 'Luigi', cognome: 'Verdi', email: 'luigi.verdi@email.com', dataNascita: '1988-11-02' },
  { id: 3, nome: 'Giulia', cognome: 'Bianchi', email: 'giulia.bianchi@email.com', dataNascita: '1995-07-23' },
  { id: 4, nome: 'Francesca', cognome: 'Neri', email: 'francesca.neri@email.com', dataNascita: '1992-01-30' },
];

/**
 * Recupera l'elenco degli utenti dal localStorage.
 * Se non c'è ancora nulla di salvato (prima apertura), popola lo storage
 * con alcuni utenti di esempio e restituisce quelli.
 * @returns {Array<Object>} Array di oggetti utente.
 */
export function getUtenti() {
  const utenti = localStorage.getItem(STORAGE_KEY);
  if (!utenti) {
    saveUtenti(UTENTI_DEMO);
    return UTENTI_DEMO;
  }
  return JSON.parse(utenti);
}

/**
 * Salva l'intero elenco degli utenti nel localStorage.
 * @param {Array<Object>} utenti - Array di oggetti utente.
 */
export function saveUtenti(utenti) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(utenti));
}

/**
 * Aggiunge un nuovo utente all'elenco e lo salva nel localStorage.
 * @param {Object} datiUtente - Dati del nuovo utente (nome, cognome, email, dataNascita).
 * @returns {Object} L'utente creato, comprensivo di id assegnato automaticamente.
 */
export function addUtente(datiUtente) {
  const utenti = getUtenti();
  const nextId = utenti.length > 0 ? Math.max(...utenti.map((u) => u.id)) + 1 : 1;

  const nuovoUtente = { ...datiUtente, id: nextId };
  utenti.push(nuovoUtente);
  saveUtenti(utenti);
  return nuovoUtente;
}

/**
 * Aggiorna i dati di un utente esistente, individuato tramite id.
 * @param {number} id - ID dell'utente da aggiornare.
 * @param {Object} datiUtente - Nuovi dati (nome, cognome, email, dataNascita).
 */
export function updateUtente(id, datiUtente) {
  const utenti = getUtenti();
  const index = utenti.findIndex((utente) => utente.id === id);
  if (index === -1) return;

  utenti[index] = { ...datiUtente, id };
  saveUtenti(utenti);
}

/**
 * Rimuove un utente dall'elenco e salva il risultato nel localStorage.
 * @param {number} id - ID dell'utente da rimuovere.
 */
export function removeUtente(id) {
  const utenti = getUtenti();
  const updatedUtenti = utenti.filter((utente) => utente.id !== id);
  saveUtenti(updatedUtenti);
}
