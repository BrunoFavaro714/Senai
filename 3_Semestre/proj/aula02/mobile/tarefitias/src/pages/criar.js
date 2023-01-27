import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';


import Clock from '../components/clock/clock';
import styles from './style/criar'

const Crirar = ({navigation}) => {
    const [desc, setDesc] = useState('');
    const [time, setTime] = useState('00:00');

    const criarTarefa = () => {
        let data = {
            desc:desc,
            inicio:time
        }
        fetch(`http://10.87.207.12:3000/post/tarefas`, {
            "method": "POST",
            "headers":{
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data)
        })
        .then((response) => {
            window.location.reload();
            return response.json()
        })
    }

    return(
        <View>
            <Text>Adicionar Tarefas</Text>
            <TextInput onChangeText={change => {setDesc(change)}} value={desc}/>
            <Clock style={styles.clock}/>
            <TouchableOpacity style={styles.button} onPress={() => {criarTarefa()}}>
                <Text>Adicionar Tarefa</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Crirar