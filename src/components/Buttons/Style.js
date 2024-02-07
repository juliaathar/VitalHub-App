import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44;
    background-color: #496BBA;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom: 15;
`

export const ButtonTitle = styled.Text`
    font-family: 'MontserratAlternates_700Bold';
    font-size: 14;
    color: #FFFFFF;
    text-align: center;
    text-transform: uppercase;
`

export const ButtonGoogle = styled(Button)`
    background-color: #FFFFFF;
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