import styled from "styled-components"

export const ButtonCard = styled.TouchableOpacity`

`
export const ButtonText = styled.Text`
    font-family: "Quicksand_600SemiBold";
    color: ${(props) => props.situacao == "pendente" ? "#c81d25" : "#344f8f"};
`
