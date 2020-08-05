// given a creature Array, and a grid[current]
// and [r, c] for placement, determine if creature can be placed
// on the basis of there being enough space from the walls

// 6x6 grid
import { cloneGrid } from './cloneGrid.js'

function surveyOrigin(dimensions, grid, origin) {
    let creature_height = dimensions[0]
    let creature_width = dimensions[1]
    
    let rows = grid.length - origin[0]
    let cols = grid[0].length - origin[1]

    if (creature_height > rows || creature_width > cols) { return false }
    else { return true }
}

// returns a grid with creature spawned
function spawnCreature(creature, grid, origin) {
    console.log('creature', creature)
    let dimensions = [creature.length, creature[0].length] // [r, c]
    // check this fn for errors
    if (!surveyOrigin(dimensions, grid, origin)) { return false }

    // else return a new grid that gets set as grid[current]
    let newGrid = cloneGrid(grid)

    let r_origin = origin[0]
    let c_origin = origin[1]

    for (let r = 0; r < dimensions[0]; r++) {
        for (let c = 0; c < dimensions[1]; c++) {
            newGrid[r_origin + r][c_origin + c] = creature[r][c]
        }
    }

    return newGrid
}

export { spawnCreature }