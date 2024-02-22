import { useEffect, useState } from "react"
import { Modal } from "react-native"
import { Title } from "../Title/Style";
import { Button, ButtonModal, ButtonSecondary, ButtonTitle, ButtonTitleSecondary } from "../Buttons/Style";
import { ModalContent, ModalText, PatientModal } from "./Style";

const CancelModal = ({
    visible, setShowModalCancel, ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <Title>Cancelar consulta</Title>
                    <ModalText>
                        Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
                    </ModalText>
                    <ButtonModal>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonModal>
                    <ButtonSecondary onPress={() => setShowModalCancel(false)}>
                        <ButtonTitleSecondary>
                            Cancelar
                        </ButtonTitleSecondary>
                    </ButtonSecondary>
                </ModalContent>
            </PatientModal>

        </Modal>
    )
}

export default CancelModal;