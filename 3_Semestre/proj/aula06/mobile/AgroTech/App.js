import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './src/pages/home.js';
import Login from './src/pages/login.js';
import Veiculo from './src/pages/veiculo.js';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Veiculo' component={Veiculo}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}