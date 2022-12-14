import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import Home from './src/Drawer/index.js';
import Usuario from './src/Pages/Usuario';

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
            <Tab.Screen 
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
            />
            <Tab.Screen
            name="Usuario"
            component={Usuario}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
            />
      </Tab.Navigator>
    </NavigationContainer>
  );
}