import styled from "styled-components"

export const ButtonCard = styled.TouchableOpacity`

`
export const ButtonText = styled.Text`
    color: ${(props) => props.situacao == "pendente" ? "#c81d25" : "#344f8f"} ;
    font-size: 12;
    color: #C81D25;
    font-family: 'MontserratAlternates_500Medium';
    text-align: center;
`
