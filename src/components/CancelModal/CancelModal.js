import { useEffect, useState } from "react"
import { Modal } from "react-native"
import { Title } from "../Title/Style";
import { ButtonSecondary, ButtonTitleSecondary } from "../Buttons/Style";

const CancelModal = ({
    visible, setShowModalCancel, ...rest
}) => {
    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <Title>Cancelar consulta</Title>
            <ButtonSecondary onPress={() => setShowModalCancel(false)}>
                <ButtonTitleSecondary>
                    Cancelar
                </ButtonTitleSecondary>
            </ButtonSecondary>
        </Modal>
    )
}

export default CancelModal;