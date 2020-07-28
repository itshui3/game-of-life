// CreaturesPanel is the entrypoint for all things creatures related
// It can also be thought of as the overarching controller element for creaturesAPI
import React from 'react'

// Selectors
import OscillatorSelector from './OscillatorSelector.js'
import SpaceshipSelector from './SpaceshipSelector.js'
// Creature Factory/Recycling
import CreatureFactory from './CreatureFactory.js'
// Cursor-fixed image
import CreatureCursor from './CreatureCursor.js'
// inline styles
import { control_styles } from '../controls[inliners]/control_wrapper'

const CreaturesPanel = ({ selectionAPI, placementAPI}) => {

    return (
        <>
            <div style={control_styles}>
                <OscillatorSelector 
                selectionAPI={selectionAPI} />

                <SpaceshipSelector 
                selectionAPI={selectionAPI} />

                <CreatureFactory 
                placementAPI={placementAPI} />
            </div>
        </>
    )
}

export default CreaturesPanel