// Controller
// top level component
// has all the things
// bigCompo2020
import React, { useState, useEffect } from 'react';
// 2nd level components
import Canvas from './Canvas.js'
import Controls from './controls/Controls'
// hooks
import { useProgressionGrid, useSelection } from './hooks'
// assets
import Creatures from './assets/creatureModels'
// helpers
import { spawnCreature } from './helpers'

const rows = 25
const cols = 25

const Controller = () => {
    // swapNextBuffer only used on this level, try to 'hide' it behind progression/nextGen
    const [
        grid, 
        setGrid,
        current, 
        nextBuffer, 
        reset, 
        progress, 
        setProgress, 
        lifeSwitch, 
        stopper
    ] = useProgressionGrid(rows, cols)
    const [placement, setPlacement] = useState(false)

// clickCell
// stays in controller
// dependencies: 
// placement
// progress
// setPlacement
// generateCreatureAtCoords
// selected
    const clickCell = (rowId, cellId) => {
        if (!placement && !progress) { return lifeSwitch(rowId, cellId) }
        if (placement) {
            setPlacement(false)
            return generateCreatureAtCoords(selected, [rowId, cellId])
        }
    }

// progressionAPI
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