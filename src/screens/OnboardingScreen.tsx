import { View, Text, StyleSheet, ImageBackground, StatusBar, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native'

export default function OnboardingScreen() {
  const navigation = useNavigation<any>()
  return (
    <ImageBackground
    source={require('../../assets/onboard.png')}
    style={styles.container}
    >

    <StatusBar barStyle="light-content" translucent={true} hidden={true} />
      <Text style={styles.heading}>Taberu</Text>
      <Text style={styles.paragraph}>Get Fresh Food Delivered to Your Door</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text 
          style={{ color: '#000', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
          >
            Get Started
        </Text>
      </Pressable>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 80,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#fff',
    opacity: 0.7,
    borderRadius: 10,
    padding: 10,
    marginTop: 60,
    width: '40%',
  },
})