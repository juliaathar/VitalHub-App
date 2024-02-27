import styled, {css} from "styled-components";

export const ButtonAppointmentSheduling = styled.TouchableHighlight`
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 30%;
    height: 40px;

    ${props => props.clickButton ? css`
        background-color: #34898F;
    `: css`
        background-color: transparent;
        border: 2px solid #60BFC5;
    `}
`

export const ButtonScheduleTitle = styled.Text`
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 16px;

    ${props => props.clickButton ? css`
        color: #FBFBFB;
    `: css`
        color: #34898F;
    `}
`