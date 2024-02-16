import { Image, Text, View } from "react-native";
import { ContainerUser } from "../../components/Container/Style";
import { GradientBackground, HomeHeader, TextHome } from "../../components/HomeHeader/Style";
import { UserIcon } from "../../components/UserIcon/Style";
import { TitleWhite } from "../../components/Title/Style";
import CalendarList from "../../components/CalendarList/CalendarList";
export const PatientHome = () => {
    return(
        <ContainerUser>
            <GradientBackground>
            <HomeHeader>
                <UserIcon source={require('../../assets/user.png')}/>
                <View>
                <TextHome>Bem-vindo</TextHome>
                <TitleWhite>Richard Kosta</TitleWhite>
                </View>

                <Image style={{ marginLeft: 90 }} source={require('../../assets/bell.png')}/>
            </HomeHeader>
            </GradientBackground>
            
            <CalendarList/>
   
        </ContainerUser>
    );
}