import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '../theme/ThemeContext';
import 'nativewind/types';

export const DashboardScreen = () => {
  const {toggleTheme} = useTheme();

  return (
    <View className="flex-1 p-4 bg-background">
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-2xl font-bold text-foreground">Dashboard</Text>
        <TouchableOpacity
          className="px-4 py-2 rounded-lg bg-secondary"
          onPress={toggleTheme}>
          <Text className="text-secondary-foreground">Toggle Theme</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 space-y-4">
        <View className="p-4 rounded-lg bg-card border border-border">
          <Text className="text-lg font-semibold text-card-foreground">
            Quick Stats
          </Text>
          <View className="flex-row justify-between mt-4">
            <View className="items-center">
              <Text className="text-2xl font-bold text-primary">150</Text>
              <Text className="text-sm text-muted-foreground">
                Orders Today
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-primary">$2,450</Text>
              <Text className="text-sm text-muted-foreground">Revenue</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-primary">45</Text>
              <Text className="text-sm text-muted-foreground">
                Active Tables
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
