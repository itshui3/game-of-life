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
            row.push(0)
        }

        for (let i = 0; i < rows; i++) { generatedGrid['1'].push(row) }
        for (let i = 0; i < rows; i++) { generatedGrid['2'].push(row) }

        return generatedGrid
    })
    const [current, setCurrent] = useState('1')
    const [progress, setProgress] = useState(false)

        // bufferSwapEffect: activates when current is changed
    useEffect(() => {

        let nextGrid
        if (current === '1') { 
            nextGrid = '2' 
        }
        if (current === '2') { 
            nextGrid = '1' 
        }

        let nCountedGrid = detectNeighbors(grid[current])
        console.log('counted', nCountedGrid)
        let nextGenGrid = resolveNextGen(grid[current], nCountedGrid)

        setGrid({
            ...grid,
            [nextGrid]: nextGenGrid
        })
        // cases:
        // 1] swapNextBuffer
        // 2] lifeSwitch
        // 3] reset
    }, [grid[current]])

    useEffect(() => {

        console.log(current)
        swapNextBuffer()
        // let progression
        // if (progress) {
        //     progression = setInterval(() => {
        //         swapNextBuffer()
        //     }, 1000)
        // } else {
        //     clearInterval(progression)
        // }

    }, [progress])

    const swapNextBuffer = () => {
// swaps out current with the other buffer
// currently only works onClick of nextGen[actually not even]
        switch(current) {
            case '1':
                setCurrent('2')
                break;
            case '2':
                setCurrent('1')
                break;

            default:
                console.log('current reference did not match grids 1 or 2\nCurrent: ', current)
        }
    }

    const lifeSwitch = (rowId, cellId) => {
// modifies a single cell in a grid to the opposite state of living/dead
// how can I simplify this logic for readability? 

        let switchedCell

        if (grid[current][rowId][cellId] === 1) { switchedCell = 0 }
        else if (grid[current][rowId][cellId] === 0) { switchedCell = 1 }

        let preSlice = grid[current].slice(0, rowId)
        let modRow = grid[current][rowId].slice(0, cellId).concat([switchedCell].concat(grid[current][rowId].slice(cellId + 1)))
        let postSlice = grid[current].slice(rowId + 1)
        preSlice.push(modRow)

        let newGrid = preSlice.concat(postSlice)

        // setCurrent(newGrid)
        setGrid({
            ...grid,
            [current]: newGrid
        })
        // since I'm not returning a different ref for current
        // it does not trigger nextGen
        setCurrent(current)

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
        setCurrent('1')

    }
    // [ToDo: Write a custom hook that encorporates swapNextBuffer as a method returned by the useBuffer hook]

    const startProgress = () => {
        setProgress(!progress)
    }

    return (
        <>
            <div 
                className='gol-wrapper'
                style={{display: 'flex', flexDirection: 'column'}}
            >
                <ErrorBoundary>
                    <Canvas grid={grid[current]} lifeSwitch={lifeSwitch} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Controls swapNextBuffer={swapNextBuffer} reset={reset} startProgress={startProgress} />
                </ErrorBoundary>
            </div>
        </>
    )
}

export default Controller