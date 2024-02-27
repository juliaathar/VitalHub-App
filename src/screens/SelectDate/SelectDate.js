import { Button, ButtonSecondary, ButtonTitle, ButtonTitleSecondary } from "../../components/Buttons/Style"
import { CalendarComponent } from "../../components/CalendarComponent/CalendarComponent"
import { ContainerSelect, SelectClinicView } from "../../components/ContainerSelect/Style"
import { Input } from "../../components/Input/Style"
import { InputSelect } from "../../components/InputSelect/InputSelect"
import { Subtitle, Title } from "../../components/Title/Style"

export const SelectDate = () => {
    return (
        <ContainerSelect>
            <SelectClinicView>
                <Title>Selecionar data</Title>
                <CalendarComponent/>
                <Subtitle>Selecione um horário disponível</Subtitle>
                <InputSelect/>
                <Button>
                    <ButtonTitle>Confirmar</ButtonTitle>
                </Button>
                <ButtonSecondary>
                    <ButtonTitleSecondary>Cancelar</ButtonTitleSecondary>
                </ButtonSecondary>
            </SelectClinicView>
        </ContainerSelect>
    )
}