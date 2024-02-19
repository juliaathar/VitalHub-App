import styled, { css } from "styled-components"

export const ButtonStatus = styled.TouchableHighlight`
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 30%;
    height: 40px;

    ${props => props.clickButton ? css`
        background-color: #496BBA;
    `: css`
        background-color: transparent;
        border: 2px solid #607EC5;
    `}
`

export const ButtonStatusTitle = styled.Text`
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 16px;

    ${props => props.clickButton ? css`
        color: #FBFBFB;
    `: css`
        color: #607EC5;
    `}
`