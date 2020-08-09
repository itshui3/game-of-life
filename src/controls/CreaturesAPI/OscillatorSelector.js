// A dropdown menu for selecting Oscillators to populate grid[current]
import React, { useState, useEffect } from 'react'

const OscillatorSelector = ({ selectionAPI }) => {

    const {select, selected} = selectionAPI
    const [renderSelection, setRenderSelection] = useState('')

    useEffect(() => {
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
        select(newSelection)
    }

    return (
        <>
            <label htmlFor = 'oscillators'>Oscillator</label>

            <select id = 'oscillators' onChange={parseSelection} value={renderSelection}>
                <option value='none'>None</option>
                <option value='blinker'>Blinker</option>
                <option value='toad'>Toad</option>
                <option value='beacon'>Beacon</option>
            </select>

        </>
    )
}

export default OscillatorSelector