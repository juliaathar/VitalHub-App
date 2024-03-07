import React from "react";
import { View } from "react-native";
import { ContainerCard } from "../Container/Style";
import { CardIcon } from "../UserIcon/Style";
import { Title } from "../Title/Style";
import { TextHome, TypeExam } from "../HomeHeader/Style";
import { HourCard, TextHour } from "../HourCard/Style";
import { AntDesign } from "@expo/vector-icons";
import { ButtonCard, ButtonText } from "../Card/Style";

export const CardDoctorHome = ({
    situacao = "pendente",
    onPressCancel,
    onPressAppointment,
    navigation
}) => {
    const handlePress = () => {
        if (onPressAppointment) {
            onPressAppointment();
        }
    };

    return (
        <ContainerCard onPress={handlePress}>
            <CardIcon source={{ uri: "https://github.com/juliaathar.png" }} />
            <View>
                <Title>Dra. Júlia</Title>
                <View style={{ flexDirection: "row", gap: 5, marginBottom: 11 }}>
                    <TextHome>22 anos</TextHome>
                    <TextHome>•</TextHome>
                    <TypeExam>Rotina</TypeExam>
                </View>
                <View style={{ flexDirection: "row", gap: 35, alignItems: "center" }}>
                    <HourCard situacao={situacao}>
                        <AntDesign
                            name="clockcircle"
                            size={14}
                            color={situacao === "pendente" ? "#49B3BA" : "#8C8A97"}
                        />
                        <TextHour situacao={situacao} color={"#49B3BA"}>14:00</TextHour>
                    </HourCard>
                    {situacao === "pendente" ? (
                        <ButtonCard onPress={onPressCancel}>
                            <ButtonText situacao={situacao}>Cancelar</ButtonText>
                        </ButtonCard>
                    ) :  (
                        <ButtonCard onPress={() => navigation.navigate("Prescription")}>
                            <ButtonText situacao={situacao}>Ver Prontuario</ButtonText>
                        </ButtonCard>
                    ) }
                </View>
            </View>
        </ContainerCard>
    );
};
