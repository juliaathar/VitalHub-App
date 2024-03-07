import { Image, View } from 'react-native'
import { UserIcon } from '../UserIcon/Style'
import { BoxUser, TextHome } from './Style'
import { TitleWhite } from '../Title/Style'
import { ViewHeader } from './Style'

export const HomeHeader = ({ navigation }) => {
    return (
        <ViewHeader>
            <BoxUser onPress={() => navigation.navigate("Profile")}>
                <UserIcon source={{ uri: "https://github.com/gabrielarosa1309.png" }} />
                <View>
                    <TextHome>Bem-vinda</TextHome>
                    <TitleWhite>Gabriela Ramos</TitleWhite>
                </View>

            </BoxUser>
            <Image style={{ marginLeft: 90 }} source={require('../../assets/bell.png')} />
        </ViewHeader>
    )
}