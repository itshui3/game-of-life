import React, { useEffect, useState } from "react"

const Row = ({r}) => {

    const [rowString, setRowString] = useState("")

    useEffect(() => {
        setRowString(r.reduce( (acc, e) => {
            return acc + e.toString() + " "
        }, " "))
    }, [r])

    return (
        <>
            <p>{rowString}</p>
        </>
    )
}

export default Row