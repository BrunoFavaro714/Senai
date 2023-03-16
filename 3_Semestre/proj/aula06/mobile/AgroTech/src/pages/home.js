import { View,  Text, Alert, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

import homeFunction from '../functions/home.js';
import Card from '../components/card.js'

const Home = ({ navigation }) => {
    const [veiculos, setVeiculos] = useState([])

    useEffect(() => {
        let funcionario = JSON.parse(localStorage.getItem('usuario')).funcionario.nomeCompleto;
        fetch(`http://localhost:3000/get/frota/${funcionario}`)
        .then( resp => { return resp.json() })
        .then(frota => {
            setVeiculos(frota.Frota)
        })
    }, [])

    return(
        <View>
            <View>
                {
                    veiculos.map((veiculo, index) => {
                        console.log(veiculo);
                        return(
                            <Card veiculo={veiculo} onPress={() => {homeFunction.navigate(veiculo, navigation)}}/>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default Home;