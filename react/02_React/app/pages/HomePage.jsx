function HomePage() {
    return (
        <section className="page-view home-view">
            <h2>Home</h2>
            <p className="page-lead">Un piccolo hub per capire i concetti base di React.</p>

            <div className="concept-grid">
                <article className="concept-card">
                    <h3>Componenti</h3>
                    <p>
                        Sono blocchi riusabili di interfaccia che incapsulano
                        struttura e comportamento.
                    </p>
                </article>

                <article className="concept-card">
                    <h3>Props</h3>
                    <p>
                        Sono dati in ingresso: permettono allo stesso componente
                        di cambiare risultato in base ai valori ricevuti.
                    </p>
                </article>

                <article className="concept-card">
                    <h3>State</h3>
                    <p>
                        E lo stato interno che cambia nel tempo e aggiorna
                        automaticamente la UI.
                    </p>
                </article>

                <article className="concept-card">
                    <h3>useEffect</h3>
                    <p>
                        Permette di eseguire effetti collaterali, ad esempio
                        timer, chiamate API o sincronizzazioni esterne.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default HomePage;
