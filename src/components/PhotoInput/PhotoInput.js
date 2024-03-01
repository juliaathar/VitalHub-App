import { Text } from "react-native"
import { BoxPhoto, ContainerPhoto } from "../Container/Style"
import {
    MaterialCommunityIcons
} from "@expo/vector-icons"
import { DefaultTextStart, GrayText } from "../DefaultText/DefaultText"

export const PhotoInput = () => {
    return (
        <ContainerPhoto>
            <BoxPhoto>
                <MaterialCommunityIcons
                    name="file-image-remove"
                    size={24}
                    color={'#4E4B59'}
                    style={{ marginRight: 5 }}
                />
                <GrayText>Nenhuma foto informada</GrayText>
            </BoxPhoto>
        </ContainerPhoto>
    )
}