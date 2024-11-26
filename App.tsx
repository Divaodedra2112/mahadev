import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import home from './src/home';  // Corrected to capitalized 'home'
import login from './src/login';  // Corrected to capitalized 'login'
import signup from './src/signup';  // Corrected to capitalized 'signup'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebase } from '@react-native-firebase/app'; // Fixed import
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure();

const Stack = createNativeStackNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(); 
} else {
  firebase.app(); 
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setIsLoggedIn(!!user); 
    });

    return () => unsubscribe();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>


{!isLoggedIn?(   <Stack.Screen
          name="home"
          component={home}
          options={{ title: 'Welcome' }}
        />):(  <><Stack.Screen name="login" component={login} />
          <Stack.Screen name="signup" component={signup} /></> )}

     
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
