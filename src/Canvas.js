// Canvas
// Top-Level Canvas API
// Maps Rows into Row Component
// Generates individual row ids[Needs double-checking(might need another engineer to look at)]
import React, { memo } from 'react'
import Row from './grid/Row.js'
import './Canvas.css'

// import * as S from './RyanStyle'
import * as S from './MyStyle'

const Canvas = memo(({ grid, clickCell, current }) => {
    // I don't want my components to care about double-buffer
    // I just want to know which cells have changed
    // 1 Problem is performing deepChecks seem to create more time complexity

    // how is switching 1 cell should require causing a re-render

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
                            current = {current}
                        />
                    )) : null
                }
            </S.Grid>

        </>
    )
})

export default Canvas