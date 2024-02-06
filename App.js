import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from './src/screens/Navigation/Navigation';
import { Login } from './src/screens/Login/Login';
import { ResetPassword } from './src/screens/ResetPassword/ResetPassword';
import { SetPassword } from './src/screens/setPassword/setPassword';
import { CreateAccount } from './src/screens/CreateAccount/CreateAccount';

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

          <Stack.Screen
            //nome da tela
            name= 'Navigation'
            //componente que sera chamado   
            component={Navigation}
            //título da tela
            options={{title: 'Navigation'}}
          />

          <Stack.Screen
            //nome da tela
            name= 'Login'
            //componente que sera chamado   
            component={Login}
            //título da tela
            options={{title: 'Login'}}
          />

          <Stack.Screen
            //nome da tela
            name= 'ResetPassword'
            //componente que sera chamado   
            component={ResetPassword}
            //título da tela
            options={{title: 'Reset Password'}}
          />

          <Stack.Screen
            //nome da tela
            name= 'SetPassword'
            //componente que sera chamado   
            component={SetPassword}
            //título da tela
            options={{title: 'Set Password'}}
          />

          <Stack.Screen
            //nome da tela
            name= 'CreateAccount'
            //componente que sera chamado   
            component={CreateAccount}
            //título da tela
            options={{title: 'CreateAccount'}}
          />

        </Stack.Navigator>

      </NavigationContainer>
  );
}


