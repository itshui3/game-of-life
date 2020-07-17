import { useState, useEffect } from 'react'

const useGrid = () => {
// rows/cols config
    const [cols, setCols] = useState(20)
    const [rows, setRows] = useState(20)

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
}

export { useGrid }