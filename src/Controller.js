// Controller
// top level component
// has all the things
// bigCompo2020
import React, { useCallback } from 'react';
// 2nd level components
import Canvas from './Canvas.js'
import Controls from './controls/Controls'
// hooks
import { useProgressionGridwPresetCreatures } from './hooks'

const rows = 35
const cols = 35

const Controller = () => {
    // swapNextBuffer only used on this level, try to 'hide' it behind progression/nextGen
    const [
        // grid
        currentGrid,
        lifeSwitch,
        // progression
        nextBuffer,
        progress,
        setProgress,
        reset,
        stopper,
        // presetCreatures
        placement,
        setPlacement,
        select,
        selected,
        placeSelection,
        generateCreatureAtCoords,
    ] = useProgressionGridwPresetCreatures(rows, cols)

    const clickCell = useCallback(
        (rowId, cellId) => {
            if (!placement && !progress) { return lifeSwitch(rowId, cellId) }
            if (placement) {
                setPlacement(false)
                return generateCreatureAtCoords(selected, [rowId, cellId])
            }
        },
        [placement, progress, selected, lifeSwitch, generateCreatureAtCoords],
    )

    const startProgress = useCallback(
        () => {
            if (placement) {
                console.log('cannot progress while creatureFactory generating lifeform')
                return
            }
            switch (progress) {
                case false:
                    setProgress(true)
                    break
                default:
                    if ( !(Object.entries(stopper).length === 0) ) {
                        stopper.stop()
                    }
            }
        },
        [placement, progress, stopper],
    )

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