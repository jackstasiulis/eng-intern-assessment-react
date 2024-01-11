import React, { useState } from 'react'
import StopWatch from './StopWatch'

export default function App() {
    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(0)

    const toggleRunning = () => {
        setRunning(false)
    }


    return(
        <div>
            <StopWatch time={time} running={running} onToggle={toggleRunning} />
        </div>
    )
}