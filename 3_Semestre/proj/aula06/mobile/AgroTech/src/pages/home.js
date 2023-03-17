import { View,  Text, Alert, Image, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

import Script from '../functions/script.js';
import Card from '../components/card.js'
import Styles from './styles/home.js';

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
        <View style={Styles.body}>
            <ScrollView>
                {
                    veiculos.map((veiculo, index) => {
                        return(
                            <View style={Styles.container}>
                                <Card veiculo={veiculo} onPress={() => {Script.navigateToVeiculo(veiculo, navigation)}}/>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Home;