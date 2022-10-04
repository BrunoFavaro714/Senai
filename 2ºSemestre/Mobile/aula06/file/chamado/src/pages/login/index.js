import { View, TextInput, Alert, Image } from 'react-native';
import { useState } from 'react';
import Button from '../../components/button';

import styles from './style';

export default function Login({ navigation }){
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const users = [
        {
            "id": 1,
            "email": "user01@empresa.com",
            "senha": "teste1234",
        },
        {
            "id": 2,
            "email": "user02@empresa.com",
            "senha": "1234teste",
        }
    ]

    const compare = () => {
        let confere = false;
        users.forEach(user => {
            if (user.email == login){
                if (user.senha == password){
                    confere = true;
                    return(navigation.navigate("Home", {"user_id":user.id}));
                }
            }
        });

        if(!confere){
            Alert.alert("Erro!", "Login ou Senha incorreta!");
        }
    }

    return (
        <View style={styles.body}>
            <View style={styles.contentBody}>
                <Image style={styles.imagem} source={require('../../../assets/logo.png')}/>

                <TextInput style={styles.input} onChangeText={nText => setLogin(nText)} value={login} placeholder="Email"/>
                <TextInput style={styles.input} secureTextEntry={true} onChangeText={nText => setPassword(nText)} value={password} placeholder="Senha"/>

                <Button value='Login' onPress={()=>{compare()}}/>
            </View>
        </View>
    );
}