import { Text } from "react-native"
import { Container } from "../../components/Container/Style"
import { Title } from "../../components/Title/Style"
import { Logo } from "../../components/Logo/Style"
import { Input } from "../../components/Input/Style"
import { LinkMedium } from "../../components/Links/Style"


export const Login = () => {
    return (
        <Container>

            <Logo source={require('../../assets/logo.png')} />


            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder="Usuário ou E-mail"
            />

            <Input
                placeholder="Senha"
                secureTextEntry
            />

            
            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            {/* <Button>
                <ButtonTitle></ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle></ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount></TextAccount>
            </ContentAccount> */}

        </Container>
    )
}