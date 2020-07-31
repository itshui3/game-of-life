// Canvas
// Top-Level Canvas API
// Maps Rows into Row Component
// Generates individual row ids[Needs double-checking(might need another engineer to look at)]
import React from 'react'
import Row from './grid/Row.js'
import './Canvas.css'

function Canvas({ grid, clickCell }) {

    // fix 2
    // const [rows, setRows] = useState([])

    // useEffect(() => {
    //     if (grid === undefined) { return }
    //     if (!grid.length) { return }
    //     setRows(grid)
    // }, [grid])

    return (
        <>
            <div style={{
                maxWidth: window.innerWidth / 1.5,
                margin: '0 auto',
                border: '1px solid black',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
            {
                grid.length ? grid.map((r, i) => (
                    <Row
                        className = "row"
                        key = {i}
                        rId = {i}
                        r = {r}
                        clickCell = {clickCell}
                        lastRow = {
                            i === (grid.length-1)
                            ?   true
                            :   false
                        }
                    />
                )) : null
            }
            </div>
        </>
    )
}

export default Canvas