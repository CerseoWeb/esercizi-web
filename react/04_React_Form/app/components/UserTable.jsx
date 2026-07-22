import React from 'react';

/**
 * Formatta una data yyyy-mm-dd (formato di <input type="date">) in gg/mm/aaaa
 * per la visualizzazione in tabella.
 * @param {string} dataNascita
 * @returns {string}
 */
function formattaData(dataNascita) {
  if (!dataNascita) return '—';
  const [anno, mese, giorno] = dataNascita.split('-');
  return `${giorno}/${mese}/${anno}`;
}

/**
 * UserTable.jsx - Tabella utenti.
 * Renderizza una riga per ogni utente, con un'icona di modifica a sinistra
 * e un'icona di eliminazione a destra. Non contiene logica di
 * salvataggio: si limita a segnalare l'azione scelta tramite le props
 * `onEdit`/`onDelete`, lasciando la gestione dei dati al componente che la usa.
 *
 * @typedef {Object} Utente
 * @property {number} id
 * @property {string} nome
 * @property {string} cognome
 * @property {string} email
 * @property {string} dataNascita - formato yyyy-mm-dd
 *
 * @param {Object} props
 * @param {Utente[]} props.utenti - elenco degli utenti da mostrare, uno per riga
 * @param {(utente: Utente) => void} props.onEdit - chiamata con l'utente della riga
 *   quando si clicca l'icona di modifica
 * @param {(utente: Utente) => void} props.onDelete - chiamata con l'utente della riga
 *   quando si clicca l'icona di eliminazione
 *
 * @example
 * <UserTable utenti={utentiFiltrati} onEdit={handleModifica} onDelete={handleElimina} />
 */
function UserTable({ utenti, onEdit, onDelete }) {
  if (utenti.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">🗂️</div>
        <h3>Nessun utente trovato</h3>
        <p>Prova a modificare i filtri, oppure aggiungi un nuovo utente.</p>
      </div>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Nome</th>
          <th>Cognome</th>
          <th>Email</th>
          <th>Data di nascita</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {utenti.map((utente) => (
          <tr key={utente.id}>
            <td>
              <button
                type="button"
                className="icon-btn icon-btn-edit"
                title="Modifica utente"
                aria-label="Modifica utente"
                onClick={() => onEdit(utente)}
              >
                ✏️
              </button>
            </td>
            <td>{utente.nome}</td>
            <td>{utente.cognome}</td>
            <td>{utente.email}</td>
            <td>{formattaData(utente.dataNascita)}</td>
            <td>
              <button
                type="button"
                className="icon-btn icon-btn-delete"
                title="Elimina utente"
                aria-label="Elimina utente"
                onClick={() => onDelete(utente)}
              >
                🗑️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
