import styled from 'styled-components'

const SelectorCont = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 40px;
`

const SelectButton = styled.button`
    color: #1b262c;
    font-size: 20px;
    border: 1px solid #1b262c;
    border-radius: 5px;
    width: 150px;
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

const OptionsCont = styled.div`
    position: absolute;
    bottom: 40px;
    left: 0px;

    display: flex;
    flex-direction: column-reverse;
`

const OscillatorsCont = styled(OptionsCont)``

const SpaceshipsCont = styled(OptionsCont)`
`

const TerraformsCont = styled(OptionsCont)`
    left: -150px;
`

const OptionButton = styled.button`
    color: #1b262c;
    font-size: 20px;
    border: 1px solid #1b262c;
    border-radius: 5px;
    width: 300px;
    height: 40px;

    margin: 1px 0px;

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

export { 
    SelectButton, 
    SelectorCont, 
    OptionButton, 
    OptionsCont,
    OscillatorsCont,
    SpaceshipsCont,
    TerraformsCont
}