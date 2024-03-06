import { Button, ButtonTitle } from "../../components/Buttons/Style";
import { Container } from "../../components/Container/Style";
import { DefaultText, DefaultTextBlue, Textbox } from "../../components/DefaultText/DefaultText";
import { BoxInputNumber, InputNumber } from "../../components/Input/Style";
import { LinkBottom } from "../../components/LinkBottom/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";

export const VerifyEmail = ({navigation}) => {
    return (
        <Container>

            <Logo source={require('../../assets/logo.png')} />

            <Title>Verifique seu e-mail</Title>

            <DefaultText>Digite o código de 4 dígitos enviado para
            </DefaultText>
            <DefaultTextBlue>
                username@email.com
            </DefaultTextBlue>

            <BoxInputNumber>
                <InputNumber
                placeholder ="0"
                />
                <InputNumber
                placeholder ="0"
                />
                <InputNumber
                placeholder ="0"
                />
                <InputNumber
                placeholder ="0"
                />
            </BoxInputNumber>

            <Button onPress={() => navigation.navigate("SetPassword")}>
                <ButtonTitle>Verificar</ButtonTitle>
            </Button>

            <LinkBottom>Reenviar código</LinkBottom>

        </Container>
    );
}