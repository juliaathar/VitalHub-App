import { Text } from "react-native";
import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { DefaultText } from "../../components/DefaultText/DefaultText";
import { Input } from "../../components/Input/Style";
import { Button, ButtonTitle } from "../../components/Buttons/Style";
import { LinkBottom } from "../../components/LinkBottom/Style";

export const CreateAccount = () => {
    return(
        <Container>
            <Logo source={require('../../assets/logo.png')} />

            <Title>Criar conta</Title>

            <DefaultText>Insira seu endereço de e-mail e senha para realizar seu cadastro.</DefaultText>

            <Input  
                placeholder = "Usuário ou E-mail"
            />
            <Input  
                placeholder = "Senha"
            />
            <Input  
                placeholder = "Confirmar Senha"
            />

            <Button>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <LinkBottom>Cancelar</LinkBottom>
        </Container>
    );
}