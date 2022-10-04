import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [salario, setSalaraio] = useState('');
  const [showNome, setShowNome] = useState('');
  const [showCargo, setShowCargo] = useState('');
  const [showSalario, setShowSalario] = useState('');

  const cadastrar = async () => { 
     let funcionario =[
      {
        nome:nome,
        cargo:cargo,
        salario:salario
      }
    ]
    try {
      const query = JSON.stringify(funcionario);
      await AsyncStorage.setItem("func", query);
    }catch(err) {
      console.log(err); 
    }
  }

  const mostrar = async () => {
    try {
      const data = await AsyncStorage.getItem("func");
      setShowNome(JSON.parse(data).nome);
      console.log(showNome)
      console.log(data)

    }catch(err) {
      console.log
    }
  }

  return(
    <View>
      <TextInput value={nome} onChangeText={(val) => { setNome(val) }}/>
      <TextInput value={cargo} onChangeText={(val) => { setCargo(val) }}/>
      <TextInput value={salario} onChangeText={(val) => { setSalaraio(val) }}/>
      <Button title='Cadastrar' onPress={() => { cadastrar() }}/>

      <Button title='Mostrar' onPress={() => { mostrar() }}/>
    </View>
  )
}