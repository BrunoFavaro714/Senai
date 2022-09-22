import { useState } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

export default function Home({route}) {

  var {descricao} = route.params;

  return (
    <View style={styles.container}>
      <Text>Marca : {descricao.marca}</Text>
      <Text>Sabor : {descricao.sabor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
