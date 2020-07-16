// Row
// Maps individual Cells into Cell Component
// Generates individual cell ids[Need double-checking(might need another engineer)]

import React, { useEffect, useState } from 'react'
import Cell from './Cell'
import './row.css'

const Row = ({r, rId, lifeSwitch}) => {
    const [cells, setCells] = useState([])

    useEffect(() => {
        if (r === undefined) { return }
        setCells(r)
    }, [r])

    return (
        <>
            <div className = 'row'>
            {
                cells.length && cells.map((c, i) => (
                    <Cell 
                        rowId={rId}
                        key={i} 
                        id={i} 
                        c={c} 
                        lifeSwitch={lifeSwitch}
                    />
                ))
            }
            </div>
        </>
    )
}

export default Row