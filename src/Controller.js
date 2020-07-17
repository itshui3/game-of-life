// Controller
// Cols/Rows Config
// Grid State
// [ToDo] Two-Buffers
// [ToDo] Buffer Swap Logic
// First-Step: A better first step may be to develop an on-click next mechanism that progresses generations

import React, { useState, useEffect } from "react";
import Canvas from "./Canvas.js"
import Controls from './controls/Controls'
import ErrorBoundary from './helpers/ErrorBoundary'
import { detectNeighbors, resolveNextGen } from './helpers'

const Controller = (props) => {
    // cols and rows logic mixed up
    // build based on innerWidth/innerHeight of window
    const [cols, setCols] = useState(20)
    const [rows, setRows] = useState(20)
    // why does htis break if I take out the curly brackets? 
    const [grid, setGrid] = useState(() => {
        let generatedGrid = {
            '1': [],
            '2': []
        }

        let row = []
        for (let i = 0; i < cols; i++) {
            // if (i % 2 === 0) { row.push(1) } 
            // else { row.push(0) }
            row.push(0)
        }

        for (let i = 0; i < rows; i++) { generatedGrid['1'].push(row) }
        for (let i = 0; i < rows; i++) { generatedGrid['2'].push(row) }

        return generatedGrid
    })
    const [current, setCurrent] = useState(grid['1'])

        // bufferSwapEffect: activates when current is changed
    useEffect(() => {
        if (!Object.keys(grid).length) { return }
        let curGrid
        let nextGrid
        if (current === grid['1']) { 
            curGrid = '1'
            nextGrid = '2' 
        }
        if (current === grid['2']) { 
            curGrid = '2'
            nextGrid = '1' 
        }

        let nCountedGrid = detectNeighbors(grid[curGrid])
        let nextGenGrid = resolveNextGen(current, nCountedGrid)

        setGrid({
            ...grid,
            [nextGrid]: nextGenGrid
        })
        // cases:
        // 1] swapNextBuffer
        // 2] lifeSwitch
        // 3] reset
    }, [current])

    const swapNextBuffer = () => {
// swaps out current with the other buffer
// currently only works onClick of nextGen[actually not even]
        switch(current) {
            case grid['1']:
                setCurrent(grid['2'])
                break;
            case grid['2']:
                setCurrent(grid['1'])
                break;

            default:
                console.log('current reference did not match grids 1 or 2\nCurrent: ', current)
        }
    }

    const lifeSwitch = (rowId, cellId) => {
// modifies a single cell in a grid to the opposite state of living/dead
// how can I simplify this logic for readability? 

        let switchedCell

        if (current[rowId][cellId] === 1) { switchedCell = 0 }
        else if (current[rowId][cellId] === 0) { switchedCell = 1 }

        let preSlice = current.slice(0, rowId)
        let modRow = current[rowId].slice(0, cellId).concat([switchedCell].concat(current[rowId].slice(cellId + 1)))
        let postSlice = current.slice(rowId + 1)
        preSlice.push(modRow)

        let newGrid = preSlice.concat(postSlice)

        let griddex
        if (current === grid['1']) { griddex = '1' }
        else if (current === grid['2']) { griddex = '2' }
        // setCurrent(newGrid)
        setGrid({
            ...grid,
            [griddex]: newGrid
        })
        setCurrent(newGrid)

    }

    const reset = () => {

        let grid = {
            '1': [],
            '2': []
        }

        let row = []
        for (let i = 0; i < cols; i++) {
            // if (i % 2 === 0) { row.push(1) } 
            // else { row.push(0) }
            row.push(0)
        }

        for (let i = 0; i < rows; i++) { grid['1'].push(row) }
        for (let i = 0; i < rows; i++) { grid['2'].push(row) }

        setGrid(grid)
        setCurrent(grid['1'])

    }
    // [ToDo: Write a custom hook that encorporates swapNextBuffer as a method returned by the useBuffer hook]

    return (
        <>
            <div 
                className='gol-wrapper'
                style={{display: 'flex', flexDirection: 'column'}}
            >
                <ErrorBoundary>
                    <Canvas grid={current} lifeSwitch={lifeSwitch} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Controls swapNextBuffer={swapNextBuffer} reset={reset} />
                </ErrorBoundary>
            </div>
        </>
    )
}

export default Controller