import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Container } from "../../components/Container/Style";
// import { Subtitle } from "../../components/Subtitle/Style";
import { Input } from "../../components/Input/Style";
import { Button, ButtonTitle } from "../../components/Buttons/Style";
import { DefaultText } from "../../components/DefaultText/DefaultText";

export const ResetPassword = () => {
    return (

        <Container>

            <Logo source={require('../../assets/logo.png')} />

            <Title>Recuperar senha</Title>

            <DefaultText>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</DefaultText>

            <Input
                placeholder = "Usuário ou E-mail"
            />

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

        </Container>
    );
}