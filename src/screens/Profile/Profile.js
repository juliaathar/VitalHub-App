import { ContainerScroll, ContainerUser } from "../../components/Container/Style";
import { DefaultText } from "../../components/DefaultText/DefaultText";
import { ImageUser } from "../../components/ImageUser/Style";
import { InputBox, InputProfile, InputProfileBox, LabelInput, SmallInput } from "../../components/Input/Style";
import { Title } from "../../components/Title/Style";
import { ButtonTitle } from "../../components/Buttons/Style";
import { Button } from "../../components/Buttons/Style";

export const Profile = () => {
    return (
        <ContainerUser>
            <ImageUser source={require('../../assets/user.png')} />

            <Title>Richard Kosta</Title>

            <DefaultText>22 anos       richard.kosta@gmail.com</DefaultText>

            <ContainerScroll>

                <LabelInput>Data de nascimento:</LabelInput>
                <InputProfile placeholder="04/05/1999" />

                <LabelInput>CPF</LabelInput>
                <InputProfile placeholder="859********" />

                <LabelInput>Endereço</LabelInput>
                <InputProfile placeholder="Rua Vicenso Silva, 987" />

                <InputProfileBox>
                    <InputBox>
                        <LabelInput>Cep</LabelInput>
                        <SmallInput placeholder="06548-909" />
                    </InputBox>
                    <InputBox>
                        <LabelInput>Cidade</LabelInput>
                        <SmallInput placeholder="Moema-SP" />
                    </InputBox>
                </InputProfileBox>

                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>

                <Button>
                    <ButtonTitle>Editar</ButtonTitle>
                </Button>

            </ContainerScroll>
        </ContainerUser>

    );
}