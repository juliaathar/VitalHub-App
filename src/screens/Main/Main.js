//Importar recursos do bottom tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { PatientHome } from "../PatientHome/PatientHome"
import { Profile } from "../Profile/Profile"
import {FontAwesome, FontAwesome5} from "@expo/vector-icons"
import { View } from "react-native";

const BottomTab = createBottomTabNavigator();

export const Main = () => {
    return (
        <BottomTab.Navigator

        //definir rota inicial
        initialRouteName="PatientHome"

        screenOptions={ ({route}) => ({
            tabBarStyle: {backgroundColor: "#FFFFFF", height: 80, paddingTop: 10},
            tabBarActiveBackgroundColor: "transparent",
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => {
                if(route.name === "PatientHome"){
                    return(
                <></>
                    )
                }else{

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