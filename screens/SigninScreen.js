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
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import * as firebase from 'firebase';



export default class SigninScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }


  static navigationOptions = {
    title: "SignIn",
    headerShown: false
  };

  render() {
    return (


      <View style={styles.container}>

        <View style={styles.childCont}>
          <Text style={styles.textCont}>Welcome Back!</Text>
          <Image style={styles.logoCont}
            source={require('../assets/log.gif')}
          />
        </View>
        <KeyboardAvoidingView
        style={{marginBottom:20}}
        behavior="position"
        enabled
        >
          <TextInput style={styles.inputCont}
            placeholder="Email"
            placeholderTextColor="#fff"
          />
          <TextInput style={styles.inputCont}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry={true}
          />
        
        
        <Button
          title="LOGIN"
          style={styles.buttonCont}
          onPress={()=>this.props.navigation.replace("NewHome")}
        />
        
        </KeyboardAvoidingView>
        <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate("SignUp") }}>
          <Text
            style={{ marginVertical: 100, color: "#2B2B52", fontWeight: 'bold', fontSize: 20 }}
          >Don't have an account? SignUp</Text>
        </TouchableOpacity>
        </View>

      </View>



    );
  }
}



const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F5BCBA",

  },
  childCont:{
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
   //marginVertical: 100
  },
  textCont: {

    fontSize: 30,
    fontWeight: 'bold',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
    color: "#2C3335"

  },
  logoCont: {

    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "space-around",
  },
  inputCont: {
    fontSize: 18,
    width: 270,
    height: 50,
    backgroundColor: "#EA7773",
    paddingHorizontal: 15,
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonCont: {
    color:"red",
    width: 200,
    height: 200
  },
  
  footer:{
    //flexGrow: 1
    marginBottom:50
  }
});
