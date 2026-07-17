/**
 * preferiti.js - Modulo per gestire i preferiti in localStorage (SCHELETRO)
 *
 * Racchiude tutta la logica di lettura/scrittura dei film preferiti nel
 * localStorage del browser, così i componenti React (pages/Cerca.jsx e
 * pages/Preferiti.jsx) la usano senza duplicare codice.
 *
 * I film vengono salvati come array JSON sotto la chiave 'preferiti'.
 * Di ogni film conviene salvare almeno: Title, Year, imdbID, Type, Poster.
 */

const STORAGE_KEY = 'preferiti';

/**
 * Legge i preferiti da localStorage.
 * @returns {Array} L'array dei film preferiti (vuoto se non ce ne sono)
 */
export function getPreferiti() {
  // TODO: implementare la lettura da localStorage (JSON)
  return [];
}

/**
 * Salva l'intero array dei preferiti in localStorage.
 * @param {Array} lista - L'array di film da salvare
 */
export function salvaPreferiti(lista) {
  // TODO: implementare il salvataggio in localStorage (JSON)
}

/**
 * Aggiunge un film ai preferiti, evitando i duplicati.
 * @param {Object} film - Il film da aggiungere (deve avere imdbID)
 */
export function aggiungiPreferito(film) {
  // TODO:
  // 1. Leggere i preferiti attuali
  // 2. Se il film NON è già presente aggiungerlo all'array
  // 3. Salvare l'array aggiornato
  // Ricordate che potete usare le funzioni già definite per leggere/salvare/sapere se è già presente.
}

/**
 * Rimuove un film dai preferiti in base al suo imdbID.
 * @param {string} imdbID - Identificatore del film da rimuovere
 */
export function rimuoviPreferito(imdbID) {
  // TODO:
  // 1. Leggere i preferiti
  // 2. Creare un nuovo array senza il film (filter)
  // 3. Salvare
}

/**
 * Controlla se un film è già nei preferiti.
 * @param {string} imdbID - Identificatore del film
 * @returns {boolean} true se è già nei preferiti
 */
export function isPreferito(imdbID) {
  // TODO: recuperare i preferiti e controllare se c'è un film con quell'imdbID
  return false;
}
