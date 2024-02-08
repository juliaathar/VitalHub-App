import { Text } from "react-native";
import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { DefaultText } from "../../components/DefaultText/DefaultText";
import { Input } from "../../components/Input/Style";
import { Button, ButtonTitle } from "../../components/Buttons/Style";

export const SetPassword = () => {
    return (
        <Container>
            <Logo source={require('../../assets/logo.png')} />

            <Title>Redefinir senha</Title>

            <DefaultText>Insira e confirme a sua nova senha</DefaultText>

            <Input
                placeholder = "Nova senha"
            />
            <Input
                placeholder = "Confirmar nova senha"
            />

            <Button>
                <ButtonTitle>Confirmar nova senha</ButtonTitle>
            </Button>
            
        </Container>
    );
}