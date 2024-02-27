import { ButtonStatusTitle } from "../HomeButton/Style"
import { ButtonAppointmentSheduling, ButtonScheduleTitle } from "./Style"

export const ButtonAppointment = ({
    textButton,
    clickButton = false,
    onPress,
}) => {
    return (
        <ButtonAppointmentSheduling clickButton={clickButton} onPress={onPress}>
            <ButtonScheduleTitle clickButton={clickButton}>
                {textButton}
            </ButtonScheduleTitle>
        </ButtonAppointmentSheduling>
    )
}