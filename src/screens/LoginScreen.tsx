import { View, Text, ImageBackground, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation<any>();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    async function handleLogin() {
        if (email === '' || password === '') {
            alert('Please fill all the fields');
        } else {
          const user = await AsyncStorage.setItem('user', JSON.stringify({ email, password }));
          if (user !== null) {
            navigation.replace('Tabs');
          } else {
            alert('Login Failed');
          }
        }
    }

  return (
    <ImageBackground
        style={styles.container}
        source={require('../../assets/login.png')}
    >
        <Text style={styles.heading}>Login to Taberu</Text>
        <TextInput 
            placeholder="Email" 
            placeholderTextColor="#fff"
            textContentType='emailAddress'
            style={styles.inputStyle} 
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => setEmail(text)}
            value={email}
            autoCapitalize='none'
        />
        <TextInput 
            placeholder="Password" 
            placeholderTextColor="#fff"
            textContentType='password'
            autoCapitalize='none'
            style={styles.inputStyle} 
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
        />
    <Pressable style={styles.button} onPress={() => {
            handleLogin()
        }}>
            <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
                Login
            </Text>
        </Pressable>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 80,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 20,
    marginBottom: 20,
  },
  inputStyle: {
    marginLeft: 20,
    backgroundColor: '#1a1a1a',
    width: '80%',
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
    fontSize: 20,
    opacity: 0.7,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
  },

  button: {
    backgroundColor: '#fff',
    opacity: 0.6,
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
    marginLeft: 20,
    width: '40%',
    borderWidth: 1,
    borderColor: '#fff',
  },

  })