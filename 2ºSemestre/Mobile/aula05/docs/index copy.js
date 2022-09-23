import {View, Text, StyleSheet} from 'react-native';

export default function Descricao({ route }) {
    var {id_comp} = route.params;

    
    const descricoes = [
        {
            "id_compromisso": 1,
            "descricao":"- Entrega da Atividade.\n- Matéria Nova.",
            "observacoes":"",
        },
        {
            "id_compromisso": 4,
            "descricao":"",
            "observacoes":"Não esquecer a carteirinha !!!",
        },
        {
            "id_compromisso": 3,
            "descricao":"- Pão.\n- Presunto.\n- Queijo.",
            "observacoes":"Ver se o sabão está em promoção e levar uma caixa.",
        },
        {
            "id_compromisso": 2,
            "descricao":"Consulta de retorno.",
            "observacoes":"Levar os exames.",
        },
    ]

    var desc;
    var obs;
    
    descricoes.forEach(descricao => {
        if(descricao.id_compromisso == id_comp){
            desc = descricao.descricao;
            obs = descricao.observacoes;
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Descrição:</Text>
            <Text style={styles.text2}>{desc}</Text>
            <Text style={styles.text1}>Observações:</Text>
            <Text style={styles.text2}>{obs}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3A3A3A',
        width: '100%',
        height: '100%'
    },
    text1: {
        padding: '10px',
        fontWeight: 'bold',
        fontSize: '22px',
        color: '#ffffff',
    },
    text2: {
        margin: '15px',
        fontSize: '18px',
        color: '#ffffff',
    }
})