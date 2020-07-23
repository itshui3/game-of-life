// Controls
// Container-Wrapper for Control Components: 
// [Progress Button, 
// Start/Stop, 
// Initialize Preset Shapes]

import React from "react"
import ProgressButton from './ProgressButton.js'
import ResetButton from './ResetButton.js'
import SetIntervalButton from './SetIntervalButton.js'
import { control_styles, progressBtn_styles } from './controls[inliners]/control_wrapper'

const Controls = ({nextBuffer, reset, startProgress}) => {

    return (
        <>
            <div 
                style={control_styles}
            >
                <ProgressButton 
                    style={progressBtn_styles}
                    nextBuffer={nextBuffer} 
                />
                <ResetButton
                    reset={reset}
                />
                <SetIntervalButton
                    startProgress={startProgress}
                />
            </div>
        </>
    )
}

export default Controls;