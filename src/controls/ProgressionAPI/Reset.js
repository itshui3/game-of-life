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
                >Reset</S.Letter>

            </S.ButtonWrapper>
        </>
    )
}

export default Reset;