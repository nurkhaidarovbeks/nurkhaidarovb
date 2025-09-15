import React, {useState, useEffect} from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && isRunning) {
            alert("Time is up!");
            setIsRunning(false);
        }

        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);

    const startTimer = () => {
        if (seconds > 0) {
            setTimeLeft(seconds);
            setIsRunning(true);
        }
    }

    return (
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h2>Countdown Timer</h2>
            <input
                type="number"
                value={seconds}
                onChange={(e) => setSeconds(Number(e.target.value))}
                placeholder="Enter seconds"
                />
            <button onClick={startTimer}>Start</button>
            <h3>Time Left: {timeLeft}</h3>
        </div>
    )
}

export default Timer;