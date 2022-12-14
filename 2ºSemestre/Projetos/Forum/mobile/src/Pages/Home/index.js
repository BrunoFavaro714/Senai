import { useState, useEffect } from 'react';
import { View, TextInput, Image, Text, StyleSheet, ScrollView } from 'react-native';

export default function Home({ navigation }) {
    const [publi, setPubli] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/reenyedito/get/posts')
        .then(res => { return res.json() })
        .then(resp => {
            setPubli(resp)
        })
    }, [publi])

    return(
        <View style={style.container}>
            <TextInput style={style.input} placeholder="buscar publicação..." />
            <ScrollView>
                {
                    publi.map((post, index) => {
                        return (
                            <View style={style.publi}>
                                <Image style={style.img} source={post.img}/>
                                <View style={style.infos}>
                                    <View style={style.naosei}>
                                        <Text style={style.tema}>Publicado por:</Text>
                                        <Text style={style.a}>{post.user} às {(post.horario).slice(0,10)} {(post.horario).slice(11, 16)}</Text>
                                    </View>
                                    <View style={style.naosei}>
                                        <Text style={style.tema}>Categoria:</Text>
                                        <Text style={style.a}>{post.nome_cat}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        padding: '15px'
    },
    input:{
        width: '300px',
        height: '35px',
        backgroundColor: '#FFF',
        padding: '15px',
        borderRadius: '20px'
    },
    publi:{
        flexDirection: 'column',
        width: '300px',
        height: '160px',
        backgroundColor: '#FFF',
        margin: '20px',
        borderRadius: '10px'
    },
    img:{
        width: '300px',
        height: '120px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
    },
    infos:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    naosei:{
        paddingTop: '3px',
        paddingRight: '10px',
        paddingLeft: '10px'

    },
    tema:{
        fontSize: '13px',
        fontWeight: 'bold'
    },
    a:{
        fontSize: '11px'
    }
})