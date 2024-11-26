import { View, Text, TextInput, StyleSheet, Button,Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Login = () => {
  const [Emailname, setEmailname] = useState('');
  const [passward, setpassward] = useState('');
const navigation=useNavigation()


const login=()=>{
  auth()
  .signInWithEmailAndPassword(Emailname,passward)
.then(()=>{   Alert.alert('Success', 'Account created successfully!');}).catch(Error=>{
  console.log(Error)
})

}

const signIn = async () => {
  console.log('Starting Google Sign-In');
  try {

    await GoogleSignin.signOut();
    // await GoogleSignin.hasPlayServices()


    const response = await GoogleSignin.signIn();

    Alert.alert('Sign-in successful');
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
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Emailname"
        onChangeText={(text) => setEmailname(text)}
        value={Emailname}
      />
       <TextInput
        style={styles.input}
        placeholder="Enter passward"
        onChangeText={(text) => setpassward(text)}
        value={passward}
      />
        <Text style={styles.text}> Dont have an account?</Text>
      <Button title='Login with googe' onPress={()=>{signIn()}}/>
      <Button title='Login' onPress={()=>{login()}}/>

      <Button title='sign up' onPress={()=>{navigation.navigate('signup')}}/>

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 16,
    flexDirection:'row-reverse'
  },

});

export default Login;
