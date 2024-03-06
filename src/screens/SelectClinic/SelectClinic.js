import { Button, ButtonSecondary, ButtonTitle, ButtonTitleSecondary } from "../../components/Buttons/Style"
import { CardClinic } from "../../components/CardClinic/CardClinic"
import { ContainerSelect, SelectClinicView } from "../../components/ContainerSelect/Style"
import { Title } from "../../components/Title/Style"

export const SelectClinic = ({navigation}) => {
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
                <Button onPress={() => navigation.navigate("SelectDoctor")}>
                    <ButtonTitle>
                        Continuar
                    </ButtonTitle>
                </Button>

                <ButtonSecondary>
                    <ButtonTitleSecondary>
                        Cancelar
                    </ButtonTitleSecondary>
                </ButtonSecondary>

            </SelectClinicView>
        </ContainerSelect>
    )
}