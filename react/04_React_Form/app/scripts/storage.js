
const STORAGE_KEY = 'utenti';

/**
 * Recupera l'elenco degli utenti dal localStorage.
 * Se non ci sono utenti salvati, restituisce un array vuoto.
 * @returns {Array} Array di oggetti utente.
 */
export function getUtenti() {
  const utenti = localStorage.getItem(STORAGE_KEY);
  return utenti ? JSON.parse(utenti) : [];
}

/**
 * Salva l'elenco degli utenti nel localStorage.
 * @param {Array} utenti - Array di oggetti utente.
 */
export function saveUtenti(utenti) {
  const utentiString = JSON.stringify(utenti);
  localStorage.setItem(STORAGE_KEY, utentiString);
}

/**
 * Aggiunge un nuovo utente all'elenco e lo salva nel localStorage.
 * @param {Object} utente - Oggetto utente da aggiungere.
 */
export function addUtente(utente) {
  const utenti = getUtenti();
  const nextId = utenti.length > 0 ? Math.max(...utenti.map(u => u.id)) + 1 : 1;

  utente.id = nextId;
  utenti.push(utente);
  saveUtenti(utenti);
}

/**
 * Rimuove un utente dall'elenco e lo salva nel localStorage.
 * @param {number} id - ID dell'utente da rimuovere.
 */
export function removeUtente(id) {
  const utenti = getUtenti();
  const updatedUtenti = utenti.filter(utente => utente.id !== id);
  saveUtenti(updatedUtenti);
}

/**
 * Popola il localStorage con alcuni utenti di esempio.
 * Questo può essere utile per testare l'applicazione senza dover inserire manualmente gli utenti.
 */
function populateStorage() {
  const utenti = [
    { id: 1, nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@email.com' },
    { id: 2, nome: 'Luigi', cognome: 'Verdi', email: 'luigi.verdi@email.com' },
    { id: 3, nome: 'Giulia', cognome: 'Bianchi', email: 'giulia.bianchi@email.com' },
    { id: 4, nome: 'Francesca', cognome: 'Neri', email: 'francesca.neri@email.com' }
  ];
  saveUtenti(utenti);
}