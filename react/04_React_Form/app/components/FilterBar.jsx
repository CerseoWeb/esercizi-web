import React from 'react';

/**
 * FilterBar.jsx - Barra dei filtri sopra la tabella, più il pulsante di creazione.
 * Componente "controllato": non tiene uno stato proprio, mostra i valori
 * ricevuti tramite `filtri` e segnala ogni modifica tramite `onFiltriChange`.
 *
 * @param {Object} props
 * @param {Object} props.filtri
 * @param {string} props.filtri.nomeCognome - testo cercato in nome+cognome
 * @param {string} props.filtri.email - testo cercato nell'email
 * @param {string} props.filtri.dataNascita - data di nascita esatta (yyyy-mm-dd)
 * @param {(campo: string, valore: string) => void} props.onFiltriChange - chiamata
 *   con il nome del campo modificato e il nuovo valore
 * @param {() => void} props.onNuovoUtente - chiamata al click su "Nuovo Utente"
 *
 * @example
 * <FilterBar filtri={filtri} onFiltriChange={handleFiltriChange} onNuovoUtente={handleNuovo} />
 */
function FilterBar({ filtri, onFiltriChange, onNuovoUtente }) {
  return (
    <div className="filter-bar">
      <div className="filter-fields">
        <input
          type="text"
          className="filter-input"
          placeholder="Cerca per nome e cognome..."
          value={filtri.nomeCognome}
          onChange={(e) => onFiltriChange('nomeCognome', e.target.value)}
        />
        <input
          type="text"
          className="filter-input"
          placeholder="Cerca per email..."
          value={filtri.email}
          onChange={(e) => onFiltriChange('email', e.target.value)}
        />
        <input
          type="date"
          className="filter-input"
          value={filtri.dataNascita}
          onChange={(e) => onFiltriChange('dataNascita', e.target.value)}
        />
      </div>

      <button type="button" className="btn btn-add" onClick={onNuovoUtente}>
        + Nuovo Utente
      </button>
    </div>
  );
}

export default FilterBar;
