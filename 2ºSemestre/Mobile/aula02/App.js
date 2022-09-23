import {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native';

export default function App(){
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const [btn, setBTN] = useState(null);
  const [value, setValue] = useState(null);

  return(
    <View style={style.body}>
     <View style={style.calc}>
        <TextInput style={style.inp} value={input1} onChangeText={(val) => {setInput1(val)}}/>
        <TextInput style={style.inp} value={input2} onChangeText={(val) => {setInput2(val)}}/>
        <View style={style.opera}>
          <TouchableOpacity style={style.bot} onPress={() => {setBTN(Number(input1) + Number(input2))}}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.bot} onPress={() => {setBTN(Number(input1) - Number(input2))}}>
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.bot} onPress={() => {setBTN(Number(input1) * Number(input2))}}>
            <Text>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.bot} onPress={() => {setBTN(Number(input1) / Number(input2))}}>
            <Text>/</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={style.exec} onPress={() => {setValue(btn)}}>
          <Text>Executar</Text>
        </TouchableOpacity>
        <Text style={style.result}>{value}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  body:{
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  calc: {
    width: '200px',
    height: '360px',
    border: '3px solid #333333',
    borderRadius: '20px',
    paddingTop: '20px',
    display: 'flex',
    flexDirection: 'collum',
    alignItems: 'center',
  },
  opera: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '20px'
  },
  inp:{
    width: '80%',
    height: '40px',
    fontSize: '20px',
    border: '1px solid #333333',
    borderRadius: '10px',
    marginTop: '5px'
  },
  bot:{
    width: '30px',
    height: '30px',
    border: '2px solid #333',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  exec:{
    width: '120px',
    height: '30px',
    border: '2px solid #333',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px'
  },
  result:{
    height: '150px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '40px'
  }
})