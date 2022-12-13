import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Primeira({ navigation }) {
        return(
            <View style={style.container}>
                <View style={style.temporario}>
                    <Text>Depoiseu faço</Text>
                </View>
            </View>
        )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        padding: '15px'
    },
    temporario:{
        width: '300px',
        height: '100px',
        backgroundColor: '#fff'
    }
})