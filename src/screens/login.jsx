import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import styles from '../components/SignInComponents/signIn.styles';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleEmailSubmit = () => {
    if (email.trim() === '') {
      Alert.alert('Error', 'Please enter your email address.');
      return;
    }
    setIsEmailSubmitted(true);
  };
  const handleBack = () => {
    if (isEmailSubmitted) {
      setIsEmailSubmitted(false);
    } else {
      navigation.goBack();
    }
  };

const login = () => {
    if (password.trim() === '') {
      Alert.alert('Error', 'Please enter your password.');
      return;
    }

    setLoading(true); 
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false); 
        Alert.alert('Success', 'Login successfully!');
        navigation.navigate('HomeTabs');
      })
      .catch((error) => {
        setLoading(false); 
        console.log(error);
        Alert.alert('Error', error.message);
      });
  };

  const signIn = async () => {
    console.log('Starting Google Sign-In');
    try {
      await GoogleSignin.signOut();
      const response = await GoogleSignin.signIn();
      Alert.alert('Sign-in successful');
      console.log('User Info:', response);
      navigation.navigate('HomeTabs')
    } catch (error) {
      console.error('Sign-In Error:', error);
      if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Error', 'Sign-in already in progress.');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Error', 'Play Services not available or outdated.');
      } else {
        Alert.alert('Error', 'An unexpected error occurred during sign-in.');
      }
    }
  };

  return (
    <View style={styles.container}>
      {isEmailSubmitted && (
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>)}

      <View style={styles.SignInbuttonText}>
        <Text style={styles.title}>Sign in</Text>
      </View>

      {!isEmailSubmitted ? (
        <>
          <TextInput
            style={[styles.input, { fontSize: 16 }]}
            placeholder="Email Address"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            backgroundColor="#f4f4f4"
          />
          <TouchableOpacity style={styles.button} onPress={handleEmailSubmit}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          <View style={styles.CreateoneText}>
            <Text onPress={() => navigation.navigate('Signup')} style={styles.text}>Don't have an account?<Text style={styles.createone}> Create one</Text></Text>
          </View>
          <TouchableOpacity style={styles.googleButton} onPress={signIn}>
            <View style={styles.googleview}>
              <Image
                source={require('../assests/images/Logo-google-icon-PNG.png')}
                style={styles.googleIcon}
              />
            </View>

            <View style={styles.googleText}>
              <Text style={styles.googleButtonText}>Continue With Google</Text>

            </View>

          </TouchableOpacity>

        </>
      ) : (
        <>
          <TextInput
            style={[styles.input, { fontSize: 16 }]}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            backgroundColor="#f4f4f4"
          />
         
               <TouchableOpacity
            style={[styles.button, loading && styles.disabledButton]}
            onPress={loading ? null : login} 
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Continue</Text>
            )}
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};


export default Login;
