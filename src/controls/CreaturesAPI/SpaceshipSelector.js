// A dropdown menu for selecting Oscillators to populate grid[current]
import React, { useState, useEffect } from 'react'
// styled
import * as S from './MyStyle'

const SpaceshipSelector = ({selectionAPI, placementAPI, options}) => {

    const {select, selected} = selectionAPI
    const {placeSelection, placement} = placementAPI
    const {optionActive, setOptionActive} = options
    const [showSpaceships, setShowSpaceships] = useState(false)

    const parseSelection = ev => {

        toggleSpaceshipsDisplay()
        let newSelection = {
            type: 'ss',
            lifeform: ev.target.name
        }
        select(newSelection)
        placeSelection()
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
                onClick={
                    !placement ? toggleSpaceshipsDisplay : null
                }
                >Spaceship</S.SelectButton>

                <S.SpaceshipsCont style={visible}>
                    <S.OptionButton
                    style={visible}
                    name='glider'
                    onClick={parseSelection}
                    >
                        Glider
                    </S.OptionButton>
                    <S.OptionButton
                    style={visible}
                    name='lwss'
                    onClick={parseSelection}
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