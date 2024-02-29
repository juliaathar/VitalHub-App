import { Modal, View } from "react-native"
import { ContainerResume } from "../Container/Style"
import { Title } from "../Title/Style"
import { DefaultText, DefaultTextBlack, DefaultTextStart } from "../DefaultText/DefaultText"
import { LabelInput } from "../Input/Style"
import { Button, ButtonSecondary, ButtonTitle, ButtonTitleSecondary } from "../Buttons/Style"

export const ResumeModal = ({
    appointmentDate = "1 de Novembro de 2023",
    doctorName = "Dra Alessandra",
    doctorSpeciality = "Demartologa, Esteticista",
    location = "São Paulo, SP",
    typeAppointment = "Rotina",
    visible,
    setShowModalResume,
    ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
                <ContainerResume>
                    <Title>Agendar consulta</Title>

                    <DefaultTextBlack>Consulte os dados selecionados para a sua consulta</DefaultTextBlack>

                    <LabelInput>Data da consulta</LabelInput>
                    <DefaultTextStart>{appointmentDate}</DefaultTextStart>

                    <LabelInput>Médico(a) da consulta</LabelInput>
                    <DefaultTextStart>{doctorName}</DefaultTextStart>
                    <DefaultTextStart>{doctorSpeciality}</DefaultTextStart>

                    <LabelInput>Local da consulta</LabelInput>
                    <DefaultTextStart>{location}</DefaultTextStart>

                    <LabelInput>Tipo da consulta</LabelInput>
                    <DefaultTextStart>{typeAppointment}</DefaultTextStart>

                    <View style={{ width: '90%', marginTop: 30 }}>
                        <Button>
                            <ButtonTitle>Confirmar</ButtonTitle>
                        </Button>
                        <ButtonSecondary onPress={() => setShowModalResume(false)}>
                            <ButtonTitleSecondary>Cancelar</ButtonTitleSecondary>
                        </ButtonSecondary>
                    </View>
                </ContainerResume>
            </View>
        </Modal>
    )
}