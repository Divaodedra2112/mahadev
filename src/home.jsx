import { View, Text,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const navigation = useNavigation(); 
  return (
    <View>
      <Text>home</Text>
 <Button
      title="Login"
      onPress={() => navigation.navigate('login')} // Wrap navigate in an arrow function
    />
    </View>
  )
}

export default Home