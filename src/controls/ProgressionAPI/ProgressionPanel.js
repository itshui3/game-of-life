// top Level component for generational progression stuff
import React from 'react'
// start/stop panel
import Next from './Next.js'
import Reset from './Reset.js'
import Progress from './Progress.js'
// styles
import * as S from './MyStyles'

const ProgressionPanel = ({progressAPI}) => {

    const { nextBuffer, current, reset, startProgress, progress } = progressAPI

    return (
        <>
            <S.ProgressionPanel>
                <Next
                    nextBuffer={nextBuffer} 
                    current={current}
                />
                <Reset
                    reset={reset}
                />
                <Progress
                    startProgress={startProgress}
                    progress={progress}
                />
            </S.ProgressionPanel>
        </>
    )
}

export default ProgressionPanel