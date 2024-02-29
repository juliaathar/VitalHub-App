import { ContainerScroll, ContainerUser } from "../../components/Container/Style"
import { DefaultText } from "../../components/DefaultText/DefaultText"
import { ImageUser } from "../../components/ImageUser/Style"
import { Title } from "../../components/Title/Style"

export const Prescription = () => {
    return (
        <ContainerUser>
            <ImageUser source={require('../../assets/doctorUser.png')} />

            <Title>Dr Claudio</Title>

            <DefaultText>Cliníco geral       CRM-15286</DefaultText>

            <ContainerScroll>
                
            </ContainerScroll>
        </ContainerUser>
    )
}