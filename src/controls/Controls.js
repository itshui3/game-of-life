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
// styles
import * as S from './MyStyle'

const Controls = ({progressAPI, selectionAPI, placementAPI}) => {

    return (
        <>
            <S.ControlPanel>

                <ProgressionPanel
                progressAPI={progressAPI}
                />
                <CreaturesPanel
                selectionAPI={selectionAPI}
                placementAPI={placementAPI}
                />
                
            </S.ControlPanel>
        </>
    )
}

export default Controls;