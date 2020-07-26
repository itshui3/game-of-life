// A dropdown menu for selecting Oscillators to populate grid[current]
import React, { useState, useEffect, useRef } from 'react'

const SpaceshipSelector = ({select, selected}) => {

    const [renderSelection, setRenderSelection] = useState('')
    useEffect(() => {
        if (selected.type === 'ss') {
            setRenderSelection(selected.lifeform)
        } else {
            setRenderSelection('none')
        }
    }, [selected['lifeform']])

    const parseSelection = ev => {
        let newSelection = {
            type: 'ss',
            lifeform: ev.target.value
        }
        select(newSelection)
    }

    return (
        <>
            <label htmlFor = 'spaceships'>Select a Spaceship</label>

            <select 
            id='spaceships' 
            onChange={parseSelection} 
            value={renderSelection}>
                <option value='none'>None</option>
                <option value='glider'>Glider</option>
                <option value='lwss'>Lightweight Spaceship</option>
            </select>
        </>
    )
}

export default SpaceshipSelector