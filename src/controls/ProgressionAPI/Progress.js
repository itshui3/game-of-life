// SetIntervalButton.js
// button that progresses generations on interval
import React from 'react'

import * as S from './MyStyles'

const Progress = ({startProgress}) => {

    return (
        <>
            <S.ButtonWrapper>
                <S.Letter 
                    onClick={ startProgress }
                >P</S.Letter>
                <div>
                    <S.Word>r</S.Word>
                    <S.Word>o</S.Word>
                    <S.Word>g</S.Word>
                    <S.Word>r</S.Word>
                    <S.Word>e</S.Word>
                    <S.Word>s</S.Word>
                    <S.Word>s</S.Word>
                </div>
            </S.ButtonWrapper>


        </>
    )
}

export default Progress