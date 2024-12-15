import {  Alert } from 'react-native';
import React, {  useState } from 'react';
import auth from '@react-native-firebase/auth';
import BasicInfo from '../components/SignUpComponents/BasicInfo';
import AdditionalInfo from '../components/SignUpComponents/AdditionalInfo';
import firestore from '@react-native-firebase/firestore';

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('Men');
  const [ageRange, setAgeRange] = useState(null);
  const [openAgeDropdown, setOpenAgeDropdown] = useState(false);
  
  const handleCreate = async () => {
    console.log('Attempting to create account...');
    console.log('firstName: ', firstName);
    console.log('lastName: ', lastName);
    console.log('email: ', email);
    console.log('password: ', password);
    console.log('gender: ', gender);
    console.log('ageRange: ', ageRange);

    if (!email || !password || !firstName || !lastName || !gender || !ageRange) {
      Alert.alert('Error', 'Please fill all the fields!');
      return;
    }

    try {
      
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;

      
      await firestore().collection('users').doc(userId).set({
        firstName,
        lastName,
        gender,
        ageRange,
        email,
        createdAt: firestore.FieldValue.serverTimestamp(),
      }).then(()=>
      {
        navigation.navigate('login')
        Alert.alert('Success', 'Account created successfully!');
      }
      );

    } catch (error) {
      console.error(error);
      let errorMessage = 'An unexpected error occurred!';
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'That email address is already in use!';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'That email address is invalid!';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Password should be at least 6 characters!';
      }
      Alert.alert('Error', errorMessage);
      
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
      />
    )

  );
};

export default Signup;
