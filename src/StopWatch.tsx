import React from 'react'
import StopWatchButton from './StopWatchButton'

interface StopWatchProps {
    running: boolean;
    minutes: string;
    seconds: string;
    milliseconds: string;
    startStop: () => void;
    resetTime: () => void;
    recordLap: () => void;
    lapList: string[];
}

export default function StopWatch({running, minutes, seconds, milliseconds, startStop, resetTime, recordLap, lapList}: StopWatchProps) {

    
    return(
        <div>
            <h1>STOPWATCH By: Jack Stasiulis</h1>
            <h2>{`${minutes}:${seconds}:${milliseconds}`}</h2> {/* here is our stopwatch clock */}

            {/* our three buttons using the same StopWatchButton component */}
            {/* each is passed its necessary props in order to determine which button it becomes */}
            <StopWatchButton running={running} startStop={startStop} />
            <StopWatchButton resetTime={resetTime} />
            <StopWatchButton recordLap={recordLap} />

            {/* mapping thru our array of laps as they are created */}
            {/* when clicked, the lapList state var updates and adds a new lap */}
            <ul data-testid='lap-list'>
                {lapList && lapList.map((lap, index) => (
                    <li key={index}>
                        <p>{lap}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}