// Canvas
// Top-Level Canvas API
// Maps Rows into Row Component
// Generates individual row ids[Needs double-checking(might need another engineer to look at)]

import React, { useState, useEffect } from 'react'
import Row from './grid/Row.js'

function Canvas({ grid, lifeSwitch }) {

    const [rows, setRows] = useState([])

    useEffect(() => {
        if (grid === undefined) { return } 
        if (!grid.length) { return }
        setRows(grid)
    }, [grid])

    return (
        <>
            <div className='canvas_wrapper'>
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