// Controls
// Container-Wrapper for Control Components: 
// [Progress Button, 
// Start/Stop, 
// Initialize Preset Shapes]

import React from "react"
// progression panel
import ProgressionPanel from './ProgressionAPI/ProgressionPanel.js'
// creatures panel
import CreaturesPanel from './CreaturesAPI/CreaturesPanel.js'

const Controls = ({progressAPI, selectionAPI, placementAPI}) => {

    return (
        <>
            <ProgressionPanel
            progressAPI={progressAPI}
            />

            <CreaturesPanel
            selectionAPI={selectionAPI}
            placementAPI={placementAPI}
            />
        </>
    )
}

export default Controls;