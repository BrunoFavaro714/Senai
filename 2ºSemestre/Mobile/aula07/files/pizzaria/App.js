import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cardapio from './src/pages/cardapio';
import Carrinho from  './src/pages/carrinho';

const Stack = createNativeStackNavigator();
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Cardapio' component={Cardapio}/>
        <Stack.Screen name='Carrinho' component={Carrinho}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}