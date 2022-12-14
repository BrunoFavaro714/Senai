import * as React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Pressable } from 'react-native';

export default function Usuario(){
    
    return(
        <View style={style.container}>
            <View style={style.main}>
                <Image style={style.img} source={ require('../../../assets/cato.jpg') }/>
                <View style={style.background}>
                    <Text style={style.username}>@ victoriacduo</Text>
                </View>
                <View style={style.catFav}>
                    <Text style={style.catNome}>STARDEW VALLEY</Text>
                    <Image style={style.icon} source={{ uri: 'https://github.com/BrunoFavaro714/Senai/blob/main/2%C2%BASemestre/Projetos/Forum/front/assets/icons/SV_icon.png?raw=true' }} />
                </View>
                <View style={style.ajdj}>
                    <TouchableOpacity style={style.bots}><Text>Alterar username</Text></TouchableOpacity>
                    <TouchableOpacity style={style.bots}><Text>Alterar senha</Text></TouchableOpacity>
                    <TouchableOpacity style={style.bots}><Text>Minhas publicações</Text></TouchableOpacity>
                    <TouchableOpacity style={style.bots}><Text>Deletar conta</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        paddingTop: '40px'
    },
    main:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px',
        padding: '15px'
    },
    img:{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        margin: '20px'
    },
    background:{
        width: '180px',
        height: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff3c3c',
        borderRadius: '20px',
    },
    username:{
        fontWeight: 'bold',
        fontSize: '16px'
    },
    catFav:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '150px',
        height: '30px',
        margin: '25px'
    },
    icon:{
        width: '20px',
        height: '20px'
    },
    catNome:{
        fontWeight: 'bold',
        fontSize: '14px',
    },
    ajdj:{
        width: '200px'
    },
    bots: {
        height: '35px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff3c3c',
        margin: '7px',
        fontWeight: 'bold'
      },
})