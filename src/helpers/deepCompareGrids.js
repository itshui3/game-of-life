// performs a deep comparison of 2 grids assuming same rows/cols

const deepCompareGrids = (gridA, gridB) => {

    if ( gridA.length !== gridB.length ) { return }
    if ( gridA[0].length !== gridB[0].length ) { return }

// loop rows
    for (let l = 0; l < gridA.length; l++) {

// loop cells
        for (let i = 0; i < gridA[0].length; i++) {
            if ( gridA[l][i] !== gridB[l][i] ) { return false }
        }
    }

    return true

}

export { deepCompareGrids }