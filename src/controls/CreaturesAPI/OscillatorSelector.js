// A dropdown menu for selecting Oscillators to populate grid[current]
import React, { useState, useEffect } from 'react'
// styled
import * as S from './MyStyle'

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
            <S.SelectorCont>
                <S.SelectButton>Oscillator</S.SelectButton>
                {/* 
                    1] Expect OnClick to dropdown options 
                    2] 
                */}

                <select 
                id = 'oscillators' 
                onChange={parseSelection} 
                value={renderSelection}>
                    <option value='none'>None</option>
                    <option value='blinker'>Blinker</option>
                    <option value='toad'>Toad</option>
                    <option value='beacon'>Beacon</option>
                </select>
            </S.SelectorCont>

        </>
    )
}

export default OscillatorSelector