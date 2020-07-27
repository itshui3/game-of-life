// Controller
// top level component
// has all the things
// bigCompo2020
import React, { useState, useEffect } from 'react';
// 2nd level components
import Canvas from './Canvas.js'
import Controls from './controls/Controls'
// hooks
import { useBufferSystem, useGrid, useProgress } from './hooks'
// assets
import Creatures from './assets/creatureModels'
// helpers
import { spawnCreature } from './helpers'

const rows = 25
const cols = 25

const Controller = (props) => {
    const [grid, setGrid, current, setCurrent, swapNextBuffer] = useGrid(rows, cols)
    const [progress, setProgress, stopper, setStopper] = useProgress()
    const [placement, setPlacement] = useState(false)
    // way too many things here
    // const [grid, current, lifeSwitch, nextBuffer, reset, startProgress, placeCreature, placement, generateCreatureAtCoords] = useBufferSystem(25, 25)
    // progressEffect
    useEffect(() => {
        if (progress !== true) { return }

        let continueProgress = true

        function stopProgress() {
            continueProgress = !continueProgress
            setStopper({})
            setProgress(false)
        }

        setStopper({
            stop: stopProgress
        })

        let cur = current

        function reProgress() {
            if (!continueProgress) { return }
    // Problem[#01] calculate timeout and adjust recurses on timeout basis
    // Stretch: Allow user to designate timeout, normalize to the user's set time
            setTimeout(reProgress, 700)
            swapNextBuffer(cur)
            switch (cur) {
                case '1':
                    cur = '2'
                    break
                case '2':
                    cur = '1'
                    break
                default:
                    console.log('cur is neither 1 or 2 somehow')
            }
        }
        reProgress()

    }, [progress])

    const nextBuffer = () => {
        if (!progress) { swapNextBuffer(current) }
        else { console.log('cannot perform manual nextGen while progression occurring')}
    }

    const reset = () => {
        if ( !(Object.entries(stopper).length === 0) ) { stopper.stop() }
        
        let grid = {
            '1': [],
            '2': []
        }

        let row = []
        for (let i = 0; i < cols; i++) {
            row.push(0)
        }

        for (let i = 0; i < rows; i++) { grid['1'].push(row) }
        for (let i = 0; i < rows; i++) { grid['2'].push(row) }

        setGrid(grid)
        setCurrent('1')

    }

    // creaturesAPI - placeCreature
    const placeCreature = () => {
        if (progress) { console.log('cannot place creature during progression')}
        else {
            switch(placement) {
                case false:
                    setPlacement(true)
                    break
                case true:
                    setPlacement(false)
                    break
                default:
                    console.log('placement neither true nor false')
            }
        }
    }

    // creaturesAPI
    function generateCreatureAtCoords(creature, coords) {
        if(!placement) { return }

        let creatureGrid

        if(creature['type'] === 'osc') {
            creatureGrid = Creatures['oscillators'][creature['lifeform']]
        } else if (creature['type'] === 'ss') {
            creatureGrid = Creatures['spaceships'][creature['lifeform']]
        }

        let creatureSpawnedGrid = spawnCreature(creatureGrid, grid[current], coords)
        if (!creatureSpawnedGrid) { return }

        setGrid({
            ...grid,
            [current]: creatureSpawnedGrid,
        })

        setPlacement(false)
    }

    const startProgress = () => {
        if (placement) {
            console.log('cannot progress while creatureFactory generating lifeform') 
            return
        }
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

    const lifeSwitch = (rowId, cellId) => {
        if (placement) { return }

        let switchedCell

        if (grid[current][rowId][cellId] === 1) { switchedCell = 0 }
        else if (grid[current][rowId][cellId] === 0) { switchedCell = 1 }

        let preSlice = grid[current].slice(0, rowId)
        let modRow = grid[current][rowId].slice(0, cellId).concat([switchedCell].concat(grid[current][rowId].slice(cellId + 1)))
        let postSlice = grid[current].slice(rowId + 1)
        preSlice.push(modRow)

        let newGrid = preSlice.concat(postSlice)

        setGrid({
            ...grid,
            [current]: newGrid
        })

    }

    const [selected, setSelected] = useState({
        type: '',
        lifeform: 'none'
    })

// places a creature in stateQueue
    const select = (selection) => {
        setSelected(selection)
    }
// changes state to be 'placing creature'
    const placeSelection = () => {
        if (selected['lifeform'] !== 'none') {
            placeCreature()
        }
    }

    const feedCreatureCoords = (coords) => {
        if (!placement) { return }
        if (selected['lifeform'] === 'none') { return }
        generateCreatureAtCoords(selected, coords)
    }

    return (
        <>
            <Canvas 
            grid={grid[current]} 
            lifeSwitch={lifeSwitch} 
            feedCreatureCoords={feedCreatureCoords}
            />
            <Controls 
            // grid
            nextBuffer={nextBuffer} 
            reset={reset} 
            startProgress={startProgress}
            // creature
            placement={placement}
            select={select}
            selected={selected}
            placeSelection={placeSelection}
            />
        </>
    )
}

export default Controller