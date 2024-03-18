import { useEffect, useState } from "react"
import { Modal } from "react-native"
import { Title } from "../Title/Style";
import { Button, ButtonModal, ButtonSecondary, ButtonTitle, ButtonTitleSecondary } from "../Buttons/Style";
import { ModalContent, ModalText, PatientModal } from "./Style";

//importar recursos da biblioteca
import * as Notifications from "expo-notifications"

//solicitar permissao de notificacao ao iniciar o app 
Notifications.requestPermissionsAsync()

//definir como as notificacoes devem ser tratadas quando recebidas 
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    //mostra o alerta quando a notificacao for recebida
    shouldShowAlert: true,

    //ativa o som da notificacao
    shouldPlaySound:true,

    //configura exibicao de numero de notificacoes no icone do app
    shouldSetBadge:true
  })
})


const CancelModal = ({
    visible, setShowModalCancel, ...rest
}) => {

    const handleCallNotifications = async () => {
        const {status} = await Notifications.getPermissionsAsync()

        if(status !== "granted"){
          alert("voce nao deixou as notificacoes ativas")
          return;
        }
        
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Consulta cancelada",
            body:"Sua consulta foi cancelada"
          },
          trigger: null
        });
      }

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <Title>Cancelar consulta</Title>
                    <ModalText>
                        Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
                    </ModalText>
                    <ButtonModal onPress={handleCallNotifications}>
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