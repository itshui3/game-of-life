// Controls
// Container-Wrapper for Control Components: 
// [Progress Button, 
// Start/Stop, 
// Initialize Preset Shapes]

import React from "react"
// inline styles
import { control_styles, progressBtn_styles } from './controls[inliners]/control_wrapper'
// start/stop panel
import ProgressButton from './ProgressButton.js'
import ResetButton from './ResetButton.js'
import SetIntervalButton from './SetIntervalButton.js'
// creatures panel
import CreaturesPanel from './CreaturesAPI/CreaturesPanel.js'

const Controls = ({nextBuffer, reset, startProgress, placeCreature, placement}) => {

    return (
        <>
            <div style={control_styles}>
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
            <div style={control_styles} >
                <CreaturesPanel placeCreature={placeCreature} placement={placement} />
            </div>
        </>
    )
}

export default Controls;