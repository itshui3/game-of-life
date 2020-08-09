// SetIntervalButton.js
// button that progresses generations on interval
import React from 'react'

import * as S from './MyStyles'

const Progress = ({startProgress, progress}) => {

    React.useEffect(() => {
        console.log('progress in prog button', progress)
    }, [progress])

    return (
        <>
            <S.ButtonWrapper>
                <S.Letter 
                    onClick={ startProgress }
                >{
                    progress
                    ? 'Stop'
                    : 'Start'
                }</S.Letter>

            </S.ButtonWrapper>


        </>
    )
}

export default Progress