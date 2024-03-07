import { ButtonSecondary, ButtonTitleSecondary } from "../../components/Buttons/Style"
import { ContainerLocal, ContainerLocalInfo } from "../../components/Container/Style"
import { DefaultText } from "../../components/DefaultText/DefaultText"
import { InputBox, InputProfile, InputProfileBox, LabelInput, SmallInput } from "../../components/Input/Style"
import { MapImg } from "../../components/MapImg/Style"
import { Title } from "../../components/Title/Style"

export const AppointmentLocal = ({
    clinicName = "Clínica Natureh",
    location = "São Paulo, SP",
    addres = "Rua Vicenso Silva, 987",
    navigation
}) => {
    return (
        <ContainerLocal>
            <MapImg source={require('../../assets/map.png')} />
            <ContainerLocalInfo>
                <Title>{clinicName}</Title>
                <DefaultText>{location}</DefaultText>

                <LabelInput>Endereço</LabelInput>
                <InputProfile placeholder={addres} />

                <InputProfileBox>
                    <InputBox>
                        <LabelInput>Número</LabelInput>
                        <SmallInput placeholder="528" />
                    </InputBox>
                    <InputBox>
                        <LabelInput>Bairro</LabelInput>
                        <SmallInput placeholder="Moema-SP" />
                    </InputBox>

                </InputProfileBox>
                <ButtonSecondary onPress={() => navigation.replace("Main")}>
                    <ButtonTitleSecondary>Voltar</ButtonTitleSecondary>
                </ButtonSecondary>
            </ContainerLocalInfo>
        </ContainerLocal>
    )
}