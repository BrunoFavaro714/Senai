import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Restaurante from './src/resturant/resturant.js';
import Home from './src/home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Restaurante' component={Restaurante}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}