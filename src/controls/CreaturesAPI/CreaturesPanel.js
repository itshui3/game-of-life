// CreaturesPanel is the entrypoint for all things creatures related
// It can also be thought of as the overarching controller element for creaturesAPI
import React from 'react'

// Selectors
import OscillatorSelector from './OscillatorSelector.js'
import SpaceshipSelector from './SpaceshipSelector.js'
import TerraformSelector from './TerraformSelector.js'
// Creature Factory/Recycling
import CreatureFactory from './CreatureFactory.js'
// Styles
import * as S from './MyStyle'

const CreaturesPanel = ({ selectionAPI, placementAPI}) => {

    return (
        <>
            <S.CreaturesWrapper>

                <CreatureFactory placementAPI={placementAPI} />

                <S.CreaturesPanel>

                    <OscillatorSelector 
                    selectionAPI={selectionAPI} />

                    <SpaceshipSelector 
                    selectionAPI={selectionAPI} />

                    <TerraformSelector
                    selectionAPI={selectionAPI} />

                </S.CreaturesPanel>
                
            </S.CreaturesWrapper>
        </>
    )
}

export default CreaturesPanel