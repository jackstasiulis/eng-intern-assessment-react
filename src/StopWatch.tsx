import React from 'react'
import StopWatchButton from './StopWatchButton'

interface StopWatchProps {
    running: boolean;
    onToggle: () => void;
    minutes: string;
    seconds: string;
    milliseconds: string;
}

export default function StopWatch({running, onToggle, minutes, seconds, milliseconds}: StopWatchProps) {
    return(
        <div>
            <h1>STOPWATCH</h1>
            <h2>{minutes}:{seconds}:{milliseconds}{}</h2>

            {/* <h2>lap: 3</h2> */}

            <StopWatchButton running={running} onToggle={onToggle} />
        </div>
    )
}