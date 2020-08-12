// CreatureFactory 
// 1. checks that generations are not progressing
// 2. sets 'placement' state true
// 3. loads creature into state
import React from 'react'
// style
import * as S from './MyStyle'

const CreatureFactory = ({placementAPI}) => {

    const { placeSelection, placement } = placementAPI

    return (
        <>
            <S.CreaturesHeader onClick={placeSelection} >{
            placement ? 'DisposeCreature' : 'CreatureFactory'
            }</S.CreaturesHeader>
        </>
    )
}

export default CreatureFactory