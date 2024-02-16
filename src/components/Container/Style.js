import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fafafa;
    justify-content: center;
    align-items: center;
`
export const ContainerUser = styled(Container)`
    justify-content: baseline;
`
export const ContainerCard = styled.View`
    width: 320;
    height: 102;
    border-radius: 5px;
    padding: 10px;
    background-color: #FFFFFF;
    flex-direction: row;
    align-items: center;
    gap: 10;
    /* box-shadow: 4px 4px 5px black; */
`
export const CardData = styled.View`
    width: 203;
    height: 80;
`
export const ContainerScroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        width: 320,
        height: 600,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})``;

