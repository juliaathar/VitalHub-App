import { Modal } from "react-native";
import { ModalContent, ModalText, PatientModal } from "../CancelModal/Style";
import { ButtonModal, ButtonSecondary, ButtonTitle, ButtonTitleSecondary } from "../Buttons/Style";
import { Title } from "../Title/Style";
import { ImageAppointent } from "../AppointmentModal/Style";


const AppointmentModalDoctor = ({
    navigation,visible, setShowModalAppointment, ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <ImageAppointent source={{ uri: "https://github.com/juliaathar.png" }} />

                    <Title>Dra. Júlia</Title>

                    <ModalText>Cliníco geral   CRM-15286</ModalText>

                    <ButtonModal onPress={() => navigation.navigate("AppointmentLocal")}>
                        <ButtonTitle>
                        Ver local da consulta
                        </ButtonTitle>
                    </ButtonModal>

                    <ButtonSecondary onPress={() => setShowModalAppointment(false)}>
                        <ButtonTitleSecondary>
                            Cancelar
                        </ButtonTitleSecondary>
                    </ButtonSecondary>

                </ModalContent>
            </PatientModal>
        </Modal>
    );
}
export default AppointmentModalDoctor;