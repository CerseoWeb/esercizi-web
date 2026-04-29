import { useState } from "react";

function ColorChangeDemo() {
    const palette = ["#b42318", "#1769aa", "#157347", "#8a2be2", "#d97706"];
    const [color, setColor] = useState(palette[0]);

    const changeColor = () => {
        const randomIndex = Math.floor(Math.random() * palette.length);
        const next = palette[randomIndex];
        setColor(next);
    };

    return (
        <section className="exercise-card">
            <h4 style={{ color }}>ColorChangeDemo</h4>
            <p className="color-hint">Cambia il colore del titolo con un click.</p>
            <button onClick={changeColor}>Cambia colore</button>
        </section>
    );
}

export default ColorChangeDemo;
