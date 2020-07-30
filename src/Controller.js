// Controller
// top level component
// has all the things
// bigCompo2020
import React from 'react';
// 2nd level components
import Canvas from './Canvas.js'
import Controls from './controls/Controls'
// hooks
import { useCustomGrid } from './hooks'

const rows = 35
const cols = 35

const Controller = () => {
    // swapNextBuffer only used on this level, try to 'hide' it behind progression/nextGen
    const [
        // grid
        currentGrid,
        clickCell,
        // progression
        nextBuffer,
        startProgress, 
        reset,
        // presetCreatures
        placement,
        select,
        selected,
        placeSelection
    ] = useCustomGrid(rows, cols)

    return (
        <>
            <Canvas
            grid={currentGrid}
            clickCell={clickCell}
            />
            <Controls
            // grid
            progressAPI={ {nextBuffer, reset, startProgress} }
            // creature
            placementAPI={ {placement, placeSelection} }
            selectionAPI={ {select, selected} }
            />
        </>
    )
}

export default Controller