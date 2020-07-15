// Canvas
// Top-Level Canvas API
// Maps Rows into Row Component
// Generates individual row ids[Needs double-checking(might need another engineer to look at)]

import React, { useState, useEffect } from 'react'
import Row from './grid/Row.js'

function Canvas({ grid, lifeSwitch }) {

    const [rowIds, setRowIds] = useState()

    // why is this useEffect only triggering once? 
    useEffect(() => {

        if (grid === undefined) { return }

        let ids = []
        for (let i = 0; i < grid.length; i++) {
            ids.push(i)
        }
        setRowIds(ids)

    }, [grid])

    return (
        <>
            <div className='canvas_wrapper'>
            {
                grid && rowIds ? grid.map((r, i) => (
                    <Row 
                        className = "row"
                        key = {rowIds[i]} 
                        rId = {rowIds[i]} 
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