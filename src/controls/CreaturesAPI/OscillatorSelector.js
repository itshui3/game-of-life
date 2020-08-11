// A dropdown menu for selecting Oscillators to populate grid[current]
import React, { useState, useEffect } from 'react'
// styled
import * as S from './MyStyle'

const OscillatorSelector = ({ selectionAPI }) => {

    const [renderSelection, setRenderSelection] = useState('')
    const [choiceDrop, setChoiceDrop] = useState(false)
    const {select, selected} = selectionAPI

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
        // select expects ^
        select(newSelection)
    }

    const showChoices = (ev) => {
        setChoiceDrop(true)
    }

    const hideChoices = (ev) => {
        setChoiceDrop(false)
    }

    return (
        <>
            <S.SelectorCont>
                <S.SelectButton
                onClick={showChoices}
                onBlur={hideChoices}
                >Oscillator</S.SelectButton>
                {/* 
                    1] Expect OnClick to show dropup options 
                    2] Expect onBlur to hide dropup options
                    3] Expect DropUp options to exceed bottom panel bounds
                    4] Expect DropUp options to have z-index priority
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