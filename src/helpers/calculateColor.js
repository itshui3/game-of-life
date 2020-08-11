
const calculateColor = (row, col) => {

    let hashed = hash(row, col)

    let hex = (hashed % 4095).toString(16)

    while (hex.length < 3) {
        hex = '0' + hex
    }
    return '#' + hex

}

export { calculateColor }

function hash(r, c) {
    var numArr = [r, c]
    var hash = 5381;
    for (var idx = 0; idx < numArr.length; ++idx) {
      hash = 33 * hash + numArr[idx];
    }
    return hash;
  }