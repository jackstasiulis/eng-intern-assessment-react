import React from 'react'
import StopWatchButton from '../StopWatchButton/StopWatchButton'
import "./StopWatch.css"

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
        <div className='stopwatch'>
            <div>
                <h1 className='stopwatch__title'>Stopwatch</h1>
                <h2 className='stopwatch__name'>By: Jack Stasiulis</h2>
                <div className='stopwatch__main-time--container'>
                    <h2 className='stopwatch__main-time'>{`${minutes}:${seconds}:${milliseconds}`}</h2> {/* here is our stopwatch clock */}
                </div>

                {/* our three buttons using the same StopWatchButton component */}
                {/* each is passed its necessary props in order to determine which button it becomes */}
                <div className='stopwatch__buttons'>
                    <StopWatchButton running={running} startStop={startStop} />
                    <StopWatchButton resetTime={resetTime} />
                    <StopWatchButton recordLap={recordLap} />
                </div>
            </div>
            
            

            {/* mapping thru our array of laps as they are created */}
            {/* when clicked, the lapList state var updates and adds a new lap */}
            <div className='stopwatch__lap-list--container'>
                <h2 className='stopwatch__lap-list--title'>Laps</h2>
                <ul className='stopwatch__lap-list' data-testid='lap-list'>
                    {lapList && lapList.map((lap, index) => (
                        <li className='stopwatch__lap-list--item' key={index}>
                            <p className='stopwatch__lap-list--text'>{lap}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}