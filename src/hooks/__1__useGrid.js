import { useState, useEffect } from 'react'
import { detectNeighbors, resolveNextGen } from '../helpers'

const useGrid = (cols, rows) => {
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
// updates the 'next' buffer[ie. the one not in use]
// whenever the 'current' buffer[ie. the one in use]
// is modified in some way
    useEffect(() => {

        let nextGrid
        if (current === '1') { 
            nextGrid = '2' 
        }
        if (current === '2') { 
            nextGrid = '1' 
        }

        let nCountedGrid = detectNeighbors(grid[current])
        let nextGenGrid = resolveNextGen(grid[current], nCountedGrid)

        setGrid({
            ...grid,
            [nextGrid]: nextGenGrid
        })

    }, [grid[current]])

// potential candidate for useCallback
    const swapNextBuffer = (cur) => {
        switch(cur) {
            case '1':
                setCurrent('2')
                break;
            case '2':
                setCurrent('1')
                break;

            default:
                console.log('current reference did not match grids 1 or 2\nCurrent: ', cur)
        }
    }

    const only_reset = () => {
   
        let grid = {
            '1': [],
            '2': []
        }

        let row = []
        for (let i = 0; i < cols; i++) {
            row.push(0)
        }

        for (let i = 0; i < rows; i++) { grid['1'].push(row) }
        for (let i = 0; i < rows; i++) { grid['2'].push(row) }

        setGrid(grid)
        setCurrent('1')
    }

    const lifeSwitch = (rowId, cellId) => {

        let switchedCell

        if (grid[current][rowId][cellId] === 1) { switchedCell = 0 }
        else if (grid[current][rowId][cellId] === 0) { switchedCell = 1 }

        let preSlice = grid[current].slice(0, rowId)
        let modRow = grid[current][rowId].slice(0, cellId).concat([switchedCell].concat(grid[current][rowId].slice(cellId + 1)))
        let postSlice = grid[current].slice(rowId + 1)
        preSlice.push(modRow)

        let newGrid = preSlice.concat(postSlice)

        setGrid({
            ...grid,
            [current]: newGrid
        })

    }

    return [grid, setGrid, current, swapNextBuffer, only_reset, lifeSwitch]
}

export { useGrid }