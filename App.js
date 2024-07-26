// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/pages/HomeScreen';
import ICQScreen from './src/pages/ICQScreen';
import IMCScreen from './src/pages/IMCScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ICQ" component={ICQScreen} />
        <Stack.Screen name="IMC" component={IMCScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}