import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Chat from './src/Chat'; // Correct component name
import login from './src/login'; // Correct capitalization
import signup from './src/signup'; // Correct capitalization
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebase } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure();

const Stack = createNativeStackNavigator();

// Firebase initialization
if (!firebase.apps.length) {
  firebase.initializeApp();
} else {
  firebase.app();
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setIsLoggedIn(!!user); // Set true if user is logged in, false otherwise
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          // Show Chat screen if logged in
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{ title: 'Chat Room' }}
          />
        ) : (
          // Show login/signup if not logged in
          <>
            <Stack.Screen
              name="login"
              component={login}
              options={{ title: 'login' }}
            />
            <Stack.Screen
              name="signup"
              component={signup}
              options={{ title: 'Sign Up' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
