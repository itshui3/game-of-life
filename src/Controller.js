// Controller
// top level component
// has all the things
// bigCompo2020
import React, { useRef, useEffect } from 'react';
// 2nd level components
import CharCont from './CharCont.js'
import Canvas from './Canvas.js'
import Controls from './controls/Controls'
// hooks
import { useCustomGrid } from './hooks'
// style
import * as S from './MyStyle'

const rows = 30
const cols = 30

const Controller = () => {
    // swapNextBuffer only used on this level, try to 'hide' it behind progression/nextGen
    const [
        // grid
        current,
        currentGrid,
        clickCell,
        // progression
        progress,
        nextBuffer,
        startProgress, 
        reset,
        // presetCreatures
        placement,
        select,
        selected,
        placeSelection
    ] = useCustomGrid(rows, cols)

    const curRef = useRef({value: current})
    const curProg = useRef({value: progress})
    const curPlac = useRef({value: placement})
    const curSel = useRef({value: selected})
    const refsAPI = useRef({
        current: curRef.current, 
        progress: curProg.current, 
        placement: curPlac.current,
        selected: curSel.current })

    useEffect(() => {
        if ( curProg.current.value !== progress ) {
            curProg.current.value = progress
        }
    }, [progress])

    useEffect(() => {
        if ( curRef.current.value !== current ) {
            curRef.current.value = current
        }
    }, [current])

    useEffect(() => {
        if ( curPlac.current.value !== placement ) {
            curPlac.current.value = placement
        }
    }, [placement])

    useEffect(() => {
        if ( curSel.current.value !== selected ) {
            curSel.current.value = selected
        }
    }, [selected])

    return (
        <>
            <S.ControllerWrapper>

                <CharCont />
                <Canvas
                grid={currentGrid}
                clickCell={clickCell}
                refsAPI={ refsAPI }
                />
                <Controls
                // grid
                progressAPI={ {nextBuffer, current, reset, startProgress} }
                // creature
                placementAPI={ {placement, placeSelection} }
                selectionAPI={ {select, selected} }
                />

            </S.ControllerWrapper>

            <div>
                RIP Conway, it is because of you that we are getting the jobs. All the jobs are your jobs. 
            </div>
        </>
    )
}

export default Controller