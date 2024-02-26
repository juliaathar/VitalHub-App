import { Modal, Text } from "react-native";
import { ContainerScheduling } from "../Container/Style";

export const SchedulingModal = ({
    visible, setshowSchedulingModal, ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ContainerScheduling>
                <Text>fkjsdfksjdfklsdfdslkfjkldfjlksdjflkdjflkdsjflkdjflk</Text>
            </ContainerScheduling>
        </Modal>
    );
}