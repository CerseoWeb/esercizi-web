import React from 'react';

/**
 * FilterBar.jsx - Barra dei filtri sopra la tabella, più il pulsante di creazione.
 * Componente "controllato": non tiene uno stato proprio, mostra i valori
 * ricevuti tramite `filtri` e segnala ogni modifica tramite `onFiltriChange`.
 *
 * @param {Object} props
 * @param {Object} props.filtri
 * @param {string} props.filtri.testo - testo cercato in nome, cognome ed email
 * @param {string} props.filtri.annoDa - anno di nascita minimo (incluso)
 * @param {string} props.filtri.annoA - anno di nascita massimo (incluso)
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
          placeholder="Cerca per nome, cognome o email..."
          value={filtri.testo}
          onChange={(e) => onFiltriChange('testo', e.target.value)}
        />

        <div className="filter-group">
          <span className="filter-label">Anno di nascita</span>
          <input
            type="number"
            className="filter-input filter-input-anno"
            placeholder="Da"
            value={filtri.annoDa}
            onChange={(e) => onFiltriChange('annoDa', e.target.value)}
          />
          <span className="filter-label">—</span>
          <input
            type="number"
            className="filter-input filter-input-anno"
            placeholder="A"
            value={filtri.annoA}
            onChange={(e) => onFiltriChange('annoA', e.target.value)}
          />
        </div>
      </div>

      <button type="button" className="btn btn-add" onClick={onNuovoUtente}>
        + Nuovo Utente
      </button>
    </div>
  );
}

export default FilterBar;
