import { useState } from "react";

function CounterDemo({ initialCount = 0, step = 1 }) {

    const [count, setCount] = useState(initialCount);

    const increment = () => setCount(count + step);
    const decrement = () => setCount(count - step);
    const reset = () => setCount(initialCount);

    return (
        <section className="exercise-card">
            <h4>CounterDemo</h4>
            <p className="counter-value">Contatore: {count}</p>
            <div className="button-row">
                <button onClick={increment}>+{step}</button>
                <button onClick={decrement}>-{step}</button>
                <button onClick={reset}>Reset</button>
            </div>
        </section >
    );
}

export default CounterDemo;
