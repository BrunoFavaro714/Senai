import * as React from 'react';
import { View, TextInput, Image, Text, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
    return(
        <View style={style.container}>
            <TextInput style={style.input} placeholder="buscar publicação..." />
            <View style={style.publi}>
                <Image style={style.img} source={{ uri: 'https://3.bp.blogspot.com/-F5hLHaH8jps/XOMo0VJ8KdI/AAAAAAAABd0/8wfQwM-qgUIbIRLp2Z37HOV2U67i4imCgCLcBGAs/s1600/naom_5bbddaa8a4c77.jpg' }}/>
                <View style={style.infos}>
                    <View style={style.naosei}>
                        <Text style={style.tema}>Publicado por:</Text>
                        <Text style={style.a}>victoriacduo às 14:30:12</Text>
                    </View>
                    <View style={style.naosei}>
                        <Text style={style.tema}>Categoria:</Text>
                        <Text style={style.a}>Stardew Valley</Text>
                    </View>
                </View>
            </View>
            <View style={style.publi}>
                <Image style={style.img} source={{ uri: 'https://3.bp.blogspot.com/-F5hLHaH8jps/XOMo0VJ8KdI/AAAAAAAABd0/8wfQwM-qgUIbIRLp2Z37HOV2U67i4imCgCLcBGAs/s1600/naom_5bbddaa8a4c77.jpg' }}/>
                <View style={style.infos}>
                    <View style={style.naosei}>
                        <Text style={style.tema}>Publicado por:</Text>
                        <Text style={style.a}>victoriacduo às 14:30:12</Text>
                    </View>
                    <View style={style.naosei}>
                        <Text style={style.tema}>Categoria:</Text>
                        <Text style={style.a}>Stardew Valley</Text>
                    </View>
                </View>
            </View>
            <View style={style.publi}>
                <Image style={style.img} source={{ uri: 'https://3.bp.blogspot.com/-F5hLHaH8jps/XOMo0VJ8KdI/AAAAAAAABd0/8wfQwM-qgUIbIRLp2Z37HOV2U67i4imCgCLcBGAs/s1600/naom_5bbddaa8a4c77.jpg' }}/>
                <View style={style.infos}>
                    <View style={style.naosei}>
                        <Text style={style.tema}>Publicado por:</Text>
                        <Text style={style.a}>victoriacduo às 14:30:12</Text>
                    </View>
                    <View style={style.naosei}>
                        <Text style={style.tema}>Categoria:</Text>
                        <Text style={style.a}>Stardew Valley</Text>
                    </View>
                </View>
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