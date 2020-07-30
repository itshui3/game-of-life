import { useCallback, useEffect, useRef } from 'react'

import { usePresetCreatures } from '.'

import { deepCompareGrids } from '../helpers'

const useMemoize = (rows, cols) => {
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
    ] = usePresetCreatures(rows, cols)

    const memoizedGrid = useRef(currentGrid)

    useEffect(() => {
        // deepCompareGrids should perform a deep-comparison of the values within each grid
        if ( deepCompareGrids(currentGrid, memoizedGrid.current) ) { return }
        memoizedGrid.current = currentGrid

    }, [currentGrid])

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

    return [
        // grid
        memoizedGrid.current,
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