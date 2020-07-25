// A dropdown menu for selecting Oscillators to populate grid[current]
import React, { useState, useEffect } from 'react'

const OscillatorSelector = ({select, selected}) => {

    const [renderSelection, setRenderSelection] = useState('')
    useEffect(() => {
        console.log('hello world', selected.lifeform)
        if (selected.type === 'osc') {
            setRenderSelection(selected.lifeform)
        } else {
            setRenderSelection('none')
        }
    }, [selected['lifeform']])

    const parseSelection = ev => {
        let newSelection = {
            type: 'osc',
            lifeform: ev.target.value
        }

        console.log('newSelection', newSelection)

        select(newSelection)
    }

    return (
        <>
            <label htmlFor = 'oscillators'>Select an Oscillator</label>

            <select id = 'oscillators' value={renderSelection} onChange={parseSelection} >
                <option value='none'>None</option>
                <option value='blinker'>Blinker</option>
                <option value='toad'>Toad</option>
                <option value='beacon'>Beacon</option>
            </select>

        </>
    )
}

export default OscillatorSelector