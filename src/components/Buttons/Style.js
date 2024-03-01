import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44px;
    background-color: #496BBA;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`
export const ButtonPhoto = styled.TouchableOpacity`
    width: 50%;
    height: 44px;
    background-color: #49B3BA;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    flex-direction: row;
    gap: 10px;
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
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
    text-transform: uppercase;
`

export const ButtonTitleSecondary = styled(ButtonTitle)`
    color: #344f8f;
    text-transform: capitalize;
    text-decoration: underline;
`

export const ButtonTitlePhoto = styled.Text`
 font-family: 'MontserratAlternates_700Bold';
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
    text-transform: uppercase;
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
    width: 16px;
    height: 20px;
    margin-right: 27px;
`

// export const ButtonSchedule = styled.TouchableOpacity`
//     width: 60px;
//     height: 60px;
//     background-color: #49B3BA;
//     border-radius: 7px;
//     position: fixed;
//     left: 130px;
//     bottom: 40px;
//     justify-content: center;
//     align-items: center;
// `


export const StatusBox = styled.View`
flex-direction: row;
width: 320;
justify-content: space-between;
`

