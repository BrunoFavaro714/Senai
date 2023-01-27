import { View, Text } from 'react-native';

import styles from './style';

const List = (props) => {
    const {data} = props;

    if(data.hora_fim == null){
        data.hora_fim="--"
    }

    return(
        <View style={styles.body}>
            <Text>{data.descri}</Text>
            <Text>{data.hora_inicio}</Text>
            <Text>{data.hora_fim}</Text>
            <Text>{data.estado}</Text>
        </View>
    )
}

export default List;