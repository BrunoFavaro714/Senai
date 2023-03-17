import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        backgroundColor: '#024463'
    },
    container: {
        height: '65%',
        width: '80%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        display: 'flex'
    },
    inputContainer: {
        width: '100%',
    },
    input:{
        width: '100%',
        height: '30px',
        marginBottom: '10px',
        paddingLeft: '10px',
        backgroundColor: 'rgb(255,255,255)',
        borderRadius: '10px',
        borderBottomWidth: '2px',
        borderBottomColor: '#38c977'
    },
    buttonContainer:{
        width: '100px',
        height: '40px'
    },
    imagem: {
        width: '40vw',
        height: '40vw'
    }
})