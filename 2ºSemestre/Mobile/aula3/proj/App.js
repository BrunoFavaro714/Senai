import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Produto from './src/pages/Produto/index.js';
import Segunda from './src/pages/Segunda/index.js'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Segunda}/> 
        <Stack.Screen name="Produto" component={Produto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}