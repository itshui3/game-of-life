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
    const [cols, setCols] = useState(15)
    const [rows, setRows] = useState(15)
    // why does htis break if I take out the curly brackets? 
    const [grid, setGrid] = useState({})

    useEffect(() => {
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

        setGrid(generatedGrid)
    }, [cols, rows])
    // [ToDo: Write a custom hook to extrapolate grid building logic. useGrid will intake cols/rows and build a grid]

    // current is passed down to grid Components for rendering
    const [current, setCurrent] = useState()

    useEffect(() => { 
        setCurrent(grid['1']) 
    }, [grid])

    // define a function that swaps out current
    const swapNextBuffer = () => {
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
        // If I adjust current, I also need to make sure that the correlating grid is also mutated
        // I can assume that the referential nature of arrays allows me to directly mutate by reference
        // however, this may not be good practice
        // 1] if it doesn't update, that kinda fixes it for me because then the useEffect immutability enforces having to adjust both
        // 2] if it does update, but I write a manual update/or comments for the grid itself, that may suffice too
        // first-step: update current, determine if grid updates too

        let switchedCell

        if (current[rowId][cellId] === 1) { switchedCell = 0 }
        else if (current[rowId][cellId] === 0) { switchedCell = 1 }

        let preSlice = current.slice(0, rowId)
        let modRow = current[rowId].slice(0, cellId).concat([switchedCell].concat(current[rowId].slice(cellId + 1)))
        let postSlice = current.slice(rowId + 1)
        preSlice.push(modRow)

        let newGrid = preSlice.concat(postSlice)
        console.log('preSwitchgrid', grid)
        let griddex
        if (current === grid['1']) { griddex = '1' }
        else if (current === grid['2']) { griddex = '2' }
        setCurrent(newGrid)
        setGrid({
            ...grid,
            [griddex]: newGrid
        })
        console.log('postSwitchgrid', grid)

        // how could I modify a single cell in a matrix grid? 
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

//     useEffect(() => {
// // when current is bufferSwapped, I need neighbor detection
//         let nextGrid
//         if (current === grid['1']) { nextGrid = '2' }
//         if (current === grid['2']) { nextGrid = '1' }
// // if I add grid as a dependency
// // what's that for, even? I'm not waiting for it to change, I AM the change
// // 

//         let nCountedGrid = detectNeighbors(grid[current])
//         let nextGenGrid = resolveNextGen(current, nCountedGrid)
//         setGrid({
//             ...grid,
//             [nextGrid]: nextGenGrid
//         })

//     }, [current, grid])
    // I want grid to change without updating though
    // Should I ignore the error message? 
    useEffect(() => {
        console.log(current)
    }, [current])
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