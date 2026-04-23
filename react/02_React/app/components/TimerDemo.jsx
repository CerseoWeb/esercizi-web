import { useEffect, useState } from "react";

function TimerDemo() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <section className="exercise-card">
            <h4>TimerDemo (useEffect)</h4>
            <p>Secondi trascorsi: {seconds}</p>
        </section>
    );
}

export default TimerDemo;
