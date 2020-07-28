// Controller
// top level component
// has all the things
// bigCompo2020
import React, { useState, useEffect } from 'react';
// 2nd level components
import Canvas from './Canvas.js'
import Controls from './controls/Controls'
// hooks
import { useGrid, useSelection } from './hooks'
// assets
import Creatures from './assets/creatureModels'
// helpers
import { spawnCreature } from './helpers'

const rows = 25
const cols = 25

const Controller = (props) => {
    // swapNextBuffer only used on this level, try to 'hide' it behind progression/nextGen
    const [grid, setGrid, current, swapNextBuffer, only_reset, lifeSwitch] = useGrid(rows, cols)

    const [progress, setProgress] = useState(false)
    const [stopper, setStopper] = useState({})
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

        function reProgress(current) {
            if (!continueProgress) { return }
    // Problem[#01] calculate timeout and adjust recurses on timeout basis
    // Stretch: Allow user to designate timeout, normalize to the user's set time
            let cur = current
            setTimeout(() => reProgress(cur), 700)
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

// progression helpers
    const nextBuffer = () => {
        if (!progress) { swapNextBuffer(current) }
        else { console.log('cannot perform manual nextGen while progression occurring')}
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
    const reset = () => {
        if ( !(Object.entries(stopper).length === 0) ) {
            stopper.stop()
        }
        return only_reset()
    }

// creature placement helpers
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

    function generateCreatureAtCoords(creature, coords) {
// deps: [Creatures, grid, current, setGrid]
// Creatures - I can pull in from wherever I need
// 
        let creatureGrid

        if(creature['type'] === 'osc') {
            creatureGrid = Creatures['oscillators'][creature['lifeform']]
        } else if (creature['type'] === 'ss') {
            creatureGrid = Creatures['spaceships'][creature['lifeform']]
        }

        let creatureSpawnedGrid = spawnCreature(creatureGrid, grid[current], coords)
        if (!creatureSpawnedGrid) { return }

        setGrid({
            ...grid,
            [current]: creatureSpawnedGrid,
        })

    }

// justifiably could stay in controller.js
    const clickCell = (rowId, cellId) => {
        if (!placement && !progress) { return lifeSwitch(rowId, cellId) }
        if (placement) { 
            setPlacement(false)
            return generateCreatureAtCoords(selected, [rowId, cellId])
        }
    }

    const [selected, setSelected] = useSelection()

// places a creature in stateQueue
    const select = (selection) => {
        setSelected(selection)
    }
// changes state to be 'placing creature'
    const placeSelection = () => {
        if (selected['lifeform'] !== 'none') {
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
    }

    return (
        <>
            <Canvas
            grid={grid[current]}
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