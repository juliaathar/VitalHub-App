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

export const ContainerScheduling = styled.View`
    width: 100%;
    height: 50%;
    background-color: #FBFBFB;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    border-radius: 15px;
`
export const ContainerLocal = styled.View`
    justify-content: center;
    align-items: center;
`

export const ContainerLocalInfo = styled.View`
    width: 100%;
    height: 60%;
    background-color: white;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`
export const ContainerCard = styled.TouchableOpacity.attrs({
    shadowColor: "#000000",
    shadowOffset: {
        width: 4,
        height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 4,
})`
    width: 320px;
    height: 102px;
    border-radius: 5px;
    padding: 20px;
    background-color: #FFFFFF;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  `;
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

