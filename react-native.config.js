// module.exports = {
//     assets: ['./assets/fonts'],
//   };
module.exports = {
  assets: ['./assets/fonts'],
  dependency: {
    'react-native-vector-icons': {
      platforms: {
        ios: null, // Disable auto-linking for iOS if needed
        android: null, // Disable auto-linking for Android if needed
      },
    },
  },
};
