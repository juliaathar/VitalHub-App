import { View } from "react-native"
import { ContainerCard } from "../Container/Style"
import { CardIcon } from "../UserIcon/Style"
import { CardDoctorData } from "./Style"
import { Title } from "../Title/Style"
import { TextHome } from "../HomeHeader/Style"

export const CardDoctor = ({
    name,
    speciality
}) => {
    return(
        <ContainerCard>
            <CardDoctorData>
                <CardIcon source={{ uri: "https://github.com/juliaathar.png" }} />

                <View style={{justifyContent:"center"}}>
                    <Title>{name}</Title>
                    <TextHome>{speciality}</TextHome>
                </View>
            </CardDoctorData>
        </ContainerCard>
    )
}