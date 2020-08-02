// Canvas
// Top-Level Canvas API
// Maps Rows into Row Component
// Generates individual row ids[Needs double-checking(might need another engineer to look at)]
import React from 'react'
import Row from './grid/Row.js'
import './Canvas.css'

// import * as S from './RyanStyle'
import * as S from './MyStyle'

function Canvas({ grid, clickCell }) {

    return (
        <>
        {/* bring a styled component in, in place of this div */}

            <S.Grid>
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
            </S.Grid>

        </>
    )
}

export default Canvas