// Row
// Maps individual Cells into Cell Component
// Generates individual cell ids[Need double-checking(might need another engineer)]

import React, { useEffect, useState } from 'react'
import Cell from './Cell'
import './row.css'

const Row = ({r, rId, lifeSwitch}) => {
    const [cellIds, setCellIds] = useState()

    useEffect(() => {
        if (r === undefined) { return }

        let ids = []
        for (let i = 0; i < r.length; i++) {
            ids.push(i)
        }
        setCellIds(ids)

    }, [r])

    return (
        <>
            <div className = 'row'>
            {
                r !== undefined && cellIds ? r.map((c, i) => (
                    <Cell 
                        rowId={rId}
                        key={cellIds[i]} 
                        id={cellIds[i]} 
                        c={c} 
                        lifeSwitch={lifeSwitch}
                    />
                )) : null
            }
            </div>
        </>
    )
}

export default Row