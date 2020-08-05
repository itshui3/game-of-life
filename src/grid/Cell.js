// Cell Component
// Takes cell state[From Controller] and renders CSS depicting living/dead state
// [ToDo] Cell borders: (One problem to solve is when borders duplicate, will they overlap? Push units further apart?)

import React, { memo } from "react"
import "./cell.css"

const Cell = memo(({c, id, rowId, lastCol, lastRow, clickCell, refsAPI }) => {

    React.useEffect(() => {
        console.log(0)
    })

    const { current, progress, placement, selected } = refsAPI.current

    return (
        <>
            <div 
                id = {id}
                className = {`cell${c ? ' living' : ' dead'}${lastCol ? ' rightCol' : ''}${lastRow ? ' bottomRow' : ''}`}
                onClick = { () => {
                    clickCell(
                        rowId, 
                        id, 
                        current.value, 
                        progress.value, 
                        placement.value,
                        selected.value
                    )
                } }

            ></div>
        </>
    )
})

export default Cell;