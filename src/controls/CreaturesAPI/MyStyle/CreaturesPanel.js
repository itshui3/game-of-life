import styled from 'styled-components'

const CreaturesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CreaturesHeader = styled.h2`
    width: 80%;
    height: 80px;
    padding: 30px 0px;
    font-family: 'Cute Font', cursive;
    font-size: 80px;
    color: #FFF;

`

const CreaturesPanel = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px 25px;
`

export { CreaturesPanel, CreaturesWrapper, CreaturesHeader }