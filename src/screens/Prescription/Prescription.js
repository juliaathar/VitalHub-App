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

export const Prescription = ({navigation}) => {
    return (
        <ContainerUser>
            <ImageUser source={require('../../assets/doctorUser.png')} />

            <Title>Dr Claudio</Title>

            <DefaultText>Cliníco geral       CRM-15286</DefaultText>

            <ContainerScroll >
                <LabelInput>Descrição da consulta</LabelInput>
                <InputResult>
                    <DefaultText>O paciente possuí uma infecção no
                        ouvido. Necessário repouse de 2 dias
                        e acompanhamento médico constante</DefaultText>
                </InputResult>
                <LabelInput>Diagnóstico do paciente</LabelInput>
                <InputResult>
                    <DefaultText>Infecção no ouvido</DefaultText>
                </InputResult>
                <LabelInput>Prescrição médica</LabelInput>
                <InputResult>
                    <DefaultText>Medicamento: Advil</DefaultText>
                    <DefaultText>Dosagem: 50 mg</DefaultText>
                    <DefaultText>Frequência: 3 vezes ao dia</DefaultText>
                    <DefaultText>Duração: 3 dias</DefaultText>
                </InputResult>

                <LabelInput>Exames médicos</LabelInput>

                <PhotoInput />

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 60, marginBottom: 20 }}>
                    <ButtonPhoto onPress={() => navigation.navigate("CameraScreen")}>
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
                <DefaultText>Resultado do exame de sangue: tudo normal</DefaultText>
            </InputResult>

            <LinkBottom>Voltar</LinkBottom>
        </ContainerScroll>
        </ContainerUser >
    )
}