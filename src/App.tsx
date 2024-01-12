import React, { useEffect, useState } from 'react'
import StopWatch from './StopWatch'

export default function App() {
    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(0)
    const [laplist, setLaplist] = useState<string[]>([])

    const startStop = () => {
        setRunning(!running)
    }

    const resetTime = () => {
        setRunning(false)
        setTime(0)
        setLaplist([])
    }

    const recordLap = () => {
        const lap = timeFormatter(time*10)
        console.log(lap);
        // setLaplist(`${lap}`)
        setLaplist(previousLap => [...previousLap, lap.join(':')])
        // spread on previousLap so we keep our old laps listed
    }

    // for starting or stopping stopwatch when the running state changes
    useEffect(() => {
        let interval: any;

        // if the running state is true, add time to the stopwatch
        if(running) {
            interval = setInterval(() => {
                setTime((previousTime) => previousTime + 1);
            }, 10)
        }
        // this is where we stop the interval from increasing when the 'running' state changes
        // aka, we stop our clock
        return () => clearInterval(interval);
    }, [running]);

    // this function takes in our 'time' state variable and turns it into our nice 00:00:00 stopwatch format
    const timeFormatter = (timeInMilliseconds:number): [string, string, string] => {
        const total = Math.floor(timeInMilliseconds / 1000);
        const minutes = Math.floor(total / 60);
        const seconds = total % 60;
        const remainingMilliseconds = timeInMilliseconds % 1000;

        // since we want our watch to always display 6 digits, we use the ternary to display 0 if the value is less than 10
        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        // was experiencing a weird rapid cycle with the milliseconds cycling down to 0 so I hope this inconsistency is alright!
        const formattedMilliseconds = remainingMilliseconds.toString().padStart(3, '0').slice(0, 2);

        return [formattedMinutes, formattedSeconds, formattedMilliseconds];
    }
    // here is where we pass in the 'time' state variable
    const [formattedMinutes, formattedSeconds, formattedMilliseconds] = timeFormatter(time*10)

    return(
        <div>
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