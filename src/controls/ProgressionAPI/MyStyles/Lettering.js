import styled from 'styled-components'

const Letter = styled.button`
    color: #204051;
    font-size: 20px;
    border: 1px solid #204051;
    border-radius: 5px;
    width: 150px;
    height: 40px;
    &:hover {
        color: #e4e3e3;
        background-color: #204051;
    }
    &:active {
        color: #204051;
        background-color: #e4e3e3;
        font-size: 23px;
    }
`

export { Letter }