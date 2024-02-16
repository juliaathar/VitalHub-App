import { CardData, ContainerCard } from "../Container/Style";
import { CardIcon, UserIcon } from "../UserIcon/Style";
import { Title } from "../Title/Style";
import { TextHome, TypeExam } from "../HomeHeader/Style";
import { Image, View } from "react-native";
import { HourCard, TextHour, VectorHour } from "../HourCard/Style";
import { IconHeader } from "../IconHeader/Style";
import { LinkBottom, LinkCancel } from "../LinkBottom/Style";

export const Card = () => {
    return (
        <ContainerCard>
            <CardIcon source={require('../../assets/doctor.png')} />
            <CardData>
                <Title>Dr. Claudio</Title>
                <View style={{ flexDirection: "row", gap: 5, marginBottom: 11 }}>
                    <TextHome>22 anos</TextHome>
                    <TextHome>•</TextHome>
                    <TypeExam>Rotina</TypeExam>
                </View>
                <HourCard>
                    <VectorHour source={require('../../assets/time.png')} />
                    <TextHour>14:00</TextHour>
                </HourCard>
                <LinkCancel>Cancelar</LinkCancel>
            </CardData>
        </ContainerCard>
    );
}