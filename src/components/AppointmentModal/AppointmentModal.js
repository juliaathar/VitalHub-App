import { Modal } from "react-native";
import { ModalContent, ModalText, PatientModal } from "../CancelModal/Style";
import { ButtonModal, ButtonSecondary, ButtonTitle, ButtonTitleSecondary } from "../Buttons/Style";
import { ImageAppointent } from "./Style";
import { Title } from "../Title/Style";

const AppointmentModal = ({
    visible, setShowModalAppointment, ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <ImageAppointent source={{ uri: "https://github.com/juliaathar.png" }} />

                    <Title>Dra. Júlia</Title>

                    <ModalText>22 anos    niccole.sarga@gmail.com</ModalText>

                    <ButtonModal>
                        <ButtonTitle>
                            Inserir prontuário
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

export default AppointmentModal;