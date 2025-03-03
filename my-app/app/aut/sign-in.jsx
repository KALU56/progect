import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { useRouter } from 'expo-router';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Handle Sign In logic
  const handleSignIn = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('userEmail');
      const storedPassword = await AsyncStorage.getItem('userPassword');

      if (email === storedEmail && password === storedPassword) {
        router.replace('/(tabs)') ; // Navigate to the home screen
      } else {
        Alert.alert('Error', 'Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Error', 'Login failed');
    }
  };

  return (
    <LinearGradient 
      colors={['#B76E79', '#800020']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 0 }} 
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.mainContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>Welcome Back</Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.inputPassword}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity 
              style={styles.signInButton} 
              onPress={handleSignIn}
            >
              <Text style={styles.signInButtonText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  scrollView: { flexGrow: 1, justifyContent: 'center' },
  mainContainer: { backgroundColor: 'white', borderRadius: 20, padding: 25, marginHorizontal: 20 },
  header: { marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#800020' },
  inputContainer: { marginVertical: 10 },
  input: { borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: 12, fontSize: 16, marginBottom: 15 },
  inputPassword: { borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: 12, fontSize: 16, marginBottom: 15 },
  signInButton: { backgroundColor: '#800020', paddingVertical: 12, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  signInButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

export default SignInScreen;
