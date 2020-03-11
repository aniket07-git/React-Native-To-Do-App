
import React from 'react';

import PropTypes from 'prop-types';

import { theme } from '../../../themes';

import { View } from 'react-native';
import SignupScreen from '../../../screens/SignupScreen';


const DefaScreen = ({ name }) => (
    <View style={{flex:1}}> 
      <SignupScreen/>
    </View>
  );



DefaScreen.propTypes = {
    name: PropTypes.string.isRequired,
  };


  export default DefaScreen;