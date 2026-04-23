import { useState } from "react";

function CounterDemo({ initialCount = 0, step = 1 }) {
    const [count, setCount] = useState(initialCount);

    return (
        <section className="exercise-card">
            <h4>CounterDemo</h4>
            <p className="counter-value">Contatore: {count}</p>
            <div className="button-row">
                <button onClick={() => setCount((prev) => prev + step)}>
                    +{step}
                </button>
                <button onClick={() => setCount((prev) => prev - step)}>
                    -{step}
                </button>
                <button onClick={() => setCount(initialCount)}>Reset</button>
            </div>
        </section>
    );
}

export default CounterDemo;
