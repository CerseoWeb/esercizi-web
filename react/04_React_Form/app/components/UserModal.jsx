import React, { useState } from 'react';

/**
 * UserModal.jsx - Modale per creare o modificare un utente.
 * Un unico form serve per entrambi i casi: se `utente` è passato, i campi
 * partono precompilati con i suoi dati (modifica); se è `null`, partono
 * vuoti (creazione). Il modale è un componente "controllato" dall'esterno:
 * non salva nulla da solo, si limita a raccogliere i dati del form e a
 * restituirli con `onSave` quando si conferma. Sarà chi lo usa a decidere
 * se creare un nuovo utente o aggiornare quello esistente.
 *
 * @param {Object} props
 * @param {Object|null} props.utente - utente da modificare, oppure `null` per crearne uno nuovo
 * @param {(datiUtente: Object) => void} props.onSave - chiamata con i dati del form al submit
 * @param {() => void} props.onClose - chiamata per chiudere il modale senza salvare
 *
 * @example
 * // Creazione
 * <UserModal utente={null} onSave={handleCrea} onClose={() => navigate('/')} />
 *
 * @example
 * // Modifica
 * <UserModal utente={utenteSelezionato} onSave={handleAggiorna} onClose={() => navigate('/')} />
 */
function UserModal({ utente, onSave, onClose }) {
  const inModifica = utente !== null;

  const [nome, setNome] = useState(inModifica ? utente.nome : '');
  const [cognome, setCognome] = useState(inModifica ? utente.cognome : '');
  const [email, setEmail] = useState(inModifica ? utente.email : '');
  const [dataNascita, setDataNascita] = useState(inModifica ? utente.dataNascita : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ nome, cognome, email, dataNascita });
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <form className="modal" onSubmit={handleSubmit}>
        <h2>Nuovo utente</h2>

        <div className="form-field">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            required
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="cognome">Cognome</label>
          <input
            type="text"
            id="cognome"
            name="cognome"
            value={cognome}
            required
            onChange={(e) => setCognome(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="dataNascita">Data di nascita</label>
          <input
            type="date"
            id="dataNascita"
            name="dataNascita"
            value={dataNascita}
            required
            onChange={(e) => setDataNascita(e.target.value)}
          />
        </div>

        <div className="modal-actions">
          <button type="submit" className="btn btn-add">
            Crea utente
          </button>
          <button type="button" className="btn btn-cancel" onClick={onClose}>
            Annulla
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserModal;
