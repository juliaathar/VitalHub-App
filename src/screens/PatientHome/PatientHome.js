import { Image, Text, View } from "react-native";
import { ContainerUser } from "../../components/Container/Style";
import { GradientBackground, HomeHeader, TextHome } from "../../components/HomeHeader/Style";
import { UserIcon } from "../../components/UserIcon/Style";
import { TitleWhite } from "../../components/Title/Style";
import CalendarList from "../../components/CalendarList/CalendarList";
import { Card } from "../../components/Card/Card";
import { useState } from "react";
import { HomeButton } from "../../components/HomeButton/HomeButton";
import { StatusBox } from "../../components/Buttons/Style";

const Consultas = [
    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 2, nome: "Edu", situacao: "realizado" },
    { id: 3, nome: "Lucão", situacao: "cancelado" },
    { id: 3, nome: "Gabi", situacao: "cancelado" },
    { id: 3, nome: "Júlia", situacao: "pendente" }
]
export const PatientHome = () => {

    const [statusLista, setStatusLista] = useState("pendente")


    return (
        <ContainerUser>
            <GradientBackground>
                <HomeHeader>
                    <UserIcon source={require('../../assets/user.png')} />
                    <View>
                        <TextHome>Bem-vindo</TextHome>
                        <TitleWhite>Richard Kosta</TitleWhite>
                    </View>

                    <Image style={{ marginLeft: 90 }} source={require('../../assets/bell.png')} />
                </HomeHeader>
            </GradientBackground>

            <CalendarList />

            <StatusBox>
              
            <HomeButton
                    textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")}
                />

                <HomeButton
                    textButton={"Realizadas"}
                    clickButton={statusLista === "realizado"}
                    onPress={() => setStatusLista("realizado")}
                />
                

                <HomeButton
                    textButton={"Canceladas"}
                    clickButton={statusLista === "cancelado"}
                    onPress={() => setStatusLista("cancelado")}
                />
            </StatusBox>

            <Card />
            <Card />
            <Card />

        </ContainerUser>
    );
}