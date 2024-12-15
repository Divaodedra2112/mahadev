import { View, Text, TextInput, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firsName, setFirsName] = useState('');

  const [lastName, setLastName] = useState('');

  const navigation = useNavigation();
  const handleBack = () => {
    // if (isEmailSubmitted) {
    //   setIsEmailSubmitted(false);
    // } else {
    navigation.goBack();
    // }
  };
  const handleCreate = () => {
    console.log('Attempting to create account...');
    if (!email || !password) {
      Alert.alert('Error', 'Email and password are required!');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        Alert.alert('Success', 'Account created successfully!');
        navigation.navigate('login');
      })
      .catch(error => {
        console.error('Error code:', error.code);
        console.error('Error message:', error.message);

        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'That email address is invalid!');
        } else if (error.code === 'auth/weak-password') {
          Alert.alert('Error', 'Password should be at least 6 characters!');
        } else if (error.code === 'auth/network-request-failed') {
          Alert.alert('Error', 'Network error. Please check your connection.');
        } else {
          Alert.alert('Error', 'An unexpected error occurred!');
        }
      });
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
      <View style={styles.SignInbuttonText}>
        <Text style={styles.title}>Create Account</Text>
      </View>
      <TextInput
        style={[styles.input, { fontSize: 16 }]} 
        placeholder="Firstname"
        onChangeText={setFirsName}
        value={firsName}
        secureTextEntry
        backgroundColor="#f4f4f4"
      />
      <TextInput
        style={[styles.input, { fontSize: 16 }]} 
        placeholder="Lastname"
        onChangeText={setLastName}
        value={lastName}
        secureTextEntry
        backgroundColor="#f4f4f4"
      />
      <TextInput
         style={[styles.input, { fontSize: 16 }]} 
        placeholder="Email address"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        backgroundColor="#f4f4f4"
      />
      <TextInput
        style={[styles.input, { fontSize: 16 }]} 
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        backgroundColor="#f4f4f4"
      />

      {/* <Button title="Create Account" onPress={handleCreate} /> */}
      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 16,
    paddingHorizontal: 20
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    borderRadius: 100, flex: 1,

  },
  backButtonText: {
    fontSize: 24,
    color: '#896ce7',
  },
  googleIcon: {
    marginRight: 10, // Space between icon and text
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 60,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 16,
  },
  button: {
    width: '100%',
    backgroundColor: '#896ce7',
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 16,
  },
  googleButton: {
    width: '100%',
    backgroundColor: '#f4f4f4',
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 16,
    flexDirection: 'row'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  googleButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  SignInbuttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: "30%",
    alignSelf: 'flex-start'
  },
  CreateoneText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    alignSelf: 'flex-start'
  },
  createone: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  Googlebutton: {
    width: '100%',
    backgroundColor: '#896ce7',
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 16,
  },

});

export default Signup;
