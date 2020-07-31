// Cell Component
// Takes cell state[From Controller] and renders CSS depicting living/dead state
// [ToDo] Cell borders: (One problem to solve is when borders duplicate, will they overlap? Push units further apart?)

import React from "react"
import "./cell.css"

const Cell = ({c, id, rowId, lastCol, lastRow, clickCell }) => {

    // fix 0: 
    // const [life, setlife] = useState()

    // useEffect(() => {
    //     setlife(c)
    // }, [c])

    return (
        <>
            <div 
                id = {id}
                className = {`cell${c ? ' living' : ' dead'}${lastCol ? ' rightCol' : ''}${lastRow ? ' bottomRow' : ''}`}
                onClick = { () => {
                    clickCell(rowId, id)
                } }
            ></div>
        </>
    )
}

export default Cell;