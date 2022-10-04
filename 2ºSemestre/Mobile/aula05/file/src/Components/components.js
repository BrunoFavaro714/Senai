const Component = (compromisso) => {
    return(
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
}