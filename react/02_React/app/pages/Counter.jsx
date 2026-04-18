import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <section className="exercise-card">
            <h2>Counter</h2>
            <p className="counter-value">Contatore: {count}</p>
            <div className="button-row">
                <button onClick={increment}>Incrementa</button>
                <button onClick={decrement}>Decrementa</button>
            </div>
        </section>
    );
}

export default Counter;
