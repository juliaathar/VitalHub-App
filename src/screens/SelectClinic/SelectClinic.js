import { Button, ButtonTitle } from "../../components/Buttons/Style"
import { Card } from "../../components/Card/Card"
import { CardClinic } from "../../components/CardClinic/CardClinic"
import { ContainerSelect, SelectClinicView } from "../../components/ContainerSelect/Style"
import { Title } from "../../components/Title/Style"

export const SelectClinic = () => {
    return (
        <ContainerSelect>
            <SelectClinicView>
                <Title>Selecionar clínica</Title>
                <CardClinic
                    clinicName={"Clínica Natureh"}
                    address={"São Paulo, SP"}
                    rate={"4,5"}
                />
                <CardClinic
                    clinicName={"Clínica Natureh"}
                    address={"São Paulo, SP"}
                    rate={"4,8"}
                />
                <CardClinic
                    clinicName={"Clínica Natureh"}
                    address={"São Paulo, SP"}
                    rate={"5"}
                />
                <Button>
                    <ButtonTitle>
                        Continuar
                    </ButtonTitle>
                </Button>
            </SelectClinicView>
        </ContainerSelect>
    )
}