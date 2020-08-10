// A dropdown menu for selecting Oscillators to populate grid[current]
import React, { useState, useEffect } from 'react'
// styled
import * as S from './MyStyle'

const SpaceshipSelector = ({selectionAPI}) => {

    const {select, selected} = selectionAPI
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
            <S.SelectorCont>
                <S.SelectButton>Spaceship</S.SelectButton>

                <select 
                id='spaceships' 
                onChange={parseSelection} 
                value={renderSelection}>
                    <option value='none'>None</option>
                    <option value='glider'>Glider</option>
                    <option value='lwss'>Lightweight Spaceship</option>
                </select>
            </S.SelectorCont>

        </>
    )
}

export default SpaceshipSelector