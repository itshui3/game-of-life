import React, { useState, useEffect } from "react"
import "./cell.css"

const Cell = ({c, id}) => {
    const [life, setlife] = useState()

    useEffect(() => {
        setlife(c)
    }, [c])

    return (
        <>
            <div 
                id = {id}
                className = {`cell ${life ? 'living' : 'dead'}`}
            ></div>
        </>
    )
}

export default Cell;