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