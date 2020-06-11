import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  static navigationOptions = {
    title: 'Splash Screen',
    headerShown: false,
  };

  Hide_Splash_Screen = () => {
    this.setState({
      isLoading: false,
    });
  };

  componentDidMount() {
    var that = this;
    setTimeout(function() {
      that.Hide_Splash_Screen();
    }, 5000);
  }

  render() {
    let splash_screen = (
      <View style={styles.container}>
        <View style={{height: 1000, paddingTop: 250}}>
          <Image
            style={styles.imageCont}
            source={require('../assets/logo.gif')}
          />
          <Text style={{fontSize: 32, alignSelf: 'center', fontWeight: 'bold'}}>
            Notes
          </Text>
        </View>
      </View>
    );
    return (
      <View>
        {this.state.isLoading === true
          ? splash_screen
          : this.props.navigation.replace('Intro_Screen')}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //padding: 100,
    backgroundColor: '#fff',
    position: 'absolute',
    //height:"100%",
    width: '100%',
  },
  imageCont: {
    //flex:1,
    width: 350,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
});
