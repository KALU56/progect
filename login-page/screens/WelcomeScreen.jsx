import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomeScreen = () => {
  return (
    <LinearGradient 
      colors={['#D2B48C', '#8B4513']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 0 }} 
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Text style={styles.welcomeText}>Welcome Back</Text>

          {/* Sign In Button */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>

          {/* Social Login Section */}
          <Text style={styles.socialText}>Login with Social Media</Text>
          <View style={styles.socialContainer}>
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
  socialText: {
    color: 'white',
    paddingBottom: 90,
  },
  socialContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  socialIcon: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default WelcomeScreen;
