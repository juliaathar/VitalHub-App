import styled from "styled-components";
import { Title } from "../Title/Style";

export const HourCard = styled.View`
    width: 100;
    height: 26;
    background-color: #E8FCFD;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5;
`
export const VectorHour = styled.Image`
    width: 14;
    height: 14;
`
export const TextHour = styled(Title)`
font-size: 14;
color: #49B3BA;
`