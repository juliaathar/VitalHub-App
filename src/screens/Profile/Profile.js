import { ContainerScroll, ContainerUser } from "../../components/Container/Style";
import { DefaultText } from "../../components/DefaultText/DefaultText";
import { ImageUser } from "../../components/ImageUser/Style";
import { InputProfile, InputProfileBox, LabelInput } from "../../components/Input/Style";
import { Title } from "../../components/Title/Style";

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
                <LabelInput>Endereço</LabelInput>
                <InputProfile placeholder="Rua Vicenso Silva, 987" />
                <LabelInput>Endereço</LabelInput>   
                <InputProfile placeholder="Rua Vicenso Silva, 987" />
                </InputProfileBox>

            </ContainerScroll>
        </ContainerUser>

    );
}