
const calculateColor = (row, col) => {

    let hex = ((row * 2 * col) % 4095).toString(16)

    while (hex.length < 3) {
        hex = '0' + hex
    }
    return '#' + hex

}

export { calculateColor }