import { useEffect } from 'react'
import { useGrid } from './useGrid.js'
import { useProgress } from './useProgress.js'

const useBufferSystem = (cols, rows) => {
    const [grid, setGrid, current, setCurrent, swapNextBuffer, lifeSwitch] = useGrid(cols, rows)
    const [progress, setProgress, startProgress, stopper, setStopper] = useProgress()

// progressEffect
    useEffect(() => {
        if (progress !== true) { return }

        let continueProgress = true

        function stopProgress() {
            continueProgress = !continueProgress
            setStopper({})
            setProgress(false)
        }

        setStopper({
            stop: stopProgress
        })

        let cur = current

        function reProgress() {
            if (!continueProgress) { return }
// Problem[#01] calculate timeout and adjust recurses on timeout basis
// Stretch: Allow user to designate timeout, normalize to the user's set time
            let timeout
            setTimeout(reProgress, 1000)
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
        reProgress()

    }, [progress])

    const nextBuffer = () => {
        if (!progress) { swapNextBuffer(current) }
        else { console.log('cannot perform manual nextGen while progression occurring')}
    }

    const reset = () => {
        if ( !(Object.entries(stopper).length === 0) ) { stopper.stop() }
        
        let grid = {
            '1': [],
            '2': []
        }

        let row = []
        for (let i = 0; i < cols; i++) {
            row.push(0)
        }

        for (let i = 0; i < rows; i++) { grid['1'].push(row) }
        for (let i = 0; i < rows; i++) { grid['2'].push(row) }

        setGrid(grid)
        setCurrent('1')

    }

    return [grid, current, lifeSwitch, nextBuffer, reset, startProgress]
}

export { useBufferSystem }