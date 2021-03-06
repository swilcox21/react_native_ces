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

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.navBar}>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          <Image style={styles.cesLogo} source={require('../img/recycle.png')} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={{ color: 'white', padding: 10 }}>LOGIN</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.body}>
        <ImageBackground
          style={styles.cesHandsImg}
          source={require('../img/cleanearthhands.png')}
          resizeMode="cover"
        >
          <Text style={styles.cesText}>CLEAN EARTH SOCIETY</Text>
        </ImageBackground>
      </View>
    </View>
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
