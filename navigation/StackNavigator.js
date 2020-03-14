import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Reservation from '../screens/Reservation';
import Success from '../screens/Success';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Login';

export default function StackNavigator({ navigation, route }) {
  navigation.setOptions({ });

  return (
    <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <Stack.Screen
        name="Login"
        component={Login}     
        options={{
          headerShown: false
        }}   
      />     
      <Stack.Screen
        name="Reservation"
        component={Reservation}     
        options={{
          headerShown: false
        }}   
      />     
      <Stack.Screen
        name="Success"
        component={Success}     
        options={{
          headerShown: false
        }}   
      />     
    </Stack.Navigator>
  );
}

