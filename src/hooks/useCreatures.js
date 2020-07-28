import { useState } from 'react'

const useSelection = () => {
    const [selected, setSelected] = useState({
        type: '',
        lifeform: 'none'
    })

    return [selected, setSelected]
}

const useCreatures = () => {

}

export { useCreatures, useSelection }