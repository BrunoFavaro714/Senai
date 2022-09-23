import {StyleSheet, View, Text, Image} from 'react-native';

export default function Resturant({ route }) {
    var {contato} = route.params;

    return(
        <View>
            <Image style={styles.imagem} source={contato.imagem}/>
            <Text>{contato.endereco}</Text>
            <Text>{contato.telefone}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imagem: {
        width: '100%',
        height: '200px',
    }
});