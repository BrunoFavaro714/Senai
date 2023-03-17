import { View,  TextInput, Alert, Image } from 'react-native';
import { useState } from 'react';

import Script from '../functions/script.js';
import Button from '../components/button.js';
import Styles from './styles/login.js';

const Login = ({ navigation }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={Styles.body}>
            <View style={Styles.container}>
                <Image style={Styles.imagem} source={require('../../assets/iconAgroTech.png')}/>

                <View style={Styles.inputContainer}>
                    <TextInput style={Styles.input} onChangeText={nText => setLogin(nText)} value={login} placeholder="Email"/>
                    <TextInput style={Styles.input} secureTextEntry={true} onChangeText={nText => setPassword(nText)} value={password} placeholder="Senha"/>
                </View>

                <View style={Styles.buttonContainer}>
                    <Button value='Login' onPress={()=>{Script.logar(login, password, navigation)}}/>
                </View>        
            </View>    
        </View>
    )
}

export default Login;