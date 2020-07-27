// ProgressButton
// Progresses to next generation

import React from "react"

const ProgressButton = ({nextBuffer}) => {

    return (
        <>
            <button 
                className='progress-button'
                onClick={ nextBuffer }
            >Next Generation</button>
        </>
    )
}

export default ProgressButton;