// CreatureFactory 
// 1. checks that generations are not progressing
// 2. sets 'placement' state true
// 3. loads creature into state
import React from 'react'
// style
import * as S from './MyStyle'

const CreatureFactory = ({placementAPI}) => {

    // const { placeSelection, placement } = placementAPI

    return (
        <>
            <S.CreaturesHeader>
                <S.C>C</S.C>
                <S.r>r</S.r>
                <S.e>e</S.e>
                <S.a>a</S.a>
                <S.t>t</S.t>
                <S.u>u</S.u>
                <S.r>r</S.r>
                <S.e>e</S.e>
                <S.F>F</S.F>
                <S.a>a</S.a>
                <S.c>c</S.c>
                <S.t>t</S.t>
                <S.o>o</S.o>
                <S.r>r</S.r>
                <S.y>y</S.y>
            </S.CreaturesHeader>
        </>
    )
}

export default CreatureFactory