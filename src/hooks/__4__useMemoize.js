import { useCallback, useEffect, useRef } from 'react'

import { usePresetCreatures } from '.'

import { deepCompareGrids } from '../helpers'

const useMemoize = (rows, cols) => {
    const [
        // grid
        current,
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
    ] = usePresetCreatures(rows, cols)

    // const memoizedGrid = useRef(currentGrid)

    // useEffect(() => {
    //     // deepCompareGrids should perform a deep-comparison of the values within each grid
    //     if ( deepCompareGrids(currentGrid, memoizedGrid.current) ) { return }
    //     memoizedGrid.current = currentGrid

    // }, [currentGrid])

// why is clickCell changing? 
// [placement, progress, selected, lifeSwitch, generateCreatureAtCoords]
// checked:
// generateCreatureAtCoords
// lifeSwitch
// selected - I don't think this will change from lifeSwitch [might need some way to check]
// progress - I don't think this will change 
// placement - I don't think this will change
    const clickCell = useCallback(
        (rowId, cellId, current) => {
            if (!placement && !progress) { return lifeSwitch(rowId, cellId, current) }
            if (placement) {
                setPlacement(false)
                return generateCreatureAtCoords(selected, [rowId, cellId], current)
            }
        },
        [placement, progress, selected, lifeSwitch, generateCreatureAtCoords, setPlacement],

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
        [placement, progress, stopper, setProgress],
    )

    return [
        // grid
        // memoizedGrid.current,
        current,
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
    ]
}

export { useMemoize }