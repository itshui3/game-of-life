// Cell Component
// Takes cell state[From Controller] and renders CSS depicting living/dead state
// [ToDo] Cell borders: (One problem to solve is when borders duplicate, will they overlap? Push units further apart?)

import React, { useState, useEffect } from "react"
import "./cell.css"

const Cell = ({c, id, rowId, lifeSwitch, lastCol, lastRow}) => {
    const [life, setlife] = useState()

    useEffect(() => {
        setlife(c)
    }, [c])

    return (
        <>
            <div 
                id = {id}
                className = {`
                cell 
                ${life ? 'living' : 'dead'}
                ${lastCol ? 'rightCol' : ''}
                ${lastRow ? 'bottomRow' : ''}
                `}
                onClick = { () => lifeSwitch(rowId, id) }
            ></div>
        </>
    )
}

export default Cell;