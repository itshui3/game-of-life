// given a matrix of 1's and 0's, with 1's indicating life and 0's indicating death
// return a matrix of nums indicating the number of alive neighbors[neighbors can consist of anything in the 8 intercardinal directions 'next' to each element]

import { Queue } from './queue.js'

let grid = [
    [1, 0, 1, 1, 1], 
    [0, 0, 0, 1, 1], 
    [0, 0, 0, 1, 1], 
    [0, 0, 0, 1, 0], 
    [1, 0, 1, 1, 0], 
]

let desiredResult = [
    [0, 2, 1, 4, 3], 
    [1, 1, 0, 6, 5], 
    [0, 0, 0, 4, 4], 
    [0, 0, 0, 4, 0], 
    [1, 0, 1, 2, 0], 
]

// naive implementation: 
// bft where I move 'outwards' from [0, 0]
// and everytime a '1' is encountered, increment the neighboring values

// function detectNeighbors(grid) {
//     let q = Queue()
//     let queued = Set()
//     // [value, coordinates]
//     q.enqueue([grid[0][0], [0, 0]])
//     queued.add([0, 0])

//     let columns = buildCols(grid[0].length)
//     let nMatrix = buildMatrix(grid.length, columns)

//     while (q.length) {
//         let [curVal, coords] = q.dequeue()
//         // 1] I will need to check if the current value is 1 or 0
//         let [y, x] = coords

// // generate a pool of useable coordinates
//         if (y === grid[0].length - 1) {
//             // is at far right
//         }

//         if (y === 0) {
//             // is at far left
//         }

//         if (x === grid.length - 1) {
//             // is at bottom
//         }

//         if (x === 0) {
//             // is at top
//         }

//         if (!curVal) { return }
        


//     }

//     return nMatrix
// }

function detectNeighbors(grid) {
    if (!grid) { return }
    let columns = buildCols(grid[0].length)
// nMatrix cells contain the number of neighbors that are alive
    let nMatrix = buildMatrix(grid.length, columns)

    for (let r = 0; r < grid.length; r++) {
    // iterate rows
        for (let c = 0; c < columns.length; c++) {
        // iterate cols
            let cellVal = grid[r][c]

            if (cellVal) {
                nMatrix[r][c] = countLiving(r, c, grid)
            }
        }
    }

    return nMatrix
}

function countLiving(row, col, grid) {
    let count = 0

    for (let r = -1; r <= 1; r++) {
        for (let c = -1; c <= 1; c++) {
            if (r === 0 && c === 0) { continue }
            if (grid[row + r][col + c] === 1) {
                count++
            }
        }
    }

    return count
}

function buildCols(gridZeroLength) {
    let columns = new Array(gridZeroLength)
    for (let i = 0; i < columns.length; i++) {
        columns[i] = 0
    }
    return columns
}

function buildMatrix(gridLength, columns) {
    let nMatrix = new Array(gridLength)
    for (let i = 0; i < nMatrix.length; i++) {
        nMatrix[i] = columns.slice()
    }
    return nMatrix
}

export { detectNeighbors }