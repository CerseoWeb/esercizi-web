import React, { useEffect, useState } from 'react';
import FilterBar from '../components/FilterBar.jsx';
import UserTable from '../components/UserTable.jsx';
import UserModal from '../components/UserModal.jsx';
import { getUtenti, addUtente, updateUtente, removeUtente } from '../scripts/storage.js';

/**
 * Utenti.jsx - Pagina principale dell'anagrafica.
 * Tiene lo stato dell'elenco utenti, dei filtri e del modale, e collega
 * tra loro i componenti "pronti all'uso" (FilterBar, UserTable, UserModal)
 * con la logica di lettura/scrittura in localStorage (scripts/storage.js).
 *
 * Il modale si apre/chiude con uno stato locale, `utenteInModifica`:
 * - `undefined` -> modale chiuso
 * - `null` -> modale aperto in creazione (campi vuoti)
 * - un utente -> modale aperto in modifica, precompilato con i suoi dati
 */
function Utenti() {
  const [utenti, setUtenti] = useState([]);
  const [filtri, setFiltri] = useState({ nomeCognome: '', email: '', dataNascita: '' });
  const [utenteInModifica, setUtenteInModifica] = useState(undefined);

  // Carica gli utenti da localStorage al primo render della pagina.
  useEffect(() => {
    setUtenti(getUtenti());
  }, []);

  const handleFiltriChange = (campo, valore) => {
    setFiltri((filtriPrecedenti) => ({ ...filtriPrecedenti, [campo]: valore }));
  };

  const handleElimina = (utente) => {
    const conferma = window.confirm(`Eliminare ${utente.nome} ${utente.cognome}?`);
    if (!conferma) return;

    removeUtente(utente.id);
    setUtenti(getUtenti());
  };

  const chiudiModale = () => setUtenteInModifica(undefined);

  const handleCrea = (datiForm) => {
    addUtente(datiForm);
    setUtenti(getUtenti());
    chiudiModale();
  };

  const handleAggiorna = (datiForm) => {
    updateUtente(utenteInModifica.id, datiForm);
    setUtenti(getUtenti());
    chiudiModale();
  };

  const nomeCognomeCercato = filtri.nomeCognome.trim().toLowerCase();
  const emailCercata = filtri.email.trim().toLowerCase();

  const utentiFiltrati = utenti.filter((utente) => {
    const nomeCompleto = `${utente.nome} ${utente.cognome}`.toLowerCase();

    const matchNomeCognome = !nomeCognomeCercato || nomeCompleto.includes(nomeCognomeCercato);
    const matchEmail = !emailCercata || utente.email.toLowerCase().includes(emailCercata);
    const matchDataNascita = !filtri.dataNascita || utente.dataNascita === filtri.dataNascita;

    return matchNomeCognome && matchEmail && matchDataNascita;
  });

  return (
    <>
      <FilterBar
        filtri={filtri}
        onFiltriChange={handleFiltriChange}
        onNuovoUtente={() => setUtenteInModifica(null)}
      />

      <UserTable utenti={utentiFiltrati} onEdit={setUtenteInModifica} onDelete={handleElimina} />

      {utenteInModifica !== undefined && (
        <UserModal
          utente={utenteInModifica}
          onSave={utenteInModifica ? handleAggiorna : handleCrea}
          onClose={chiudiModale}
        />
      )}
    </>
  );
}

export default Utenti;
