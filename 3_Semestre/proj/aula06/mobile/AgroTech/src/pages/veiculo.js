import { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';

import Script from '../functions/script.js';
import Button from '../components/button.js';
import Styles from './styles/veiculos.js'

const Veiculo = ({ route, navigation }) => {
    const{ veiculo } = route.params;

    let dispoManu = veiculo.disponibilidade.em_manutencao;
    let dispoTran = veiculo.disponibilidade.em_transito;

    let buttonValues = Script.atualDispo(dispoManu, dispoTran)

    console.log(buttonValues);
    console.log(dispoManu, dispoTran);
    console.log(veiculo.disponibilidade);

    const altDispo = (manu, tran) => {
        veiculo.disponibilidade.em_manutencao = manu;
        veiculo.disponibilidade.em_transito = tran;

        Script.alterarDispo(veiculo.placa, veiculo.disponibilidade);
        
        navigation.goBack();
    }

    return(
        <View style={Styles.body}>
            <View style={Styles.container}>
                <View>
                    <Text style={Styles.item}>{veiculo.placa}</Text>
                    <Text style={Styles.item}>{veiculo.modelo}</Text>
                    <Text style={Styles.item}>{veiculo.setor}</Text>
                    <Text style={Styles.item}>{veiculo.funcao}</Text>
                    <Text style={Styles.item}>{veiculo.last_prev.slice(0,10)}</Text>
                </View>
                <View style={Styles.buttonContainer}>
                    <View style={Styles.button}>
                        <Button value={buttonValues.manutencao} onPress={() => {altDispo((!dispoManu), dispoTran)}}/>
                    </View>
                    <View style={Styles.button}>
                        <Button value={buttonValues.transito} onPress={() => {altDispo(dispoManu, (!dispoTran))}}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Veiculo;