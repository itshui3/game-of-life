// top Level component for generational progression stuff
import React from 'react'
// inline styles
import { control_styles, progressBtn_styles } from '../controls[inliners]/control_wrapper'
// start/stop panel
import ProgressButton from './ProgressButton.js'
import ResetButton from './ResetButton.js'
import SetIntervalButton from './SetIntervalButton.js'

const ProgressionPanel = ({nextBuffer, reset, startProgress}) => {

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
        </>
    )
}

export default ProgressionPanel