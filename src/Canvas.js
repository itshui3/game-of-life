// Canvas
// Top-Level Canvas API
// Maps Rows into Row Component
// Generates individual row ids[Needs double-checking(might need another engineer to look at)]

import React, { useState, useEffect } from 'react'
import Row from './grid/Row.js'
import './Canvas.css'

function Canvas({ grid, lifeSwitch }) {

    const [rows, setRows] = useState([])
    const [rowLength, setRowLength] = useState()

    useEffect(() => {
        if (grid === undefined) { return } 
        if (!grid.length) { return }
        setRows(grid)
        setRowLength((grid[0].length * 15) + (grid[0].length * 15) - 1)
    }, [grid])

    return (
        <>
            <div style={{ 
                maxWidth: window.innerWidth / 1.5,
                margin: '0 auto',
                border: '1px solid black',
                padding: '20px'
            }}>
            {
                rows.length ? rows.map((r, i) => (
                    <Row 
                        className = "row"
                        key = {i} 
                        rId = {i} 
                        r = {r} 
                        lifeSwitch = {lifeSwitch}
                    />
                )) : null
            }
            </div>
        </>
    )
}

export default Canvas