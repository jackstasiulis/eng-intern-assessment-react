import React, { useEffect, useState } from 'react'
import StopWatch from './StopWatch'

export default function App() {
    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(0)

    const toggleRunning = () => {
        setRunning(!running)
    }

    useEffect(() => {

        let interval: any;

        if(running) {
            interval = setInterval(() => {
                setTime((previousTime) => previousTime +1);
            }, 1000)
        }

        return () => clearInterval(interval);
    }, [running]);


    return(
        <div>
            <StopWatch time={time} running={running} onToggle={toggleRunning} />
        </div>
    )
}