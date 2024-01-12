import React from 'react'

interface StopWatchButtonProps {
    // making the props optional so we can use a single button
    running?: boolean;
    startStop?: () => void;
    resetTime?: () => void;
    recordLap?: () => void;
}

export default function StopWatchButton({running, startStop, resetTime, recordLap}: StopWatchButtonProps) {
    const handleClick = resetTime ? resetTime : recordLap ? recordLap : startStop;
    const buttonText = resetTime ? 'reset' : recordLap ? 'lap' : running ? 'stop' : 'start';

    return(
        <div>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}