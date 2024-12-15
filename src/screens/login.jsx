import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Icon from '@react-native-vector-icons/Fontawesome';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
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
    console.log('kkkkkkk')
    if (password.trim() === '') {
      Alert.alert('Error', 'Please enter your password.');
      return;
    }

    console.log('email, password: ', email, password);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Success', 'Login successfully!');
        // navigation.navigate('HomeTabs');
      })
      .catch((error) => {
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
      navigation.navigate('HomeTabs')
      console.log('User Info:', response);
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
              <Text style={styles.googleButtonText}>Continue With Google</Text>
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
            <TouchableOpacity style={styles.button} onPress={login}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 16,
    paddingHorizontal: 20
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

export default Login;
