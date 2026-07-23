import React from 'react';

/**
 * Header.jsx - Intestazione dell'app.
 * Titolo e sottotitolo fissi, sempre visibili in cima alla pagina.
 */
function Header() {
  return (
    <header>
      <div className="header-inner">
        <div className="brand">
          <h1>🗂️ Anagrafica Utenti</h1>
          <p className="subtitle">
            Gestisci l&apos;elenco utenti: crea, cerca, modifica ed elimina
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
