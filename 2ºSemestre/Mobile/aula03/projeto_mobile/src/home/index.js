import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';

export default function Home({ navigation }) {
    const restaurantes =  [
        {
            'nome':'Resturant',
            'nota':'4.5',
            'contato':{
                'imagem':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZpEid5H6okuXJ9e1QfLL66dcqNe1Ly2105Q&usqp=CAU',
                'endereco':'Rua Alguma',
                'telefone':'(19)99999-9999'
            }
        },
        {
            'nome':'Swablo',
            'nota':'4.3',
            'contato':{
                'imagem':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oLQU6hR9ylUNoa0ysyrQl3go8RNgWk695g&usqp=CAU',
                'endereco':'Rua Aquela',
                'telefone':'(19)98888-8888'
            }
        },
        {
            'nome':'Tusco',
            'nota':'5.0',
            'contato':{
                'imagem':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbA591kyiILuibDQD7yRRoMWZdu_NO3BjLQ&usqp=CAU',
                'endereco':'Rua Todas',
                'telefone':'(19)90000-1111'
            }
        }
    ];

    return (
        <View>
            <ScrollView>
                {
                    restaurantes.map((restaurante, index) => {
                        return(
                            <TouchableOpacity style={styles.restaurantes} onPress={() => {navigation.navigate('Restaurante', { 'contato': restaurante.contato} )}}>
                                <Text style={styles.nomeRest}>{restaurante.nome}</Text>
                                <Text style={styles.notaRest}>Nota: {restaurante.nota}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    restaurantes: {
        height: '75px',
        justifyContent: 'center',
        padding: 12
    },
    nomeRest: {
        fontSize: 20
    },
    notaRest: {
        fontSize: 16
    }
})