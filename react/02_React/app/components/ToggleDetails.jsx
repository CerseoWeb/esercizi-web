import { useState } from "react";

function ToggleDetails() {
    const [open, setOpen] = useState(false);

    return (
        <section className="exercise-card">
            <h4>ToggleDetails</h4>
            <p>
                Stato attuale: <strong>{open ? "Aperto" : "Chiuso"}</strong>
            </p>
            <button onClick={() => setOpen((prev) => !prev)}>
                {open ? "Nascondi" : "Mostra"}
            </button>
            {open && (
                <p className="detail-text">
                    Questo testo viene renderizzato in modo condizionale.
                </p>
            )}
        </section>
    );
}

export default ToggleDetails;
