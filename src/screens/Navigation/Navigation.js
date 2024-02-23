//componente de navegacao

import { Button, View } from "react-native";

export const Navigation = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent:"space-around", alignItems:"center"}}>
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
            <Button
                title="Verify Email"
                onPress = {() => navigation.navigate("VerifyEmail")}
            />
            <Button
                title="User Profile"
                onPress = {() => navigation.navigate("UserProfile")}
            />
            <Button
                title="Profile"
                onPress = {() => navigation.navigate("Profile")}
            />
            <Button
                title="PatientHome"
                onPress = {() => navigation.navigate("PatientHome")}
            />
            <Button
                title="DoctorHome"
                onPress = {() => navigation.navigate("DoctorHome")}
            />
            <Button
                title="SelectClinic"
                onPress = {() => navigation.navigate("SelectClinic")}
            />
            <Button
                title="SelectDate"
                onPress = {() => navigation.navigate("SelectDate")}
            />
        </View>
    );
}