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

