import { Button, ButtonSecondary, ButtonTitle, ButtonTitleSecondary } from "../../components/Buttons/Style";
import { ContainerSelect, SelectClinicView } from "../../components/ContainerSelect/Style";
import { Subtitle, Title } from "../../components/Title/Style";
import { CalendarComponent } from "../../components/CalendarComponent/CalendarComponent"
import { ResumeModal } from "../../components/ResumeModal/ResumeModal"
import { useState } from "react";
import { InputSelect } from "../../components/InputSelect/InputSelect"


export const SelectDate = () => {

    const [showModalResume, setShowModalResume] = useState(false);

    return (
        <ContainerSelect>
            <SelectClinicView>
                <Title>Selecionar data</Title>
                <CalendarComponent />
                <Subtitle>Selecione um horário disponível</Subtitle>
                <InputSelect />
                <Button onPress={() => setShowModalResume(true)}>
                    <ButtonTitle>Confirmar</ButtonTitle>
                </Button>
                <ButtonSecondary>
                    <ButtonTitleSecondary>Cancelar</ButtonTitleSecondary>
                </ButtonSecondary>

                <ResumeModal
                    visible={showModalResume}
                    setShowModalResume={setShowModalResume}
                />

            </SelectClinicView>
        </ContainerSelect>
    )
}