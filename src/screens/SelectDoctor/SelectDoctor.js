import { Button, ButtonSecondary, ButtonTitle, ButtonTitleSecondary } from "../../components/Buttons/Style"
import { CardDoctor } from "../../components/CardDoctor/CardDoctor"
import { ContainerSelect, SelectClinicView } from "../../components/ContainerSelect/Style"
import { Title } from "../../components/Title/Style"

export const SelectDoctor = ({navigation}) => {
    return (
        <ContainerSelect>
            <SelectClinicView>
                <Title>Selecionar médico</Title>
                <CardDoctor
                    name="Dra Júlia"
                    speciality="Demartologa, Esteticista"
                />
                <CardDoctor
                    name="Dr Júlia"
                    speciality="Demartologa, Esteticista"
                />
                <CardDoctor
                    name="Dra Júlia"
                    speciality="Demartologa, Esteticista"
                />
                <Button onPress={() => navigation.navigate("SelectDate")}>
                    <ButtonTitle>
                        Continuar
                    </ButtonTitle>
                </Button>

                <ButtonSecondary onPress={() => navigation.navigate("Main")}>
                    <ButtonTitleSecondary>
                        Cancelar
                    </ButtonTitleSecondary>
                </ButtonSecondary>

            </SelectClinicView>
        </ContainerSelect>
    )
}