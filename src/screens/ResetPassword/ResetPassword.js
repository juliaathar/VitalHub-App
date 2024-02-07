import { Text } from "react-native";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Container } from "../../components/Container/Style";
import { Subtitle } from "../../components/Subtitle/Style";
import { Input } from "../../components/Input/Style";
import { Button, ButtonTitle } from "../../components/Buttons/Style";

export const ResetPassword = () => {
    return (

        <Container>

            <Logo source={require('../../assets/logo.png')} />

            <Title>Recuperar senha</Title>

            <Subtitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>

            <Input
                placeholder = "Usuário ou E-mail"
            />

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

        </Container>
    );
}