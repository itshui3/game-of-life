// CreaturesPanel is the entrypoint for all things creatures related
// It can also be thought of as the overarching controller element for creaturesAPI
import React, { useState } from 'react'

// Selectors
import OscillatorSelector from './OscillatorSelector.js'
import SpaceshipSelector from './SpaceshipSelector.js'
import TerraformSelector from './TerraformSelector.js'
// Creature Factory/Recycling
import CreatureFactory from './CreatureFactory.js'
// Styles
import * as S from './MyStyle'

const CreaturesPanel = ({ selectionAPI, placementAPI}) => {

    const [optionActive, setOptionActive] = useState(false)

    return (
        <>
            <S.CreaturesWrapper>

                <S.CreaturesPanel>

                    <OscillatorSelector 
                    selectionAPI={selectionAPI} 
                    options={{setOptionActive, optionActive}}
                    />

                    <SpaceshipSelector 
                    selectionAPI={selectionAPI} 
                    options={{setOptionActive, optionActive}}
                    />

                    <TerraformSelector
                    selectionAPI={selectionAPI} 
                    options={{setOptionActive, optionActive}}
                    />

                </S.CreaturesPanel>

                <CreatureFactory placementAPI={placementAPI} />
                
            </S.CreaturesWrapper>
        </>
    )
}

export default CreaturesPanel