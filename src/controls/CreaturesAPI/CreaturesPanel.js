// CreaturesPanel is the entrypoint for all things creatures related
// It can also be thought of as the overarching controller element for creaturesAPI
import React, { useState } from 'react'

// Selectors
import OscillatorSelector from './OscillatorSelector.js'
import SpaceshipSelector from './SpaceshipSelector.js'
// Creature Factory/Recycling
import CreatureFactory from './CreatureFactory.js'
// Cursor-fixed image
import CreatureCursor from './CreatureCursor.js'
// inline styles
import { control_styles } from '../controls[inliners]/control_wrapper'

const CreaturesPanel = ({placement, select, placeSelection, selected}) => {

    return (
        <>
            <div style={control_styles}>
                <OscillatorSelector 
                select={select} 
                selected={selected} />

                <SpaceshipSelector 
                select={select} 
                selected={selected} />

                <CreatureFactory 
                placeSelection={placeSelection} 
                placement={placement} />
            </div>
        </>
    )
}

export default CreaturesPanel