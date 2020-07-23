// Controller
// Cols/Rows Config
// Grid State
// [ToDo] Two-Buffers
// [ToDo] Buffer Swap Logic
// First-Step: A better first step may be to develop an on-click next mechanism that progresses generations

import React from 'react';
import Canvas from './Canvas.js'
import Controls from './controls/Controls'
import ErrorBoundary from './helpers/ErrorBoundary'
import { useBufferSystem } from './hooks/useBufferSystem.js'

const Controller = (props) => {
    const [grid, current, lifeSwitch, nextBuffer, reset, startProgress] = useBufferSystem(25, 25)
    return (
        <>
            <div 
                // className='gol-wrapper'
                // style={{display: 'flex', flexDirection: 'column'}}
            >
                <ErrorBoundary>
                    <Canvas grid={grid[current]} lifeSwitch={lifeSwitch} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Controls nextBuffer={nextBuffer} reset={reset} startProgress={startProgress} />
                </ErrorBoundary>
            </div>
        </>
    )
}

export default Controller