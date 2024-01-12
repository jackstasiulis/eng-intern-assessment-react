import React from 'react'
import StopWatchButton from './StopWatchButton'

interface StopWatchProps {
    running: boolean;
    startStop: () => void;
    minutes: string;
    seconds: string;
    milliseconds: string;
    resetTime: () => void;
    recordLap: () => void;
    lapList: string[];
}

export default function StopWatch({running, startStop, minutes, seconds, milliseconds, resetTime, recordLap, lapList}: StopWatchProps) {
    return(
        <div>
            <h1>STOPWATCH</h1>
            <h2>{minutes}:{seconds}:{milliseconds}</h2>

            <StopWatchButton running={running} startStop={startStop} />
            <StopWatchButton resetTime={resetTime} />
            <StopWatchButton recordLap={recordLap} />

            <ul>
                {lapList.map((lap, index) => (
                    <li key={index}>
                        <p>{lap}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}