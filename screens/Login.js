import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native';

export default function Login({navigation}) {
  const [typing, setTyping] = useState(false)

  const _keyboardDidShow = () => {
    setTyping(true)
  }

  const _keyboardDidHide = () => {
    setTyping(false)
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
  },[]);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>
          <Image style={styles.logo} source={require('../assets/images/logo.png')} />Sr. Camarão
        </Text>
      </View>

      <KeyboardAvoidingView style={!typing ? styles.content : styles.contentTyping}>
        { !typing && <View style={styles.textContainer}>
          <Text style={styles.text}>Bem Vindos ao Sr. Camarão</Text>
          <Text style={styles.text}>aqui você poderá fazer reservas</Text>
          <Text style={styles.text}>para o seu jantar</Text>
        </View>}
        

        <View style={styles.titleContainer}>
          <Text style={styles.title}>LOGIN</Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="EMAIL"
            placeholderTextColor={'#d12525'}
          >
          </TextInput>
          <TextInput
            style={styles.input}
            placeholder="SENHA"
            placeholderTextColor={'#d12525'}
          >
          </TextInput>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Reservation')}>
            <Text style={styles.buttonText}>ACESSAR</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
  contentTyping: {
    flex: 0.5,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
  header: {
    flex: 0.1,
    backgroundColor: '#d12525',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'segoe-print',
    fontWeight: '100',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'segoe-print',
    color: '#d12525',
    fontSize: 20,
  },
  titleContainer: {
    marginVertical: -50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'carter-one',
    fontSize: 45,
    color: '#d12525',
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontFamily: 'segoe-print',
    height: 50,
    width: '70%',
    padding: 11,
    borderColor: '#d12525',
    borderWidth: 1,
    marginVertical: 4
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60
  },
  button: {
    backgroundColor: '#d12525',
    borderRadius: 12,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  buttonText: {
    fontFamily: 'segoe-print',
    color: '#fff',
    fontSize: 20
  }
});
