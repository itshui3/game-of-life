import styled from 'styled-components'

const ControllerWrapper = styled.div`
    margin: 0 auto;
    border: 1px solid #93b5e1;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #a6dcef;
`

const Canvas = styled.div`

`

const Grid = styled.div`
    display: flex;
    flex-direction: column;
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