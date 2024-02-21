import { CardData, ContainerCard } from "../Container/Style";
import { CardIcon, UserIcon } from "../UserIcon/Style";
import { Title } from "../Title/Style";
import { TextHome, TypeExam } from "../HomeHeader/Style";
import { Image, View } from "react-native";
import { HourCard, TextHour, VectorHour } from "../HourCard/Style";
import { AntDesign } from "@expo/vector-icons"
import { ButtonCard, ButtonText } from "./Style";

export const Card = ({
    situacao = "pendente",
    onPressCancel,
    onPressAppointment,
}) => {
    return (
        <ContainerCard>
            <CardIcon source={{ uri: "https://github.com/juliaathar.png" }} />
            <CardData>
                <Title>Dra. Júlia</Title>
                <View style={{ flexDirection: "row", gap: 5, marginBottom: 11 }}>
                    <TextHome>22 anos</TextHome>
                    <TextHome>•</TextHome>
                    <TypeExam>Rotina</TypeExam>
                </View>
                <View style={{ flexDirection: "row", gap: 50, alignItems: "center" }}>
                    <HourCard situacao={situacao}>
                        <AntDesign
                            name="clockcircle"
                            size={14}
                            color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"}
                        />
                        <TextHour situacao={situacao} color={"#49B3BA"}>14:00</TextHour>
                    </HourCard>

                    {
                        situacao == "cancelado" ? (
                            <>
                            </>
                        ) : situacao == "pendente" ? (
                            <ButtonCard onPress={onPressCancel}>
                                <ButtonText situacao={situacao}>Cancelar</ButtonText>
                            </ButtonCard>
                        ) : (
                            <ButtonCard onPress={onPressAppointment}>
                                <ButtonText situacao={situacao}>Ver Prontuário</ButtonText>
                            </ButtonCard>
                        )
                    }
                </View>
            </CardData>
        </ContainerCard>
    );
}