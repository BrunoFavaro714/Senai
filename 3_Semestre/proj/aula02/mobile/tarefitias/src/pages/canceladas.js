import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import List from '.././components/list/list.js';

const Canceladas = ({navigation}) => {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        fetch(`http://10.87.207.12:3000/get/tarefas/cancel`)
        .then(res => { return res.json() })
        .then(data => {
            setTarefas(data);
            console.log(data);
        })
    }, []);

    return(
        <View>
            <Text>Canceladas</Text>
            <View>
                <ScrollView>
                    {
                        tarefas.map((tarefa, index) => {
                            return(
                                <View key={index}>
                                    <List data={tarefa}></List>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default Canceladas;