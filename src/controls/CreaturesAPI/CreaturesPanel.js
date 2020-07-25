// CreaturesPanel is the entrypoint for all things creatures related
// It can also be thought of as the overarching controller element for creaturesAPI
import React, { useState } from 'react'

// Selectors
import OscillatorSelector from './OscillatorSelector.js'
import SpaceshipSelector from './SpaceshipSelector.js'

const CreaturesPanel = () => {

    const [selected, setSelected] = useState({
        type: '',
        lifeform: ''
    })

    const select = (selection) => {
        console.log('selected', selection)
        setSelected(selection)
    }

    return (
        <>
            <OscillatorSelector select={select} selected={selected} />
            <SpaceshipSelector select={select} selected={selected} />
        </>
    )
}

export default CreaturesPanel