import { useEffect, useState } from "react";

function CountWordDemo({ placeholder = "Scrivi un messaggio" }) {
    const [text, setText] = useState("");
    const [feedback, setFeedback] = useState("In attesa di input");

    useEffect(() => {
        const trimmedText = text.trim();

        if (trimmedText.length === 0) {
            setFeedback("In attesa di input");
            return;
        }

        const wordCount = trimmedText.split(" ").length;
        const charCount = trimmedText.length;

        setFeedback(`${charCount} caratteri, ${wordCount} parole`);
    }, [text]);

    return (
        <section className="exercise-card">
            <h4>Contatore di Parole</h4>
            <label className="demo-field-label" htmlFor="live-message-input">
                Messaggio
            </label>
            <input
                id="live-message-input"
                type="text"
                value={text}
                placeholder={placeholder}
                onChange={(event) => setText(event.target.value)}
            />
            <p className="counter-value">Anteprima: {text || "..."}</p>
            <p className="color-hint">Feedback: {feedback}</p>
        </section>
    );
}

export default CountWordDemo;
