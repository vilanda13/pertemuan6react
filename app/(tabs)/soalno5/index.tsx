// index.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const HomeScreen = () => <Text>Go to Second Screen</Text>;
const ProfileScreen = () => <Text>This is the Second Screen</Text>;

const DuaLayar = () => {
  return (
    // Hapus NavigationContainer dari sini, pindahkan ke file DuaLayar.tsx
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default DuaLayar;
