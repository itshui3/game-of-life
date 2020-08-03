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
                >N</S.Letter>
                <div>
                    <S.Word>e</S.Word>
                    <S.Word>x</S.Word>
                    <S.Word>t</S.Word>
                </div>
            </S.ButtonWrapper>


        </>
    )
}

export default Next;