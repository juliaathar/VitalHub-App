import styled from "styled-components";

// export const Textbox = styled.Text`
// width: 90%;
// justify-content: center;
// align-items: center;
// `
export const DefaultText = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: 16;
    color: #5F5C6B;
    text-align: center;
    /* width: 320; */
`
export const DefaultTextBlack = styled(DefaultText)`
color: black;
`
export const DefaultTextStart = styled(DefaultText)`
align-self: flex-start;
padding-left: 33px;
`
export const GrayText = styled.Text`
   font-family: 'Quicksand_500Medium';
    font-size: 16px;
    color: #4E4B59;
    text-align: center;
    align-self: center;
`

export const DefaultTextBlue = styled(DefaultText)`
    color: #496BBA;
    font-family: 'Quicksand_600SemiBold';
`
