//componente de navegacao

import { Button, View } from "react-native";

export const Navigation = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
            <Button
                title="Login"
                onPress = {() => navigation.navigate("Login")}
            />
            <Button
                title="Reset Password"
                onPress = {() => navigation.navigate("ResetPassword")}
            />
            <Button
                title="Set Password"
                onPress = {() => navigation.navigate("SetPassword")}
            />
            <Button
                title="Create Account"
                onPress = {() => navigation.navigate("CreateAccount")}
            />
        </View>
    );
}