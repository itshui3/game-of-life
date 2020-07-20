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

const Controls = ({swapNextBuffer, reset, startProgress, cur}) => {

    return (
        <>
            <div 
                className='controls-wrapper'
                style={control_styles}
            >
                <ProgressButton 
                    swapNextBuffer={swapNextBuffer} 
                    cur={cur}
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