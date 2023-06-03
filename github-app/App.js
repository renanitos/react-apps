import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, TextInput, Image} from 'react-native'
import api from './src/services/api'

export default function App(){
  const [login, setLogin] = useState()
  const [dados, setDados] = useState([])

  const recuperaDados = async (username) => {
    const response = await api.get('/' + username);
    setDados(response.data)
  }

    return(
      <View style={styles.container}>
        <Image
          source={{uri: dados.avatar_url}}
          style={styles.image}
        />
        <View style={styles.row}>
          <TextInput
          style={styles.login}
          value={login}
          onChangeText={(texto) => setLogin(texto)}
          underlineColorAndroid="transparent"
          />

          <Button title="Recuperar" onPress={() => recuperaDados(login)} />
        </View>

        <Text style={styles.campo}>Id: {dados.id}</Text>
        <Text style={styles.campo}>Nome: {dados.login}</Text>
        <Text style={styles.campo}>Repositórios: {dados.repos_url}</Text>
        <Text style={styles.campo}>Criado em: {dados.created_at}</Text>
        <Text style={styles.campo}>Seguidores: {dados.followers}</Text>
        <Text style={styles.campo}>Seguindo: {dados.following}</Text>
      </View>    
    )
  }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 60,
    alignItems: 'center'
  },
  campo:{
    marginTop: 15,
    fontSize: 15,
    textAlign: 'center'
  },
  login:{
    width: 280,
    height: 40,
    borderColor: '#000',
    borderWidth: 1
  },
  row: {
    flexDirection: 'row',
    width: 300
  },
  image: {
    width: 200, 
    height: 100, 
    alignSelf: 'center', 
    marginBottom: 10
  }
});