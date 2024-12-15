import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './signup.styles';
import { useNavigation } from '@react-navigation/native';

const BasicInfo = ({ setFirstName, setLastName, setEmail, setPassword, onContinue }) => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Text style={styles.backButtonText}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Create Account</Text>
            <TextInput
                style={[styles.input, { fontSize: 16 }]}
                placeholder="First Name"
                onChangeText={setFirstName}
            />
            <TextInput
                style={[styles.input, { fontSize: 16 }]}
                placeholder="Last Name"
                onChangeText={setLastName}
            />
            <TextInput
                style={[styles.input, { fontSize: 16 }]}
                placeholder="Email"
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={[styles.input, { fontSize: 16 }]}
                placeholder="Password"
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={onContinue}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>)
};
export default BasicInfo;