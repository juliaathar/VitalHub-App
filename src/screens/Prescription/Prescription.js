import { View } from "react-native"
import { Button, ButtonPhoto, ButtonTitle, ButtonTitlePhoto } from "../../components/Buttons/Style"
import { ContainerScroll, ContainerUser } from "../../components/Container/Style"
import { DefaultText } from "../../components/DefaultText/DefaultText"
import { ImageUser } from "../../components/ImageUser/Style"
import { Input, InputDescription, InputResult, LabelInput } from "../../components/Input/Style"
import { LinkBottom, LinkCancel } from "../../components/LinkBottom/Style"
import { PhotoInput } from "../../components/PhotoInput/PhotoInput"
import { Title } from "../../components/Title/Style"
import { MaterialIcons } from "@expo/vector-icons"  

export const Prescription = () => {
    return (
        <ContainerUser>
            <ImageUser source={require('../../assets/doctorUser.png')} />

            <Title>Dr Claudio</Title>

            <DefaultText>Cliníco geral       CRM-15286</DefaultText>

            <ContainerScroll>
                <LabelInput>Descrição da consulta</LabelInput>
                <InputDescription
                    placeholder="Descrição"
                />
                <LabelInput>Diagnóstico do paciente</LabelInput>
                <Input
                    placeholder="Diagnóstico"
                />
                <LabelInput>Prescrição médica</LabelInput>
                <InputDescription
                    placeholder="Prescrição médica"
                />

                <LabelInput>Exames médicos</LabelInput>

                <PhotoInput />

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 60, marginBottom:20 }}>
                    <ButtonPhoto>
                        <MaterialIcons
                            name="add-a-photo"
                            size={20}
                            color={'#FFFFFF'}
                        />
                        <ButtonTitlePhoto>Enviar</ButtonTitlePhoto>
                    </ButtonPhoto>

                    <LinkCancel>Cancelar</LinkCancel>
                </View>

                <InputResult>
                    <DefaultText>Resultado do exame de sangue : tudo normal</DefaultText>
                </InputResult>

                <LinkBottom>Voltar</LinkBottom>
            </ContainerScroll>
        </ContainerUser>
    )
}