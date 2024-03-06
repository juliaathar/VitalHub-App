//Importar recursos do bottom tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { PatientHome } from "../PatientHome/PatientHome"
import { Profile } from "../Profile/Profile"
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons"
import { View } from "react-native";
import { ContentIcon, TextIcon } from "./Style";

const BottomTab = createBottomTabNavigator();

export const Main = () => {
    return (
        <BottomTab.Navigator

            //definir rota inicial
            initialRouteName="PatientHome"

            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: "#FFFFFF", height: 80 },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    if (route.name === "PatientHome") {
                        return (
                            <ContentIcon tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}>
                                <FontAwesome name="calendar-check-o" size={18} color="#4E4B59" />
                                {focused && <TextIcon>Agenda</TextIcon>}
                            </ContentIcon>
                        )
                    } else {
                        return(
                            <ContentIcon tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}>
                            <FontAwesome5
                                name="user-circle" size={18} color="#4E4B59"
                            />
                            {focused && <TextIcon>Perfil</TextIcon>}
                        </ContentIcon>
                        )
                    }
                }
            })}

        >
            {/* Criando rota da Home */}
            <BottomTab.Screen
                name="PatientHome"
                component={PatientHome}
            />

            {/* Criando rota de Perfil */}
            <BottomTab.Screen
                name="Profile"
                component={Profile}
            />
        </BottomTab.Navigator>
    )
}