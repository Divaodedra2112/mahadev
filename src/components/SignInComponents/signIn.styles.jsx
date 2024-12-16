
import { StyleSheet } from 'react-native';
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
      marginRight: 10,
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
      flexDirection: 'row',
      justifyContent: 'center'
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    googleButtonText: {
      color: '#000',
      fontSize: 16,
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
    googleIcon: {
      width: 25,
      height: 25,
      alignSelf: 'baseline',
      marginLeft: 20
    },
    googleview: {
      flex: 1
    },
    googleText: { flex: 3},
    disabledButton: {
      backgroundColor: '#b3a7df', 
    },
  });

  export default styles;