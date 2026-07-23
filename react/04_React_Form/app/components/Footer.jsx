import React from 'react';

/**
 * Footer.jsx - Piè di pagina.
 * Nota sul salvataggio dati, sempre visibile in fondo alla pagina.
 */
function Footer() {
  return (
    <footer className="app-footer">
      <p>Gli utenti sono salvati solo nel tuo browser (localStorage).</p>
      <p className="footer-year">Progetto didattico &middot; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
