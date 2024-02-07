import { Container } from "../../components/Container/Style";
import { DefaultText, DefaultTextBlue, Textbox } from "../../components/DefaultText/DefaultText";
import { Logo } from "../../components/Logo/Style";
import { Subtitle } from "../../components/Subtitle/Style";
import { Title } from "../../components/Title/Style";

export const VerifyEmail = () => {
    return (
        <Container>

            <Logo source={require('../../assets/logo.png')} />

            <Title>Verifique seu e-mail</Title>

            <DefaultText>Digite o código de 4 dígitos enviado para
            </DefaultText>
            <DefaultTextBlue>
                username@email.com
            </DefaultTextBlue>

        </Container>
    );
}