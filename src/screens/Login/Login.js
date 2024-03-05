import { Text } from "react-native"
import { Container } from "../../components/Container/Style"
import { Title } from "../../components/Title/Style"
import { Logo } from "../../components/Logo/Style"
import { Input } from "../../components/Input/Style"
import { LinkMedium } from "../../components/Links/Style"
import { Button, ButtonGoogle, ButtonIcon, ButtonTitle, ButtonTitleGoogle } from "../../components/Buttons/Style"
import { CreateAccount, LinkAccount, TextAccount } from "../../components/CreateAccount/Style"


export const Login = ({navigation}) => {

    //chamar a funcao de login
    async function Login(){
        navigation.navigate("Main")
    }

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

            <Button onPress={()=>Login}>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonIcon source={require('../../assets/GOOGLE.png')}/>
                <ButtonTitleGoogle>Entrar com o Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <CreateAccount>
                <TextAccount>Não tem conta?</TextAccount>
                <LinkAccount onPress = {() => navigation.navigate("CreateAccount")}>Crie uma conta agora!</LinkAccount>
            </CreateAccount> 

        </Container>
    )
}