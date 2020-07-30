

import { useMemoize } from '.'

const useCustomGrid = (rows, cols) => {
    const customState = useMemoize(rows, cols)
    return customState
}

export { useCustomGrid }