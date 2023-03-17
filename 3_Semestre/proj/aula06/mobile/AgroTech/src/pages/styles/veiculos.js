import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        backgroundColor: '#024463',
        paddingTop: '15px',
    },
    container:{
        width: '80%',
        height: '70%',
        alignItems: 'center',
        display: 'flex',
        padding: '10px',
        backgroundColor: '#f3f3f3',
        position: 'relative',
    },
    item: {
        marginBottom: '10px',
        fontSize: '16px'
    },
    buttonContainer:{
        position: 'absolute',
        bottom: '10px',
        height: '25%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        width: '90%',
        height: '45%'
    }
})