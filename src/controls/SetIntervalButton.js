// SetIntervalButton.js
// button that progresses generations on interval
import React from 'react'

const SetIntervalButton = ({startProgress}) => {

    return (
        <>
            <button 
                className='progress-button'
                onClick={ startProgress }
            >Progress Generations</button>
        </>
    )
}

export default SetIntervalButton