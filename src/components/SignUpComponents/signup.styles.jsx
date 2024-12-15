import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 9,
    padding: 16,
    paddingHorizontal: 20,
  },
  bottomContainer: {
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: '#f4f4f4',
    flex: 1,
    padding: 16,
  },
  additionalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 38,
    marginTop: "40%",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: "30%",
  },
  input: {
    width: '100%',
    height: 60,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#f4f4f4',
  },
  button: {
    width: '100%',
    backgroundColor: '#896ce7',
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 16,
  },
  signUpButton: {
    width: '100%',
    backgroundColor: '#896ce7',
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 26,
    marginTop: 14,
  },
  genderButton: {
    flex: 1,
    padding: 12,
    marginHorizontal: 5,
    borderRadius: 50,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#896ce7',
    color:"white"

  },
  genderButtonText: {
    fontSize: 16
  },
  dropdown: {
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: '#f4f4f4',
  },
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
});

export default styles;
