import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient 
      colors={['#B76E79', '#800020']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 0 }} 
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Text style={styles.welcomeText}>Welcome Back</Text>

          {/* Sign In Button */}
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>

          {/* Sign Up Button */}
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>

          {/* Social Login Section */}
          <View style={styles.socialContainer}>
            <Text style={styles.socialText}>Login with Social Media</Text>
            <View style={styles.socialIcons}>
              <TouchableOpacity style={styles.socialIcon}>
                <Image source={require('../assets/images/facebook.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon}>
                <Image source={require('../assets/images/twitter.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon}>
                <Image source={require('../assets/images/instagram.png')} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 110,
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#333333',
    width: '80%',
    padding: 15,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  socialText: {
    color: 'white',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  socialIcon: {
    width: 50,
    height: 50,
    borderRadius: 25, // Makes it circular
    backgroundColor: 'white', // White background for contrast
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10, // Adds spacing between icons
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // Adds shadow effect on Android
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default WelcomeScreen;
