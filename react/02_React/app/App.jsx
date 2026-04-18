import { Link, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import ColorChange from "./pages/ColorChange";
import "./App.css";

function App() {
    return (
        <div className="app-shell">
            <div className="app-background" aria-hidden="true" />

            <header className="app-header">
                <h1>Esercizi React</h1>
                <p>Mini playground con routing e componenti interattivi.</p>
            </header>

            <nav className="main-nav" aria-label="Navigazione principale">
                <Link to="/">Home</Link>
                <Link to="/counter">Esercizio Counter</Link>
                <Link to="/color">Esercizio Colore</Link>
            </nav>

            <main className="page-panel">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <section className="home-view">
                                <h2>Home</h2>
                                <p>
                                    Usa il menu qui sopra per aprire i due
                                    esercizi.
                                </p>
                            </section>
                        }
                    />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/color" element={<ColorChange />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
