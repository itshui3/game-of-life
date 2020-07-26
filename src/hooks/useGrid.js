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
        // cases:
        // 1] swapNextBuffer
        // 2] lifeSwitch
        // 3] reset
    }, [grid[current]])

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

    return [grid, setGrid, current, setCurrent, swapNextBuffer]
}

export { useGrid }