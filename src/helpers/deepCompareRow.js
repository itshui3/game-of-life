// a comparison between Rows to determine whether underlying values match

const deepCompareRow = ( rowA, rowB ) => {

    if ( rowA.length !== rowB.length ) { return }

    for ( let i = 0; i < rowA.length; i++ ) {
        if ( rowA[i] !== rowB[i] ) { return false}
    }

    return true
}

export { deepCompareRow }