// given a matrix of nums indicating the amount of neighbors in any given element, return a grid of living and dead elements based on the rules of the game of life

function resolveNextGen(grid, countGrid) {
    // nextGrid needs to generate a full array
    // do in a function
    if (!grid || !countGrid) { return }
    let nextGrid = new Array(grid.length)
    for (let i = 0; i < nextGrid.length; i++) {
        nextGrid[i] = new Array(grid[0].length)
    }

    // 1. Iterate through the grid, checking: 
    for (let r = 0; r < grid.length; r++) {

        for (let c = 0; c < grid[0].length; c++) {
            // if prevGrid cell is living
            switch(countGrid[r][c]) {
                case 3:
                    nextGrid[r][c] = 1
                    break
                case 2:
                    if (grid[r][c] === 1) { nextGrid[r][c] = 1 }
                    else { nextGrid[r][c] = 0 }
                    break
                default:
                    nextGrid[r][c] = 0

            }
        }
    }

    // a. living/dead state
    // b. the same [r][c] in countGrid to see how many living neighbors
    // 2. Depending on if the cell is alive or dead, the number of living cells around it needed to generate a living or dead cell is different
    // 3. Based on how many living cells it needs, return a living/dead state

    return nextGrid
}

export { resolveNextGen }

// * If the cell is alive **and** has 2 or 3 neighbors, then it remains
//   alive. Else it dies.
// * If the cell is dead **and** has exactly 3 neighbors, then it comes to
//   life. Else if remains dead.