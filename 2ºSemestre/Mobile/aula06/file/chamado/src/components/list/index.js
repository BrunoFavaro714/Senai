import { View, Text } from 'react-native';

import styles from './style';

export default function List(props) {
    const {titulo, descricao} = props;

    return(
        <View style={styles.body}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
        </View>
    );
}