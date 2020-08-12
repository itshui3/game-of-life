// A dropdown menu for selecting Oscillators to populate grid[current]
import React, { useState, useEffect } from 'react'
// styled
import * as S from './MyStyle'

const OscillatorSelector = ({ selectionAPI, placementAPI, options }) => {

    const {select, selected} = selectionAPI
    const {placeSelection, placement} = placementAPI
    const {optionActive, setOptionActive} = options
    const [showOscillators, setShowOscillators] = useState(false)

    const parseSelection = (ev) => {

        toggleOscillatorsDisplay()
        let newSelection = {
            type: 'osc',
            lifeform: ev.target.name
        }
        // select expects ^
        select(newSelection)
        placeSelection()
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
                onClick={
                    !placement ? toggleOscillatorsDisplay : null
                }
                >Oscillator</S.SelectButton>

                <S.OscillatorsCont style={visible}>
                    <S.OptionButton
                    style={visible}
                    name='blinker'
                    onClick={parseSelection}
                    >
                        Blinker
                    </S.OptionButton>
                    <S.OptionButton
                    style={visible}
                    name='toad'
                    onClick={parseSelection}
                    >
                        Toad
                    </S.OptionButton>
                    <S.OptionButton
                    style={visible}
                    name='beacon'
                    onClick={parseSelection}
                    >
                        Beacon
                    </S.OptionButton>
                </S.OscillatorsCont>

            </S.SelectorCont>

        </>
    )
}

export default OscillatorSelector