import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, 
  SafeAreaView, ScrollView, Alert 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik'; // Import Formik
import * as Yup from 'yup'; // Import Yup
import { useRouter } from 'expo-router'; // Import router from expo-router

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().label('Email').email().required('Email is required'),
  password: Yup.string().label('Password').required('Password is required').min(4, 'Password must have at least 4 characters')
});

const SignInScreen = () => {
  const router = useRouter(); // Using router from expo-router

  // Formik initial values
  const initialValues = { email: '', password: '' };

  const handleSignIn = async (values) => {
    try {
      const { email, password } = values;

      if (!email || !password) {
        return Alert.alert('Error', 'Please fill all fields');
      }

      // Simulating an API call for login
      const response = await fetch('https://your-backend-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/home'); // Navigate to home page after successful login
      } else {
        Alert.alert('Error', data.error || 'Login failed');
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
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>Welcome Back</Text>
              <TouchableOpacity>
                <Ionicons name="ellipsis-vertical" size={24} color="#800020" />
              </TouchableOpacity>
            </View>

            {/* Formik Form */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSignIn}
            >
              {({ values, handleChange, handleSubmit, errors, touched }) => (
                <>
                  {/* Input Fields */}
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Email"
                      keyboardType="email-address"
                      value={values.email}
                      onChangeText={handleChange('email')}
                    />
                    {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}

                    <View style={styles.passwordContainer}>
                      <TextInput
                        style={styles.inputPassword}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={values.password}
                        onChangeText={handleChange('password')}
                      />
                      {errors.password && touched.password && <Text style={styles.errorText}>{errors.password}</Text>}
                    </View>
                  </View>

                  {/* Sign In Button */}
                  <TouchableOpacity 
                    style={styles.signInButton} 
                    onPress={handleSubmit}
                  >
                    <Text style={styles.signInButtonText}>SIGN IN</Text>
                  </TouchableOpacity>

                  {/* Sign Up Link */}
                  <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => router.push('/aut/sign-up')}>
                      <Text style={styles.signupLink}>Sign up</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  scrollView: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  mainContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    marginHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: { fontSize: 24, fontWeight: 'bold', color: '#800020' },
  inputContainer: { marginVertical: 10 },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 12,
    marginBottom: 15,
  },
  inputPassword: { flex: 1, fontSize: 16 },
  signInButton: {
    backgroundColor: '#800020',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  signInButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: { color: '#666', marginRight: 5 },
  signupLink: { color: '#800020', fontWeight: 'bold' },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default SignInScreen;
