import {View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity} from 'react-native';

export default function App(){
  const funcionarios = [{
    'imagem':'https://www.chefbob.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/05/2021-05-12-como-deixar-os-gatos-mais-tranquilos.jpg.webp',
    'nome':'Andre Macedo Neves',
    'cargo':'Gerente geral'
  },
  {
    'imagem':'https://life.dn.pt/files/2019/02/shutterstock_796071583vale-1200x675_c.jpg',
    'nome':'Filipe Algusto Texeira',
    'cargo':'Operador Logistico'
  },
  {
    'imagem':'https://blog.cobasi.com.br/wp-content/uploads/2021/10/Curiosidades-sobre-gatos.png',
    'nome':'Carol Naluti',
    'cargo':'Supervisora'
  }]

 // const imgGato = require('./assets/gato.jpg');
  return(
    <View style={style.body}>
      {
      funcionarios.map(funcionario =>{
        return(
        <View style={style.card}>
          <Image style={style.imagens} source={funcionario.imagem}/>
          <Text>{`${funcionario.nome}`}</Text>
          <Text>{`${funcionario.cargo}`}</Text>
        </View>
        );
      })
      }
    </View>
  )
};

const style = StyleSheet.create({
  body:{
    height:'100vh',
    width:'100vw',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card:{
    flexDirection:'row',
    width: 'clamp(350px,90vw, 600px)',
    height: '100px',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
    padding: '5px',
    border: '1px solid #333333',
    borderRadius: '15px'
  },
  imagens: {
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    border: '1px solid #333333'
  }
});