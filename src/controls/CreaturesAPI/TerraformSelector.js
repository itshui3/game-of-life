// A dropdown menu for selecting terraforms to populate grid[current]
import React, { useState, useEffect } from 'react'

const TerraformSelector = ({selectionAPI}) => {

    const {select, selected} = selectionAPI
    const [renderSelection, setRenderSelection] = useState('')
    
    useEffect(() => {
        if (selected.type === 'tf') {
            setRenderSelection(selected.lifeform)
        } else {
            setRenderSelection('none')
        }
    }, [selected['lifeform']])

    const parseSelection = ev => {
        let newSelection = {
            type: 'tf',
            lifeform: ev.target.value
        }
        select(newSelection)
    }

    return (
        <>
            <label htmlFor = 'terraforms'>Select a Terraform</label>

            <select 
            id='terraform' 
            onChange={parseSelection} 
            value={renderSelection}>
                <option value='none'>None</option>
                <option value='grid_30x30'>30 x 30 Grid</option>
            </select>
        </>
    )
}

export default TerraformSelector