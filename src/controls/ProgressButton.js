// ProgressButton
// Progresses to next generation

import React from "react"

const ProgressButton = ({swapNextBuffer}) => {

    return (
        <>
            <button 
                className='progress-button'
                onClick={ swapNextBuffer }
            >Next Generation</button>
        </>
    )
}

export default ProgressButton;