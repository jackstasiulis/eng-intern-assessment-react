import "./App.css"

import React, { useEffect, useState } from 'react'
import StopWatch from './Components/StopWatch/StopWatch'

export default function App() {
    // declaring our state variables
    const [running, setRunning] = useState(false); // holds the running or not running state of the stopwatch
    const [time, setTime] = useState(0) // holds our stopwatches current time
    const [laplist, setLaplist] = useState<string[]>([]) // holds the current array of laps when they are recorded

    // our start/stop function toggles running state back and forth as its a boolean
    const startStop = () => {
        setRunning(!running)
    }

    // our reset function stops the clock, resets the time, and clears the laps
    const resetTime = () => {
        setRunning(false)
        setTime(0)
        setLaplist([])
    }

    // our lap recorder function grabs our current formatted time and joins it in an array
    // with the previous laps
    const recordLap = () => {
        if (running){ // only works if the clock is running!
            const lap = timeFormatter(time)
            setLaplist(previousLap => [...previousLap, lap.join(':')])
            // spread on previousLap so we keep our old laps listed
        }
    }

    // for starting or stopping stopwatch when the running state changes
    useEffect(() => {
        let interval: any;

        if(running) { // if the running state is true, add time to the stopwatch
            interval = setInterval(() => {
                setTime((previousTime) => previousTime + 10);
            }, 10)
        }
        // this is where we stop the interval from increasing when the 'running' state changes
        // aka, we stop our increment
        return () => clearInterval(interval);
    }, [running]);

    // this function takes in our 'time' state variable and turns it into our nice 00:00:00 stopwatch format
    const timeFormatter = (timeInMilliseconds:number): [string, string, string] => {
        
        const total = Math.floor(timeInMilliseconds / 1000);// getting our total seconds, in milliseconds
        const minutes = Math.floor(total / 60); // takes the total and determines if there are any whole minutes
        const seconds = total % 60; // after taking the minutes from the total, this gets the remaining seconds
        const remainingMilliseconds = timeInMilliseconds % 1000; // aaand remaining milliseconds

        // since we want our watch to always display 6 digits, we use the ternary to display 0 if the value is less than 10
        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        // was experiencing a weird rapid cycle with the milliseconds cycling down to 0 so I hope this inconsistency is alright!
        const formattedMilliseconds = remainingMilliseconds.toString().padStart(3, '0').slice(0, 2);

        return [formattedMinutes, formattedSeconds, formattedMilliseconds];
    }
    // here is where we pass in the 'time' state variable
    const [formattedMinutes, formattedSeconds, formattedMilliseconds] = timeFormatter(time)

    return(
        <div className='app'>
            {/* passing all the props to our StopWatch component */}
            {/* props needed by StopWatchButton will be passed within StopWatch */}
            <StopWatch 
            running={running} 
            startStop={startStop}
            minutes={formattedMinutes}
            seconds={formattedSeconds}
            milliseconds={formattedMilliseconds}

            resetTime={resetTime}

            recordLap={recordLap}
            lapList={laplist}
            />

        </div>
    )
}