import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const AgentLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = () => {
    // Handle sign in logic
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[#F5E1DA]`}>
      <View style={tw`flex-1 px-8 justify-center`}>
        <Text style={tw`text-3xl font-bold text-gray-800 mb-6 text-center`}>Agent Login</Text>
        <Text style={tw`text-gray-700 mb-8 text-center`}>Enter your details to access your account</Text>

        {/* Email Input */}
        <TextInput
          placeholder="Enter Email/Phone No"
          style={tw`border border-gray-400 rounded-lg px-4 py-3 mb-4 bg-white text-gray-700 shadow-md`}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        {/* Password Input */}
        <TextInput
          placeholder="Password"
          style={tw`border border-gray-400 rounded-lg px-4 py-3 mb-4 bg-white text-gray-700 shadow-md`}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Trouble Signing In */}
        <Pressable style={tw`self-end mb-6`}>
          <Text style={tw`text-blue-700 font-medium`}>Forgot Password?</Text>
        </Pressable>

        {/* Sign In Button */}
        <Pressable
          style={tw`bg-blue-700 py-4 rounded-lg mb-8 shadow-lg`}
          onPress={onSignIn}
        >
          <Text style={tw`text-white text-center font-bold text-lg`}>Sign In</Text>
        </Pressable>

        {/* Social Login Divider */}
        <View style={tw`flex-row items-center mb-6`}>
          <View style={tw`flex-1 h-px bg-gray-400`} />
          <Text style={tw`px-4 text-gray-600`}>Or sign in with</Text>
          <View style={tw`flex-1 h-px bg-gray-400`} />
        </View>

        {/* Social Login Buttons */}
        <View style={tw`flex-row justify-center gap-4`}>
          <Pressable style={tw`p-3 rounded-full bg-white shadow-md`}>
            <Ionicons name="logo-google" size={24} color="#DB4437" />
          </Pressable>
          <Pressable style={tw`p-3 rounded-full bg-white shadow-md`}>
            <Ionicons name="logo-apple" size={24} color="black" />
          </Pressable>
          <Pressable style={tw`p-3 rounded-full bg-white shadow-md`}>
            <Ionicons name="logo-facebook" size={24} color="#4267B2" />
          </Pressable>
        </View>

        {/* Sign Up Link */}
        <View style={tw`flex-row justify-center mt-8`}>
          <Text style={tw`text-gray-700`}>Don't have an account? </Text>
          <Pressable>
            <Text style={tw`text-blue-700 font-medium`}>Request Access</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AgentLoginScreen;
