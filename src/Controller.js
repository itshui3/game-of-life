// Controller
// Cols/Rows Config
// Grid State
// [ToDo] Two-Buffers
// [ToDo] Buffer Swap Logic
// First-Step: A better first step may be to develop an on-click next mechanism that progresses generations

import React, { useState, useEffect } from 'react';
import Canvas from './Canvas.js'
import Controls from './controls/Controls'
import { useBufferSystem } from './hooks/useBufferSystem.js'

const Controller = (props) => {
    const [grid, current, lifeSwitch, nextBuffer, reset, startProgress, placeCreature, placement, generateCreatureAtCoords] = useBufferSystem(25, 25)

    // generateCreatureAtCoords( creature, coords )
    // creature - object with properties of 'type' and 'lifeform'
    // coords [x, y]

    // I can get coords from Cell
    // I can get creature info from creature Controls Panel
    const [selected, setSelected] = useState({
        type: '',
        lifeform: 'none'
    })

// places a creature in stateQueue
    const select = (selection) => {
        setSelected(selection)
    }
// changes state to be 'placing creature'
    const placeSelection = () => {
        if (selected['lifeform'] !== 'none') {
            placeCreature()
        }
    }

    const feedCreatureCoords = (coords) => {
        if (!placement) { return }
        if (selected['lifeform'] === 'none') { return }
        console.log('in feedCreatureCoords', selected['lifeform'])
        generateCreatureAtCoords(selected, coords)
    }

    return (
        <>
            <div 
                // className='gol-wrapper'
                // style={{display: 'flex', flexDirection: 'column'}}
            >

                <Canvas 
                grid={grid[current]} 
                lifeSwitch={lifeSwitch} 
                feedCreatureCoords={feedCreatureCoords}
                />
                <Controls 
                // grid
                nextBuffer={nextBuffer} 
                reset={reset} 
                startProgress={startProgress}
                // creature
                placement={placement}
                select={select}
                selected={selected}
                placeSelection={placeSelection}
                />

            </div>
        </>
    )
}

export default Controller