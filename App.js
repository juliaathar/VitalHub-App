import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from './src/screens/Navigation/Navigation';
import { Login } from './src/screens/Login/Login';
import { ResetPassword } from './src/screens/ResetPassword/ResetPassword';
import { CreateAccount } from './src/screens/CreateAccount/CreateAccount';
import {VerifyEmail} from './src/screens/VerifyEmail/VerifyEmail'
import { SetPassword } from './src/screens/setPassword/setPassword';
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium } from '@expo-google-fonts/quicksand';

//instancia do StackNavigator

const Stack = createNativeStackNavigator();


export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium
  })


  if (!fontsLoaded && !fontsError) {
    return null;
  }

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
          name='Navigation'
          //componente que sera chamado   
          component={Navigation}
          //título da tela
          options={{ title: 'Navigation' }}
        />

        <Stack.Screen
          //nome da tela
          name='Login'
          //componente que sera chamado   
          component={Login}
          //título da tela
          options={{ title: 'Login' }}
        />

        <Stack.Screen
          //nome da tela
          name='ResetPassword'
          //componente que sera chamado   
          component={ResetPassword}
          //título da tela
          options={{ title: 'Reset Password' }}
        />

        <Stack.Screen
          //nome da tela
          name='SetPassword'
          //componente que sera chamado   
          component={SetPassword}
          //título da tela
          options={{ title: 'Set Password' }}
        />

        <Stack.Screen
          //nome da tela
          name='CreateAccount'
          //componente que sera chamado   
          component={CreateAccount}
          //título da tela
          options={{ title: 'CreateAccount' }}
        />

        <Stack.Screen
          //nome da tela
          name='VerifyEmail'
          //componente que sera chamado   
          component={VerifyEmail}
          //título da tela
          options={{ title: 'VerifyEmail' }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}


