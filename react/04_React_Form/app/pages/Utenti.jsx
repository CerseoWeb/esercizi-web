import React, { useEffect, useMemo, useState } from 'react';
import FilterBar from '../components/FilterBar.jsx';
import UserTable from '../components/UserTable.jsx';
import UserModal from '../components/UserModal.jsx';
import { getUtenti, addUtente, updateUtente, removeUtente } from '../scripts/storage.js';

/**
 * Utenti.jsx - Pagina principale dell'anagrafica.
 * Tiene lo stato dell'elenco utenti, dei filtri e del modale, e collega
 * tra loro i componenti "pronti all'uso" (FilterBar, UserTable, UserModal)
 * con la logica di lettura/scrittura in localStorage (scripts/storage.js).
 */
function Utenti() {
  const [utenti, setUtenti] = useState([]);
  const [filtri, setFiltri] = useState({ nomeCognome: '', email: '', dataNascita: '' });
  const [modalOpen, setModalOpen] = useState(false);
  const [utenteSelezionato, setUtenteSelezionato] = useState(null);

  // Carica gli utenti da localStorage al primo render della pagina.
  useEffect(() => {
    setUtenti(getUtenti());
  }, []);

  const handleFiltriChange = (campo, valore) => {
    setFiltri((filtriPrecedenti) => ({ ...filtriPrecedenti, [campo]: valore }));
  };

  const handleNuovo = () => {
    setUtenteSelezionato(null);
    setModalOpen(true);
  };

  const handleModifica = (utente) => {
    setUtenteSelezionato(utente);
    setModalOpen(true);
  };

  const handleElimina = (utente) => {
    const conferma = window.confirm(`Eliminare ${utente.nome} ${utente.cognome}?`);
    if (!conferma) return;

    removeUtente(utente.id);
    setUtenti(getUtenti());
  };

  const handleSalva = (datiForm) => {
    if (utenteSelezionato) {
      updateUtente(utenteSelezionato.id, datiForm);
    } else {
      addUtente(datiForm);
    }

    setUtenti(getUtenti());
    setModalOpen(false);
  };

  // Ricalcolata solo quando cambiano utenti o filtri, non a ogni render.
  const utentiFiltrati = useMemo(() => {
    const nomeCognome = filtri.nomeCognome.trim().toLowerCase();
    const email = filtri.email.trim().toLowerCase();

    return utenti.filter((utente) => {
      const nomeCompleto = `${utente.nome} ${utente.cognome}`.toLowerCase();

      const matchNomeCognome = !nomeCognome || nomeCompleto.includes(nomeCognome);
      const matchEmail = !email || utente.email.toLowerCase().includes(email);
      const matchDataNascita = !filtri.dataNascita || utente.dataNascita === filtri.dataNascita;

      return matchNomeCognome && matchEmail && matchDataNascita;
    });
  }, [utenti, filtri]);

  return (
    <>
      <FilterBar filtri={filtri} onFiltriChange={handleFiltriChange} onNuovoUtente={handleNuovo} />

      <UserTable utenti={utentiFiltrati} onEdit={handleModifica} onDelete={handleElimina} />

      {modalOpen && (
        <UserModal
          utente={utenteSelezionato}
          onSave={handleSalva}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

export default Utenti;
