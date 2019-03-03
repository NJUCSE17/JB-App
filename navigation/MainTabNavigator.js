import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Assignments',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      name='edit'
      focused={focused}
      activeColor={Colors.primary}
      inactiveColor={Colors.grey}
    />
  ),
  tabBarOptions: {
    activeTintColor: Colors.primary,
    inactiveTintColor: Colors.grey,
  }
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      name='cog'
      focused={focused}
      activeColor={Colors.secondary}
      inactiveColor={Colors.grey}
    />
  ),
  tabBarOptions: {
    activeTintColor: Colors.secondary,
    inactiveTintColor: Colors.grey,
  }
};

export default createBottomTabNavigator({
  HomeStack,
  SettingsStack,
});
