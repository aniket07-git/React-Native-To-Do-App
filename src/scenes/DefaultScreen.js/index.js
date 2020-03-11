import React from 'react';

import PropTypes from 'prop-types';

import { theme } from '../../../themes';

import { Container, Gradient, Title } from './styled';
import IntroScreen from '../../../screens/IntroScreen';
import Tickindex from '../../../screens/TabTask/Tickindex';
import { View, SafeAreaView} from 'react-native';
//import {ToDoItem} from '../../../screens/TabTask/';

const DefaultScreen = ({ name }) => (
    <SafeAreaView style={{flex:1}}>   
      <Tickindex/>
    </SafeAreaView>
  );

  
  DefaultScreen.propTypes = {
    name: PropTypes.string.isRequired,
  };


  export default DefaultScreen;
  