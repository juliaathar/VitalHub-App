import styled from "styled-components";

export const Input = styled.TextInput.attrs({ placeholderTextColor: '#34898f' })`
    width: 90%;
    height: 53px;
    padding: 16px;
    margin-top: 15;

    border: 2px solid #49b3ba;
    border-radius: 5px;
    color: #34898f;
    font-size: 16;
    font-family: 'MontserratAlternates_600SemiBold';
`

export const InputNumber = styled(Input)`
    width: 65;
    height: 65;
    font-size: 40;
    text-align: center;
`

export const BoxInputNumber = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10;
    margin-bottom: 15;
`
export const LabelInput = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size: 16;
    text-align: start;
    color: #33303E;
    margin-top: 20;
    width: 287;
`
export const InputDescription = styled(Input)`
    height: 121;
    text-align: start;
`
export const InputProfile = styled(Input).attrs({
    placeholderTextColor: '#33303E',
  })`
    textAlign: 'left';
    background-color: #F5F3F3;
    border: none;
    color: #33303E;
  `;

export const InputProfileBox = styled.View`
    flex-direction: row;
`
