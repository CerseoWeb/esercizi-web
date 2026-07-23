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
 * Il modale usa due stati distinti: `modaleAperto` dice se è visibile,
 * `utenteInModifica` dice se è in modifica (un utente) o in creazione
 * (`null`).
 */
function Utenti() {
  const [utenti, setUtenti] = useState([]);
  const [filtri, setFiltri] = useState({ testo: '', annoDa: '', annoA: '' });
  const [modaleAperto, setModaleAperto] = useState(false);
  const [utenteInModifica, setUtenteInModifica] = useState(null);

  // Carica gli utenti da localStorage al primo render della pagina.
  useEffect(() => {
    setUtenti(getUtenti());
  }, []);

  const handleFiltriChange = (campo, valore) => {
    setFiltri((filtriPrecedenti) => ({ ...filtriPrecedenti, [campo]: valore }));
  };

  const handleNuovo = () => {
    setUtenteInModifica(null);
    setModaleAperto(true);
  };

  const chiudiModale = () => setModaleAperto(false);

  const handleElimina = (utente) => {
    const conferma = window.confirm(`Eliminare ${utente.nome} ${utente.cognome}?`);
    if (!conferma) return;

    removeUtente(utente.id);
    setUtenti(getUtenti());
  };

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

  const testoCercato = filtri.testo.trim().toLowerCase();

  const utentiFiltrati = utenti.filter((utente) => {
    const testoUtente = `${utente.nome} ${utente.cognome} ${utente.email}`.toLowerCase();
    const annoNascita = Number(utente.dataNascita.slice(0, 4));

    const matchTesto = !testoCercato || testoUtente.includes(testoCercato);
    const matchAnnoDa = !filtri.annoDa || annoNascita >= Number(filtri.annoDa);
    const matchAnnoA = !filtri.annoA || annoNascita <= Number(filtri.annoA);

    return matchTesto && matchAnnoDa && matchAnnoA;
  });

  return (
    <>
      <FilterBar filtri={filtri} onFiltriChange={handleFiltriChange} onNuovoUtente={handleNuovo} />

      <UserTable utenti={utentiFiltrati} onDelete={handleElimina} />

      {modaleAperto && (
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
