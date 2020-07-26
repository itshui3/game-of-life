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

const CreaturesPanel = ({placeCreature, placement}) => {

    const [selected, setSelected] = useState({
        type: '',
        lifeform: 'none'
    })

    const select = (selection) => {
        setSelected(selection)
    }

    const placeSelection = () => {
        if (selected['lifeform'] !== 'none') {
            placeCreature()
        }
    }

    return (
        <>
            <OscillatorSelector select={select} selected={selected} />
            <SpaceshipSelector select={select} selected={selected} />
            <CreatureFactory placeSelection={placeSelection} placement={placement} />
            <CreatureCursor placement={placement} />
        </>
    )
}

export default CreaturesPanel