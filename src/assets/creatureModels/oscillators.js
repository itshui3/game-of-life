// creatures that oscillate
// oscillation in GoL is defined as being the state in which GoL ruleset will cycle the lifeform through the same transformative sequence repeatedly unless disturbed by outside life-forms

// vertical blinker
const blinker = [
    [1],
    [1],
    [1]
]

// horizontal toad
const toad = [
    [0, 1, 1, 1],
    [1, 1, 1, 0]
]

// beacon
const beacon = [
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 1]
]

export const oscillators = { blinker, toad, beacon }