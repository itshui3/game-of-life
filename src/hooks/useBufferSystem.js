import { useEffect, useState } from 'react'
import { useGrid } from './useGrid.js'
import { useProgress } from './useProgress.js'

const useBufferSystem = (cols, rows) => {
    const [grid, setGrid, current, setCurrent, swapNextBuffer, lifeSwitch] = useGrid(cols, rows)
    const [progress, setProgress, stopper, setStopper] = useProgress()
// creaturesAPI placement state
    const [placement, setPlacement] = useState(false)

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
            setTimeout(reProgress, 300)
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

// creaturesAPI - placeCreature
    const placeCreature = () => {
        if (progress) { console.log('cannot place creature during progression')}
        else {
            switch(placement) {
                case false:
                    setPlacement(true)
                    break
                case true:
                    setPlacement(false)
                    break
                default:
                    console.log('placement neither true nor false')
            }
        }
    }

    const startProgress = () => {
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
    }

    return [grid, current, lifeSwitch, nextBuffer, reset, startProgress, placeCreature, placement]
}

export { useBufferSystem }