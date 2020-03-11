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

import ThemeProvider from './themes';

import AppNavigator from './src/Navigation';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <AppNavigator/>
      </ThemeProvider>
    );

  }
}

export default App;