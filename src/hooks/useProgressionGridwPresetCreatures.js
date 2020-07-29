import { useState } from 'react'
import { useProgressionGrid, useSelection } from '.'

import Creatures from '../assets/creatureModels'

import { spawnCreature } from '../helpers'

const useProgressionGridwPresetCreatures = (rows, cols) => {
    const [
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
    ] = useProgressionGrid(rows, cols)
    const [selected, setSelected] = useSelection()
    const [placement, setPlacement] = useState(false)
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

    function generateCreatureAtCoords(creature, coords) {
        // closure-deps: [Creatures, grid, current, setGrid]
        // Creatures - I can pull in from wherever I need
        // grid
        // current
        // setGrid
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


    return [
        // grid
        grid[current],
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
    ]
}

export { useProgressionGridwPresetCreatures }