import React from 'react'

interface StopWatchButtonProps {
    running: boolean;
    onToggle: () => void;
}

export default function StopWatchButton({running, onToggle}: StopWatchButtonProps) {
    return(
        <div>
            <button onClick={onToggle}>{running ? 'Stop' : 'Start'}</button>
            {/* <button>button</button> */}
            {/* <button>button</button> */}
        </div>
    )
}