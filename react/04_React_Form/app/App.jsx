import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Utenti from './pages/Utenti.jsx';

/**
 * App.jsx - Componente radice e layout dell'applicazione.
 * App a pagina singola: intestazione, l'anagrafica utenti, piè di pagina.
 */
function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Utenti />
      </main>

      <Footer />
    </>
  );
}

export default App;
