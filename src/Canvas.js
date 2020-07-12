// Canvas
// Top-Level Canvas API
// Maps Rows into Row Component
// Generates individual row ids[Needs double-checking(might need another engineer to look at)]

import React, { useState } from 'react'
import Row from './grid/Row.js'

function Canvas({ grid }) {

    const [rowIds, setRowIds] = useState(() => {
        let ids = []
        for (let i = 0; i < grid.length; i++) {
            ids.push(i)
        }
        return ids
    })

    return (
        <>
            <div classname='canvas_wrapper'>
            {
                grid.map((r, i) => (
                    <Row 
                        className = "row"
                        key = {rowIds[i]} 
                        rId = {rowIds[i]} 
                        r = {r} 
                    />
                ))
            }
            </div>
        </>
    )
}

export default Canvas