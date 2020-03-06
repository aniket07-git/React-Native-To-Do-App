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
  KeyboardAvoidingView,
  TextInput,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

//import * as firebase from 'firebase';






export default class SigninScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }


  static navigationOptions = {
    title: "SignUp",
    headerShown: false
  };


  render() {
    return (

      <View style={styles.container}>

        <View style={styles.TopView}>
          <Text
            style={{ fontSize: 32, color: "#B83227", fontWeight: "500" }}
          >Register Here!</Text>
        </View>
        <View>
          <Image
            style={styles.imageCont}
            source={require('../assets/rocket.gif')}
          />
        </View>

        <KeyboardAvoidingView
          behavior="position"
          enabled>
          <TextInput style={styles.inputCont}
            placeholder="Name"
            placeholderTextColor="#fff"
          />
          <TextInput style={styles.inputCont}
            placeholder="Email"
            placeholderTextColor="#fff"
          />
          <TextInput style={styles.inputCont}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry={true}
          />
        </KeyboardAvoidingView>

        <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.push("NewHome") }}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={{ fontSize: 17, color: "#AE1438", fontWeight: "500" }}>Already have an account?</Text>
          <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#AE1438" }}>SignIn</Text>
          </TouchableOpacity>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F5BCBA"
  },
  TopView: {
    fontWeight: "bold"
  },
  inputCont: {
    width: 250,
    height: 50,
    backgroundColor: "#EA7773",
    marginVertical: 10,
    borderRadius: 25,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 18
  },
  imageCont: {
    height: 350,
    width: 350
  },
  button: {
    width: 140,
    backgroundColor: "#EA7773",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
    textAlign: "center",

  },
  footer: {
    marginVertical: 15,
    alignItems: "flex-end",
    flexDirection: "row"
  }
});
