// A dropdown menu for selecting terraforms to populate grid[current]
import React, { useState, useEffect } from 'react'
// styled
import * as S from './MyStyle'

const TerraformSelector = ({selectionAPI, options}) => {

    const {select, selected} = selectionAPI
    const {optionActive, setOptionActive} = options
    const [showTerraforms, setShowTerraforms] = useState(false)
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
                onClick={toggleTerraformsDisplay}
                >Terraform</S.SelectButton>


                <S.TerraformsCont style={visible}>
                    <S.OptionButton
                    style={visible}
                    >
                        30 x 30 Grid
                    </S.OptionButton>
                </S.TerraformsCont>

                {/* <select 
                id='terraform' 
                onChange={parseSelection} 
                value={renderSelection}>
                    <option value='none'>None</option>
                    <option value='grid_30x30'>30 x 30 Grid</option>
                </select> */}
            </S.SelectorCont>

        </>
    )
}

export default TerraformSelector