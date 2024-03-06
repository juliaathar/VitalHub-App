import { Modal, Text, View } from "react-native";
import { ContainerScheduling } from "../Container/Style";
import { Subtitle, Title } from "../Title/Style";
import { AppointmentLevel } from "./Style";
import { HomeButton } from "../HomeButton/HomeButton";
import { ButtonAppointment } from "../ButtonAppointment/ButtonAppoinment";
import { useState } from "react";
import { Input } from "../Input/Style";
import { Button, ButtonSecondary, ButtonTitle, ButtonTitleSecondary } from "../Buttons/Style";

export const SchedulingModal = ({
    navigation, visible, setshowSchedulingModal, ...rest
}) => {

    const [statusLista, setStatusLista] = useState("rotina")

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ContainerScheduling>
                <Title>Agendar consulta</Title>
                <View style={{marginRight: 200}}>
                    <Subtitle>Qual o nível da consulta</Subtitle>
                </View>
                <AppointmentLevel>
                    <ButtonAppointment
                        textButton={"Rotina"}
                        clickButton={statusLista === "rotina"}
                        onPress={() => setStatusLista("rotina")}
                    />
                    <ButtonAppointment
                        textButton={"Exame"}
                        clickButton={statusLista === "exame"}
                        onPress={() => setStatusLista("exame")}
                    />
                    <ButtonAppointment
                        textButton={"Urgência"}
                        clickButton={statusLista === "urgencia"}
                        onPress={() => setStatusLista("urgencia")}
                    />
                </AppointmentLevel>

                <View style={{marginRight: 150}}>
                    <Subtitle>Informe a localização desejada</Subtitle>
                </View>
                <Input placeholder="Informe a localização" />

                <Button onPress={() => navigation.navigate("SelectClinic")}>
                    <ButtonTitle>Continuar</ButtonTitle>
                </Button>

                <ButtonSecondary onPress={() => setshowSchedulingModal(false)}>
                    <ButtonTitleSecondary>
                        Cancelar
                    </ButtonTitleSecondary>
                </ButtonSecondary>
            </ContainerScheduling>
            
        </Modal>
    );
}