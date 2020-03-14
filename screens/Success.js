import React, { useEffect } from 'react'
import { View, Image } from 'react-native';

export default function Success({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Reservation')
        }, 2500);
    }, []);

    return (
        <View>
            <Image style={{ width: '100%'}} source={require('../assets/images/success.png')} />
        </View>
    )
}