import { useEffect, useState } from 'react';
import {View, Text, ScrollView} from 'react-native';

import Lista from './src/components/item/index.js';

import Button from './src/components/button/index.js';

export default function App(){
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    setInterval(()=>{
      console.log('Atualizar Lista')
      listarPedidos();
    }, 1500)
  }, [])

  const listarPedidos = () => {
    fetch('http://10.87.207.12:3000/get/pedidos')
    .then(response => { return response.json(); })
    .then(data => {
      setPedidos(data)
    })
  }

  const enviarPedido = (id) => {
    fetch('http://10.87.207.12:3000/put/pedidos', {
      "method":"PUT",
      "headers":{
        "Content-Type":"application/json"
      },
      "body": JSON.stringify({body:"entrega",id_pedido:id})
    })
    .then(response => {

    })
  }

  return(
    <View>
      <View>
        <Text>Cozinha</Text>
      </View>
      <View>
        <ScrollView>
          {
            pedidos.map((pedido, index) => {
              return(
                <View key={index}>
                  <Lista info={pedido}/>
                  <View>
                    <Button value='Enviar Entrega' onPress={() => {enviarPedido(pedido.id_pedido)}}/>
                  </View>
                </View>
              )
            })
          }
          
        </ScrollView>
      </View>
    </View>
  );
}
