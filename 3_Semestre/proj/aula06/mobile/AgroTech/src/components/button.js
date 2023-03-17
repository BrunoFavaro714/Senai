import { TouchableOpacity, Text } from "react-native";

import Styles from './styles/button.js';

const Button = (props) => {
    const{value, onPress} = props;

    return(
        <TouchableOpacity style={Styles.button} onPress={onPress}>
            <Text style={Styles.item}>{value}</Text>
        </TouchableOpacity>
    )
}

export default Button;