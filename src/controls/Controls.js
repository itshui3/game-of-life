// Controls
// Container-Wrapper for Control Components: 
// [Progress Button, 
// Start/Stop, 
// Initialize Preset Shapes]

import React from "react"
import ProgressButton from './ProgressButton.js'
import ResetButton from './ResetButton.js'
import SetIntervalButton from './SetIntervalButton.js'
import './controls.css'
import { control_styles } from './controls[inliners]/control_wrapper'

const Controls = ({nextBuffer, reset, startProgress, cur}) => {

    return (
        <>
            <div 
                className='controls-wrapper'
                style={control_styles}
            >
                <ProgressButton 
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