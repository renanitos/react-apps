import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'
import api from './src/services/api'


export default function App(){
  const [cep, setCep] = useState()
  const [dados, setDados] = useState([])


  const consultaCep = async (cep) => {
    const response = await api.get('/' + cep + '/json/');
    setDados(response.data)
  }

    return(
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput
          style={styles.cep}
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          underlineColorAndroid="transparent"
          keyboardType='numeric'
          />

          <Button title="Consultar Cep" onPress={() => consultaCep(cep)} />
        </View>

        <Text style={styles.endereco}>CEP: {cep}</Text>
        <Text style={styles.endereco}>Logradouro: {dados.logradouro}</Text>
        <Text style={styles.endereco}>Bairro: {dados.bairro}</Text>
        <Text style={styles.endereco}>Cidade: {dados.localidade}</Text>
        <Text style={styles.endereco}>Estado: {dados.uf}</Text>
      </View>    
    )
  }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 60,
    alignItems: 'center'
  },
  endereco:{
    marginTop: 15,
    fontSize: 15,
    textAlign: 'center'
  },
  cep:{
    width: 280,
    height: 40,
    borderColor: '#000',
    borderWidth: 1
  },
  row: {
    flexDirection: 'row'
  }
});
