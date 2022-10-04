import { useState } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import List from '../../components/list'

import styles from './style';

export default function Home({route}){
    const [search, setSearch] = useState('');

    const{user_id} = route.params;
    var user;

    const chamados = [
        {
            "user_id": 1,
            "chamados": [
                {
                    "titulo":"Manutenção de Roteador",
                    "descricao":"Cliente reclamou que está sem internet, possível troca"
                },
                {
                    "titulo":"Mudança de Endereço",
                    "descricao":"Fazer a instalação na nova Residencia"
                },
                {
                    "titulo":"Recolher equipamento",
                    "descricao":"Assinatura Cancelada, recolher os equipamentos da instalação"
                }
            ]
        },
        {
            "user_id": 2,
            "chamados": [
                {
                    "titulo":"Recolher equipamento",
                    "descricao":"Assinatura Cancelada, recolher os equipamentos da instalação"
                },
                {
                    "titulo":"Mudança de Endereço",
                    "descricao":"Fazer a instalação na nova instalação"
                },
                {
                    "titulo":"Manutenção de Roteador",
                    "descricao":"Cliente reclamou que está sem internet, possível troca"
                }
            ]
        }
    ]

    chamados.forEach(chamado => {
        if(chamado.user_id == user_id) {
            user = chamado.chamados;
        }
    })
    
    return (
        <View style={styles.body}>
            <TextInput style={styles.input} onChangeText={change => {setSearch(change)}} value={search}/>
            <ScrollView>
                {
                    user.map((item, index) => {
                        if(item.titulo.includes(search)){
                            return(
                                <List titulo={item.titulo} descricao={item.descricao}/>
                            )
                        }
                    })
                }
            </ScrollView>
        </View>
    );
}