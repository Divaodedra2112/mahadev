import {  Alert } from 'react-native';
import React, {  useState } from 'react';
import auth from '@react-native-firebase/auth';
import BasicInfo from '../components/SignUpComponents/BasicInfo';
import AdditionalInfo from '../components/SignUpComponents/AdditionalInfo';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';


const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('Men');
  const [ageRange, setAgeRange] = useState(null);
  const [openAgeDropdown, setOpenAgeDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  
  // const handleCreate = async () => {
  //   console.log('Attempting to create account...');
  //   console.log('firstName: ', firstName);
  //   console.log('lastName: ', lastName);
  //   console.log('email: ', email);
  //   console.log('password: ', password);
  //   console.log('gender: ', gender);
  //   console.log('ageRange: ', ageRange);

  //   if (!email || !password || !firstName || !lastName || !gender || !ageRange) {
  //     Alert.alert('Error', 'Please fill all the fields!');
  //     return;
  //   }

  //   try {
      
  //     const userCredential = await auth().createUserWithEmailAndPassword(email, password);
  //     const userId = userCredential.user.uid;



  //     console.log('userCredential',userCredential)
  //     console.log('userId',userId)

      
  //     await firestore().collection('users').doc(userId).set({
  //       firstName,
  //       lastName,
  //       gender,
  //       ageRange,
  //       email,
  //       createdAt: firestore.FieldValue.serverTimestamp(),
  //     }).then(()=>
  //     {
        
  //   navigation.navigate('login')
  //       Alert.alert('Success', 'Account created successfully!');
  //     }
  //     );

  //   } catch (error) {
  //     console.error(error);
  //     let errorMessage = 'An unexpected error occurred!';
  //     if (error.code === 'auth/email-already-in-use') {
  //       errorMessage = 'That email address is already in use!';
  //     } else if (error.code === 'auth/invalid-email') {
  //       errorMessage = 'That email address is invalid!';
  //     } else if (error.code === 'auth/weak-password') {
  //       errorMessage = 'Password should be at least 6 characters!';
  //     }
  //     Alert.alert('Error', errorMessage);
      
  //   }
  // };

 
  const handleCreate = async () => {
    if (!email || !password || !firstName || !lastName || !gender || !ageRange) {
      Alert.alert('Error', 'Please fill all the fields!');
      return;
    }
  
    setLoading(true); 
  
    try {
      console.log('Creating user...');
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;
  
      console.log('User created:', userCredential);
      console.log('User ID:', userId);
  
      console.log('Saving user data to Firestore...');
      await firestore().collection('users').doc(userId).set({
        firstName,
        lastName,
        gender,
        ageRange,
        email,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
  
      console.log('User data saved successfully.');
  
      // Alert and Navigation
      console.log('Showing success alert...');
      Alert.alert('Success', 'Account created successfully!', [
        {
          text: 'OK',
          onPress: () => {
            console.log('Navigating to login screen');
            navigation.navigate('login');
          },
        },
      ]);
    } catch (error) {
      console.error('Error occurred:', error);
      let errorMessage = 'An unexpected error occurred!';
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'That email address is already in use!';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'That email address is invalid!';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Password should be at least 6 characters!';
      } else if (error.message) {
        errorMessage = error.message; // Fallback to any unexpected error message
      }
      Alert.alert('Error', errorMessage);
    } finally {
      console.log('Resetting loader...');
      setLoading(false); 
    }
  };
  
  
  
  
  

 
 
  const goToBasicInfo = () => {
    setCurrentStep(1);
  };

  return (


    
  
    currentStep === 1 ? (
      <BasicInfo
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setPassword={setPassword}
        onContinue={() => setCurrentStep(2)}
      />
    ) : (
      <AdditionalInfo
        gender={gender}
        setGender={setGender}
        ageRange={ageRange}
        setAgeRange={setAgeRange}
        handleCreate={handleCreate}
        openAgeDropdown={openAgeDropdown}
        setOpenAgeDropdown={setOpenAgeDropdown}
        goToBasicInfo={goToBasicInfo}
        loading={loading}
      />
    )

  );
};

export default Signup;
