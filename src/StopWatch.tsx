import React from 'react'
import StopWatchButton from './StopWatchButton'

interface StopWatchProps {
    time: number;
    running: boolean;
    onToggle: () => void;
}

export default function StopWatch({time, running, onToggle}: StopWatchProps) {



    return(
        <div>
            <h1>STOPWATCH</h1>
            <h3>{time}</h3>
            {/* <h2>lap: 3</h2> */}

            <StopWatchButton running={running} onToggle={onToggle} />
        </div>
    )
}