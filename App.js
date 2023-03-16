import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loading from './src/screens/loading';
import SignIn from './src/screens/auth/signin';
import SignUp from './src/screens/auth/signup';
import ForgotPassword from './src/screens/auth/forgotPassword';
import Main from './src/screens/main';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Initializes the Splash navigation container
    <NavigationContainer>
      <Stack.Navigator initialRouteName='loading' screenOptions={{headerShown: false}} >
        <Stack.Screen name="loading" component={Loading}/>
        <Stack.Screen name="signin" component={SignIn}/>
        <Stack.Screen name="signup" component={SignUp}/>
        <Stack.Screen name="forgotPassword" component={ForgotPassword} />
        <Stack.Screen name="main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}