import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExamplesPage from "./pages/ExamplesPage";
import ForumPage from "./pages/forum/ForumPage";
import ForumUserPage from "./pages/forum/ForumUserPage";
import ForumPostPage from "./pages/forum/ForumPostPage";
import "./App.css";

function App() {
    return (
        <div className="app-shell">
            <div className="app-background" aria-hidden="true" />

            <header className="app-header">
                <h1>Esercizi React</h1>
                <p>Mini playground su componenti, props, state e useEffect.</p>
            </header>

            <nav className="main-nav" aria-label="Navigazione principale">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/esempi" end>Esempi</NavLink>
                <NavLink to="/forum" end>Forum</NavLink>
            </nav>

            <main className="page-panel">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/esempi" element={<ExamplesPage />} />
                    <Route path="/forum" element={<ForumPage />} />
                    <Route path="/forum/user/:id" element={<ForumUserPage />} />
                    <Route path="/forum/post/:id" element={<ForumPostPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
