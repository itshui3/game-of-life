// top Level component for generational progression stuff
import React from 'react'
// start/stop panel
import ProgressButton from './ProgressButton.js'
import ResetButton from './ResetButton.js'
import SetIntervalButton from './SetIntervalButton.js'
// styles
import * as S from './MyStyles'

const ProgressionPanel = ({progressAPI}) => {

    const { nextBuffer, reset, startProgress } = progressAPI

    return (
        <>
            <S.ProgressionPanel>
                <ProgressButton
                    nextBuffer={nextBuffer} 
                />
                <ResetButton
                    reset={reset}
                />
                <SetIntervalButton
                    startProgress={startProgress}
                />
            </S.ProgressionPanel>
        </>
    )
}

export default ProgressionPanel