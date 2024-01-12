import React from 'react'

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
    const buttonText = resetTime ? 'Reset' : recordLap ? 'Lap' : running ? 'stop' : 'Start';
    // more buttons can easily be added by editing these ternarys

    return(
        <div> {/* handleClick and buttonText determined above! */}
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}