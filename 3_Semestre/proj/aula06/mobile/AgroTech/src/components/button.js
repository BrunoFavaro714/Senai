import { TouchableOpacity, Text } from "react-native";

const Button = (props) => {
    const{value, onPress} = props;

    return(
        <TouchableOpacity onPress={onPress}>
            <Text>{value}</Text>
        </TouchableOpacity>
    )
}

export default Button;