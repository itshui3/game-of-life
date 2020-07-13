// Controller
// Cols/Rows Config
// Grid State
// [ToDo] Two-Buffers
// [ToDo] Buffer Swap Logic
// First-Step: A better first step may be to develop an on-click next mechanism that progresses generations

import React, { useState, useEffect } from "react";
import Canvas from "./Canvas.js"
import Controls from './controls/Controls'

const Controller = (props) => {
    // cols and rows logic mixed up
    // build based on innerWidth/innerHeight of window
    const [cols, setCols] = useState(9)
    const [rows, setRows] = useState(9)
    const [grid, setGrid] = useState(() => {
        let grid = {
            '1': [],
            '2': []
        }

        let row = []
        for (let i = 0; i < cols; i++) {
            if (i % 2 === 0) { row.push(1) } 
            else { row.push(0) }
        }

        for (let i = 0; i < rows; i++) { grid['1'].push(row) }
        for (let i = 0; i < rows; i++) { grid['2'].push(row) }

        return grid
    })
    // current is passed down to grid Components for rendering
    const [current, setCurrent] = useState(grid['1'])

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
        console.log(current)
    }

    return (
        <>
            <div 
                className='gol-wrapper'
                style={{display: 'flex', flexDirection: 'column'}}
            >
                <Canvas grid={current} />
                <Controls swapNextBuffer={swapNextBuffer} />
            </div>
        </>
    )
}

export default Controller