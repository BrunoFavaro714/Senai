import { Text, TouchableOpacity } from 'react-native';

const Card = (props) => {
    const{veiculo, onPress} = props;

    return(
        <TouchableOpacity onPress={onPress}>
            <Text>{veiculo.placa}</Text>
            <Text>{veiculo.modelo}</Text>
            <Text>{veiculo.setor}</Text>
        </TouchableOpacity>
    )
}

export default Card;