// write a helper function that takes a grid, introductory text
// and logs both, but the grid is manually formatted into a grid-like shape in the stdout since it seems flattened
// this fn should work as a tag for template literals

// function logMatrix(grid, text) {
//     for (let i = 0; i < grid.length; i++) {

//     }
// }

// export { logMatrix }

const testMatrixLiteral = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const testBuiltMatrix = buildMatrix(testMatrixLiteral.length, testMatrixLiteral[0].length)

function buildMatrix(gridLength, columns) {
    console.log(columns)
    let nMatrix = new Array(gridLength)
    for (let i = 0; i < nMatrix.length; i++) {
        nMatrix[i] = new Array(columns)
    }
    return nMatrix
}

console.log(`
    literal:
    ${testMatrixLiteral}

    built:
    ${testBuiltMatrix}
`)

console.log(testMatrixLiteral)