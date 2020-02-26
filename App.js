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
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import IntroScreen from './screens/IntroScreen';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';


const MainNavigator = createStackNavigator(
  {
    Splash_Screen: { screen: SplashScreen },
    Intro_Screen: { screen: IntroScreen },
    SignIn: { screen: SigninScreen },
    SignUp: { screen: SignupScreen },
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: "Splash_Screen",
  }
)

const App = createAppContainer(MainNavigator);
export default App;