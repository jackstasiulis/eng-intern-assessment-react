import React from 'react'
import StopWatchButton from './StopWatchButton'

interface StopWatchProps {
    running: boolean;
    onToggle: () => void;
    minutes: string;
    seconds: string;
    milliseconds: string;
    resetTime: () => void;
}

export default function StopWatch({running, onToggle, minutes, seconds, milliseconds, resetTime}: StopWatchProps) {
    return(
        <div>
            <h1>STOPWATCH</h1>
            <h2>{minutes}:{seconds}:{milliseconds}</h2>

            <StopWatchButton running={running} onToggle={onToggle} />
            <StopWatchButton resetTime={resetTime} />

        </div>
    )
}