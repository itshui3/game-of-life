// A dropdown menu for selecting Oscillators to populate grid[current]
import React, { useState, useEffect } from 'react'
// styled
import * as S from './MyStyle'

const SpaceshipSelector = ({selectionAPI, options}) => {

    const {select, selected} = selectionAPI
    const {optionActive, setOptionActive} = options
    const [showSpaceships, setShowSpaceships] = useState(false)
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

    const toggleSpaceshipsDisplay = () => {
        if (showSpaceships) { 
            setShowSpaceships(false) 
            setOptionActive(false)
        }
        else if (!showSpaceships && !optionActive) { 
            setShowSpaceships(true) 
            setOptionActive(true)
        }
    }

    const visible = {
        visibility: !showSpaceships ? 'collapse' : 'visible',
        zIndex: !showSpaceships ? 0 : 2
        
    }

    return (
        <>
            <S.SelectorCont>
                <S.SelectButton
                onClick={toggleSpaceshipsDisplay}
                >Spaceship</S.SelectButton>

                <S.SpaceshipsCont style={visible}>
                    <S.OptionButton
                    style={visible}
                    >
                        Glider
                    </S.OptionButton>
                    <S.OptionButton
                    style={visible}
                    >
                        Lightweight Spaceship
                    </S.OptionButton>

                </S.SpaceshipsCont>

                {/* <select 
                id='spaceships' 
                onChange={parseSelection} 
                value={renderSelection}>
                    <option value='none'>None</option>
                    <option value='glider'>Glider</option>
                    <option value='lwss'>Lightweight Spaceship</option>
                </select> */}
            </S.SelectorCont>

        </>
    )
}

export default SpaceshipSelector