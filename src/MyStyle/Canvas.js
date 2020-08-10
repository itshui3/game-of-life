import styled from 'styled-components'

const ControllerWrapper = styled.div`
    margin: 0px auto;
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
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #e4e3e3;
    border-radius: 10px;
    z-index: 1;
`

const GoLTextCont = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    top: -20px;

    display: flex;
    flex-direction: column;

    justify-content: space-around;
`

const GoLText = styled.h2`
    font-size: 150px;
    opacity: 1;
    font-family: 'Ubuntu', sans-serif;
    color: #204051;
    z-index: 0;
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

export { Canvas, Grid, LChar, RChar, CharCont, ControllerWrapper, GoLTextCont, GoLText }