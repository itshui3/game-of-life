function cloneGrid(grid) {
    return grid.map( (innerArr, i) => {
        return [...innerArr]
    })
}

export { cloneGrid }