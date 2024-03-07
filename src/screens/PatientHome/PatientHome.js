import { ContainerUser } from "../../components/Container/Style";
import { GradientBackground } from "../../components/HomeHeader/Style";
import CalendarList from "../../components/CalendarList/CalendarList";
import { useState } from "react";
import { HomeButton } from "../../components/HomeButton/HomeButton";
import { StatusBox } from "../../components/Buttons/Style";
import { List } from "../../components/List/Style";
import CancelModal from "../../components/CancelModal/CancelModal";
import { ButtonSchedule } from "../../components/ButtonSchedule/ButtonSchedule";
import { SchedulingModal } from "../../components/SchedulingModal/SchedulingModal";
import { CardDoctorHome } from "../../components/CardDoctorHome/CardDoctorHome";
import AppointmentModalDoctor from "../../components/AppointmentModalDoctor/AppointmentModalDoctor";
import { HomeHeader } from "../../components/HomeHeader/HomeHeader";

const Consultas = [
    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 2, nome: "Edu", situacao: "realizado" },
    { id: 3, nome: "Lucão", situacao: "cancelado" },
    { id: 3, nome: "Gabi", situacao: "cancelado" },
    { id: 3, nome: "Júlia", situacao: "pendente" }
]
export const PatientHome = ({ navigation }) => {

    const [statusLista, setStatusLista] = useState("pendente")

    //state para os modais 
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAppointment, setShowModalAppointment] = useState(false);
    const [showSchedulingModal, setshowSchedulingModal] = useState(false);


    return (
        <ContainerUser>
            <GradientBackground>
                <HomeHeader
                    navigation={navigation}
                />
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
                        <CardDoctorHome
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

            <AppointmentModalDoctor
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
                navigation={navigation}
            />

            <SchedulingModal
                visible={showSchedulingModal}
                setshowSchedulingModal={setshowSchedulingModal}
                navigation={navigation}
            />

            <ButtonSchedule onPress={() => setshowSchedulingModal(true)} />

        </ContainerUser>
    );
}