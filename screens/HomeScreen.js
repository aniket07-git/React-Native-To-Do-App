/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import * as firebase from 'firebase';


export default class HomeScreen extends React.Component{
  
  static navigationOptions = {
    title:"HomeScreen",
    headerShown: false
};
  
  render(){
    return (
     
        <View style={styles.container}>
            <Text>HomeScreen</Text>
         </View>
    
    );
  }
} 



const styles = StyleSheet.create({
  container: {
     flex:1,
     alignItems: 'center',
     justifyContent: 'center',
  },
});
