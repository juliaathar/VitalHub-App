import { FontAwesome } from "@expo/vector-icons"
import { ContainerButtonScheduling } from "./Style";

export const ButtonSchedule = ({
    onPress
}) => {
    return (
        <ContainerButtonScheduling onPress={onPress}>
            <FontAwesome
                name="stethoscope"
                size={32}
                color={'#FFFFFF'}
            />
        </ContainerButtonScheduling>
    );
}