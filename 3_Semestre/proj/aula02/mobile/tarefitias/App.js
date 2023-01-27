import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Abertas from './src/pages/abertas';
import Finalizadas from './src/pages/finalizadas';
import Canceladas from './src/pages/canceladas';
import Criar from './src/pages/criar';

const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Abertas' component={Abertas}/>
        <Tab.Screen name='Finalizadas' component={Finalizadas}/>
        <Tab.Screen name='Canceladas' component={Canceladas}/>
        <Tab.Screen name='Adicionar Tarefas' component={Criar}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;