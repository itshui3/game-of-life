// A dropdown menu for selecting terraforms to populate grid[current]
import React, { useState, useEffect } from 'react'
// styled
import * as S from './MyStyle'

const TerraformSelector = ({selectionAPI, placementAPI, options}) => {

    const {select, selected} = selectionAPI
    const {placeSelection, placement} = placementAPI
    const {optionActive, setOptionActive} = options
    const [showTerraforms, setShowTerraforms] = useState(false)

    const parseSelection = ev => {

        toggleTerraformsDisplay()
        let newSelection = {
            type: 'tf',
            lifeform: ev.target.name
        }
        select(newSelection)
        placeSelection()
    }

    const toggleTerraformsDisplay = () => {
        if (showTerraforms) { 
            setShowTerraforms(false) 
            setOptionActive(false)
        }
        else if (!showTerraforms && !optionActive) { 
            setShowTerraforms(true) 
            setOptionActive(true)
        }
    }

    const visible = {
        visibility: !showTerraforms ? 'collapse' : 'visible',
        zIndex: !showTerraforms ? 0 : 2
        
    }

    return (
        <>
            <S.SelectorCont>
                <S.SelectButton
                onClick={
                    !placement ? toggleTerraformsDisplay : null
                }
                >Terraform</S.SelectButton>


                <S.TerraformsCont style={visible}>
                    <S.OptionButton
                    style={visible}
                    name='grid_30x30'
                    onClick={parseSelection}
                    >
                        30 x 30 Grid
                    </S.OptionButton>
                </S.TerraformsCont>

            </S.SelectorCont>

        </>
    )
}

export default TerraformSelector