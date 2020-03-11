/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { theme } from '../themes';
import { HomeScreen, ProfileScreen, SearchScreen, SettingsScreen } from '../src/scenes';
import TabBar from '../TabBar';
import TabIcon from '../TabBar/TabIcon'
import IntroScreen from '../screens/IntroScreen';
import SplashScreen from '../screens/SplashScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';

const tabBar = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: props => <TabIcon iconName="ios-home" {...props} />,
      
    },
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: props => <TabIcon iconName="ios-search" {...props} />,
    },
  },
  Task: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: props => <TabIcon iconName="ios-add-circle" {...props} />,
    },
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: props => <TabIcon iconName="ios-settings" {...props} />,
    },
  },
};

const tabBarConfig = {
  tabBarComponent: props => (
    <TabBar
      tabColors={[
        theme.tabColors.home,
        theme.tabColors.search,
        theme.tabColors.profile,
        theme.tabColors.settings,
      ]}
      {...props}
    />
  ),
  initialRouteName: 'Home',
  tabBarOptions: {
    inactiveTintColor: theme.colors.inactiveColor,
  },
};

const Navigator = createBottomTabNavigator(tabBar, tabBarConfig);

const MainNavigator = createStackNavigator(
  {
    Splash_Screen: { screen: SplashScreen },
    Intro_Screen: { screen: IntroScreen },
    SignIn: { screen: SigninScreen },
    SignUp: { screen: SignupScreen },
    NewHome: { screen: Navigator }
  },
  {
    initialRouteName: "Splash_Screen",
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)



const AppNavigator = createAppContainer(MainNavigator);
export default AppNavigator;

