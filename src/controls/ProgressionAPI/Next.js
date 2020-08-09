// ProgressButton
// Progresses to next generation

import React from "react"

import * as S from './MyStyles'

const Next = ({nextBuffer, current}) => {

    return (
        <>
            <S.ButtonWrapper>
                <S.Letter 
                    onClick={ () => nextBuffer(current) }
                >Step</S.Letter>
            </S.ButtonWrapper>


        </>
    )
}

export default Next;