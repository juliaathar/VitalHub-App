// HomeHeader/Style.js
import styled from "styled-components";
import { LinearGradient } from 'expo-linear-gradient';

export const HomeHeader = styled.View`
  width:  100%;
  height: 144;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20;
`;

export const TextHome = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: 16;
    color: #4E4B59;
`

export const GradientBackground = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'],
    start: { x: -0.05, y: 1.08 },
    end: { x: 1, y: 0 }
})`

  width: 100%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  `;