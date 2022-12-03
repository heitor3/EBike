import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screen/Home';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return <Stack.Navigator
    screenOptions={{ headerShown: false, statusBarColor: 'transparent' }}
  >
    <Stack.Screen name='Home' component={Home} />

  </Stack.Navigator>
}