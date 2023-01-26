import {View, Text} from 'react-native';

import styles from './style.js';

export default function Lista(props) {
    const{info} = props

    return(
        <View style={styles.body}>
            <View style={styles.infos}>
                <Text>ID: {info.id_pedido}</Text>
                <Text>Cliente: {info.cliente}</Text>
                <Text>Endereço: {info.endereco}</Text>
                <Text>Horario: {info.hora_pedido}</Text>
                <Text>Produto: {info.produto}</Text>
                <Text>Data: {info.data}</Text>
            </View>
        </View>
    )
}