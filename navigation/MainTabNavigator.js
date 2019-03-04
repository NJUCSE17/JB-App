import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import PersonalScreen from '../screens/PersonalScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
}, {
  navigationOptions: {
    tabBarLabel: 'Assignments',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        name='edit'
        focused={focused}
        activeColor={Colors.primaryDark}
        inactiveColor={Colors.grey}
     />
    ),
    tabBarOptions: {
      activeTintColor: Colors.primaryDark,
      inactiveTintColor: Colors.grey,
    }
  }
});

const PersonalStack = createStackNavigator({
  Personal: {
    screen: PersonalScreen,
  }
}, {
  navigationOptions: {
    tabBarLabel: 'Personal',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        name='user'
        focused={focused}
        activeColor={Colors.defaultDark}
        inactiveColor={Colors.grey}
      />
    ),
    tabBarOptions: {
      activeTintColor: Colors.defaultDark,
      inactiveTintColor: Colors.grey,
    }
  }
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
}, {
  navigationOptions: {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        name='cog'
        focused={focused}
        activeColor={Colors.secondaryDark}
        inactiveColor={Colors.grey}
      />
    ),
    tabBarOptions: {
      activeTintColor: Colors.secondaryDark,
      inactiveTintColor: Colors.grey,
    }
  }
});

export default createBottomTabNavigator({
  Personal: PersonalStack,
  Home: HomeStack,
  Settings: SettingsStack,
}, {
  initialRouteName: 'Home',
});
