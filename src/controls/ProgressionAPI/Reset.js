//ResetButton
//Complete reset on grid

import React from "react"

import * as S from './MyStyles'

const Reset = ({reset}) => {

    return (
        <>
            <S.ButtonWrapper>
                <S.Letter 
                    onClick={ reset }
                >R</S.Letter>
                <div>
                    <S.Word>e</S.Word>
                    <S.Word>s</S.Word>
                    <S.Word>e</S.Word>
                    <S.Word>t</S.Word>
                </div>
            </S.ButtonWrapper>
        </>
    )
}

export default Reset;