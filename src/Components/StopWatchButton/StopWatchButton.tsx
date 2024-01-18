import React from 'react'
import './StopWatchButton.css'

interface StopWatchButtonProps {
    // making the props optional so we can use a single button component
    running?: boolean;
    startStop?: () => void;
    resetTime?: () => void;
    recordLap?: () => void;
}

export default function StopWatchButton({running, startStop, resetTime, recordLap}: StopWatchButtonProps) {
    // these ternarys determine which button will have which function/label
    const handleClick = resetTime ? resetTime : recordLap ? recordLap : startStop;
    const buttonText = resetTime ? 'Reset' : recordLap ? 'Lap' : running ? 'Stop' : 'Start';
    // more buttons can easily be added by editing these ternarys

    return(
        <div className='stopwatch__button--container'> {/* handleClick and buttonText determined above! */}
            <button className='stopwatch__button' onClick={handleClick}>{buttonText}</button>
        </div>
    )
}