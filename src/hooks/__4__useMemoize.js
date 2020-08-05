import { useCallback } from 'react'

import { usePresetCreatures } from '.'

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

// dependent on progress
    const clickCell = useCallback(
        (rowId, cellId, current, progress, placement, selected) => {
            if (!placement && !progress) { return lifeSwitch(rowId, cellId, current) }
            if (placement) {
                setPlacement(false)
                return generateCreatureAtCoords(selected, [rowId, cellId], current)
            }
        },
        [lifeSwitch, generateCreatureAtCoords, setPlacement],

    )

// this causes ClickCell to change [and possibly some hooks(?)]
// things it could affect: 
// sets progress to true if grid not moving
// calls stopper.stop() if grid moving
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
        progress,
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