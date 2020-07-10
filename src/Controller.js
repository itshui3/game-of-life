import React, { useState, useEffect } from "react";
import Canvas from "./Canvas.js"

const Controller = (props) => {
    // cols and rows logic mixed up
    // build based on innerWidth/innerHeight of window
    const [cols, setCols] = useState(3)
    const [rows, setRows] = useState(30)
    const [gridA, setGridA] = useState(() => {

        let row = []
        for (let i = 0; i < rows; i++) {
            if (i % 2 === 0) { row.push(0) } 
            else { row.push(1) }
        }

        let grid = []
        for (let i = 0; i < cols; i++) { grid.push(row) }
        return grid
    })
    const [current, setCurrent] = useState(gridA)


    return (
        <>
            <Canvas grid={current} />
        </>
    )
}

export default Controller