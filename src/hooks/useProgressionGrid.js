import { useState, useEffect, useCallback } from 'react'
import { useGrid } from '.'

const useProgressionGrid = (rows, cols) => {
    const [grid, setGrid, current, swapNextBuffer, only_reset, lifeSwitch] = useGrid(rows, cols)

    const [progress, setProgress] = useState(false)
    const [stopper, setStopper] = useState({})

// quite a bit of lag here
    useEffect(() => {
        if (progress !== true) { return }

        let continueProgress = true

        // stopProgress: grants access for continueProgress to state
        function stopProgress() {
            continueProgress = !continueProgress
            setStopper({})
            setProgress(false)
        }

        setStopper({
            stop: stopProgress
        })

        function reProgress(current) {
            if (!continueProgress) { return }
    // Problem[#01] calculate timeout and adjust recurses on timeout basis
    // Stretch: Allow user to designate timeout, normalize to the user's set time
            let cur = current
            setTimeout(() => reProgress(cur), 200)
            swapNextBuffer(cur)
            switch (cur) {
                case '1':
                    cur = '2'
                    break
                case '2':
                    cur = '1'
                    break
                default:
                    console.log('cur is neither 1 or 2 somehow')
            }
        }
        reProgress(current)

    }, [progress])

    const nextBuffer = useCallback(
        () => {
            if (!progress) { swapNextBuffer(current) }
            else { console.log('cannot manually progress to the next generation while automatically progressing generations')}
        },
        [progress, current]
    )

    const reset = useCallback(
        () => {
            if ( !(Object.entries(stopper).length === 0) ) {
                stopper.stop()
            }
            return only_reset()
        },
        [stopper, only_reset]
    )

    return [
        // grid
        grid, 
        setGrid,
        current, 
        lifeSwitch, 
        // progression
        nextBuffer, 
        reset, 
        progress, 
        setProgress, 
        stopper
    ]
}

export { useProgressionGrid }