import styled from 'styled-components'

const ControllerWrapper = styled.div`
    margin: 50px auto;
    /* border: 1px solid black; */
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const Canvas = styled.div`

`

const Grid = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    border: 1px solid black;
    border-radius: 10px;
`

const LChar = styled.h2`
    font-family: 'Lexend Zetta', sans-serif;
    margin: 20px;
    font-size: 40px;
    color: #f2aaaa;
`

const RChar = styled.h2`
    font-family: 'Lexend Zetta', sans-serif;
    margin: 20px;
    font-size: 40px;
    color: #e36387;
`

const CharCont = styled.div`
    display: flex;
    flex-direction: row;
`

export { Canvas, Grid, LChar, RChar, CharCont, ControllerWrapper }