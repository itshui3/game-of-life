import { useState } from 'react'

const useProgress = () => {
    const [progress, setProgress] = useState(false)
    const [stopper, setStopper] = useState({})

    const startProgress = () => {
        switch (progress) {
            case false:
                setProgress(true)
                break
            default:
                if ( !(Object.entries(stopper).length === 0) ) { 
                    stopper.stop() 
                }
        }
    }

    return [progress, setProgress, startProgress, stopper, setStopper]
}

export { useProgress }