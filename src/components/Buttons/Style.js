import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44;
    background-color: #496BBA;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-top: 15;
`
export const ButtonSecondary = styled(Button)`
    background-color: transparent;
    border: none;
`
export const ButtonModal = styled(Button)`
    width: 80%;
`

export const ButtonTitle = styled.Text`
    font-family: 'MontserratAlternates_700Bold';
    font-size: 16;
    color: #FFFFFF;
    text-align: center;
    text-transform: uppercase;
`

export const ButtonTitleSecondary = styled(ButtonTitle)`
    color: #344f8f;
    text-transform: capitalize;
    text-decoration: underline;
`

export const ButtonGoogle = styled(Button)`
    background-color: #fafafa;
    border: #496BBA;
    flex-direction: row;
`

export const ButtonTitleGoogle = styled(ButtonTitle)`
    color: #496BBA;
`

export const ButtonIcon = styled.Image`
    width: 16;
    height: 20;
    margin-right: 27;
`


export const StatusBox = styled.View`
flex-direction: row;
width: 320;
justify-content: space-between;
`

