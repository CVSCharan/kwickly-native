import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '../theme/ThemeContext';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LandingStackParamList} from '../navigation/types';

type WelcomeScreenProps = {
  navigation: NativeStackNavigationProp<LandingStackParamList, 'Welcome'>;
};

export const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  const {toggleTheme} = useTheme();

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <View className="items-center space-y-4">
        <Text className="text-4xl font-bold text-foreground">Kwickly</Text>
        <Text className="text-xl text-muted-foreground">
          Restaurant POS Admin
        </Text>
      </View>
      <TouchableOpacity
        className="mt-8 px-6 py-3 rounded-lg bg-primary"
        onPress={toggleTheme}>
        <Text className="text-primary-foreground font-semibold">
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};
