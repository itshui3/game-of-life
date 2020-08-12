import styled from 'styled-components'

const Letter = styled.button`
    color: #1b262c;
    font-size: 20px;
    border: 1px solid #1b262c;
    border-radius: 5px;
    width: 80px;
    height: 40px;
    &:hover {
        color: #e4e3e3;
        background-color: #1b262c;
    }
    &:active {
        color: #1b262c;
        background-color: #e4e3e3;
        font-size: 23px;
    }
`

export { Letter }