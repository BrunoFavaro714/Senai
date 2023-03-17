import { Text, TouchableOpacity } from 'react-native';

import Styles from './styles/card.js';

const Card = (props) => {
    const{veiculo, onPress} = props;

    return(
        <TouchableOpacity style={Styles.card} onPress={onPress}>
            <Text style={Styles.item}>{veiculo.placa}</Text>
            <Text style={Styles.item}>{veiculo.modelo}</Text>
            <Text style={Styles.item}>{veiculo.setor}</Text>
        </TouchableOpacity>
    )
}

export default Card;