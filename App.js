import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from './src/screens/Navigation/Navigation';
import { Login } from './src/screens/Login/Login';
import { ResetPassword } from './src/screens/ResetPassword/ResetPassword';
import { CreateAccount } from './src/screens/CreateAccount/CreateAccount';
import { VerifyEmail } from './src/screens/VerifyEmail/VerifyEmail'
import { SetPassword } from './src/screens/setPassword/setPassword';
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { IconHeader } from './src/components/IconHeader/Style';
import { UserProfile } from './src/screens/UserProfile/UserProfile';
import { Profile } from './src/screens/Profile/Profile';
import { PatientHome } from './src/screens/PatientHome/PatientHome';
import { SelectClinic } from './src/screens/SelectClinic/SelectClinic';
import { DoctorHome } from './src/screens/DoctorHome/DoctorHome';
import { SelectDoctor } from './src/screens/SelectDoctor/SelectDoctor';
import { SelectDate } from './src/screens/SelectDate/SelectDate';

//instancia do StackNavigator

const Stack = createNativeStackNavigator();


export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_600SemiBold
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
          options={{
            title: 'Navigation',
          }}
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

        <Stack.Screen
          //nome da tela
          name='UserProfile'
          //componente que sera chamado   
          component={UserProfile}
          //título da tela
          options={{ title: 'UserProfile' }}
        />
        <Stack.Screen
          //nome da tela
          name='Profile'
          //componente que sera chamado   
          component={Profile}
          //título da tela
          options={{ title: 'Profile' }}
        />
        <Stack.Screen
          //nome da tela
          name='PatientHome'
          //componente que sera chamado   
          component={PatientHome}
          //título da tela
          options={{ title: 'PatientHome' }}
        />
        <Stack.Screen
          //nome da tela
          name='DoctorHome'
          //componente que sera chamado   
          component={DoctorHome}
          //título da tela
          options={{ title: 'DoctorHome' }}
        />
        <Stack.Screen
          //nome da tela
          name='SelectClinic'
          //componente que sera chamado   
          component={SelectClinic}
          //título da tela
          options={{ title: 'SelectClinic' }}
        />

        <Stack.Screen
          //nome da tela
          name='SelectDoctor'
          //componente que sera chamado   
          component={SelectDoctor}
          //título da tela
          options={{ title: 'SelectDoctor' }}
        />

        <Stack.Screen
          //nome da tela
          name='SelectDate'
          //componente que sera chamado   
          component={SelectDate}
          //título da tela
          options={{ title: 'SelectDate' }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}


