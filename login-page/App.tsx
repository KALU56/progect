import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import tw from 'twrnc';

const AgentLoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = () => {
    console.log('Sign In Clicked');
  };

  return (
    <SafeAreaView style={tw`flex-1`}>
      {/* Gradient Background */}
      <LinearGradient
        colors={['#D32F2F', '#4A148C']}
        style={tw`flex-1 justify-center px-8`}
      >
        <View style={tw`bg-white p-6 rounded-3xl shadow-lg`}>
          {/* Title */}
          <Text style={tw`text-3xl font-bold text-gray-800 text-center mb-4`}>
            Hello, Sign In!
          </Text>

          {/* Email Input */}
          <View style={tw`mb-4`}>
            <Text style={tw`text-gray-700 mb-1 font-medium`}>Gmail</Text>
            <TextInput
              placeholder="Enter your email"
              style={tw`border border-gray-300 rounded-lg px-4 py-3 bg-gray-100`}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View style={tw`mb-4`}>
            <Text style={tw`text-gray-700 mb-1 font-medium`}>Password</Text>
            <TextInput
              placeholder="Enter your password"
              style={tw`border border-gray-300 rounded-lg px-4 py-3 bg-gray-100`}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Forgot Password */}
          <Pressable style={tw`self-end mb-4`}>
            <Text style={tw`text-red-500 font-medium`}>Forgot password?</Text>
          </Pressable>

          {/* Sign In Button */}
          <Pressable onPress={onSignIn}>
            <LinearGradient
              colors={['#D32F2F', '#4A148C']}
              style={tw`py-4 rounded-lg shadow-lg`}
            >
              <Text style={tw`text-white text-center font-bold text-lg`}>SIGN IN</Text>
            </LinearGradient>
          </Pressable>

          {/* Signup Link */}
          <View style={tw`flex-row justify-center mt-6`}>
            <Text style={tw`text-gray-600`}>Don't have an account? </Text>
            <Pressable>
              <Text style={tw`text-red-500 font-medium`}>Sign up</Text>
            </Pressable>
          </View>
        </View>

        {/* Social Login */}
        <View style={tw`flex-row justify-center mt-8`}>
          <Pressable style={tw`p-3 mx-2 bg-white rounded-full shadow`}>
            <Ionicons name="logo-google" size={24} color="#DB4437" />
          </Pressable>
          <Pressable style={tw`p-3 mx-2 bg-white rounded-full shadow`}>
            <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
          </Pressable>
          <Pressable style={tw`p-3 mx-2 bg-white rounded-full shadow`}>
            <Ionicons name="logo-facebook" size={24} color="#4267B2" />
          </Pressable>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default AgentLoginScreen;
