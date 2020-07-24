// creatures that move through space through their transforming 'across space' through GoL rules

// glider
const glider = [
    [1, 0, 1],
    [0, 1, 1],
    [0, 1, 0]
]

// lightweight spaceship (LWSS)
const lwss = [
    [0, 0, 1, 1, 0],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0]
]

export const spaceships = { glider, lwss }