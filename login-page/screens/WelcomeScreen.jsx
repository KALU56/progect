import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/fitness_logo.png')}
            style={styles.logo}
          />
          <Text style={styles.logoText}>FITNESS CLUB</Text>
        </View>

        <Text style={styles.welcomeText}>Welcome Back</Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

        <View style={styles.socialLoginContainer}>
          <Text style={styles.socialLoginText}>Login with Social Media</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity style={styles.socialIcon}>
              <Image source={require('../assets/images/instagram_icon.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Image source={require('../assets/images/twitter_icon.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Image source={require('../assets/images/facebook_icon.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#111827', // Dark background (Tailwind: bg-gray-800)
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff', // White text (Tailwind: text-white)
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff', // White text (Tailwind: text-white)
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3b82f6', // Blue button (Tailwind: bg-blue-500)
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', // White text (Tailwind: text-white)
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  socialLoginText: {
    color: '#ffffff', // White text (Tailwind: text-white)
    fontSize: 16,
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default WelcomeScreen;