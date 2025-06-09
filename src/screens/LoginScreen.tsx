import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LandingStackParamList} from '../navigation/types';
import 'nativewind/types';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<LandingStackParamList, 'Login'>;
};

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    console.log('Login:', {email, password});
  };

  return (
    <View className="flex-1 p-4 bg-background">
      <View className="flex-1 justify-center">
        <Text className="text-3xl font-bold text-foreground mb-8 text-center">
          Welcome Back
        </Text>

        <View className="space-y-4">
          <View>
            <Text className="text-sm font-medium text-foreground mb-1">
              Email
            </Text>
            <TextInput
              className="p-3 rounded-lg bg-input text-foreground border border-border"
              placeholder="Enter your email"
              placeholderTextColor="#666"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View>
            <Text className="text-sm font-medium text-foreground mb-1">
              Password
            </Text>
            <TextInput
              className="p-3 rounded-lg bg-input text-foreground border border-border"
              placeholder="Enter your password"
              placeholderTextColor="#666"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            className="mt-6 p-4 rounded-lg bg-primary"
            onPress={handleLogin}>
            <Text className="text-primary-foreground font-semibold text-center">
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
