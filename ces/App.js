import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  Button,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'lightgreen',
    flex: 9,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cesHandsImg: {
    height: 190,
    width: 300,
    justifyContent: 'center',
  },
  cesLogo: {
    height: 40,
    width: 40,
    marginLeft: 5,
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3a5243',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 15,
  },
  cesText: {
    color: 'white',
    fontSize: 24,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#3a5243ca',
    marginBottom: 10,
  },
});
