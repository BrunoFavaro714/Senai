import { View,  TextInput, Alert, Image } from 'react-native';
import { useState } from 'react';

import loginFunction from '../functions/login.js';
import Button from '../components/button.js'

const Login = ({ navigation }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View>
            {/* <Image style={styles.imagem} source={require('../../../assets/logo.png')}/> */}

            <TextInput onChangeText={nText => setLogin(nText)} value={login} placeholder="Email"/>
            <TextInput secureTextEntry={true} onChangeText={nText => setPassword(nText)} value={password} placeholder="Senha"/>

            <Button value='Login' onPress={()=>{loginFunction.logar(login, password, navigation)}}/>
        </View>
    )
}

export default Login;