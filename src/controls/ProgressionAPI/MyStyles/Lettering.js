import styled from 'styled-components'

const Letter = styled.button`
    font-size: 20px;
    border: 1px solid black;
    border-radius: 5px;
    width: 150px;
    height: 40px;
    &:hover {
        color: white;
        background-color: black;
    }
    &:active {
        color: black;
        background-color: white;
        font-size: 23px;
    }
`

export { Letter }