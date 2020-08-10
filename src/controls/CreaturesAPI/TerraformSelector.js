// A dropdown menu for selecting terraforms to populate grid[current]
import React, { useState, useEffect } from 'react'
// styled
import * as S from './MyStyle'

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
            <S.SelectorCont>
                <S.SelectButton>Terraform</S.SelectButton>

                <select 
                id='terraform' 
                onChange={parseSelection} 
                value={renderSelection}>
                    <option value='none'>None</option>
                    <option value='grid_30x30'>30 x 30 Grid</option>
                </select>
            </S.SelectorCont>

        </>
    )
}

export default TerraformSelector