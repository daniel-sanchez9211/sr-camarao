import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, Keyboard, TextInput, ScrollView } from 'react-native';
import RadioButton from '../components/RadioButton'

export default function Reservation({ navigation }) {
    const [birthday, setBirthday] = useState(true)
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>
                    <Image style={styles.logo} source={require('../assets/images/logo.png')} />Sr. Camarão
                </Text>
            </View>

            <KeyboardAvoidingView style={styles.content}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>FAÇA SUA RESERVA</Text>
                </View>

                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="NOME"
                        placeholderTextColor={'#d12525'}
                    >
                    </TextInput>
                    <TextInput
                        style={styles.input}
                        placeholder="QUANTIDADE DE PESSOAS"
                        placeholderTextColor={'#d12525'}
                    >
                    </TextInput>
                    <TextInput
                        style={styles.input}
                        placeholder="DATA"
                        placeholderTextColor={'#d12525'}
                    >
                    </TextInput>
                    <View style={styles.birthdayContainer}>
                        <Text style={styles.birthdayText}>
                            Comemoração de aniversário?
                    </Text>
                    </View>
                    <View style={styles.radios}>
                        <TouchableOpacity onPress={() => setBirthday(true)} style={{flexDirection: 'row'}}>
                            <RadioButton selected={birthday} /><Text style={styles.radiosText}>Sim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setBirthday(false)} style={{flexDirection: 'row'}} >
                            <RadioButton selected={!birthday} /><Text style={styles.radiosText}>Não</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('Success')}>
                        <Text style={styles.buttonText}>RESERVAR</Text>
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
        flex: 1,
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
        paddingTop: 30,
        fontFamily: 'carter-one',
        fontSize: 30,
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
    birthdayContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    birthdayText: {
        fontSize: 16,
        marginVertical: 10,
        fontFamily: 'segoe-print',
        color: '#d12525',
    },
    radios: {
        paddingRight: 80,
        flexDirection: 'row',
        fontFamily: 'segoe-print',
        color: '#d12525',
    },
    radiosText: {
        paddingHorizontal: 11,
        fontFamily: 'segoe-print',
        color: '#d12525',
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

