//ResetButton
//Complete reset on grid

import React from "react"

const ResetButton = ({reset}) => {

    return (
        <>
            <button 
                className='progress-button'
                onClick={ reset }
            >Reset Grid</button>
        </>
    )
}

export default ResetButton;