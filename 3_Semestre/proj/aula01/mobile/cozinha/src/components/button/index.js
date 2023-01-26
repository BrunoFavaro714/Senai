
import { TouchableOpacity, Text, Image } from 'react-native';

import styles from './style';

export default function Button(props) {
    const{value, onPress} = props;

    return(
        <TouchableOpacity style={styles.button} onPress={() => {onPress}}>
            <Image style={styles.image} source={require('../../../assets/check-mark.svg')}/>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    );
}