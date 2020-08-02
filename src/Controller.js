// Controller
// top level component
// has all the things
// bigCompo2020
import React from 'react';
// 2nd level components
import CharCont from './CharCont.js'
import Canvas from './Canvas.js'
import Controls from './controls/Controls'
// hooks
import { useCustomGrid } from './hooks'
// style
import * as S from './MyStyle'

const rows = 35
const cols = 35

const Controller = () => {
    // swapNextBuffer only used on this level, try to 'hide' it behind progression/nextGen
    const [
        // grid
        currentGrid,
        clickCell,
        // progression
        nextBuffer,
        startProgress, 
        reset,
        // presetCreatures
        placement,
        select,
        selected,
        placeSelection
    ] = useCustomGrid(rows, cols)

    return (
        <>
            <S.ControllerWrapper>

                <CharCont />
                <Canvas
                grid={currentGrid}
                clickCell={clickCell}
                />
                <Controls
                // grid
                progressAPI={ {nextBuffer, reset, startProgress} }
                // creature
                placementAPI={ {placement, placeSelection} }
                selectionAPI={ {select, selected} }
                />

            </S.ControllerWrapper>

            <div>
                RIP Conway, it was because of you that we are getting all the jobs. All the jobs are really your jobs. 
            </div>
        </>
    )
}

export default Controller