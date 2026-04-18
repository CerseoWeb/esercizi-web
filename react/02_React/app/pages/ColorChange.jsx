import { useState } from "react";

function ColorChange() {
    const [color, setColor] = useState("black");
    const colors = ["red", "green", "blue", "orange", "purple"];

    const changeColor = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
    };

    return (
        <section className="exercise-card">
            <h2 style={{ color }}>Esercizio Colore</h2>
            <p className="color-hint">Premi il pulsante per cambiare colore al titolo.</p>
            <button onClick={changeColor}>Cambia Colore</button>
        </section>
    );
}

export default ColorChange;
