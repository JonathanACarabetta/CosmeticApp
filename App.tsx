import { Text, View } from 'react-native';
import { AppStyles } from './AppStyles';
import React from 'react';


export default function App() {
  
  return (
    <View style={AppStyles.container}>
    <Text style={AppStyles.redColor}>Hola Mundo!</Text>
    </View>
  );
}
