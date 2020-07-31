// Row
// Maps individual Cells into Cell Component
// Generates individual cell ids[Need double-checking(might need another engineer)]

import React, { useEffect, useState } from 'react'
import Cell from './Cell'
import './row.css'

const Row = ({r, rId,lastRow, clickCell }) => {
    
    // fix 1:
    // const [cells, setCells] = useState([])

    // useEffect(() => {
    //     if (r === undefined) { return }
    //     setCells(r)
    // }, [r])

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
                        lastRow = {lastRow}
                    />
                ))
            }
            </div>
        </>
    )
}

export default Row