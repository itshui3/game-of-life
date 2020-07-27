// CreatureFactory 
// 1. checks that generations are not progressing
// 2. sets 'placement' state true
// 3. loads creature into state
import React from 'react'

const CreatureFactory = ({placeSelection, placement}) => {

    return (
        <>
            <button onClick={placeSelection} >{
            placement ? 'DisposeCreature' : 'CreatureFactory'
            }</button>
        </>
    )
}

export default CreatureFactory