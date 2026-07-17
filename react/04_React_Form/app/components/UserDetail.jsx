import { useState } from 'react';
import { addUtente } from '../scripts/storage';

/**
 * UserDetail.jsx
 * Componente React per visualizzare i dettagli di un utente.
 * Il componente è un semplice modale che appare quando si seleziona un utente dalla lista. Mostra il nome, il cognome e l'email dell'utente.
 * Se l'utente non è presente, il form rimane vuoto e può essere utilizzato per creare un nuovo utente se btnCreate è true.
 * 
 * @param {Object} props - Le proprietà passate al componente.
 * @param {function} props.closeModal - Funzione da chiamare per chiudere il modale. Può essere utilizzata per aggiornare lo stato nel componente genitore.
 * @param {Object} props.utente - L'oggetto utente da visualizzare. Può essere undefined se non ci sono dati.
 * @param {number} props.utente.id - L'ID dell'utente.
 * @param {string} props.utente.nome - Il nome dell'utente.
 * @param {string} props.utente.cognome - Il cognome dell'utente.
 * @param {string} props.utente.email - L'email dell'utente.
 * @param {boolean} props.btnCreate - Indica se il pulsante di creazione dell'utente deve essere visualizzato. Se true, il pulsante sarà visibile; altrimenti, sarà nascosto.
 * @param {boolean} props.btnCancel - Indica se il pulsante di annullamento deve essere visualizzato. Se true, il pulsante sarà visibile; altrimenti, sarà nascosto.
 * @returns {JSX.Element} Il componente React che visualizza i dettagli dell'utente.
 */
function UserDetail({ closeModal, utente = null, btnCreate = false, btnCancel = true }) {
    const isReadOnly = utente || btnCreate === false;

    const [nome, setNome] = useState(utente ? utente.nome : '');
    const [cognome, setCognome] = useState(utente ? utente.cognome : '');
    const [email, setEmail] = useState(utente ? utente.email : '');

    const createUser = (e) => {
        e.preventDefault();

        const newUser = { nome, cognome, email };
        addUtente(newUser);
        closeModal();
    }

    return (
        <div className="modal-outside" onClick={(e) => e.target.className === 'modal-outside' && closeModal()}>
            <form className="modal" onSubmit={createUser}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" value={nome} readOnly={isReadOnly} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="cognome">Cognome:</label>
                    <input type="text" id="cognome" name="cognome" value={cognome} readOnly={isReadOnly} onChange={(e) => setCognome(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} readOnly={isReadOnly} onChange={(e) => setEmail(e.target.value)} />
                </div>

                {btnCreate && <button type="submit">Crea</button>}
                {btnCancel && <button type="button" onClick={closeModal}>Annulla</button>}
            </form>
        </div>
    );
}