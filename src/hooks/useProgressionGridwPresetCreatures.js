import { useState, useCallback } from 'react'
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

    // assigns a creature to be placed
    // this allows the next click on a cell to populate with a creature
    const select = useCallback(
        (selection) => {
            setSelected(selection)
        },
        []
    )

    // puts grid in a state of 'awaiting creature'
    // this means clicking a cell will not switchLife between [alive, dead]
    const placeSelection = useCallback(
        () => {
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
        },
        [selected, progress, placement]
    )

    function generateCreatureAtCoords(creature, coords) {
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