import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//instancia do StackNavigator

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //Navegacao 
      //Container
      //StackNavigator
      //StackScreen

      // envolve a estrutura da navegacao
      <NavigationContainer>

        <Stack.Navigator>
          
        </Stack.Navigator>

      </NavigationContainer>
  );
}


