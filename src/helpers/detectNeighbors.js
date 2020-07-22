function detectNeighbors(grid) {

    if (!grid) { return }
    if (!grid.length) { return }

    let colLength = grid[0].length
// nMatrix cells contain the number of neighbors that are alive
    let nMatrix = buildMatrix(grid.length, colLength)

    for (let r = 0; r < grid.length; r++) {
    // iterate rows
        for (let c = 0; c < colLength; c++) {
        // iterate cols
            let cellVal = grid[r][c]

            if (cellVal) {
                countLiving(r, c, grid, nMatrix)
            }
        }
    }

    return nMatrix
}

// mutates nMatrix
function countLiving(row, col, grid, nMatrix) {

    for (let r = -1; r <= 1; r++) {
        for (let c = -1; c <= 1; c++) {
            if (r === 0 && c === 0) { continue }

                let countR = r + row
                let countC = c + col
                if ( (countR < grid.length) && (countR > -1) &&
                    (countC < grid[0].length) && (countC > -1)
                ) {
                    nMatrix[r + row][c + col]++
                }
        }
    }

}

function buildCols(gridZeroLength) {
    let columns = new Array(gridZeroLength)
    for (let i = 0; i < columns.length; i++) {
        columns[i] = 0
    }
    return columns
}

function buildMatrix(gridLength, colLength) {

    let nMatrix = new Array(gridLength)
    for (let i = 0; i < nMatrix.length; i++) {
        nMatrix[i] = buildCols(colLength)
    }

    return nMatrix
}

export { detectNeighbors }