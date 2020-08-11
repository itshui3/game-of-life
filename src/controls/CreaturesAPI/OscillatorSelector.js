// A dropdown menu for selecting Oscillators to populate grid[current]
import React, { useState, useEffect } from 'react'
// styled
import * as S from './MyStyle'

const OscillatorSelector = ({ selectionAPI, options }) => {

    const {select, selected} = selectionAPI
    const {optionActive, setOptionActive} = options
    const [showOscillators, setShowOscillators] = useState(false)
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

    const toggleOscillatorsDisplay = () => {
        if (showOscillators) { 
            setShowOscillators(false) 
            setOptionActive(false)
        }
        else if (!showOscillators && !optionActive) { 
            setShowOscillators(true) 
            setOptionActive(true)
        }
    }

    const visible = {
        visibility: !showOscillators ? 'collapse' : 'visible',
        zIndex: !showOscillators ? 0 : 2
        
    }

    return (
        <>
            <S.SelectorCont>
                <S.SelectButton
                onClick={toggleOscillatorsDisplay}
                >Oscillator</S.SelectButton>

                <S.OscillatorsCont style={visible}>
                    <S.OptionButton
                    style={visible}
                    >
                        Blinker
                    </S.OptionButton>
                    <S.OptionButton
                    style={visible}
                    >
                        Toad
                    </S.OptionButton>
                    <S.OptionButton
                    style={visible}
                    >
                        Beacon
                    </S.OptionButton>
                </S.OscillatorsCont>


                {/* <select 
                id = 'oscillators' 
                onChange={parseSelection} 
                value={renderSelection}>
                    <option value='none'>None</option>
                    <option value='blinker'>Blinker</option>
                    <option value='toad'>Toad</option>
                    <option value='beacon'>Beacon</option>
                </select> */}
            </S.SelectorCont>

        </>
    )
}

export default OscillatorSelector