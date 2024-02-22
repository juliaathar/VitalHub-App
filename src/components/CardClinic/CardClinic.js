import { View } from "react-native"
import { ContainerCard } from "../Container/Style"
import { DefaultText } from "../DefaultText/DefaultText"
import { Title } from "../Title/Style"
import { TextHome } from "../HomeHeader/Style"
import { CardClincData, StarText } from "./Style"
import { AntDesign } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { HourCard, TextHour } from "../HourCard/Style"

export const CardClinic = ({
    clinicName,
    address,
    rate
}) => {
    return (
        <ContainerCard>
            <CardClincData>
                <View>
                    <Title>{clinicName}</Title>
                    <TextHome>{address}</TextHome>
                </View>

                <View style={{alignItems:"flex-end"}}>
                    <View style={{flexDirection: "row", marginBottom:10}}>
                        <AntDesign
                            name="star"
                            size={20}
                            color={'#F9A620'}
                        />
                        <StarText>{rate}</StarText>
                    </View>
                    
                    <HourCard>
                        <MaterialCommunityIcons
                            name="calendar"
                            size={14}
                            color={'#49B3BA'}
                        />
                        <TextHour>Seg-Sex</TextHour>
                    </HourCard>
                </View>
            </CardClincData>
        </ContainerCard>
    )
}