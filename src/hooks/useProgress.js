import { useState } from 'react'

const useProgress = () => {
    const [progress, setProgress] = useState(false)
    const [stopper, setStopper] = useState({})

    return [progress, setProgress, stopper, setStopper]
}

export { useProgress }