import CounterDemo from "../components/CounterDemo";
import ColorChangeDemo from "../components/ColorChangeDemo";
import CountWordDemo from "../components/CountWordDemo";
import InfoCard from "../components/InfoCard";
import Pill from "../components/Pill";
import ProfileMini from "../components/ProfileMini";
import ToggleDetails from "../components/ToggleDetails";
import TimerDemo from "../components/TimerDemo";

function ExamplesPage() {
    return (
        <section className="page-view examples-view">
            <h2>Esempi</h2>
            <p className="page-lead">
                Carrellata dei componenti presenti in questo esercizio per
                mostrare riuso, props e gestione dello stato.
            </p>

            <section className="examples-group">
                <h3>Componenti Semplici (props)</h3>
                <div className="component-grid">
                    <InfoCard
                        title="InfoCard"
                        text="Un componente semplice che riceve titolo e testo via props."
                    />

                    <div className="example-box">
                        <h4>Pill</h4>
                        <div className="pill-row">
                            <Pill label="React" />
                            <Pill label="Props" tone="warm" />
                            <Pill label="Riuso" tone="soft" />
                        </div>
                    </div>

                    <ProfileMini name="Giulia" role="Frontend" />
                    <ProfileMini name="Marco" role="UI Engineer" />
                </div>
            </section>

            <section className="examples-group">
                <h3>Componenti con State / useEffect</h3>
                <div className="component-grid">
                    <CounterDemo initialCount={0} step={1} />
                    <ColorChangeDemo />
                    <ToggleDetails />
                    <TimerDemo />
                    <CountWordDemo
                        title="LiveMessageDemo - Feedback live"
                        placeholder="Scrivi una frase breve o lunga"
                    />
                </div>
            </section>
        </section>
    );
}

export default ExamplesPage;
