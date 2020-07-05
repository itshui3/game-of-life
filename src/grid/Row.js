import React, { useEffect, useState } from "react"

const Row = ({r}) => {

    const [rowString, setRowString] = useState("")

    useEffect(() => {
        let count = 0;
        setRowString(r.reduce( (acc, e) => {
            count ++
            if (count === 10) {
                return acc + e.toString()
            } else {
                return acc + e.toString() + "____"
            }
        }, "  "))
    }, [r])

    return (
        <>
            <p>{rowString}</p>
        </>
    )
}

export default Row