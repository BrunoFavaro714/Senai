import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from '../Pages/Home/Home.js';
import Usuario from '../Pages/Usuario/Usuario.js';
import Favoritados from '../Pages/Favoritos/Favoritados.js';

export default function Seila(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Favoritos" component={Favoritados}/>
        </Drawer.Navigator>
    );
}