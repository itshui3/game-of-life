// Row
// Maps individual Cells into Cell Component
// Generates individual cell ids[Need double-checking(might need another engineer)]

import React, { memo } from 'react'
import Cell from './Cell'
import './row.css'

const Row = memo(({r, rId,lastRow, clickCell, refsAPI }) => {
    // r, current creating re-render issues upon progression
    return (
        <>
            <div className = 'row'>
            {
                r.length && r.map((c, i) => (
                    <Cell 
                        rowId = {rId}
                        key = {i} 
                        id = {i} 
                        c = {c} 
                        clickCell = {clickCell}
                        lastCol = {
                            i === (r.length-1)
                            ?   true
                            :   false
                        }
                        refsAPI = {refsAPI}
                        lastRow = {lastRow}

                    />
                ))
            }
            </div>
        </>
    )
})

export default Row