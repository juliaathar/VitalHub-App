import { Image, Text, View } from "react-native";
import { ContainerUser } from "../../components/Container/Style";
import { GradientBackground, HeaderData, HomeHeader, TextHome } from "../../components/HomeHeader/Style";
import { UserIcon } from "../../components/UserIcon/Style";
import { TitleWhite } from "../../components/Title/Style";
import CalendarList from "../../components/CalendarList/CalendarList";
import { Card } from "../../components/Card/Card";
import { useState } from "react";
import { HomeButton } from "../../components/HomeButton/HomeButton";
import { StatusBox } from "../../components/Buttons/Style";
import { List } from "../../components/List/Style";
import CancelModal from "../../components/CancelModal/CancelModal";
import AppointmentModal from "../../components/AppointmentModal/AppointmentModal";

const Consultas = [
    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 2, nome: "Edu", situacao: "realizado" },
    { id: 3, nome: "Lucão", situacao: "cancelado" },
    { id: 3, nome: "Gabi", situacao: "cancelado" },
    { id: 3, nome: "Júlia", situacao: "pendente" }
]
export const DoctorHome = () => {

    const [statusLista, setStatusLista] = useState("pendente")

    //state para os modais 
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAppointment, setShowModalAppointment] = useState(false);


    return (
        <ContainerUser>
            <GradientBackground>
                <HomeHeader>
                    <UserIcon source={{ uri: "https://github.com/juliaathar.png" }} />
                    <View>
                        <TextHome>Bem-vinda</TextHome>
                        <TitleWhite>Dra. Júlia</TitleWhite>
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

            <List
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusLista == item.situacao && (
                        <Card
                            situacao={item.situacao}
                            onPressCancel={() => setShowModalCancel(true)}
                            onPressAppointment={() => setShowModalAppointment(true)}
                        />
                    )
                }
            />

            <CancelModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />

            <AppointmentModal
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
            />

        </ContainerUser>
    );
}