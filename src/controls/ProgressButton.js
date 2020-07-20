// ProgressButton
// Progresses to next generation

import React from "react"

const ProgressButton = ({swapNextBuffer, cur}) => {

    return (
        <>
            <button 
                className='progress-button'
                onClick={ () => swapNextBuffer(cur) }
            >Next Generation</button>
        </>
    )
}

export default ProgressButton;