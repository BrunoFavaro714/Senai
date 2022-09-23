import {View, Text, TouchableOpacity, Image, ScrollView, StyleSheet} from 'react-native';

export default function Compromissos({ navigation }) {
    const comp = [ 
    {
        "id":1,
        "tipo":2,
        "nome":"Escola",
        "horario":"07:30 - 11:30"
    },
    {
        "id":2,
        "tipo":1,
        "nome":"Consulta Médica",
        "horario":"13:00 - 13:40"
    },
    {
        "id":3,
        "tipo":3,
        "nome":"Ir ao mercado",
        "horario":"16:30 - 17:00"
    },
    {
        "id":4,
        "tipo":4,
        "nome":"Ir ao cinema",
        "horario":"20:00 - 22:30"
    },
    ];

    const imagens = [
    {
        'id_compro':1,
        'imagem':require('../../assets/escola.png')
    },
    {
        'id_compro':2,
        'imagem':require('../../assets/medico.png')
    },
    {
        'id_compro':3,
        'imagem':require('../../assets/mercado.png')
    },
    {
        'id_compro':4,
        'imagem':require('../../assets/cinema.png')
    },
    ];

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    comp.map((compromisso, index) => {
                        return (
                            <TouchableOpacity style={styles.body} onPress={() => {navigation.navigate('Descricao', { 'id_comp':compromisso.id})}}>
                                <View style={styles.backImg}>
                                    <Image style={styles.img} source={imagens[index].imagem}/>
                                </View>
                                <View style={styles.div}>
                                    <Text style={styles.text1}>{compromisso.nome}</Text>
                                    <Text style={styles.text2}>{compromisso.horario}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3A3A3A',
        width: '100%',
        height: '100%'
    },
    body: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '15px',
        
    },
    backImg: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '75px',
        height: '75px',
        backgroundColor: '#ffffff',
        borderRadius: '50%',
    },
    img: {
        width: '50px',
        height: '50px',
    },
    div: {
        width: '270px',
        borderBottomWidth: '3px',
        borderBottomColor: '#53693C'
    },
    text1: {
        fontSize: '18px',
        color: '#ffffff',
        marginLeft: '10px',
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    text2: {
        fontSize: '16px',
        color: '#ffffff',
        marginLeft: '10px',
        marginBottom: '5px'
    }
})