import React, { useEffect, useState } from "react"
import Cell from './Cell'
import "./row.css"

const Row = ({r, rId}) => {
    const [cellIds, setCellIds] = useState(() => {
        let ids = []
        for (let i = 0; i < r.length; i++) {
            ids.push(i)
        }
        return ids
    })

    return (
        <>
            <div className = "row">
            {
                r.map((c, i) => (
                    <Cell 
                        key={cellIds[i]} 
                        id={parseInt(rId.toString() + cellIds[i].toString(), 10)} 
                        c={c} 
                    />
                ))
            }
            </div>
        </>
    )
}

export default Row