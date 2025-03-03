import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const SignupScreen = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const validateInputs = async () => {
    try {
      if (!fullName.trim()) throw 'Full Name is required';
      if (!phone.match(/^\d{10}$/)) throw 'Invalid phone number';
      if (!email.match(/^\S+@\S+\.\S+$/)) throw 'Invalid email';
      if (password.length < 6) throw 'Password must be 6+ characters';
      if (password !== confirmPassword) throw 'Passwords do not match';

      await handleSignup();
    } catch (error) {
      Alert.alert('Error', error);
    }
  };

  const handleSignup = async () => {
    try {
      setIsLoading(true);
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userPassword', password);

          
      Alert.alert('Account Created', 'Your account has been created!', [
        { text: 'OK', onPress: () => router.replace('/(tabs)') }, // Use (tabs)
      ]);
    } catch (error) {
      Alert.alert('Error', 'Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LinearGradient colors={['#B76E79', '#800020']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.mainContainer}>
            <Text style={styles.title}>Create Your Account</Text>
            <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
            <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
            <TextInput style={styles.inputPassword} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
            <TextInput style={styles.inputPassword} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
            
            <TouchableOpacity style={styles.signupButton} onPress={validateInputs} disabled={isLoading}>
              <Text style={styles.signupButtonText}>{isLoading ? 'CREATING ACCOUNT...' : 'SIGN UP'}</Text>
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
  title: { fontSize: 24, fontWeight: 'bold', color: '#800020' },
  input: { borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: 12, fontSize: 16, marginBottom: 15 },
  inputPassword: { borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: 12, fontSize: 16, marginBottom: 15 },
  signupButton: { backgroundColor: '#800020', paddingVertical: 12, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  signupButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

export default SignupScreen;
