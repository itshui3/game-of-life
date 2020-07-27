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

const Controls = ({nextBuffer, reset, startProgress, placeCreature, placement, select, placeSelection, selected}) => {

    return (
        <>
            <ProgressionPanel 
            nextBuffer={nextBuffer}
            reset={reset}
            startProgress={startProgress}
            />

            <CreaturesPanel 
            placeCreature={placeCreature} 
            placement={placement} 
            select={select}
            placeSelection={placeSelection}
            selected={selected}
            />
        </>
    )
}

export default Controls;