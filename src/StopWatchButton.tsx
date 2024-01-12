import React from 'react'

interface StopWatchButtonProps {
    running?: boolean;
    onToggle?: () => void;
    resetTime?: () => void;
}

export default function StopWatchButton({running, onToggle, resetTime}: StopWatchButtonProps) {
    const handleClick = resetTime ? resetTime : onToggle;
    const buttonText = resetTime ? 'reset' : running ? 'stop' : 'start'

    return(
        <div>

            {/* <button onClick={onToggle}>{running ? 'Stop' : 'Start'}</button> */}
            {/* <button onClick={resetTime} >reset</button>
            {/* <button>button</button> */}

            <button onClick={handleClick}>{buttonText}</button>

        </div>
    )
}